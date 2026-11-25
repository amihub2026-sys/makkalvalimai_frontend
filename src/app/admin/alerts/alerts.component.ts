
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { PublicAlert, uid, istDay } from '../../core/models';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { AudioRecorderComponent } from '../../shared/audio-recorder/audio-recorder.component';
import { environment } from '../../../environments/environment';

type AudioLanguage = 'ta' | 'en';

function blank(): PublicAlert {
  return {
    id: uid('alert'),
    title: { ta: '', en: '' },
    body: { ta: '', en: '' },
    area: 'Madurai district',
    type: 'other',
    effectiveDate: istDay(),
    expiresAt: istDay(new Date(Date.now() + 7 * 86400000)),
    source: '',
    published: false,
    audio: { ta: '', en: '' }
  };
}

@Component({
  selector: 'app-admin-alerts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AudioPlayerComponent,
    AudioRecorderComponent
  ],
  templateUrl: './alerts.component.html',
  styleUrls: [
    './alerts.component.css',
    './alerts.component.responsive.css'
  ]
})
export class AdminAlertsComponent implements OnInit {
  @ViewChild('editorDialog') editorDialog?: ElementRef<HTMLDialogElement>;
  @ViewChild('tamilHeading') tamilHeading?: ElementRef<HTMLInputElement>;

  draft: PublicAlert = blank();
  alerts: PublicAlert[] = [];
  viewedAlert: PublicAlert | null = null;

  editorOpen = false;
  private originalDraft = '';

  error = '';
  listError = '';
  message = '';

  loading = false;
  saving = false;
  deleting = false;

  private recorderWorking: Record<AudioLanguage, boolean> = {
    ta: false,
    en: false
  };

  get uploadingAudio(): boolean {
    return this.recorderWorking.ta || this.recorderWorking.en;
  }

  get busy(): boolean {
    return this.loading || this.saving || this.deleting || this.uploadingAudio;
  }

  get isEditingSavedAlert(): boolean {
    return this.alerts.some(alert => alert.id === this.draft.id);
  }

  constructor(
    public store: ContentService,
    private api: NewsApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    void this.loadAlerts();
  }

  // ==========================================
  // LOAD ALERTS
  // ==========================================

  async loadAlerts(): Promise<void> {
    if (this.loading) return;

    this.loading = true;
    this.listError = '';

    try {
      await this.api.restoreSession();

      const result = await firstValueFrom(
        this.http.get<PublicAlert[]>(
          `${environment.apiBaseUrl}/admin/alerts`,
          { withCredentials: true }
        )
      );

      if (!Array.isArray(result)) {
        throw new Error('The alerts API did not return a list.');
      }

      this.alerts = result;
    } catch (error) {
      // Keep previously loaded alerts and show a real error instead of 0 records.
      this.listError = this.getError(error);
    } finally {
      this.loading = false;
    }
  }

  clone(alert: PublicAlert): PublicAlert {
    const copied = structuredClone(alert);
    copied.audio ??= { ta: '', en: '' };
    copied.effectiveDate = String(copied.effectiveDate || '').slice(0, 10);
    copied.expiresAt = String(copied.expiresAt || '').slice(0, 10);
    return copied;
  }

  // ==========================================
  // VIEW ALERT
  // ==========================================

  viewAlert(alert: PublicAlert): void {
    if (this.busy) return;
    this.viewedAlert = this.clone(alert);
  }

  closeAlertView(): void {
    this.viewedAlert = null;
  }

  // ==========================================
  // NEW ALERT POPUP
  // ==========================================

  newAlert(): void {
    if (this.busy) return;
    this.draft = blank();
    this.viewedAlert = null;
    this.error = '';
    this.message = '';
    this.openEditor();
  }

  // ==========================================
  // EDIT ALERT POPUP
  // ==========================================

  editAlert(alert: PublicAlert): void {
    if (this.busy) return;
    this.draft = this.clone(alert);
    this.viewedAlert = null;
    this.error = '';
    this.message = '';
    this.openEditor();
  }

  private openEditor(): void {
    this.originalDraft = JSON.stringify(this.draft);
    this.editorOpen = true;

    // The *ngIf dialog is inserted after Angular finishes this event.
    setTimeout(() => {
      const dialog = this.editorDialog?.nativeElement;
      if (!dialog || !this.editorOpen) return;

      try {
        if (!dialog.open) dialog.showModal();
        this.tamilHeading?.nativeElement.focus();
      } catch (error) {
        this.editorOpen = false;
        this.listError = this.getError(error);
      }
    });
  }

  // ==========================================
  // CLOSE POPUP
  // ==========================================

  closeEditor(): void {
    if (this.busy) return;

    const changed = JSON.stringify(this.draft) !== this.originalDraft;

    if (
      changed &&
      !window.confirm('Close this alert? Unsaved changes will be lost.')
    ) {
      return;
    }

    this.finishEditor();
  }

  onEditorCancel(event: Event): void {
    // Handle Esc through the same unsaved-changes confirmation.
    event.preventDefault();
    this.closeEditor();
  }

  private finishEditor(): void {
    const dialog = this.editorDialog?.nativeElement;
    if (dialog?.open) dialog.close();
    this.editorOpen = false;
    this.originalDraft = '';
  }

  // ==========================================
  // AUDIO RECORDING
  // ==========================================

  recorderWorkingStatus(lang: AudioLanguage): boolean {
    return this.recorderWorking[lang];
  }

  onRecorderWorking(lang: AudioLanguage, working: boolean): void {
    this.recorderWorking[lang] = working;
  }

  onRecordedAudio(lang: AudioLanguage, url: string): void {
    if (!url?.trim()) {
      this.error = 'The upload did not return an audio URL.';
      return;
    }

    this.draft.audio ??= { ta: '', en: '' };
    this.draft.audio[lang] = url;
    this.error = '';
    this.message = `${lang === 'ta' ? 'Tamil' : 'English'} audio uploaded. Save the alert to attach it.`;
  }

  removeAudio(lang: AudioLanguage): void {
    if (this.busy) return;
    this.draft.audio ??= { ta: '', en: '' };
    this.draft.audio[lang] = '';
    this.message = 'Audio removed from the form. Save to update the record.';
  }

  // ==========================================
  // SAVE / UPDATE ALERT
  // ==========================================

  async save(): Promise<void> {
    if (this.busy || !this.editorOpen) return;

    this.error = '';
    this.message = '';

    if (
      !this.draft.title.ta.trim() ||
      !this.draft.title.en.trim() ||
      !this.draft.body.ta.trim() ||
      !this.draft.body.en.trim() ||
      !this.draft.source.trim()
    ) {
      this.error = 'Tamil/English headings, notices and source are required.';
      return;
    }

    if (!this.draft.area.trim()) {
      this.error = 'Alert location is required.';
      return;
    }

    if (!this.draft.effectiveDate || !this.draft.expiresAt) {
      this.error = 'Effective and expiry dates are required.';
      return;
    }

    if (String(this.draft.expiresAt) <= String(this.draft.effectiveDate)) {
      this.error = 'Expiry date must be later than the effective date.';
      return;
    }

    this.saving = true;

    try {
      await this.api.restoreSession();

      const saved = await this.api.upsertAlert(
        structuredClone(this.draft)
      );

      this.draft = this.clone(saved);

      await this.loadAlerts();

      try {
        await this.store.refreshFromBackend();
      } catch {
        // Saving has already succeeded; public refresh may be retried later.
      }

      this.finishEditor();

      this.message = saved.published
        ? 'Alert saved and published successfully.'
        : 'Alert saved as a draft successfully.';

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // DELETE ALERT
  // ==========================================

  async deleteAlert(alert: PublicAlert): Promise<void> {
    if (this.busy) return;

    if (!this.alerts.some(item => item.id === alert.id)) {
      this.listError = 'The selected alert is not in the saved records.';
      return;
    }

    const title = alert.title.en || alert.title.ta || 'this alert';

    if (!window.confirm(`Permanently delete "${title}"?`)) return;

    this.deleting = true;
    this.listError = '';
    this.message = '';

    try {
      const session = await this.api.restoreSession();

      await firstValueFrom(
        this.http.delete(
          `${environment.apiBaseUrl}/admin/alerts/${encodeURIComponent(alert.id)}`,
          {
            withCredentials: true,
            headers: { 'X-CSRF-Token': session.csrfToken }
          }
        )
      );

      if (this.draft.id === alert.id) this.draft = blank();
      if (this.viewedAlert?.id === alert.id) this.viewedAlert = null;
      if (this.editorOpen) this.finishEditor();

      await this.loadAlerts();

      try {
        await this.store.refreshFromBackend();
      } catch {
        // Deletion already succeeded.
      }

      this.message = 'Alert deleted successfully.';
    } catch (error) {
      this.listError = this.getError(error);
    } finally {
      this.deleting = false;
    }
  }

  async remove(): Promise<void> {
    if (this.busy) return;

    const selected = this.alerts.find(alert => alert.id === this.draft.id);

    if (selected) await this.deleteAlert(selected);
    else this.closeEditor();
  }

  // ==========================================
  // ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.error || error.error?.message;

      if (typeof message === 'string') return message;
      if (Array.isArray(message)) return JSON.stringify(message);
      if (error.status === 0) return 'Cannot connect to the Node.js backend.';
      if (error.status === 401) return 'Admin session expired. Please log in again.';
      if (error.status === 403) return 'Access denied or invalid CSRF token.';

      return `Backend request failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
