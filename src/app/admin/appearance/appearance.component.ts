
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

import { Settings } from '../../core/models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-appearance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css', './appearance.component.responsive.css']
})
export class AppearanceComponent implements OnInit {

  draft!: Settings;

  // Existing success state
  saved = false;

  // API status
  loading = false;
  saving = false;

  // Image upload status
  uploadingHeader = false;
  uploadingFooter = false;

  // Feedback
  error = '';
  message = '';

  constructor(
    public store: ContentService,
    public media: MediaService,
    private api: NewsApiService,
    private http: HttpClient
  ) {}

  // ==========================================
  // COMPONENT INITIALIZATION
  // ==========================================

  ngOnInit(): void {

    // Show current frontend settings immediately.
    this.draft = structuredClone(
      this.store.settings()
    );

    // Load authoritative settings from MongoDB.
    void this.loadSettings();
  }

  // ==========================================
  // LOAD SETTINGS FROM MONGODB
  // GET /api/admin/settings
  // ==========================================

  async loadSettings(): Promise<void> {

    if (this.loading) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.message = '';

    try {

      // Verify admin authentication.
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
          'Invalid website settings received from backend.'
        );
      }

      // Keep existing default fields if the
      // backend omits optional settings.

      const current = this.store.settings();

      this.draft = structuredClone({
        ...current,
        ...response,

        headlines: Array.isArray(response.headlines)
          ? response.headlines
          : [],

        sectionAudio: {
          ...(current.sectionAudio || {}),
          ...(response.sectionAudio || {})
        }
      });

      this.saved = false;

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.loading = false;

    }
  }

  // ==========================================
  // HEADER AND FOOTER IMAGE UPLOAD
  // POST /api/admin/media
  // ==========================================

  async upload(
    event: Event,
    key: 'headerImage' | 'footerImage'
  ): Promise<void> {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (
      this.saving ||
      this.uploadingHeader ||
      this.uploadingFooter
    ) {
      input.value = '';
      return;
    }

    this.error = '';
    this.message = '';
    this.saved = false;

    // ======================================
    // VALIDATE IMAGE FORMAT
    // ======================================

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp'
    ];

    if (!allowedTypes.includes(file.type)) {

      this.error =
        'Only JPG, PNG and WebP images are allowed.';

      input.value = '';
      return;
    }

    // Maximum image size: 8 MB

    const maxSize = 8 * 1024 * 1024;

    if (file.size > maxSize) {

      this.error =
        'Image size must not exceed 8 MB.';

      input.value = '';
      return;
    }

    if (key === 'headerImage') {
      this.uploadingHeader = true;
    } else {
      this.uploadingFooter = true;
    }

    try {

      // Upload using the existing NewsApiService.
      //
      // Returns:
      // {
      //   id: string,
      //   url: string,
      //   kind: string
      // }

      const uploaded =
        await this.api.uploadMedia(file);

      if (
        !uploaded ||
        typeof uploaded.url !== 'string' ||
        uploaded.url.length === 0
      ) {
        throw new Error(
          'The backend did not return an image URL.'
        );
      }

      // Update the correct image field.

      this.draft[key] = uploaded.url;

      this.message =
        key === 'headerImage'
          ? 'Header image uploaded successfully. Click Save Appearance to apply it.'
          : 'Footer image uploaded successfully. Click Save Appearance to apply it.';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.uploadingHeader = false;
      this.uploadingFooter = false;

      input.value = '';

    }
  }

  // ==========================================
  // ADD BREAKING NEWS HEADLINE
  // ==========================================

  addHeadline(): void {

    if (this.saving || this.loading) {
      return;
    }

    this.draft.headlines.push({
      ta: '',
      en: ''
    });

    this.saved = false;
    this.message = '';
  }

  // ==========================================
  // REMOVE BREAKING NEWS HEADLINE
  // ==========================================

  removeHeadline(index: number): void {

    if (this.saving || this.loading) {
      return;
    }

    if (
      index < 0 ||
      index >= this.draft.headlines.length
    ) {
      return;
    }

    this.draft.headlines.splice(index, 1);

    this.saved = false;
    this.message = '';
  }

  // ==========================================
  // REMOVE HEADER OR FOOTER IMAGE
  // ==========================================

  clearImage(
    key: 'headerImage' | 'footerImage'
  ): void {

    if (
      this.saving ||
      this.uploadingHeader ||
      this.uploadingFooter
    ) {
      return;
    }

    this.draft[key] = '';

    this.saved = false;
    this.message = '';
  }

  // ==========================================
  // SAVE SETTINGS TO MONGODB
  // PUT /api/admin/settings
  // ==========================================

  async save(): Promise<void> {

    if (
      this.saving ||
      this.loading ||
      this.uploadingHeader ||
      this.uploadingFooter
    ) {
      return;
    }

    this.error = '';
    this.message = '';
    this.saved = false;

    const payload: Settings =
      structuredClone(this.draft);

    // ======================================
    // CLEAN IMAGE URLS
    // ======================================

    payload.headerImage =
      (payload.headerImage || '').trim();

    payload.footerImage =
      (payload.footerImage || '').trim();

    // ======================================
    // VALIDATE HEADLINES
    // ======================================

    if (!Array.isArray(payload.headlines)) {
      payload.headlines = [];
    }

    // Trim both languages.

    payload.headlines = payload.headlines.map(
      headline => ({
        ta: (headline.ta || '').trim(),
        en: (headline.en || '').trim()
      })
    );

    // Remove completely empty headline rows.

    payload.headlines = payload.headlines.filter(
      headline => headline.ta || headline.en
    );

    // Every headline must contain Tamil
    // and English content.

    const incompleteHeadline =
      payload.headlines.some(
        headline =>
          !headline.ta ||
          !headline.en
      );

    if (incompleteHeadline) {

      this.error =
        'Every breaking-news headline must contain both Tamil and English text.';

      return;
    }

    // ======================================
    // PRESERVE SECTION AUDIO
    // ======================================

    payload.sectionAudio =
      payload.sectionAudio || {};

    // ======================================
    // PRESERVE POPUP SETTING
    // ======================================

    payload.showPopup =
      Boolean(payload.showPopup);

    this.saving = true;

    try {

      // Get valid session and CSRF token.

      const session =
        await this.api.restoreSession();

      // Send real settings to Node.js.

      await firstValueFrom(
        this.http.put(
          `${environment.apiBaseUrl}/admin/settings`,
          payload,
          {
            withCredentials: true,
            headers: {
              'X-CSRF-Token': session.csrfToken
            }
          }
        )
      );

      // Keep editor synchronized with saved data.

      this.draft = structuredClone(payload);

      // Refresh the public website data
      // from /api/public/bootstrap.

      try {

        await this.store.refreshFromBackend();

      } catch {

        // Settings were already saved.
        // A public refresh failure should not
        // incorrectly report a save failure.

      }

      this.saved = true;

      this.message =
        'Website appearance settings saved successfully.';

    } catch (error) {

      this.saved = false;

      this.error = this.getError(error);

    } finally {

      this.saving = false;

    }
  }

  // ==========================================
  // BACKEND ERROR HANDLING
  // ==========================================

  private getError(error: unknown): string {

    if (error instanceof HttpErrorResponse) {

      if (error.status === 0) {

        return 'Cannot connect to the Node.js backend.';

      }

      if (error.status === 401) {

        return 'Admin session expired. Please log in again.';

      }

      if (error.status === 403) {

        return 'Access denied or invalid CSRF token.';

      }

      if (error.status === 404) {

        return 'Website settings API was not found.';

      }

      const details =
        error.error?.error ??
        error.error?.message;

      if (typeof details === 'string') {
        return details;
      }

      if (Array.isArray(details)) {
        return JSON.stringify(details);
      }

      return `Backend request failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
