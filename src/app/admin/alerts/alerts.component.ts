
import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { ContentService } from '../../services/content.service';
import { MediaService } from '../../services/media.service';
import { NewsApiService } from '../../services/news-api.service';

import {
  PublicAlert,
  uid,
  istDay
} from '../../core/models';

import {
  AudioPlayerComponent
} from '../../shared/audio-player/audio-player.component';

import { environment } from '../../../environments/environment';

// ==========================================
// CREATE BLANK PUBLIC ALERT
// ==========================================

function blank(): PublicAlert {
  return {
    id: uid('alert'),

    title: {
      ta: '',
      en: ''
    },

    body: {
      ta: '',
      en: ''
    },

    area: 'Madurai district',
    type: 'other',

    effectiveDate: istDay(),

    expiresAt: istDay(
      new Date(Date.now() + 7 * 86400000)
    ),

    source: '',
    published: false,

    audio: {
      ta: '',
      en: ''
    }
  };
}

@Component({
  selector: 'app-admin-alerts',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    AudioPlayerComponent
  ],

  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css', './alerts.component.responsive.css']
})
export class AdminAlertsComponent implements OnInit {

  // ==========================================
  // ALERT DATA
  // ==========================================

  draft: PublicAlert = blank();

  // All alerts from MongoDB, including drafts
  alerts: PublicAlert[] = [];

  error = '';
  message = '';

  loading = false;
  saving = false;
  deleting = false;
  uploadingAudio = false;

  constructor(
    public store: ContentService,
    public media: MediaService,
    private api: NewsApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    void this.loadAlerts();
  }

  // ==========================================
  // LOAD ALL ADMIN ALERTS FROM MONGODB
  // ==========================================

  async loadAlerts(): Promise<void> {

    this.loading = true;
    this.error = '';

    try {

      await this.api.restoreSession();

      const result = await firstValueFrom(
        this.http.get<PublicAlert[]>(
          `${environment.apiBaseUrl}/admin/alerts`,
          {
            withCredentials: true
          }
        )
      );

      this.alerts = result;

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.loading = false;

    }
  }

  // ==========================================
  // EDIT EXISTING ALERT
  // ==========================================

  clone(a: PublicAlert): PublicAlert {

    this.error = '';
    this.message = '';

    const copied = structuredClone(a);

    copied.audio ??= {
      ta: '',
      en: ''
    };

    return copied;
  }

  // ==========================================
  // NEW ALERT
  // ==========================================

  newAlert(): void {

    if (this.saving || this.uploadingAudio) {
      return;
    }

    this.draft = blank();

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // TAMIL / ENGLISH MP3 FILE UPLOAD
  // ==========================================

  async audio(
    event: Event,
    lang: 'ta' | 'en'
  ): Promise<void> {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    input.value = '';

    if (!file || this.saving || this.uploadingAudio) {
      return;
    }

    this.error = '';
    this.message = '';

    // MP3 validation
    if (
      file.type !== 'audio/mpeg' &&
      !/\.mp3$/i.test(file.name)
    ) {

      this.error = 'Only MP3 audio files are supported.';
      return;

    }

    if (
      file.size <= 0 ||
      file.size > 20 * 1024 * 1024
    ) {

      this.error =
        'MP3 file must be under 20 MB.';

      return;

    }

    this.uploadingAudio = true;

    try {

      // Upload directly to Node.js backend
      const result = await this.api.uploadMedia(file);

      if (result.kind !== 'audio') {

        throw new Error(
          'The uploaded file was not recognized as audio.'
        );

      }

      // Store the backend MP3 URL
      this.draft.audio ??= {
        ta: '',
        en: ''
      };

      this.draft.audio[lang] = result.url;

      this.message =
        lang === 'ta'
          ? 'Tamil MP3 uploaded successfully.'
          : 'English MP3 uploaded successfully.';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.uploadingAudio = false;

    }
  }

  // ==========================================
  // SAVE ALERT TO MONGODB
  // ==========================================

  async save(): Promise<void> {

    if (this.saving || this.uploadingAudio) {
      return;
    }

    this.error = '';
    this.message = '';

    // Both languages required
    if (
      !this.draft.title.en.trim() ||
      !this.draft.title.ta.trim() ||
      !this.draft.body.en.trim() ||
      !this.draft.body.ta.trim() ||
      !this.draft.source.trim()
    ) {

      this.error =
        'Both languages and official source are required.';

      return;
    }

    if (!this.draft.area.trim()) {

      this.error = 'Alert location is required.';
      return;

    }

    if (
      !this.draft.effectiveDate ||
      !this.draft.expiresAt
    ) {

      this.error =
        'Effective date and expiry date are required.';

      return;
    }

    if (
      this.draft.expiresAt < this.draft.effectiveDate
    ) {

      this.error =
        'Expiry date must not be earlier than the effective date.';

      return;

    }

    this.saving = true;

    try {

      // Restore admin session and CSRF token
      await this.api.restoreSession();

      // Existing Node.js endpoint:
      // PUT /api/admin/alerts/:id
      const saved = await this.api.upsertAlert(
        structuredClone(this.draft)
      );

      // Update the editor only after saving
      this.draft = this.clone(saved);

      // Reload admin alerts from MongoDB
      await this.loadAlerts();

      // Refresh published website content
      try {

        await this.store.refreshFromBackend();

      } catch {

        // Alert was saved even if public refresh fails.

      }

      this.message = saved.published
        ? 'Public alert published successfully.'
        : 'Public alert saved as draft successfully.';

      this.error = '';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.saving = false;

    }
  }

  // ==========================================
  // DELETE ALERT FROM MONGODB
  // ==========================================

  async remove(): Promise<void> {

    if (this.saving || this.deleting) {
      return;
    }

    this.error = '';
    this.message = '';

    const id = this.draft.id;

    // If this is an unsaved draft, clear it.
    const exists = this.alerts.some(
      alert => alert.id === id
    );

    if (!exists) {

      this.newAlert();
      return;

    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this public alert?'
    );

    if (!confirmed) {
      return;
    }

    this.deleting = true;

    try {

      const session = await this.api.restoreSession();

      // Existing Node.js endpoint:
      // DELETE /api/admin/alerts/:id
      await firstValueFrom(
        this.http.delete(
          `${environment.apiBaseUrl}/admin/alerts/${encodeURIComponent(id)}`,
          {
            withCredentials: true,
            headers: {
              'X-CSRF-Token': session.csrfToken
            }
          }
        )
      );

      this.draft = blank();

      await this.loadAlerts();

      try {

        await this.store.refreshFromBackend();

      } catch {

        // Deletion has already succeeded.

      }

      this.error = '';
      this.message =
        'Public alert deleted successfully.';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.deleting = false;

    }
  }

  // ==========================================
  // ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      const message =
        error.error?.error ||
        error.error?.message;

      if (typeof message === 'string') {
        return message;
      }

      if (Array.isArray(message)) {
        return JSON.stringify(message);
      }

      if (error.status === 0) {

        return 'Cannot connect to the Node.js backend.';

      }

      if (error.status === 401) {

        return 'Admin session expired. Please log in again.';

      }

      if (error.status === 403) {

        return 'Access denied or invalid CSRF token.';

      }

      return `Backend request failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
