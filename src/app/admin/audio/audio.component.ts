
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import {
  Section,
  SECTIONS,
  Settings
} from '../../core/models';

import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';

import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { AudioRecorderComponent } from '../../shared/audio-recorder/audio-recorder.component';

import { environment } from '../../../environments/environment';

type AudioLanguage = 'ta' | 'en';

@Component({
  selector: 'app-admin-audio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AudioPlayerComponent,
    AudioRecorderComponent
  ],
  templateUrl: './audio.component.html',
  styleUrls: [
    './audio.component.css',
    './audio.component.responsive.css'
  ]
})
export class SectionAudioAdminComponent implements OnInit {

  // ========================================
  // SECTION SELECTION
  // ========================================

  section: Section = 'home';

  sections = SECTIONS;

  // ========================================
  // SETTINGS
  // ========================================

  settings: Settings;

  // ========================================
  // LOADING STATES
  // ========================================

  loading = false;
  saving = false;

  uploading: AudioLanguage | null = null;

  // ========================================
  // MESSAGES
  // ========================================

  message = '';
  error = '';

  // ========================================
  // CONSTRUCTOR
  // ========================================

  constructor(
    public store: ContentService,
    private api: NewsApiService,
    private http: HttpClient
  ) {

    this.settings = structuredClone(
      this.store.settings()
    );

  }

  // ========================================
  // INITIAL LOAD
  // ========================================

  ngOnInit(): void {
    void this.loadSettings();
  }

  // ========================================
  // BUSY STATUS
  // ========================================

  get busy(): boolean {

    return (
      this.loading ||
      this.saving ||
      this.uploading !== null
    );

  }

  // ========================================
  // RESET MESSAGES
  // ========================================

  private clearMessages(): void {

    this.message = '';
    this.error = '';

  }

  // ========================================
  // LOAD AUDIO SETTINGS
  // ========================================

  async loadSettings(): Promise<void> {

    if (this.busy) return;

    this.loading = true;
    this.clearMessages();

    try {

      await this.api.restoreSession();

      const response = await firstValueFrom(
        this.http.get<Settings>(
          `${environment.apiBaseUrl}/admin/settings`,
          {
            withCredentials: true
          }
        )
      );

      if (
        !response ||
        typeof response !== 'object' ||
        Array.isArray(response)
      ) {
        throw new Error(
          'Invalid audio settings received from backend.'
        );
      }

      const defaults = this.store.settings();

      this.settings = structuredClone({
        ...defaults,
        ...response,
        sectionAudio: {
          ...(defaults.sectionAudio || {}),
          ...(response.sectionAudio || {})
        }
      });

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.loading = false;

    }

  }

  // ========================================
  // CURRENT SECTION AUDIO
  // ========================================

  source(lang: AudioLanguage): string {

    return (
      this.settings.sectionAudio?.[this.section]?.[lang] ||
      ''
    );

  }

  // ========================================
  // AUDIO UPLOADED FROM RECORDER
  //
  // Works for:
  // 1. Record New Audio
  // 2. Select Audio File
  // 3. Drag and Drop
  //
  // Child component uploads the MP3.
  // Parent saves returned URL to MongoDB.
  // ========================================

  async assignRecordedAudio(
    lang: AudioLanguage,
    url: string
  ): Promise<void> {

    // The recorder may still report itself as
    // uploading while it emits the URL.
    // Therefore, do not block on this.busy here.

    if (this.saving) return;

    this.clearMessages();

    if (
      typeof url !== 'string' ||
      !url.trim()
    ) {

      this.error =
        'Audio upload did not return a valid URL.';

      return;

    }

    const targetSection = this.section;

    try {

      await this.persistAudio(
        targetSection,
        lang,
        url.trim()
      );

      const language =
        lang === 'ta' ? 'Tamil' : 'English';

      this.message =
        `${language} audio uploaded and saved successfully.`;

    } catch (error) {

      this.error = this.getError(error);

    }

  }

  // ========================================
  // REMOVE AUDIO
  // ========================================

  async remove(
    lang: AudioLanguage
  ): Promise<void> {

    if (this.busy) return;

    this.clearMessages();

    const existingUrl = this.source(lang);

    if (!existingUrl) {

      this.message =
        'No audio is assigned to this section.';

      return;

    }

    const language =
      lang === 'ta' ? 'Tamil' : 'English';

    const confirmed = window.confirm(
      `Remove ${language} audio from this section?`
    );

    if (!confirmed) return;

    const targetSection = this.section;

    try {

      await this.persistAudio(
        targetSection,
        lang,
        ''
      );

      this.message =
        `${language} audio removed successfully.`;

    } catch (error) {

      this.error = this.getError(error);

    }

  }

  // ========================================
  // SAVE AUDIO URL TO MONGODB
  //
  // Existing backend:
  // GET /admin/settings
  // PUT /admin/settings
  //
  // No backend changes.
  // ========================================

  private async persistAudio(
    targetSection: Section,
    lang: AudioLanguage,
    url: string
  ): Promise<void> {

    if (this.saving) {
      throw new Error(
        'Another audio assignment is being saved.'
      );
    }

    this.saving = true;

    try {

      // Restore the existing admin session.

      const session =
        await this.api.restoreSession();

      if (!session?.csrfToken) {

        throw new Error(
          'Missing CSRF token. Please log in again.'
        );

      }

      // Fetch the latest settings to preserve
      // other website configuration.

      const current = await firstValueFrom(
        this.http.get<Settings>(
          `${environment.apiBaseUrl}/admin/settings`,
          {
            withCredentials: true
          }
        )
      );

      if (
        !current ||
        typeof current !== 'object' ||
        Array.isArray(current)
      ) {

        throw new Error(
          'Unable to load current website settings.'
        );

      }

      // Make a safe copy.

      const next: Settings =
        structuredClone(current);

      // Preserve existing section assignments.

      next.sectionAudio = {
        ...(next.sectionAudio || {})
      };

      const previousAudio =
        next.sectionAudio[targetSection] || {
          ta: '',
          en: ''
        };

      // Change only the selected language
      // and section.

      next.sectionAudio[targetSection] = {
        ...previousAudio,
        [lang]: url
      };

      // Save using the existing admin API.

      await firstValueFrom(
        this.http.put(
          `${environment.apiBaseUrl}/admin/settings`,
          next,
          {
            withCredentials: true,
            headers: {
              'X-CSRF-Token': session.csrfToken
            }
          }
        )
      );

      // Update current Angular state.

      this.settings = next;

      // Refresh public content.
      // Failure here does not undo a
      // successful backend save.

      try {

        await this.store.refreshFromBackend();

      } catch (refreshError) {

        console.warn(
          'Audio saved, but public refresh failed.',
          refreshError
        );

      }

    } finally {

      this.saving = false;

    }

  }

  // ========================================
  // ERROR HANDLING
  // ========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      if (error.status === 0) {

        return (
          'Cannot connect to the Node.js backend. ' +
          'Check whether the server is running.'
        );

      }

      if (error.status === 401) {

        return (
          'Your admin session has expired. ' +
          'Please log in again.'
        );

      }

      if (error.status === 403) {

        return (
          'Access denied or invalid CSRF token.'
        );

      }

      if (error.status === 413) {

        return (
          'Audio file exceeds the backend upload limit.'
        );

      }

      if (
        error.status === 400 ||
        error.status === 415
      ) {

        return (
          'Backend rejected the audio request. ' +
          this.backendMessage(error)
        );

      }

      return (
        this.backendMessage(error) ||
        `Backend request failed (${error.status}).`
      );

    }

    if (error instanceof Error) {

      return error.message;

    }

    return 'Unexpected error while saving audio.';

  }

  // ========================================
  // BACKEND ERROR MESSAGE
  // ========================================

  private backendMessage(
    error: HttpErrorResponse
  ): string {

    const details =
      error.error?.error ??
      error.error?.message;

    if (typeof details === 'string') {

      return details;

    }

    return '';

  }

}
