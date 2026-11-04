
import {
  Component,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { NewsApiService } from '../../services/news-api.service';

import { ISSUE_CATEGORIES } from '../../core/models';
import { SUGGESTED_AREAS } from '../../core/areas';

import {
  AudioPlayerComponent
} from '../../shared/audio-player/audio-player.component';

@Component({
  selector: 'app-report',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    AudioPlayerComponent
  ],

  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.css', './report-problem.component.responsive.css']
})
export class ReportProblemComponent implements OnDestroy {

  // ==========================================
  // REPORT FORM
  // ==========================================

  title = '';
  category = 'Roads';
  area = '';
  street = '';
  description = '';

  // Local image preview only
  photo = '';

  // Original photo sent to Node.js backend
  private selectedPhoto: File | null = null;

  error = '';
  complete = false;
  submitting = false;
  uploadingPhoto = false;

  categories = ISSUE_CATEGORIES;
  areas = SUGGESTED_AREAS;

  // Prevent an outdated FileReader result from
  // replacing a newer photo selection.
  private photoRequestId = 0;

  constructor(
    public store: ContentService,
    public prefs: PreferencesService,
    private api: NewsApiService
  ) {}

  // ==========================================
  // SELECT IMAGE FROM GALLERY OR CAMERA
  // ==========================================

  async upload(event: Event): Promise<void> {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    // Allow choosing the same photo again
    input.value = '';

    if (!file || this.submitting) {
      return;
    }

    const requestId = ++this.photoRequestId;

    this.error = '';
    this.complete = false;

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp'
    ];

    // Validate file format
    if (!allowedTypes.includes(file.type)) {
      this.error =
        'Please select a JPG, PNG or WebP image.';
      return;
    }

    // Validate file size
    if (
      file.size <= 0 ||
      file.size > 8 * 1000 * 1000
    ) {
      this.error =
        'Photo must be larger than 0 bytes and under 8 MB.';
      return;
    }

    this.uploadingPhoto = true;

    try {

      // Read the image locally using FileReader
      const preview = await new Promise<string>(
        (resolve, reject) => {

          const reader = new FileReader();

          reader.onload = () => {

            if (typeof reader.result === 'string') {
              resolve(reader.result);
            } else {
              reject(
                new Error('Unable to preview image.')
              );
            }

          };

          reader.onerror = () => {
            reject(
              new Error('Unable to read selected image.')
            );
          };

          reader.readAsDataURL(file);
        }
      );

      if (requestId !== this.photoRequestId) {
        return;
      }

      // Save original file for complaint submission
      this.selectedPhoto = file;

      // Show local image preview directly
      this.photo = preview;

      this.error = '';

    } catch (error) {

      if (requestId !== this.photoRequestId) {
        return;
      }

      this.error =
        error instanceof Error
          ? error.message
          : 'Unable to preview the selected photo.';

    } finally {

      if (requestId === this.photoRequestId) {
        this.uploadingPhoto = false;
      }

    }
  }

  // ==========================================
  // REMOVE SELECTED PHOTO
  // ==========================================

  removePhoto(): void {

    if (this.submitting) {
      return;
    }

    ++this.photoRequestId;

    this.photo = '';
    this.selectedPhoto = null;
    this.uploadingPhoto = false;
    this.error = '';
  }

  // ==========================================
  // SUBMIT PUBLIC ISSUE TO MONGODB
  // ==========================================

  async submit(): Promise<void> {

    if (this.submitting || this.uploadingPhoto) {
      return;
    }

    this.error = '';
    this.complete = false;

    const title = this.title.trim();
    const category = this.category;
    const area = this.area.trim();
    const street = this.street.trim();
    const description = this.description.trim();

    // ========================================
    // VALIDATION MATCHING NODE.JS BACKEND
    // ========================================

    if (
      title.length < 5 ||
      title.length > 180
    ) {

      this.error =
        'Complaint title must contain 5 to 180 characters.';

      return;
    }

    if (
      area.length < 2 ||
      area.length > 160
    ) {

      this.error =
        'Enter a valid area or location.';

      return;
    }

    if (
      description.length < 15 ||
      description.length > 4000
    ) {

      this.error =
        'Complaint description must contain 15 to 4000 characters.';

      return;
    }

    if (street.length > 160) {

      this.error =
        'Street / landmark must be under 160 characters.';

      return;
    }

    if (
      !this.categories.some(
        item => item === category
      )
    ) {

      this.error =
        'Please select a valid issue category.';

      return;
    }

    // ========================================
    // BUILD MULTIPART FORM DATA
    // ========================================

    const data = new FormData();

    data.append('title', title);
    data.append('description', description);
    data.append('category', category);
    data.append('area', area);
    data.append('street', street);

    // Send original image under "file"
    // as required by backend Multer middleware.
    if (this.selectedPhoto) {

      data.append(
        'file',
        this.selectedPhoto,
        this.selectedPhoto.name
      );

    }

    this.submitting = true;

    try {

      // ======================================
      // REAL BACKEND API
      // POST /api/public/issues
      // ======================================

      await this.api.submitIssue(data);

      // Backend accepted the complaint.
      // The backend creates status = pending.
      this.complete = true;
      this.error = '';

      // Reset the form after successful submission
      this.title = '';
      this.category = 'Roads';
      this.area = '';
      this.street = '';
      this.description = '';

      this.removePhotoAfterSubmit();

      // Refresh publicly available data.
      // Pending complaints remain private.
      try {

        await this.store.refreshFromBackend();

      } catch {

        // Submission has already succeeded.
        // Do not display a false submission error.

      }

    } catch (error) {

      this.complete = false;
      this.error = this.getError(error);

    } finally {

      this.submitting = false;

    }
  }

  // ==========================================
  // CLEAR PHOTO AFTER SUCCESS
  // ==========================================

  private removePhotoAfterSubmit(): void {

    ++this.photoRequestId;

    this.selectedPhoto = null;
    this.photo = '';
    this.uploadingPhoto = false;
  }

  // ==========================================
  // COMPONENT CLEANUP
  // ==========================================

  ngOnDestroy(): void {
    this.removePhotoAfterSubmit();
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

      if (Array.isArray(serverMessage)) {
        return JSON.stringify(serverMessage);
      }

      if (error.status === 0) {
        return 'Cannot connect to Node.js backend. Check that the backend server is running.';
      }

      if (error.status === 400) {
        return 'Backend rejected the complaint details. Please check the form.';
      }

      if (error.status === 413) {
        return 'The selected file is too large.';
      }

      if (error.status === 429) {
        return 'Too many reports submitted. Please try again later.';
      }

      if (error.status === 500) {
        return 'Server error. Please try again or check the backend terminal.';
      }

      return `Complaint submission failed (${error.status}).`;
    }

    return error instanceof Error
      ? error.message
      : 'Unable to submit the complaint.';
  }
}
