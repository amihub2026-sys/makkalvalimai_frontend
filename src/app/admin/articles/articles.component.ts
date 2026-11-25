
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import {
  Article,
  NewsCategory,
  slugify,
  uid
} from '../../core/models';

import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { MediaService } from '../../services/media.service';
import {AudioRecorderComponent} from '../../shared/audio-recorder/audio-recorder.component';

type AudioLanguage = 'ta' | 'en';
type MediaType = 'image' | 'video' | 'audio';

// ==========================================
// CREATE BLANK ARTICLE
// ==========================================

function blank(): Article {
  const now = new Date().toISOString();

  return {
    id: uid('article'),
    slug: '',
    kind: '',

    title: {
      ta: '',
      en: ''
    },

    body: {
      ta: '',
      en: ''
    },

    image: '',
    video: '',

    publishedAt: now,
    area: 'Madurai district',

    published: false,
    featured: false,

    audio: {
      ta: '',
      en: ''
    },

    createdAt: now,
    updatedAt: now,
    source: ''
  };
}

@Component({
  selector: 'app-admin-articles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, AudioRecorderComponent
  ],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', './articles.component.responsive.css']
})
export class ArticlesAdminComponent implements OnInit {

  draft: Article = blank();

  articles: Article[] = [];
  categories: NewsCategory[] = [];

  editing = false;
  loading = false;
  categoryLoading = false;
  saving = false;

  // MEDIA UPLOAD STATES

  uploadingImage = false;
  uploadingVideo = false;
  uploadingAudioTa = false;
  uploadingAudioEn = false;

  dateInput = '';
  verifiedSource = '';
  inlineImageSide: 'left' | 'right' | 'full' = 'left';

  error = '';
  message = '';


  constructor(
    public store: ContentService,
    public media: MediaService,
    private api: NewsApiService
  ) {}

  ngOnInit(): void {
    this.newArticle();

    void this.loadCategories();
    void this.loadArticles();
  }

  setRecordedArticleAudio(lang: 'ta' | 'en', url: string): void {
    this.draft.audio ??= {ta:'',en:''};
    this.draft.audio[lang]=url;
    this.error='';
    this.message='Recording uploaded. Save the article to keep this audio assignment.';
  }

  // ==========================================
  // MEDIA UPLOAD STATUS
  // ==========================================

  get uploadingMedia(): boolean {
    return (
      this.uploadingImage ||
      this.uploadingVideo ||
      this.uploadingAudioTa ||
      this.uploadingAudioEn
    );
  }

  // ==========================================
  // DYNAMIC NEWS CATEGORIES
  // ==========================================

  get kinds(): string[] {
    return this.categories
      .filter(category => category.active)
      .map(category => category.slug);
  }

  get selectedCategory(): NewsCategory | undefined {
    return this.categories.find(
      category => category.slug === this.draft.kind
    );
  }

  async loadCategories(): Promise<void> {
    this.categoryLoading = true;

    try {
      const result = await this.api.adminCategories();

      if (!Array.isArray(result)) {
        throw new Error('Invalid category response from backend.');
      }

      // Load categories dynamically from MongoDB.
      this.categories = [...result].sort(
        (a, b) =>
          a.sortOrder - b.sortOrder ||
          a.slug.localeCompare(b.slug)
      );

      // Select the first active category for new articles.
      // Preserve the existing category when editing an article.
      if (
        !this.editing &&
        !this.categories.some(
          category =>
            category.active &&
            category.slug === this.draft.kind
        )
      ) {
        this.draft.kind =
          this.categories.find(
            category => category.active
          )?.slug || '';
      }

      if (this.categories.length === 0) {
        this.error =
          'No news categories found. Add categories in the admin panel first.';
      }

    } catch (error) {
      this.categories = [];
      this.error = this.getError(error);

    } finally {
      this.categoryLoading = false;
    }
  }

  // ==========================================
  // NEWSPAPER FORMATTING — existing bilingual body fields
  // Safe markers keep MongoDB article schemas unchanged.
  // ==========================================

  insertEditorial(lang: 'ta' | 'en', type: 'heading' | 'bold'): void {
    const current = this.draft.body[lang].trimEnd();
    const sample = type === 'heading'
      ? (lang === 'ta' ? 'துணைத் தலைப்பு' : 'Subheading')
      : (lang === 'ta' ? 'முக்கிய சொற்கள்' : 'Important words');
    const marker = type === 'heading' ? `## ${sample}` : `**${sample}**`;
    this.draft.body[lang] = current + (current ? '\n\n' : '') + marker + '\n\n';
    this.message = 'Format inserted. Replace the example words with your article text.';
  }

  async uploadEditorialImage(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    input.value = '';
    if (this.uploadingMedia || this.saving) return;
    const invalid = this.validateFile(file, 'image');
    if (invalid) { this.error = invalid; return; }
    this.uploadingImage = true;
    this.error = '';
    this.message = '';
    try {
      const result = await this.api.uploadMedia(file);
      if (result.kind !== 'image' || !result.url) throw new Error('Image upload failed.');
      for (const lang of ['ta', 'en'] as const) {
        const existing = this.draft.body[lang].trimEnd();
        const caption = lang === 'ta' ? 'செய்தி புகைப்படம்' : 'News photograph';
        const paragraph = this.inlineImageSide === 'full'
          ? ''
          : lang === 'ta' ? '\n\nஇந்தப் புகைப்படத்தைப் பற்றிய செய்தியை இங்கே எழுதுங்கள்.' : '\n\nWrite the paragraph beside this photograph here.';
        const block = `[[image-${this.inlineImageSide}:${result.url}|${caption}]]${paragraph}`;
        this.draft.body[lang] = existing + (existing ? '\n\n' : '') + block + '\n\n';
      }
      this.message = 'Image inserted into both language articles. Edit the captions and paragraphs, then Save.';
    } catch (error) {
      this.error = this.getError(error);
    } finally {
      this.uploadingImage = false;
    }
  }

  // ==========================================
  // LOAD ARTICLES FROM MONGODB
  // ==========================================

  async loadArticles(): Promise<void> {
    this.loading = true;

    try {
      this.articles =
        await this.api.adminArticles();

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.loading = false;
    }
  }

  // ==========================================
  // NEW ARTICLE
  // ==========================================

  newArticle(): void {
    if (this.saving || this.uploadingMedia) {
      this.error =
        'Wait for the current operation to finish.';
      return;
    }

    this.draft = blank();

    this.draft.kind =
      this.categories.find(
        category => category.active
      )?.slug || '';

    this.dateInput = this.toLocal(
      this.draft.publishedAt
    );

    this.verifiedSource = '';

    this.editing = false;
    this.error = '';
    this.message = '';
  }

  // ==========================================
  // EDIT ARTICLE
  // ==========================================

  edit(article: Article): void {
    if (this.saving || this.uploadingMedia) {
      this.error =
        'Wait for the current operation to finish.';
      return;
    }

    this.draft = structuredClone(article);

    this.draft.audio ??= {
      ta: '',
      en: ''
    };

    this.dateInput = this.toLocal(
      article.publishedAt
    );

    this.verifiedSource =
      article.source || '';

    this.editing = true;
    this.error = '';
    this.message = '';
  }

  // ==========================================
  // DATE CONVERSION
  // ==========================================

  private toLocal(value: string): string {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return '';
    }

    const local = new Date(
      date.getTime() -
      date.getTimezoneOffset() * 60000
    );

    return local.toISOString().slice(0, 16);
  }

  // ==========================================
  // VALIDATE IMAGE / VIDEO / AUDIO
  // ==========================================

  private validateFile(
    file: File,
    type: MediaType
  ): string {

    const maxSizes: Record<MediaType, number> = {
      image: 10 * 1000 * 1000,
      video: 60 * 1000 * 1000,
      audio: 25 * 1000 * 1000
    };

    if (file.size <= 0) {
      return 'The selected file is empty.';
    }

    if (file.size > maxSizes[type]) {
      return (
        `The selected ${type} file is too large. ` +
        `Maximum size: ${maxSizes[type] / 1000000} MB.`
      );
    }

    const mime = (file.type || '')
      .toLowerCase()
      .split(';')[0]
      .trim();

    const filename = file.name.toLowerCase();

    // ======================================
    // IMAGE VALIDATION
    // ======================================

    if (type === 'image') {
      const allowedImages = [
        'image/jpeg',
        'image/png',
        'image/webp'
      ];

      if (!allowedImages.includes(mime)) {
        return (
          'Unsupported image format. ' +
          'Select JPG, PNG or WebP.'
        );
      }

      return '';
    }

    // ======================================
    // VIDEO VALIDATION
    // ======================================

    if (type === 'video') {
      const allowedVideos = [
        'video/mp4',
        'video/webm'
      ];

      if (!allowedVideos.includes(mime)) {
        return (
          'Unsupported video format. ' +
          'Select MP4 or WebM.'
        );
      }

      return '';
    }

    // ======================================
    // AUDIO VALIDATION - MP3 + OGG
    // ======================================

    const isMp3 =
      filename.endsWith('.mp3') &&
      [
        'audio/mpeg',
        'audio/mp3'
      ].includes(mime);

    const isOgg =
      (
        filename.endsWith('.ogg') ||
        filename.endsWith('.oga')
      ) &&
      [
        'audio/ogg',
        'application/ogg',
        'audio/opus'
      ].includes(mime);

    if (!isMp3 && !isOgg) {
      return (
        'Unsupported audio format. ' +
        'Please select an MP3 or WhatsApp OGG recording.'
      );
    }

    return '';
  }

  // ==========================================
  // UPLOAD NEWS IMAGE
  // ==========================================

  async uploadImage(event: Event): Promise<void> {
    const input =
      event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) return;

    input.value = '';

    if (this.uploadingMedia || this.saving) {
      this.error =
        'Another operation is in progress.';
      return;
    }

    this.error = '';
    this.message = '';

    const validationError =
      this.validateFile(file, 'image');

    if (validationError) {
      this.error = validationError;
      return;
    }

    this.uploadingImage = true;

    try {
      const result =
        await this.api.uploadMedia(file);

      if (
        result.kind !== 'image' ||
        !result.url
      ) {
        throw new Error(
          'Uploaded file is not a valid image.'
        );
      }

      this.draft.image = result.url;

      this.message =
        'Image uploaded successfully. Save the article to keep the reference.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.uploadingImage = false;
    }
  }

  // ==========================================
  // UPLOAD NEWS VIDEO
  // ==========================================

  async uploadVideo(event: Event): Promise<void> {
    const input =
      event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) return;

    input.value = '';

    if (this.uploadingMedia || this.saving) {
      this.error =
        'Another operation is in progress.';
      return;
    }

    this.error = '';
    this.message = '';

    const validationError =
      this.validateFile(file, 'video');

    if (validationError) {
      this.error = validationError;
      return;
    }

    this.uploadingVideo = true;

    try {
      const result =
        await this.api.uploadMedia(file);

      if (
        result.kind !== 'video' ||
        !result.url
      ) {
        throw new Error(
          'Uploaded file is not a valid video.'
        );
      }

      this.draft.video = result.url;

      this.message =
        'Video uploaded successfully. Save the article to keep the reference.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      this.uploadingVideo = false;
    }
  }

  // ==========================================
  // UPLOAD INDIVIDUAL STORY AUDIO
  // TAMIL / ENGLISH
  // MP3 / WHATSAPP OGG
  // ==========================================

  async uploadAudio(
    event: Event,
    lang: AudioLanguage
  ): Promise<void> {

    const input =
      event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) return;

    input.value = '';

    if (this.uploadingMedia || this.saving) {
      this.error =
        'Another operation is in progress.';
      return;
    }

    this.error = '';
    this.message = '';

    // Accept MP3 and OGG.

    const validationError =
      this.validateFile(file, 'audio');

    if (validationError) {
      this.error = validationError;
      return;
    }

    if (lang === 'ta') {
      this.uploadingAudioTa = true;
    } else {
      this.uploadingAudioEn = true;
    }

    try {

      // POST /api/admin/media

      const result =
        await this.api.uploadMedia(file);

      if (
        result.kind !== 'audio' ||
        typeof result.url !== 'string' ||
        !result.url
      ) {
        throw new Error(
          'The backend did not return a valid audio file URL.'
        );
      }

      // Make sure the article has an audio object.

      this.draft.audio ??= {
        ta: '',
        en: ''
      };

      // Assign the uploaded recording
      // to THIS article and language.

      this.draft.audio[lang] = result.url;

      const language =
        lang === 'ta' ? 'Tamil' : 'English';

      const format =
        file.name.toLowerCase().endsWith('.mp3')
          ? 'MP3'
          : 'OGG';

      this.message =
        `${language} ${format} uploaded successfully. ` +
        'Click Save & Publish to save this recording with the article.';

    } catch (error) {
      this.error = this.getError(error);

    } finally {
      if (lang === 'ta') {
        this.uploadingAudioTa = false;
      } else {
        this.uploadingAudioEn = false;
      }
    }
  }

  // ==========================================
  // GET INDIVIDUAL STORY AUDIO URL
  // ==========================================

  audioSource(lang: AudioLanguage): string {
    return this.draft.audio?.[lang] || '';
  }

  // ==========================================
  // REMOVE AUDIO FROM THIS ARTICLE
  // ==========================================

  removeAudio(lang: AudioLanguage): void {
    if (this.saving || this.uploadingMedia) {
      return;
    }

    this.draft.audio ??= {
      ta: '',
      en: ''
    };

    this.draft.audio[lang] = '';

    this.error = '';

    const language =
      lang === 'ta' ? 'Tamil' : 'English';

    this.message =
      `${language} audio removed from this article form. ` +
      'Click Save & Publish to save the change.';
  }

  // ==========================================
  // SAVE ARTICLE TO MONGODB
  // ==========================================

  async save(): Promise<void> {

    if (this.saving || this.uploadingMedia) {
      return;
    }

    this.error = '';
    this.message = '';

    const category = this.selectedCategory;

    if (!category || !category.active) {
      this.error =
        'Select an active news category.';
      return;
    }

    if (this.draft.published) {
      if (
        !this.draft.title.en.trim() ||
        !this.draft.title.ta.trim() ||
        !this.draft.body.en.trim() ||
        !this.draft.body.ta.trim()
      ) {
        this.error =
          'Tamil and English title/body are required before publishing.';
        return;
      }
    }

    const publicationDate =
      new Date(this.dateInput);

    if (
      Number.isNaN(publicationDate.getTime())
    ) {
      this.error =
        'Choose a valid publication date.';
      return;
    }

    if (
      this.draft.published &&
      category.requiresVerifiedSource &&
      !this.verifiedSource.trim()
    ) {
      this.error =
        'Verified news source is required for this category.';
      return;
    }

    const articleSlug = slugify(
      this.draft.slug || this.draft.title.en
    );

    const collision =
      this.articles.find(
        article =>
          article.slug === articleSlug &&
          article.id !== this.draft.id
      );

    if (collision) {
      this.error =
        'This URL slug already belongs to another article.';
      return;
    }

    // Include Tamil / English audio
    // when saving the article.

    const payload: Article = {
      ...structuredClone(this.draft),

      audio: {
        ta: this.draft.audio?.ta || '',
        en: this.draft.audio?.en || ''
      },

      kind: category.slug,
      slug: articleSlug,

      publishedAt:
        publicationDate.toISOString(),

      updatedAt:
        new Date().toISOString(),

      source:
        this.verifiedSource.trim()
    };

    this.saving = true;

    try {

      await this.api.restoreSession();

      // PUT /api/admin/articles/:id

      const saved =
        await this.api.upsertArticle(payload);

      // Update the list of saved articles.

      this.articles = [
        saved,
        ...this.articles.filter(
          article => article.id !== saved.id
        )
      ];

      // Keep the editor synchronized
      // with the saved article.
      // Do not call edit() while saving=true.

      this.draft = structuredClone(saved);

      this.draft.audio ??= {
        ta: '',
        en: ''
      };

      this.dateInput = this.toLocal(
        saved.publishedAt
      );

      this.verifiedSource =
        saved.source || '';

      this.editing = true;

      this.message = saved.published
        ? 'Article published successfully.'
        : 'Article draft saved successfully in MongoDB.';

      // Refresh frontend content.

      await this.store.refreshFromBackend();

    } catch (error) {

      this.error = this.getError(error);

    } finally {

      this.saving = false;

    }
  }

  // ==========================================
  // DELETE ARTICLE
  // ==========================================

  async remove(): Promise<void> {

    if (
      !this.editing ||
      this.saving ||
      this.uploadingMedia
    ) {
      return;
    }

    if (
      !confirm(
        'Delete this article permanently?'
      )
    ) {
      return;
    }

    this.saving = true;
    this.error = '';
    this.message = '';

    try {

      await this.api.restoreSession();

      await this.api.deleteArticle(
        this.draft.id
      );

      this.articles =
        this.articles.filter(
          article =>
            article.id !== this.draft.id
        );

      // Return to the blank editor.

      this.draft = blank();

      this.draft.kind =
        this.categories.find(
          category => category.active
        )?.slug || '';

      this.dateInput = this.toLocal(
        this.draft.publishedAt
      );

      this.verifiedSource = '';

      this.editing = false;

      this.message =
        'Article deleted successfully from MongoDB.';

      await this.store.refreshFromBackend();

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

    if (
      error instanceof HttpErrorResponse
    ) {

      if (error.status === 0) {
        return (
          'Cannot connect to the Node.js backend.'
        );
      }

      if (error.status === 401) {
        return (
          'Admin session expired. Please log in again.'
        );
      }

      if (error.status === 403) {
        return (
          'Access denied or invalid CSRF token.'
        );
      }

      if (error.status === 413) {
        return (
          'Uploaded file exceeds the backend size limit.'
        );
      }

      const serverMessage =
        error.error?.error ||
        error.error?.message;

      if (
        typeof serverMessage === 'string'
      ) {
        return serverMessage;
      }

      return (
        `Backend request failed (${error.status}).`
      );
    }

    return error instanceof Error
      ? error.message
      : 'An unexpected error occurred.';
  }
}
