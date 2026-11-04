
import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ContentService } from '../../services/content.service';
import { MediaService } from '../../services/media.service';
import { NewsApiService } from '../../services/news-api.service';

import { Issue } from '../../core/models';


import { environment } from '../../../environments/environment';

type AdminIssue = Issue & {
  privateMediaId?: string;
};

@Component({
  selector: 'app-admin-reports',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  ],

  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css', './reports.component.responsive.css']
})
export class ReportsAdminComponent implements OnInit {

  // All issues loaded from MongoDB
  issues: AdminIssue[] = [];

  // Selected issue
  editing = '';
  issueDraft!: AdminIssue;

  // Loading states
  loading = false;
  saving = false;
  uploadingAfter = false;

  // Messages
  error = '';
  message = '';

  // Image previews
  fallback = '';
  afterPreviewUrl = '';

  constructor(
    public store: ContentService,
    public media: MediaService,
    private api: NewsApiService
  ) {}

  ngOnInit(): void {
    void this.loadIssues();
  }

  // ==========================================
  // PENDING ISSUES COUNT
  // ==========================================

  get pendingCount(): number {
    return this.issues.filter(
      issue => issue.status === 'pending'
    ).length;
  }

  // ==========================================
  // LOAD ALL ISSUES FROM MONGODB
  // ==========================================

  async loadIssues(): Promise<void> {

    this.loading = true;
    this.error = '';

    try {

      const result = await this.api.adminIssues();

      this.issues = result as AdminIssue[];

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.loading = false;

    }
  }

  // ==========================================
  // ISSUE PHOTO URL
  // ==========================================

  issuePhoto(issue: AdminIssue): string {

    // Approved public photo
    if (issue.photo) {
      return this.media.url(issue.photo);
    }

    // Pending issue private photo.
    // This endpoint requires an admin session.
    if (issue.privateMediaId) {

      const origin = new URL(
        environment.apiBaseUrl
      ).origin;

      return new URL(
        '/api/admin/media/private/' +
        encodeURIComponent(issue.privateMediaId),
        origin
      ).href;
    }

    return '';
  }

  // ==========================================
  // APPROVE OR REJECT ISSUE
  // ==========================================

  async updateStatus(
    item: Issue,
    status: Issue['status']
  ): Promise<void> {

    if (this.saving || this.uploadingAfter) {
      return;
    }

    this.error = '';
    this.message = '';

    if (
      status !== 'approved' &&
      status !== 'rejected'
    ) {
      this.error = 'Invalid moderation action.';
      return;
    }

    if (item.status !== 'pending') {

      this.error =
        'Only pending issues can be approved or rejected.';

      return;
    }

    this.saving = true;

    try {

      // Real backend moderation API
      await this.api.moderateIssue(
        item.id,
        status
      );

      // Refresh admin complaints from MongoDB
      await this.loadIssues();

      // Refresh public website data
      try {
        await this.store.refreshFromBackend();
      } catch {
        // Admin moderation has already succeeded.
      }

      this.message =
        status === 'approved'
          ? 'Issue approved and published successfully.'
          : 'Issue rejected successfully.';

      if (this.editing === item.id) {
        this.editing = '';
      }

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.saving = false;

    }
  }

  // ==========================================
  // SELECT ISSUE FOR REVIEW
  // ==========================================

  select(item: Issue): void {

    if (this.saving || this.uploadingAfter) {
      return;
    }

    this.editing = item.id;

    this.issueDraft = structuredClone(
      item
    ) as AdminIssue;

    this.issueDraft.audio ??= {
      ta: '',
      en: ''
    };

    this.afterPreviewUrl = this.issueDraft.afterPhoto
      ? this.media.url(this.issueDraft.afterPhoto)
      : '';

    this.error = '';
    this.message = '';
  }

  // ==========================================
  // UPLOAD RESOLUTION PHOTO
  // ==========================================

  async uploadAfter(event: Event): Promise<void> {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    input.value = '';

    if (
      !this.editing ||
      !this.issueDraft ||
      this.saving ||
      this.uploadingAfter
    ) {
      this.error = 'Select an issue first.';
      return;
    }

    this.error = '';
    this.message = '';

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp'
    ];

    if (!allowedTypes.includes(file.type)) {

      this.error =
        'Select a JPG, PNG or WebP image.';

      return;
    }

    if (
      file.size <= 0 ||
      file.size > 10 * 1000 * 1000
    ) {

      this.error =
        'Image must be larger than 0 bytes and under 10 MB.';

      return;
    }

    this.uploadingAfter = true;

    try {

      // Upload to real backend media API
      const result = await this.api.uploadMedia(file);

      if (result.kind !== 'image') {
        throw new Error(
          'Uploaded file is not an image.'
        );
      }

      // Backend moderation expects:
      // /api/public/media/UUID
      // Not http://localhost:5000/...
      const url = new URL(result.url, new URL(environment.apiBaseUrl, window.location.origin).origin);

      const relativePath = url.pathname;

      if (
        !/^\/api\/public\/media\/[a-f0-9-]{36}$/i.test(
          relativePath
        )
      ) {
        throw new Error(
          'Unexpected uploaded media reference.'
        );
      }

      this.issueDraft.afterPhoto = relativePath;

      this.afterPreviewUrl = result.url;

      this.message =
        'After-photo uploaded. Add the resolution note and click Verify & Mark Solved.';

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.uploadingAfter = false;

    }
  }

  // ==========================================
  // ISSUE MP3 AUDIO
  // ==========================================

  uploadAudio(
    event: Event,
    lang: 'ta' | 'en'
  ): void {

    const input = event.target as HTMLInputElement;
    input.value = '';

    // The backend issue moderation schema
    // currently does not accept audio fields.
    // Do not pretend an upload is saved.

    this.error =
      `${lang === 'ta' ? 'Tamil' : 'English'} issue MP3 saving is not supported by the current backend API.`;

  }

  // ==========================================
  // SAVE / VERIFY RESOLUTION
  // ==========================================

  async saveDetails(solved: boolean): Promise<void> {

    if (
      !this.issueDraft ||
      !this.editing ||
      this.saving ||
      this.uploadingAfter
    ) {
      return;
    }

    this.error = '';
    this.message = '';

    // Current backend does not provide a
    // general issue-details update endpoint.
    if (!solved) {

      this.error =
        'The backend does not yet support saving issue details separately. Use Verify & Mark Solved after adding evidence.';

      return;
    }

    if (this.issueDraft.status !== 'approved') {

      this.error =
        'Approve the issue before marking it solved.';

      return;
    }

    const resolution =
      this.issueDraft.resolution?.trim() || '';

    const afterPhoto =
      this.issueDraft.afterPhoto || '';

    if (resolution.length < 15) {

      this.error =
        'Resolution description must contain at least 15 characters.';

      return;
    }

    if (
      !/^\/api\/public\/media\/[a-f0-9-]{36}$/i.test(
        afterPhoto
      )
    ) {

      this.error =
        'Upload a valid after-resolution photo first.';

      return;
    }

    this.saving = true;

    try {

      // Real MongoDB moderation request
      await this.api.moderateIssue(
        this.issueDraft.id,
        'solved',
        {
          resolution,
          afterPhoto
        }
      );

      // Refresh admin issues
      await this.loadIssues();

      // Refresh public data
      try {
        await this.store.refreshFromBackend();
      } catch {
        // Resolution has already been saved.
      }

      this.editing = '';

      this.message =
        'Issue verified and marked solved successfully.';

    } catch (error) {

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

      const serverMessage =
        error.error?.error ||
        error.error?.message;

      if (typeof serverMessage === 'string') {
        return serverMessage;
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
