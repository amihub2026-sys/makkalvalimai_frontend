
import { Component, OnInit } from '@angular/core';
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
import { Ad, uid } from '../../core/models';
import { environment } from '../../../environments/environment';

// ==========================================
// NEW ADVERTISEMENT
// ==========================================

function blank(): Ad {
  return {
    id: uid('ad'),
    brand: '',
    position: 'banner',
    image: '',
    link: '',
    caption: '',
    enabled: false
  };
}

@Component({
  selector: 'app-admin-ads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css', './ads.component.responsive.css']
})
export class AdminAdsComponent implements OnInit {

  draft: Ad = blank();
  ads: Ad[] = [];

  error = '';
  message = '';

  loading = false;
  saving = false;
  deleting = false;
  uploadingImage = false;

  constructor(
    public store: ContentService,
    public media: MediaService,
    private api: NewsApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    void this.loadAds();
  }

  // ==========================================
  // LOAD ADVERTISEMENTS FROM MONGODB
  // ==========================================

  async loadAds(): Promise<void> {
    if (this.loading) return;

    this.loading = true;
    this.error = '';

    try {
      await this.api.restoreSession();

      const response = await firstValueFrom(
        this.http.get<Ad[]>(
          `${environment.apiBaseUrl}/admin/ads`,
          {
            withCredentials: true
          }
        )
      );

      if (!Array.isArray(response)) {
        throw new Error(
          'Invalid advertisement list received from backend.'
        );
      }

      this.ads = response;

    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.loading = false;
    }
  }

  // ==========================================
  // CREATE NEW ADVERTISEMENT
  // ==========================================

  newAd(): void {
    if (
      this.saving ||
      this.deleting ||
      this.uploadingImage
    ) {
      return;
    }

    this.draft = blank();
    this.error = '';
    this.message = '';
  }

  // ==========================================
  // SELECT EXISTING ADVERTISEMENT
  // ==========================================

  clone(ad: Ad): Ad {
    return structuredClone(ad);
  }

  selectAd(ad: Ad): void {
    if (
      this.saving ||
      this.deleting ||
      this.uploadingImage
    ) {
      return;
    }

    this.draft = this.clone(ad);
    this.error = '';
    this.message = '';
  }

  get isSaved(): boolean {
    return this.ads.some(
      ad => ad.id === this.draft.id
    );
  }

  // ==========================================
  // POSITION LABELS
  // ==========================================

  positionLabel(position: string): string {
    switch (position) {
      case 'banner':
        return 'Homepage Banner';

      case 'sidebar':
        return 'Sidebar Slider';

      case 'popup':
        return 'Popup Advertisement';

      default:
        return position;
    }
  }

  // ==========================================
  // UPLOAD IMAGE THROUGH EXISTING API
  // POST /api/admin/media
  // ==========================================

  async imageUpload(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    if (
      this.uploadingImage ||
      this.saving ||
      this.deleting
    ) {
      input.value = '';
      return;
    }

    this.error = '';
    this.message = '';

    // Supported image formats.

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

    // Maximum image size: 8 MB.

    const maxSize = 8 * 1024 * 1024;

    if (file.size > maxSize) {
      this.error =
        'Image size must not exceed 8 MB.';

      input.value = '';
      return;
    }

    this.uploadingImage = true;

    try {
      // NewsApiService returns:
      // { id: string, url: string, kind: string }

      const uploaded =
        await this.api.uploadMedia(file);

      // Use the URL returned by the backend service.

      if (
        !uploaded ||
        typeof uploaded.url !== 'string' ||
        uploaded.url.length === 0
      ) {
        throw new Error(
          'The backend did not return a valid image URL.'
        );
      }

      this.draft.image = uploaded.url;

      this.message =
        'Image uploaded successfully. Click Save Advertisement to save the record.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.uploadingImage = false;
      input.value = '';
    }
  }

  // ==========================================
  // SAVE ADVERTISEMENT TO MONGODB
  // PUT /api/admin/ads/:id
  // ==========================================

  async save(): Promise<void> {
    if (
      this.saving ||
      this.deleting ||
      this.uploadingImage
    ) {
      return;
    }

    this.error = '';
    this.message = '';

    const payload = this.clone(this.draft);

    payload.brand = (payload.brand || '').trim();
    payload.caption = (payload.caption || '').trim();
    payload.image = (payload.image || '').trim();
    payload.link = (payload.link || '').trim();

    // Validate brand.

    if (!payload.brand) {
      this.error =
        'Advertiser or brand name is required.';
      return;
    }

    // Validate advertisement position.

    if (
      !['banner', 'sidebar', 'popup'].includes(
        payload.position
      )
    ) {
      this.error =
        'Please select a valid advertisement position.';
      return;
    }

    // Image is required for visible ads.

    if (
      payload.enabled &&
      !payload.image
    ) {
      this.error =
        'Upload an image before enabling this advertisement.';
      return;
    }

    // Validate optional destination link.

    if (
      payload.link &&
      !/^https?:\/\/\S+$/i.test(payload.link)
    ) {
      this.error =
        'Destination link must begin with https:// or http://';
      return;
    }

    this.saving = true;

    try {
      // Restore session so the CSRF token is available.

      await this.api.restoreSession();

      // Save advertisement to MongoDB.

      await this.api.upsertAd(payload);

      // Reload data from the admin API.

      const response = await firstValueFrom(
        this.http.get<Ad[]>(
          `${environment.apiBaseUrl}/admin/ads`,
          {
            withCredentials: true
          }
        )
      );

      if (!Array.isArray(response)) {
        throw new Error(
          'Advertisement saved, but the refreshed list could not be loaded.'
        );
      }

      this.ads = response;

      const savedAd = this.ads.find(
        ad => ad.id === payload.id
      );

      this.draft = savedAd
        ? this.clone(savedAd)
        : payload;

      // Refresh the public website snapshot.

      try {
        await this.store.refreshFromBackend();
      } catch {
        // MongoDB save has already completed.
      }

      this.message = payload.enabled
        ? 'Advertisement saved and enabled successfully.'
        : 'Advertisement saved as hidden successfully.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.saving = false;
    }
  }

  // ==========================================
  // DELETE ADVERTISEMENT FROM MONGODB
  // DELETE /api/admin/ads/:id
  // ==========================================

  async remove(): Promise<void> {
    if (
      !this.isSaved ||
      this.saving ||
      this.deleting ||
      this.uploadingImage
    ) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.draft.brand}"?`
    );

    if (!confirmed) return;

    this.deleting = true;
    this.error = '';
    this.message = '';

    try {
      const session =
        await this.api.restoreSession();

      const adId = this.draft.id;

      // Delete the advertisement record.

      await firstValueFrom(
        this.http.delete(
          `${environment.apiBaseUrl}/admin/ads/${encodeURIComponent(adId)}`,
          {
            withCredentials: true,
            headers: {
              'X-CSRF-Token': session.csrfToken
            }
          }
        )
      );

      // Update the admin list.

      this.ads = this.ads.filter(
        ad => ad.id !== adId
      );

      // Reset the editor.

      this.draft = blank();

      // Refresh public data.

      try {
        await this.store.refreshFromBackend();
      } catch {
        // MongoDB deletion has already completed.
      }

      this.message =
        'Advertisement deleted successfully.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.deleting = false;
    }
  }

  // ==========================================
  // HANDLE BACKEND ERRORS
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
