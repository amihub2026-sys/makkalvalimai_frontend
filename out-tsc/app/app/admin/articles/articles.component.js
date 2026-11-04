import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { slugify, uid } from '../../core/models';
import { SERVER_ARTICLE_KINDS } from '../../core/article-categories';
import { AudioRecorderComponent } from '../../shared/audio-recorder/audio-recorder.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ArticlesAdminComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
function ArticlesAdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.message, " ");
} }
function ArticlesAdminComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " Loading news articles... ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " No articles found. Create your first news article. ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_button_16_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 72);
} if (rf & 2) {
    const article_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.media.url(article_r4.image), i0.ɵɵsanitizeUrl)("alt", article_r4.title.en || "News article");
} }
function ArticlesAdminComponent_button_16_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", category_r5.name.en, " ");
} }
function ArticlesAdminComponent_button_16_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ArticlesAdminComponent_button_16_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const article_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", category_r5.slug === article_r4.kind);
} }
function ArticlesAdminComponent_button_16_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u00B7 Featured ");
    i0.ɵɵelementContainerEnd();
} }
function ArticlesAdminComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function ArticlesAdminComponent_button_16_Template_button_click_0_listener() { const article_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.edit(article_r4)); });
    i0.ɵɵtemplate(1, ArticlesAdminComponent_button_16_img_1_Template, 1, 2, "img", 70);
    i0.ɵɵelementStart(2, "span")(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtemplate(6, ArticlesAdminComponent_button_16_ng_container_6_Template, 2, 1, "ng-container", 71);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵtemplate(13, ArticlesAdminComponent_button_16_ng_container_13_Template, 2, 0, "ng-container", 21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const article_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.editing && ctx_r1.draft.id === article_r4.id);
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.uploadingMedia);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", article_r4.image);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", article_r4.title.en || article_r4.title.ta, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.categories);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 ", article_r4.published ? "Published" : "Draft", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r4.area);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(12, 10, article_r4.publishedAt, "dd MMM yyyy"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", article_r4.featured);
} }
function ArticlesAdminComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", category_r6.slug)("disabled", !category_r6.active);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", category_r6.name.ta, " / ", category_r6.name.en, " ", category_r6.active ? "" : "(Disabled)", " ");
} }
function ArticlesAdminComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Loading categories... ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h3");
    i0.ɵɵtext(2, "News Verification");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 17)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 74);
    i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_div_121_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.verifiedSource, $event) || (ctx_r1.verifiedSource = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Verified News Source ", ctx_r1.draft.published ? "*" : "", " ");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.verifiedSource);
    i0.ɵɵproperty("required", ctx_r1.draft.published);
} }
function ArticlesAdminComponent_p_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵtext(2, " Uploading image... Please wait. ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵelement(1, "img", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.draft.image), i0.ɵɵsanitizeUrl);
} }
function ArticlesAdminComponent_p_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵtext(2, " Uploading video... Please wait. ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "p");
    i0.ɵɵtext(2, "Uploaded Video Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "video", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.draft.video), i0.ɵɵsanitizeUrl);
} }
function ArticlesAdminComponent_p_153_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵtext(2, " Processing / Uploading Tamil audio... ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "p");
    i0.ɵɵelement(2, "i", 81);
    i0.ɵɵtext(3, " Tamil Audio Assigned ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "audio", 82);
    i0.ɵɵtext(5, " Your browser does not support audio playback. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 14);
    i0.ɵɵtext(7, " Tamil audio has been uploaded and assigned to this article form. Click Save & Publish or Save Draft to save the assignment. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.audioSource("ta")));
} }
function ArticlesAdminComponent_ng_template_155_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " No Tamil audio assigned to this article. ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_p_165_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵtext(2, " Processing / Uploading English audio... ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79)(1, "p");
    i0.ɵɵelement(2, "i", 81);
    i0.ɵɵtext(3, " English Audio Assigned ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "audio", 82);
    i0.ɵɵtext(5, " Your browser does not support audio playback. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 14);
    i0.ɵɵtext(7, " English audio has been uploaded and assigned to this article form. Click Save & Publish or Save Draft to save the assignment. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.audioSource("en")));
} }
function ArticlesAdminComponent_ng_template_167_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1, " No English audio assigned to this article. ");
    i0.ɵɵelementEnd();
} }
function ArticlesAdminComponent_button_194_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 83);
    i0.ɵɵlistener("click", function ArticlesAdminComponent_button_194_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.remove()); });
    i0.ɵɵtext(1, " Delete Article ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.uploadingMedia);
} }
// ==========================================
// CREATE BLANK ARTICLE
// ==========================================
function blank() {
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
export class ArticlesAdminComponent {
    store;
    media;
    api;
    draft = blank();
    articles = [];
    categories = [];
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
    inlineImageSide = 'left';
    error = '';
    message = '';
    constructor(store, media, api) {
        this.store = store;
        this.media = media;
        this.api = api;
    }
    ngOnInit() {
        this.newArticle();
        void this.loadCategories();
        void this.loadArticles();
    }
    setRecordedArticleAudio(lang, url) {
        this.draft.audio ??= { ta: '', en: '' };
        this.draft.audio[lang] = url;
        this.error = '';
        this.message = 'Recording uploaded. Save the article to keep this audio assignment.';
    }
    // ==========================================
    // MEDIA UPLOAD STATUS
    // ==========================================
    get uploadingMedia() {
        return (this.uploadingImage ||
            this.uploadingVideo ||
            this.uploadingAudioTa ||
            this.uploadingAudioEn);
    }
    // ==========================================
    // DYNAMIC NEWS CATEGORIES
    // ==========================================
    get kinds() {
        return this.categories
            .filter(category => category.active)
            .map(category => category.slug);
    }
    get selectedCategory() {
        return this.categories.find(category => category.slug === this.draft.kind);
    }
    async loadCategories() {
        // The existing backend has a fixed Article.kind enum, not category CRUD.
        // No request to a nonexistent /api/admin/categories endpoint.
        this.categories = SERVER_ARTICLE_KINDS.map(item => structuredClone(item));
        if (!this.editing && !this.kinds.includes(this.draft.kind)) {
            this.draft.kind = this.categories[0].slug;
        }
    }
    // ==========================================
    // NEWSPAPER FORMATTING — existing bilingual body fields
    // Safe markers keep MongoDB article schemas unchanged.
    // ==========================================
    insertEditorial(lang, type) {
        const current = this.draft.body[lang].trimEnd();
        const sample = type === 'heading'
            ? (lang === 'ta' ? 'துணைத் தலைப்பு' : 'Subheading')
            : (lang === 'ta' ? 'முக்கிய சொற்கள்' : 'Important words');
        const marker = type === 'heading' ? `## ${sample}` : `**${sample}**`;
        this.draft.body[lang] = current + (current ? '\n\n' : '') + marker + '\n\n';
        this.message = 'Format inserted. Replace the example words with your article text.';
    }
    async uploadEditorialImage(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file)
            return;
        input.value = '';
        if (this.uploadingMedia || this.saving)
            return;
        const invalid = this.validateFile(file, 'image');
        if (invalid) {
            this.error = invalid;
            return;
        }
        this.uploadingImage = true;
        this.error = '';
        this.message = '';
        try {
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'image' || !result.url)
                throw new Error('Image upload failed.');
            for (const lang of ['ta', 'en']) {
                const existing = this.draft.body[lang].trimEnd();
                const caption = lang === 'ta' ? 'செய்தி புகைப்படம்' : 'News photograph';
                const paragraph = this.inlineImageSide === 'full'
                    ? ''
                    : lang === 'ta' ? '\n\nஇந்தப் புகைப்படத்தைப் பற்றிய செய்தியை இங்கே எழுதுங்கள்.' : '\n\nWrite the paragraph beside this photograph here.';
                const block = `[[image-${this.inlineImageSide}:${result.url}|${caption}]]${paragraph}`;
                this.draft.body[lang] = existing + (existing ? '\n\n' : '') + block + '\n\n';
            }
            this.message = 'Image inserted into both language articles. Edit the captions and paragraphs, then Save.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingImage = false;
        }
    }
    // ==========================================
    // LOAD ARTICLES FROM MONGODB
    // ==========================================
    async loadArticles() {
        this.loading = true;
        try {
            this.articles =
                await this.api.adminArticles();
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // NEW ARTICLE
    // ==========================================
    newArticle() {
        if (this.saving || this.uploadingMedia) {
            this.error =
                'Wait for the current operation to finish.';
            return;
        }
        this.draft = blank();
        this.draft.kind =
            this.categories.find(category => category.active)?.slug || '';
        this.dateInput = this.toLocal(this.draft.publishedAt);
        this.verifiedSource = '';
        this.editing = false;
        this.error = '';
        this.message = '';
    }
    // ==========================================
    // EDIT ARTICLE
    // ==========================================
    edit(article) {
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
        this.dateInput = this.toLocal(article.publishedAt);
        this.verifiedSource =
            article.source || '';
        this.editing = true;
        this.error = '';
        this.message = '';
    }
    // ==========================================
    // DATE CONVERSION
    // ==========================================
    toLocal(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return '';
        }
        const local = new Date(date.getTime() -
            date.getTimezoneOffset() * 60000);
        return local.toISOString().slice(0, 16);
    }
    // ==========================================
    // VALIDATE IMAGE / VIDEO / AUDIO
    // ==========================================
    validateFile(file, type) {
        const maxSizes = {
            image: 10 * 1000 * 1000,
            video: 60 * 1000 * 1000,
            audio: 25 * 1000 * 1000
        };
        if (file.size <= 0) {
            return 'The selected file is empty.';
        }
        if (file.size > maxSizes[type]) {
            return (`The selected ${type} file is too large. ` +
                `Maximum size: ${maxSizes[type] / 1000000} MB.`);
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
                return ('Unsupported image format. ' +
                    'Select JPG, PNG or WebP.');
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
                return ('Unsupported video format. ' +
                    'Select MP4 or WebM.');
            }
            return '';
        }
        // ======================================
        // AUDIO VALIDATION - MP3 + OGG
        // ======================================
        const isMp3 = filename.endsWith('.mp3') &&
            [
                'audio/mpeg',
                'audio/mp3'
            ].includes(mime);
        const isOgg = (filename.endsWith('.ogg') ||
            filename.endsWith('.oga')) &&
            [
                'audio/ogg',
                'application/ogg',
                'audio/opus'
            ].includes(mime);
        if (!isMp3 && !isOgg) {
            return ('Unsupported audio format. ' +
                'Please select an MP3 or WhatsApp OGG recording.');
        }
        return '';
    }
    // ==========================================
    // UPLOAD NEWS IMAGE
    // ==========================================
    async uploadImage(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file)
            return;
        input.value = '';
        if (this.uploadingMedia || this.saving) {
            this.error =
                'Another operation is in progress.';
            return;
        }
        this.error = '';
        this.message = '';
        const validationError = this.validateFile(file, 'image');
        if (validationError) {
            this.error = validationError;
            return;
        }
        this.uploadingImage = true;
        try {
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'image' ||
                !result.url) {
                throw new Error('Uploaded file is not a valid image.');
            }
            this.draft.image = result.url;
            this.message =
                'Image uploaded successfully. Save the article to keep the reference.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingImage = false;
        }
    }
    // ==========================================
    // UPLOAD NEWS VIDEO
    // ==========================================
    async uploadVideo(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file)
            return;
        input.value = '';
        if (this.uploadingMedia || this.saving) {
            this.error =
                'Another operation is in progress.';
            return;
        }
        this.error = '';
        this.message = '';
        const validationError = this.validateFile(file, 'video');
        if (validationError) {
            this.error = validationError;
            return;
        }
        this.uploadingVideo = true;
        try {
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'video' ||
                !result.url) {
                throw new Error('Uploaded file is not a valid video.');
            }
            this.draft.video = result.url;
            this.message =
                'Video uploaded successfully. Save the article to keep the reference.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingVideo = false;
        }
    }
    // ==========================================
    // UPLOAD INDIVIDUAL STORY AUDIO
    // TAMIL / ENGLISH
    // MP3 / WHATSAPP OGG
    // ==========================================
    async uploadAudio(event, lang) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file)
            return;
        input.value = '';
        if (this.uploadingMedia || this.saving) {
            this.error =
                'Another operation is in progress.';
            return;
        }
        this.error = '';
        this.message = '';
        // Accept MP3 and OGG.
        const validationError = this.validateFile(file, 'audio');
        if (validationError) {
            this.error = validationError;
            return;
        }
        if (lang === 'ta') {
            this.uploadingAudioTa = true;
        }
        else {
            this.uploadingAudioEn = true;
        }
        try {
            // POST /api/admin/media
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'audio' ||
                typeof result.url !== 'string' ||
                !result.url) {
                throw new Error('The backend did not return a valid audio file URL.');
            }
            // Make sure the article has an audio object.
            this.draft.audio ??= {
                ta: '',
                en: ''
            };
            // Assign the uploaded recording
            // to THIS article and language.
            this.draft.audio[lang] = result.url;
            const language = lang === 'ta' ? 'Tamil' : 'English';
            const format = file.name.toLowerCase().endsWith('.mp3')
                ? 'MP3'
                : 'OGG';
            this.message =
                `${language} ${format} uploaded successfully. ` +
                    'Click Save & Publish to save this recording with the article.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            if (lang === 'ta') {
                this.uploadingAudioTa = false;
            }
            else {
                this.uploadingAudioEn = false;
            }
        }
    }
    // ==========================================
    // GET INDIVIDUAL STORY AUDIO URL
    // ==========================================
    audioSource(lang) {
        return this.draft.audio?.[lang] || '';
    }
    // ==========================================
    // REMOVE AUDIO FROM THIS ARTICLE
    // ==========================================
    removeAudio(lang) {
        if (this.saving || this.uploadingMedia) {
            return;
        }
        this.draft.audio ??= {
            ta: '',
            en: ''
        };
        this.draft.audio[lang] = '';
        this.error = '';
        const language = lang === 'ta' ? 'Tamil' : 'English';
        this.message =
            `${language} audio removed from this article form. ` +
                'Click Save & Publish to save the change.';
    }
    // ==========================================
    // SAVE ARTICLE TO MONGODB
    // ==========================================
    async save() {
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
            if (!this.draft.title.en.trim() ||
                !this.draft.title.ta.trim() ||
                !this.draft.body.en.trim() ||
                !this.draft.body.ta.trim()) {
                this.error =
                    'Tamil and English title/body are required before publishing.';
                return;
            }
        }
        const publicationDate = new Date(this.dateInput);
        if (Number.isNaN(publicationDate.getTime())) {
            this.error =
                'Choose a valid publication date.';
            return;
        }
        if (this.draft.published &&
            category.requiresVerifiedSource &&
            !this.verifiedSource.trim()) {
            this.error =
                'Verified news source is required for this category.';
            return;
        }
        const articleSlug = slugify(this.draft.slug || this.draft.title.en);
        const collision = this.articles.find(article => article.slug === articleSlug &&
            article.id !== this.draft.id);
        if (collision) {
            this.error =
                'This URL slug already belongs to another article.';
            return;
        }
        // Include Tamil / English audio
        // when saving the article.
        const payload = {
            ...structuredClone(this.draft),
            audio: {
                ta: this.draft.audio?.ta || '',
                en: this.draft.audio?.en || ''
            },
            kind: category.slug,
            slug: articleSlug,
            publishedAt: publicationDate.toISOString(),
            updatedAt: new Date().toISOString(),
            source: this.verifiedSource.trim()
        };
        this.saving = true;
        try {
            await this.api.restoreSession();
            // PUT /api/admin/articles/:id
            const saved = await this.api.upsertArticle(payload);
            // Update the list of saved articles.
            this.articles = [
                saved,
                ...this.articles.filter(article => article.id !== saved.id)
            ];
            // Keep the editor synchronized
            // with the saved article.
            // Do not call edit() while saving=true.
            this.draft = structuredClone(saved);
            this.draft.audio ??= {
                ta: '',
                en: ''
            };
            this.dateInput = this.toLocal(saved.publishedAt);
            this.verifiedSource =
                saved.source || '';
            this.editing = true;
            this.message = saved.published
                ? 'Article published successfully.'
                : 'Article draft saved successfully in MongoDB.';
            // Refresh frontend content.
            await this.store.refreshFromBackend();
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // DELETE ARTICLE
    // ==========================================
    async remove() {
        if (!this.editing ||
            this.saving ||
            this.uploadingMedia) {
            return;
        }
        if (!confirm('Delete this article permanently?')) {
            return;
        }
        this.saving = true;
        this.error = '';
        this.message = '';
        try {
            await this.api.restoreSession();
            await this.api.deleteArticle(this.draft.id);
            this.articles =
                this.articles.filter(article => article.id !== this.draft.id);
            // Return to the blank editor.
            this.draft = blank();
            this.draft.kind =
                this.categories.find(category => category.active)?.slug || '';
            this.dateInput = this.toLocal(this.draft.publishedAt);
            this.verifiedSource = '';
            this.editing = false;
            this.message =
                'Article deleted successfully from MongoDB.';
            await this.store.refreshFromBackend();
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // BACKEND ERROR HANDLING
    // ==========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
                return ('Cannot connect to the Node.js backend.');
            }
            if (error.status === 401) {
                return ('Admin session expired. Please log in again.');
            }
            if (error.status === 403) {
                return ('Access denied or invalid CSRF token.');
            }
            if (error.status === 413) {
                return ('Uploaded file exceeds the backend size limit.');
            }
            const serverMessage = error.error?.error ||
                error.error?.message;
            if (typeof serverMessage === 'string') {
                return serverMessage;
            }
            return (`Backend request failed (${error.status}).`);
        }
        return error instanceof Error
            ? error.message
            : 'An unexpected error occurred.';
    }
    static ɵfac = function ArticlesAdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ArticlesAdminComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.NewsApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ArticlesAdminComponent, selectors: [["app-admin-articles"]], decls: 195, vars: 46, consts: [["articleForm", "ngForm"], ["noTamilAudio", ""], ["noEnglishAudio", ""], [1, "admin-articles"], ["class", "error-message", "role", "alert", 4, "ngIf"], ["class", "success-message", "role", "status", 4, "ngIf"], [1, "admin-columns"], [1, "panel", "articles-list-panel"], [1, "panel-heading"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], ["class", "helper-text", 4, "ngIf"], [1, "admin-list"], ["type", "button", "class", "admin-list-item", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "panel", "editor-panel"], [1, "helper-text"], [1, "article-editor-form", 3, "ngSubmit"], [1, "form-grid"], [1, "field"], ["name", "kind", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", "disabled", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "name", "area", "placeholder", "Madurai district", "maxlength", "160", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-section"], ["type", "text", "name", "titleEn", "placeholder", "Enter English headline", "required", "", 3, "ngModelChange", "ngModel"], ["name", "bodyEn", "rows", "7", "placeholder", "Write complete news article in English", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "titleTa", "placeholder", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BA4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1", "required", "", 3, "ngModelChange", "ngModel"], ["name", "bodyTa", "rows", "7", "placeholder", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD", "required", "", 3, "ngModelChange", "ngModel"], ["aria-label", "Newspaper article formatting", 1, "editorial-toolkit", "form-section"], [1, "fa-solid", "fa-newspaper"], [1, "editorial-tool-grid"], [1, "editorial-tool-buttons"], ["type", "button", 1, "btn", "outline", "small", 3, "click"], [1, "editorial-image-upload"], ["for", "editorial-image-position"], ["id", "editorial-image-position", "name", "inlineImageSide", 3, "ngModelChange", "ngModel"], ["value", "left"], ["value", "right"], ["value", "full"], ["for", "editorial-image-file"], ["id", "editorial-image-file", "type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "datetime-local", "name", "publishedAt", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "slug", "placeholder", "generated-from-English-title", 3, "ngModelChange", "ngModel"], ["class", "form-section", 4, "ngIf"], ["type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["class", "helper-text", "role", "status", 4, "ngIf"], ["class", "image-preview", 4, "ngIf"], ["type", "file", "accept", ".mp4,.webm,video/mp4,video/webm", 3, "change", "disabled"], ["class", "audio-preview", 4, "ngIf"], [1, "form-section", "article-story-audio"], [1, "fa-solid", "fa-headphones"], [1, "article-audio-card"], [1, "fa-solid", "fa-volume-high"], ["language", "ta", 3, "workingChange", "uploaded", "disabled", "maxSizeMb"], ["class", "audio-preview", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", "outline", "danger", "article-remove-audio", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"], ["language", "en", 3, "workingChange", "uploaded", "disabled", "maxSizeMb"], [1, "fa-solid", "fa-circle-info"], [1, "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "name", "published", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "featured", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-red", 3, "disabled"], ["type", "button", 1, "btn", 3, "click", "disabled"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["role", "alert", 1, "error-message"], ["role", "status", 1, "success-message"], ["type", "button", 1, "admin-list-item", 3, "click", "disabled"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["loading", "lazy", 3, "src", "alt"], [3, "value", "disabled"], ["type", "text", "name", "verifiedSource", "placeholder", "Official source or verification reference", "maxlength", "500", 3, "ngModelChange", "ngModel", "required"], ["role", "status", 1, "helper-text"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "image-preview"], ["alt", "Uploaded news image preview", "loading", "lazy", 3, "src"], [1, "audio-preview"], ["controls", "", "preload", "metadata", 1, "article-video-preview", 3, "src"], [1, "fa-solid", "fa-circle-check"], ["controls", "", "preload", "metadata", 3, "src"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"]], template: function ArticlesAdminComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 3);
            i0.ɵɵtemplate(1, ArticlesAdminComponent_div_1_Template, 2, 1, "div", 4)(2, ArticlesAdminComponent_div_2_Template, 2, 1, "div", 5);
            i0.ɵɵelementStart(3, "div", 6)(4, "aside", 7)(5, "div", 8)(6, "div")(7, "h2");
            i0.ɵɵtext(8, "Published & Draft Articles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.newArticle()); });
            i0.ɵɵtext(12, " + New Article ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(13, ArticlesAdminComponent_p_13_Template, 2, 0, "p", 10)(14, ArticlesAdminComponent_p_14_Template, 2, 0, "p", 10);
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵtemplate(16, ArticlesAdminComponent_button_16_Template, 14, 13, "button", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "section", 13)(18, "div", 8)(19, "div")(20, "h2");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23, " Create, edit, and publish news articles easily. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "span", 14);
            i0.ɵɵtext(25, " Independent News URL ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "form", 15, 0);
            i0.ɵɵlistener("ngSubmit", function ArticlesAdminComponent_Template_form_ngSubmit_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.save()); });
            i0.ɵɵelementStart(28, "div", 16)(29, "label", 17)(30, "span");
            i0.ɵɵtext(31, "News Section *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "select", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.kind, $event) || (ctx.draft.kind = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(33, "option", 19);
            i0.ɵɵtext(34, " Select News Category ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(35, ArticlesAdminComponent_option_35_Template, 2, 5, "option", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, ArticlesAdminComponent_small_36_Template, 2, 0, "small", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "label", 17)(38, "span");
            i0.ɵɵtext(39, "Location *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.area, $event) || (ctx.draft.area = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "div", 23)(42, "h3");
            i0.ɵɵtext(43, "English News Content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "label", 17)(45, "span");
            i0.ɵɵtext(46, "English Title *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.title.en, $event) || (ctx.draft.title.en = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "label", 17)(49, "span");
            i0.ɵɵtext(50, "English Article *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "textarea", 25);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_textarea_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.body.en, $event) || (ctx.draft.body.en = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "div", 23)(53, "h3");
            i0.ɵɵtext(54, "Tamil News Content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "label", 17)(56, "span");
            i0.ɵɵtext(57, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BA4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "input", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_58_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.title.ta, $event) || (ctx.draft.title.ta = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "label", 17)(60, "span");
            i0.ɵɵtext(61, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "textarea", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_textarea_ngModelChange_62_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.body.ta, $event) || (ctx.draft.body.ta = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "section", 28)(64, "h3");
            i0.ɵɵelement(65, "i", 29);
            i0.ɵɵtext(66, " Newspaper Article Formatting ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "p", 14);
            i0.ɵɵtext(68, " Build long articles with bold subheadings, highlighted words, and photographs beside paragraphs. Content is saved in the existing Tamil and English article fields. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "div", 30)(70, "div")(71, "b");
            i0.ɵɵtext(72, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u00B7 Tamil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 31)(74, "button", 32);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_74_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.insertEditorial("ta", "heading")); });
            i0.ɵɵtext(75, " + Bold subheading ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "button", 32);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.insertEditorial("ta", "bold")); });
            i0.ɵɵtext(77, " ** Bold text ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(78, "div")(79, "b");
            i0.ɵɵtext(80, "English");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 31)(82, "button", 32);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_82_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.insertEditorial("en", "heading")); });
            i0.ɵɵtext(83, " + Bold subheading ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "button", 32);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_84_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.insertEditorial("en", "bold")); });
            i0.ɵɵtext(85, " ** Bold text ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(86, "div", 33)(87, "label", 34);
            i0.ɵɵtext(88, " Photo and paragraph arrangement ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "select", 35);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_select_ngModelChange_89_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.inlineImageSide, $event) || (ctx.inlineImageSide = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(90, "option", 36);
            i0.ɵɵtext(91, " Image on left \u00B7 Text on right ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "option", 37);
            i0.ɵɵtext(93, " Text on left \u00B7 Image on right ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "option", 38);
            i0.ɵɵtext(95, " Full-width image ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "label", 39);
            i0.ɵɵtext(97, " Insert additional photograph into both language articles ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "input", 40);
            i0.ɵɵlistener("change", function ArticlesAdminComponent_Template_input_change_98_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadEditorialImage($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(99, "p", 14);
            i0.ɵɵtext(100, " Start a heading with ");
            i0.ɵɵelementStart(101, "strong");
            i0.ɵɵtext(102, "## Heading");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(103, " on its own line. Use ");
            i0.ɵɵelementStart(104, "strong");
            i0.ɵɵtext(105, "**bold words**");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(106, " inside paragraphs. Keep a blank line between sections. Images stack naturally on mobile. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(107, "div", 23)(108, "h3");
            i0.ɵɵtext(109, "Publication Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div", 16)(111, "label", 17)(112, "span");
            i0.ɵɵtext(113, "Publish Date / Time (local)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "input", 41);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_114_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.dateInput, $event) || (ctx.dateInput = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(115, "label", 17)(116, "span");
            i0.ɵɵtext(117, "URL Slug");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "input", 42);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.slug, $event) || (ctx.draft.slug = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "small");
            i0.ɵɵtext(120, " Leave empty to generate from the English title. ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(121, ArticlesAdminComponent_div_121_Template, 7, 3, "div", 43);
            i0.ɵɵelementStart(122, "div", 23)(123, "h3");
            i0.ɵɵtext(124, "News Media");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "label", 17)(126, "span");
            i0.ɵɵtext(127, "Featured News Image");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "input", 44);
            i0.ɵɵlistener("change", function ArticlesAdminComponent_Template_input_change_128_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadImage($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "small");
            i0.ɵɵtext(130, " JPG, PNG, WebP. Maximum 10 MB. The file uploads automatically when selected. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(131, ArticlesAdminComponent_p_131_Template, 3, 0, "p", 45)(132, ArticlesAdminComponent_div_132_Template, 2, 1, "div", 46);
            i0.ɵɵelementStart(133, "label", 17)(134, "span");
            i0.ɵɵtext(135, "News Video");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "input", 47);
            i0.ɵɵlistener("change", function ArticlesAdminComponent_Template_input_change_136_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadVideo($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(137, "small");
            i0.ɵɵtext(138, " MP4 or WebM. Maximum 60 MB. The file uploads automatically when selected. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(139, ArticlesAdminComponent_p_139_Template, 3, 0, "p", 45)(140, ArticlesAdminComponent_div_140_Template, 4, 1, "div", 48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(141, "div", 49)(142, "h3");
            i0.ɵɵelement(143, "i", 50);
            i0.ɵɵtext(144, " Audio for this Individual Story ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "p", 14);
            i0.ɵɵtext(146, " Add separate Tamil and English audio. Record a new voice or select an existing audio file. Drag-and-drop is also supported. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "div", 16)(148, "div", 51)(149, "h4");
            i0.ɵɵelement(150, "i", 52);
            i0.ɵɵtext(151, " \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B92\u0BB2\u0BBF \u00B7 Tamil Audio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(152, "app-audio-recorder", 53);
            i0.ɵɵlistener("workingChange", function ArticlesAdminComponent_Template_app_audio_recorder_workingChange_152_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadingAudioTa = $event); })("uploaded", function ArticlesAdminComponent_Template_app_audio_recorder_uploaded_152_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setRecordedArticleAudio("ta", $event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(153, ArticlesAdminComponent_p_153_Template, 3, 0, "p", 45)(154, ArticlesAdminComponent_div_154_Template, 8, 1, "div", 54)(155, ArticlesAdminComponent_ng_template_155_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(157, "button", 55);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_157_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.removeAudio("ta")); });
            i0.ɵɵelement(158, "i", 56);
            i0.ɵɵtext(159, " Remove Tamil Audio ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(160, "div", 51)(161, "h4");
            i0.ɵɵelement(162, "i", 52);
            i0.ɵɵtext(163, " English Audio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "app-audio-recorder", 57);
            i0.ɵɵlistener("workingChange", function ArticlesAdminComponent_Template_app_audio_recorder_workingChange_164_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadingAudioEn = $event); })("uploaded", function ArticlesAdminComponent_Template_app_audio_recorder_uploaded_164_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setRecordedArticleAudio("en", $event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(165, ArticlesAdminComponent_p_165_Template, 3, 0, "p", 45)(166, ArticlesAdminComponent_div_166_Template, 8, 1, "div", 54)(167, ArticlesAdminComponent_ng_template_167_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(169, "button", 55);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_169_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.removeAudio("en")); });
            i0.ɵɵelement(170, "i", 56);
            i0.ɵɵtext(171, " Remove English Audio ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(172, "p", 14);
            i0.ɵɵelement(173, "i", 58);
            i0.ɵɵtext(174, " Record or select audio, preview it, and upload it first. The audio reference is saved to this article when you click Save & Publish or Save Draft. Removing assigned audio does not delete the original media file. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(175, "div", 23)(176, "h3");
            i0.ɵɵtext(177, "Publishing Options");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(178, "div", 59)(179, "label", 60)(180, "input", 61);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_180_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.published, $event) || (ctx.draft.published = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(181, "span");
            i0.ɵɵtext(182, "Publish this article");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(183, "label", 60)(184, "input", 62);
            i0.ɵɵtwoWayListener("ngModelChange", function ArticlesAdminComponent_Template_input_ngModelChange_184_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.draft.featured, $event) || (ctx.draft.featured = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(185, "span");
            i0.ɵɵtext(186, "Mark as Featured News");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(187, "p", 14);
            i0.ɵɵtext(188, " Draft articles remain private. Published articles become public after their scheduled publication time. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(189, "div", 63)(190, "button", 64);
            i0.ɵɵtext(191);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(192, "button", 65);
            i0.ɵɵlistener("click", function ArticlesAdminComponent_Template_button_click_192_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.newArticle()); });
            i0.ɵɵtext(193, " Clear / New ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(194, ArticlesAdminComponent_button_194_Template, 2, 1, "button", 66);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            const noTamilAudio_r9 = i0.ɵɵreference(156);
            const noEnglishAudio_r10 = i0.ɵɵreference(168);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.articles.length, " saved articles");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.articles.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.articles);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.editing ? "Edit Story" : "Create Story", " ");
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.kind);
            i0.ɵɵproperty("disabled", ctx.categoryLoading || ctx.saving);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.categoryLoading);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.area);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.title.en);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.body.en);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.title.ta);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.body.ta);
            i0.ɵɵadvance(27);
            i0.ɵɵtwoWayProperty("ngModel", ctx.inlineImageSide);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia);
            i0.ɵɵadvance(16);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dateInput);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.slug);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.selectedCategory == null ? null : ctx.selectedCategory.requiresVerifiedSource);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.uploadingImage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.draft.image);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.uploadingVideo);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.draft.video);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingImage || ctx.uploadingVideo || ctx.uploadingAudioEn)("maxSizeMb", 20);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadingAudioTa);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.audioSource("ta"))("ngIfElse", noTamilAudio_r9);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia || !ctx.audioSource("ta"));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingImage || ctx.uploadingVideo || ctx.uploadingAudioTa)("maxSizeMb", 20);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadingAudioEn);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.audioSource("en"))("ngIfElse", noEnglishAudio_r10);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia || !ctx.audioSource("en"));
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.published);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.featured);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia || ctx.categoryLoading || !(ctx.selectedCategory == null ? null : ctx.selectedCategory.active));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Saving..." : ctx.draft.published ? "Save & Publish" : "Save Draft", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving || ctx.uploadingMedia);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.editing);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MaxLengthValidator, i5.NgModel, i5.NgForm, AudioRecorderComponent, i4.DatePipe], styles: ["\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  color: #f3f5fb;\n}\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n\n\n\n.admin-articles[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 18px 0 40px;\n  color: #f3f5fb;\n}\n\n\n\n\n.admin-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(290px, 0.85fr)\n    minmax(0, 1.75fr);\n  align-items: start;\n  gap: 18px;\n  width: 100%;\n}\n\n\n\n\n.admin-columns[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid #394354;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #202633 0%,\n      #161d2a 100%\n    );\n  box-shadow:\n    0 12px 35px rgba(0, 0, 0, 0.12);\n}\n\n\n\n\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  padding-left: 12px;\n  border-left: 4px solid #ef2348;\n  font-size: clamp(19px, 1.6vw, 24px);\n  font-weight: 800;\n  line-height: 1.3;\n  color: #f8fafc;\n}\n\n.panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #aeb9c9;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n\n\n\n\n\n.articles-list-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n\n.articles-list-panel[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.admin-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n\n\n\n\n.admin-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 10px;\n  border: 1px solid #354154;\n  border-radius: 12px;\n  background: #121b29;\n  color: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.admin-list-item[_ngcontent-%COMP%]:hover {\n  background: #202b3b;\n  border-color: #ee334f;\n  transform: translateY(-1px);\n}\n\n.admin-list-item.selected[_ngcontent-%COMP%] {\n  background: #3d1725;\n  border-color: #ee334f;\n}\n\n.admin-list-item[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n\n\n\n.admin-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 88px;\n  height: 78px;\n  flex-shrink: 0;\n  object-fit: cover;\n  border-radius: 8px;\n  background: #293244;\n}\n\n\n\n\n.admin-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.admin-list-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #fff;\n}\n\n.admin-list-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 1.5;\n  color: #b9c4d5;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n.admin-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.admin-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #101725;\n  border-radius: 8px;\n}\n\n.admin-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #647083;\n  border-radius: 8px;\n}\n\n\n\n\n\n\n.editor-panel[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 0;\n}\n\n.article-editor-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 100%;\n}\n\n\n\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  width: 100%;\n  align-items: start;\n}\n\n\n\n\n.form-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  min-width: 0;\n  padding-top: 22px;\n  border-top: 1px solid #343f50;\n}\n\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #f8fafc;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.4;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 9px;\n  width: 100%;\n  min-width: 0;\n  margin: 0;\n  color: #e5eaf3;\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.5;\n}\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"url\"][_ngcontent-%COMP%], \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[type=\"datetime-local\"][_ngcontent-%COMP%], \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  min-height: 46px;\n  margin: 0;\n  padding: 12px 14px;\n  border: 1px solid #3a4659;\n  border-radius: 9px;\n  background: #0c1422;\n  color: #f8fafc;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.5;\n  outline: none;\n  box-shadow: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.article-editor-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #7e8a9c;\n  opacity: 1;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #ef334f;\n  background: #111b2b;\n  box-shadow:\n    0 0 0 3px rgba(239, 51, 79, 0.12);\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, \n.article-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled, \n.article-editor-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.article-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #101827;\n  color: #fff;\n  padding: 10px;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 170px;\n  resize: vertical;\n  overflow-wrap: break-word;\n}\n\n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[name=\"bodyTa\"][_ngcontent-%COMP%], \n.article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[name=\"bodyEn\"][_ngcontent-%COMP%] {\n  min-height: 190px;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   input[type=\"datetime-local\"][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n\n\n\n\n.article-editor-form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.helper-text[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  color: #9eabba;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.65;\n}\n\n\n\n\n\n\n.image-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  overflow: hidden;\n  border: 1px solid #384354;\n  border-radius: 12px;\n  background: #0c1422;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 280px;\n  object-fit: contain;\n}\n\n\n\n\n\n\n.audio-preview[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #354154;\n  border-radius: 12px;\n  background: #101827;\n}\n\n.audio-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 13px;\n  font-weight: 650;\n  color: #e9edf5;\n}\n\n.audio-preview[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 500px;\n}\n\n\n\n\n\n\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.article-editor-form[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 15px;\n  border: 1px solid #354154;\n  border-radius: 10px;\n  background: #101827;\n  color: #e5ebf5;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.article-editor-form[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  margin: 0;\n  accent-color: #e11d48;\n  cursor: pointer;\n}\n\n\n\n\n\n\n.admin-articles[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 43px;\n  padding: 11px 17px;\n  border: 1px solid #3c4658;\n  border-radius: 10px;\n  background: #293244;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 750;\n  line-height: 1.4;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #39465d;\n  transform: translateY(-1px);\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn-red[_ngcontent-%COMP%] {\n  background: linear-gradient(\n    135deg,\n    #ed173d,\n    #b90f2b\n  );\n  border-color: #f13a57;\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn-red[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d61235;\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: #451c29;\n  border-color: #96364c;\n  color: #ffccd4;\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #702437;\n}\n\n.admin-articles[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 22px;\n  border-top: 1px solid #343f50;\n}\n\n\n\n\n\n\n.error-message[_ngcontent-%COMP%], \n.success-message[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  padding: 14px 17px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.6;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  border: 1px solid #874052;\n  background: #3b1b29;\n  color: #ffb9c7;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  border: 1px solid #28775b;\n  background: #123b2e;\n  color: #b6f5d7;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.editorial-toolkit[_ngcontent-%COMP%]{display:grid;gap:13px;background:linear-gradient(130deg,#0b528b,#063865);border:1px solid #6eadd780;border-radius:12px;padding:17px}\n.editorial-toolkit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#f7fbff}\n.editorial-toolkit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fa2544;margin-right:8px}\n.editorial-toolkit[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%]{color:#bdd9ee;line-height:1.7;margin:0}\n.editorial-tool-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.editorial-tool-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:12px;background:#053769;border:1px solid #82b8e055;border-radius:9px;min-width:0}\n.editorial-tool-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;margin-bottom:9px;color:#fff}\n.editorial-tool-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}\n.editorial-image-upload[_ngcontent-%COMP%]{display:grid;gap:8px;background:#053769;border:1px solid #82b8e055;border-radius:9px;padding:12px}\n.editorial-image-upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:750;font-size:.79rem;color:#deefff}\n.editorial-image-upload[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .editorial-image-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{max-width:100%;min-width:0}\n\n.article-record-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:7px;margin:8px 0}\n.article-record-preview[_ngcontent-%COMP%]{display:grid;gap:8px;padding:10px;border:1px solid #78acd27c;background:#053b6d;border-radius:9px}\n.article-record-preview[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{width:100%;max-width:100%}\n.article-record-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.67rem;color:#c3def1;line-height:1.6}", "\n\n@media (max-width: 1180px) {\n\n  .admin-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .articles-list-panel[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .admin-list[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n\n}@media (max-width: 700px) {\n\n  .admin-articles[_ngcontent-%COMP%] {\n    padding: 8px 0 30px;\n  }\n\n  .admin-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n\n  .admin-columns[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    padding: 17px;\n    border-radius: 13px;\n  }\n\n  .panel-heading[_ngcontent-%COMP%] {\n    gap: 12px;\n    margin-bottom: 18px;\n  }\n\n  .panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .article-editor-form[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n\n  .form-section[_ngcontent-%COMP%] {\n    padding-top: 19px;\n  }\n\n  .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    min-height: 150px;\n  }\n\n  .checkbox-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .admin-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75px;\n    height: 68px;\n  }\n\n}@media (max-width: 420px) {\n\n  .admin-columns[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    padding: 13px;\n  }\n\n  .panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .article-editor-form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n}@media(max-width:650px){.editorial-tool-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.editorial-toolkit[_ngcontent-%COMP%]{padding:12px}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArticlesAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-articles', standalone: true, imports: [
                    CommonModule,
                    FormsModule, AudioRecorderComponent
                ], template: "\n<section class=\"admin-articles\">\n\n  <!-- STATUS MESSAGES -->\n  <div *ngIf=\"error\" class=\"error-message\" role=\"alert\">\n    {{ error }}\n  </div>\n\n  <div *ngIf=\"message\" class=\"success-message\" role=\"status\">\n    {{ message }}\n  </div>\n\n  <div class=\"admin-columns\">\n\n    <!-- ======================================\n         LEFT SIDE \u2014 SAVED ARTICLES\n    ======================================= -->\n\n    <aside class=\"panel articles-list-panel\">\n\n      <div class=\"panel-heading\">\n        <div>\n          <h2>Published & Draft Articles</h2>\n          <p>{{ articles.length }} saved articles</p>\n        </div>\n\n        <button\n          type=\"button\"\n          class=\"btn btn-red\"\n          (click)=\"newArticle()\"\n          [disabled]=\"saving || uploadingMedia\"\n        >\n          + New Article\n        </button>\n      </div>\n\n      <p *ngIf=\"loading\" class=\"helper-text\">\n        Loading news articles...\n      </p>\n\n      <p\n        *ngIf=\"!loading && articles.length === 0\"\n        class=\"helper-text\"\n      >\n        No articles found. Create your first news article.\n      </p>\n\n      <div class=\"admin-list\">\n\n        <button\n          type=\"button\"\n          class=\"admin-list-item\"\n          *ngFor=\"let article of articles\"\n          [class.selected]=\"editing && draft.id === article.id\"\n          [disabled]=\"saving || uploadingMedia\"\n          (click)=\"edit(article)\"\n        >\n\n          <img\n            *ngIf=\"article.image\"\n            [src]=\"media.url(article.image)\"\n            [alt]=\"article.title.en || 'News article'\"\n            loading=\"lazy\"\n          />\n\n          <span>\n            <b>\n              {{ article.title.en || article.title.ta }}\n            </b>\n\n            <small>\n              <ng-container *ngFor=\"let category of categories\">\n                <ng-container *ngIf=\"category.slug === article.kind\">\n                  {{ category.name.en }}\n                </ng-container>\n              </ng-container>\n\n              \u00B7 {{ article.published ? 'Published' : 'Draft' }}\n            </small>\n\n            <small>{{ article.area }}</small>\n\n            <small>\n              {{ article.publishedAt | date:'dd MMM yyyy' }}\n\n              <ng-container *ngIf=\"article.featured\">\n                \u00B7 Featured\n              </ng-container>\n            </small>\n          </span>\n\n        </button>\n\n      </div>\n    </aside>\n\n    <!-- ======================================\n         RIGHT SIDE \u2014 NEWS EDITOR\n    ======================================= -->\n\n    <section class=\"panel editor-panel\">\n\n      <div class=\"panel-heading\">\n\n        <div>\n          <h2>\n            {{ editing ? 'Edit Story' : 'Create Story' }}\n          </h2>\n\n          <p>\n            Create, edit, and publish news articles easily.\n          </p>\n        </div>\n\n        <span class=\"helper-text\">\n          Independent News URL\n        </span>\n\n      </div>\n\n      <form\n        #articleForm=\"ngForm\"\n        (ngSubmit)=\"save()\"\n        class=\"article-editor-form\"\n      >\n\n        <!-- ======================================\n             NEWS CATEGORY AND LOCATION\n        ======================================= -->\n\n        <div class=\"form-grid\">\n\n          <label class=\"field\">\n\n            <span>News Section *</span>\n\n            <select\n              name=\"kind\"\n              [(ngModel)]=\"draft.kind\"\n              [disabled]=\"categoryLoading || saving\"\n              required\n            >\n              <option value=\"\" disabled>\n                Select News Category\n              </option>\n\n              <option\n                *ngFor=\"let category of categories\"\n                [value]=\"category.slug\"\n                [disabled]=\"!category.active\"\n              >\n                {{ category.name.ta }} /\n                {{ category.name.en }}\n                {{ category.active ? '' : '(Disabled)' }}\n              </option>\n            </select>\n\n            <small *ngIf=\"categoryLoading\">\n              Loading categories...\n            </small>\n\n          </label>\n\n          <label class=\"field\">\n\n            <span>Location *</span>\n\n            <input\n              type=\"text\"\n              name=\"area\"\n              [(ngModel)]=\"draft.area\"\n              placeholder=\"Madurai district\"\n              maxlength=\"160\"\n              required\n            />\n\n          </label>\n\n        </div>\n\n        <!-- ======================================\n             ENGLISH NEWS CONTENT\n        ======================================= -->\n\n        <div class=\"form-section\">\n\n          <h3>English News Content</h3>\n\n          <label class=\"field\">\n            <span>English Title *</span>\n\n            <input\n              type=\"text\"\n              name=\"titleEn\"\n              [(ngModel)]=\"draft.title.en\"\n              placeholder=\"Enter English headline\"\n              required\n            />\n          </label>\n\n          <label class=\"field\">\n            <span>English Article *</span>\n\n            <textarea\n              name=\"bodyEn\"\n              [(ngModel)]=\"draft.body.en\"\n              rows=\"7\"\n              placeholder=\"Write complete news article in English\"\n              required\n            ></textarea>\n          </label>\n\n        </div>\n\n        <!-- ======================================\n             TAMIL NEWS CONTENT\n        ======================================= -->\n\n        <div class=\"form-section\">\n\n          <h3>Tamil News Content</h3>\n\n          <label class=\"field\">\n            <span>\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BA4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 *</span>\n\n            <input\n              type=\"text\"\n              name=\"titleTa\"\n              [(ngModel)]=\"draft.title.ta\"\n              placeholder=\"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BA4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\"\n              required\n            />\n          </label>\n\n          <label class=\"field\">\n            <span>\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD *</span>\n\n            <textarea\n              name=\"bodyTa\"\n              [(ngModel)]=\"draft.body.ta\"\n              rows=\"7\"\n              placeholder=\"\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD\"\n              required\n            ></textarea>\n          </label>\n\n        </div>\n\n        <!-- ======================================\n             NEWSPAPER ARTICLE FORMATTING\n        ======================================= -->\n\n        <section\n          class=\"editorial-toolkit form-section\"\n          aria-label=\"Newspaper article formatting\"\n        >\n\n          <h3>\n            <i class=\"fa-solid fa-newspaper\"></i>\n            Newspaper Article Formatting\n          </h3>\n\n          <p class=\"helper-text\">\n            Build long articles with bold subheadings,\n            highlighted words, and photographs beside\n            paragraphs. Content is saved in the existing\n            Tamil and English article fields.\n          </p>\n\n          <div class=\"editorial-tool-grid\">\n\n            <div>\n              <b>\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u00B7 Tamil</b>\n\n              <div class=\"editorial-tool-buttons\">\n\n                <button\n                  type=\"button\"\n                  class=\"btn outline small\"\n                  (click)=\"insertEditorial('ta', 'heading')\"\n                >\n                  + Bold subheading\n                </button>\n\n                <button\n                  type=\"button\"\n                  class=\"btn outline small\"\n                  (click)=\"insertEditorial('ta', 'bold')\"\n                >\n                  ** Bold text\n                </button>\n\n              </div>\n            </div>\n\n            <div>\n              <b>English</b>\n\n              <div class=\"editorial-tool-buttons\">\n\n                <button\n                  type=\"button\"\n                  class=\"btn outline small\"\n                  (click)=\"insertEditorial('en', 'heading')\"\n                >\n                  + Bold subheading\n                </button>\n\n                <button\n                  type=\"button\"\n                  class=\"btn outline small\"\n                  (click)=\"insertEditorial('en', 'bold')\"\n                >\n                  ** Bold text\n                </button>\n\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"editorial-image-upload\">\n\n            <label for=\"editorial-image-position\">\n              Photo and paragraph arrangement\n            </label>\n\n            <select\n              id=\"editorial-image-position\"\n              name=\"inlineImageSide\"\n              [(ngModel)]=\"inlineImageSide\"\n            >\n              <option value=\"left\">\n                Image on left \u00B7 Text on right\n              </option>\n\n              <option value=\"right\">\n                Text on left \u00B7 Image on right\n              </option>\n\n              <option value=\"full\">\n                Full-width image\n              </option>\n            </select>\n\n            <label for=\"editorial-image-file\">\n              Insert additional photograph into both language articles\n            </label>\n\n            <input\n              id=\"editorial-image-file\"\n              type=\"file\"\n              accept=\".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp\"\n              (change)=\"uploadEditorialImage($event)\"\n              [disabled]=\"saving || uploadingMedia\"\n            />\n\n          </div>\n\n          <p class=\"helper-text\">\n            Start a heading with\n            <strong>## Heading</strong>\n            on its own line. Use\n            <strong>**bold words**</strong>\n            inside paragraphs. Keep a blank line between\n            sections. Images stack naturally on mobile.\n          </p>\n\n        </section>\n\n        <!-- ======================================\n             PUBLICATION DETAILS\n        ======================================= -->\n\n        <div class=\"form-section\">\n\n          <h3>Publication Details</h3>\n\n          <div class=\"form-grid\">\n\n            <label class=\"field\">\n\n              <span>Publish Date / Time (local)</span>\n\n              <input\n                type=\"datetime-local\"\n                name=\"publishedAt\"\n                [(ngModel)]=\"dateInput\"\n                required\n              />\n\n            </label>\n\n            <label class=\"field\">\n\n              <span>URL Slug</span>\n\n              <input\n                type=\"text\"\n                name=\"slug\"\n                [(ngModel)]=\"draft.slug\"\n                placeholder=\"generated-from-English-title\"\n              />\n\n              <small>\n                Leave empty to generate from the English title.\n              </small>\n\n            </label>\n\n          </div>\n        </div>\n\n        <!-- ======================================\n             NEWS VERIFICATION\n        ======================================= -->\n\n        <div\n          class=\"form-section\"\n          *ngIf=\"selectedCategory?.requiresVerifiedSource\"\n        >\n\n          <h3>News Verification</h3>\n\n          <label class=\"field\">\n\n            <span>\n              Verified News Source\n              {{ draft.published ? '*' : '' }}\n            </span>\n\n            <input\n              type=\"text\"\n              name=\"verifiedSource\"\n              [(ngModel)]=\"verifiedSource\"\n              placeholder=\"Official source or verification reference\"\n              maxlength=\"500\"\n              [required]=\"draft.published\"\n            />\n\n          </label>\n\n        </div>\n\n        <!-- ======================================\n             NEWS MEDIA\n        ======================================= -->\n\n        <div class=\"form-section\">\n\n          <h3>News Media</h3>\n\n          <!-- FEATURED IMAGE -->\n\n          <label class=\"field\">\n\n            <span>Featured News Image</span>\n\n            <input\n              type=\"file\"\n              accept=\".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp\"\n              (change)=\"uploadImage($event)\"\n              [disabled]=\"saving || uploadingMedia\"\n            />\n\n            <small>\n              JPG, PNG, WebP. Maximum 10 MB.\n              The file uploads automatically when selected.\n            </small>\n\n          </label>\n\n          <p\n            *ngIf=\"uploadingImage\"\n            class=\"helper-text\"\n            role=\"status\"\n          >\n            <i class=\"fa-solid fa-spinner fa-spin\"></i>\n            Uploading image... Please wait.\n          </p>\n\n          <div\n            class=\"image-preview\"\n            *ngIf=\"draft.image\"\n          >\n            <img\n              [src]=\"media.url(draft.image)\"\n              alt=\"Uploaded news image preview\"\n              loading=\"lazy\"\n            />\n          </div>\n\n          <!-- NEWS VIDEO -->\n\n          <label class=\"field\">\n\n            <span>News Video</span>\n\n            <input\n              type=\"file\"\n              accept=\".mp4,.webm,video/mp4,video/webm\"\n              (change)=\"uploadVideo($event)\"\n              [disabled]=\"saving || uploadingMedia\"\n            />\n\n            <small>\n              MP4 or WebM. Maximum 60 MB.\n              The file uploads automatically when selected.\n            </small>\n\n          </label>\n\n          <p\n            *ngIf=\"uploadingVideo\"\n            class=\"helper-text\"\n            role=\"status\"\n          >\n            <i class=\"fa-solid fa-spinner fa-spin\"></i>\n            Uploading video... Please wait.\n          </p>\n\n          <div\n            class=\"audio-preview\"\n            *ngIf=\"draft.video\"\n          >\n\n            <p>Uploaded Video Preview</p>\n\n            <video\n              class=\"article-video-preview\"\n              controls\n              preload=\"metadata\"\n              [src]=\"media.url(draft.video)\"\n            ></video>\n\n          </div>\n\n        </div>\n\n        <!-- ======================================\n             INDIVIDUAL NEWS AUDIO\n        ======================================= -->\n\n        <div class=\"form-section article-story-audio\">\n\n          <h3>\n            <i class=\"fa-solid fa-headphones\"></i>\n            Audio for this Individual Story\n          </h3>\n\n          <p class=\"helper-text\">\n            Add separate Tamil and English audio.\n            Record a new voice or select an existing\n            audio file. Drag-and-drop is also supported.\n          </p>\n\n          <div class=\"form-grid\">\n\n            <!-- ==============================\n                 TAMIL AUDIO\n            =============================== -->\n\n            <div class=\"article-audio-card\">\n\n              <h4>\n                <i class=\"fa-solid fa-volume-high\"></i>\n                \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B92\u0BB2\u0BBF \u00B7 Tamil Audio\n              </h4>\n\n              <app-audio-recorder\n                language=\"ta\"\n                [disabled]=\"\n                  saving ||\n                  uploadingImage ||\n                  uploadingVideo ||\n                  uploadingAudioEn\n                \"\n                [maxSizeMb]=\"20\"\n                (workingChange)=\"uploadingAudioTa = $event\"\n                (uploaded)=\"setRecordedArticleAudio('ta', $event)\"\n              >\n              </app-audio-recorder>\n\n              <!-- TAMIL UPLOAD STATUS -->\n\n              <p\n                *ngIf=\"uploadingAudioTa\"\n                class=\"helper-text\"\n                role=\"status\"\n              >\n                <i class=\"fa-solid fa-spinner fa-spin\"></i>\n                Processing / Uploading Tamil audio...\n              </p>\n\n              <!-- TAMIL AUDIO PREVIEW -->\n\n              <div\n                class=\"audio-preview\"\n                *ngIf=\"audioSource('ta'); else noTamilAudio\"\n              >\n\n                <p>\n                  <i class=\"fa-solid fa-circle-check\"></i>\n                  Tamil Audio Assigned\n                </p>\n\n                <audio\n                  controls\n                  preload=\"metadata\"\n                  [src]=\"media.url(audioSource('ta'))\"\n                >\n                  Your browser does not support audio playback.\n                </audio>\n\n                <p class=\"helper-text\">\n                  Tamil audio has been uploaded and\n                  assigned to this article form.\n                  Click Save & Publish or Save Draft\n                  to save the assignment.\n                </p>\n\n              </div>\n\n              <ng-template #noTamilAudio>\n\n                <p class=\"helper-text\">\n                  No Tamil audio assigned to this article.\n                </p>\n\n              </ng-template>\n\n              <!-- REMOVE TAMIL AUDIO -->\n\n              <button\n                type=\"button\"\n                class=\"btn outline danger article-remove-audio\"\n                (click)=\"removeAudio('ta')\"\n                [disabled]=\"\n                  saving ||\n                  uploadingMedia ||\n                  !audioSource('ta')\n                \"\n              >\n                <i class=\"fa-solid fa-trash\"></i>\n                Remove Tamil Audio\n              </button>\n\n            </div>\n\n            <!-- ==============================\n                 ENGLISH AUDIO\n            =============================== -->\n\n            <div class=\"article-audio-card\">\n\n              <h4>\n                <i class=\"fa-solid fa-volume-high\"></i>\n                English Audio\n              </h4>\n\n              <app-audio-recorder\n                language=\"en\"\n                [disabled]=\"\n                  saving ||\n                  uploadingImage ||\n                  uploadingVideo ||\n                  uploadingAudioTa\n                \"\n                [maxSizeMb]=\"20\"\n                (workingChange)=\"uploadingAudioEn = $event\"\n                (uploaded)=\"setRecordedArticleAudio('en', $event)\"\n              >\n              </app-audio-recorder>\n\n              <!-- ENGLISH UPLOAD STATUS -->\n\n              <p\n                *ngIf=\"uploadingAudioEn\"\n                class=\"helper-text\"\n                role=\"status\"\n              >\n                <i class=\"fa-solid fa-spinner fa-spin\"></i>\n                Processing / Uploading English audio...\n              </p>\n\n              <!-- ENGLISH AUDIO PREVIEW -->\n\n              <div\n                class=\"audio-preview\"\n                *ngIf=\"audioSource('en'); else noEnglishAudio\"\n              >\n\n                <p>\n                  <i class=\"fa-solid fa-circle-check\"></i>\n                  English Audio Assigned\n                </p>\n\n                <audio\n                  controls\n                  preload=\"metadata\"\n                  [src]=\"media.url(audioSource('en'))\"\n                >\n                  Your browser does not support audio playback.\n                </audio>\n\n                <p class=\"helper-text\">\n                  English audio has been uploaded and\n                  assigned to this article form.\n                  Click Save & Publish or Save Draft\n                  to save the assignment.\n                </p>\n\n              </div>\n\n              <ng-template #noEnglishAudio>\n\n                <p class=\"helper-text\">\n                  No English audio assigned to this article.\n                </p>\n\n              </ng-template>\n\n              <!-- REMOVE ENGLISH AUDIO -->\n\n              <button\n                type=\"button\"\n                class=\"btn outline danger article-remove-audio\"\n                (click)=\"removeAudio('en')\"\n                [disabled]=\"\n                  saving ||\n                  uploadingMedia ||\n                  !audioSource('en')\n                \"\n              >\n                <i class=\"fa-solid fa-trash\"></i>\n                Remove English Audio\n              </button>\n\n            </div>\n\n          </div>\n\n          <p class=\"helper-text\">\n            <i class=\"fa-solid fa-circle-info\"></i>\n\n            Record or select audio, preview it, and\n            upload it first.\n\n            The audio reference is saved to this\n            article when you click Save & Publish\n            or Save Draft.\n\n            Removing assigned audio does not\n            delete the original media file.\n          </p>\n\n        </div>\n\n        <!-- ======================================\n             PUBLISHING OPTIONS\n        ======================================= -->\n\n        <div class=\"form-section\">\n\n          <h3>Publishing Options</h3>\n\n          <div class=\"checkbox-group\">\n\n            <label class=\"checkbox-label\">\n\n              <input\n                type=\"checkbox\"\n                name=\"published\"\n                [(ngModel)]=\"draft.published\"\n              />\n\n              <span>Publish this article</span>\n\n            </label>\n\n            <label class=\"checkbox-label\">\n\n              <input\n                type=\"checkbox\"\n                name=\"featured\"\n                [(ngModel)]=\"draft.featured\"\n              />\n\n              <span>Mark as Featured News</span>\n\n            </label>\n\n          </div>\n\n          <p class=\"helper-text\">\n            Draft articles remain private.\n            Published articles become public after\n            their scheduled publication time.\n          </p>\n\n        </div>\n\n        <!-- ======================================\n             SAVE / CLEAR / DELETE\n        ======================================= -->\n\n        <div class=\"form-actions\">\n\n          <button\n            type=\"submit\"\n            class=\"btn btn-red\"\n            [disabled]=\"\n              saving ||\n              uploadingMedia ||\n              categoryLoading ||\n              !selectedCategory?.active\n            \"\n          >\n            {{\n              saving\n                ? 'Saving...'\n                : (\n                    draft.published\n                      ? 'Save & Publish'\n                      : 'Save Draft'\n                  )\n            }}\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"btn\"\n            (click)=\"newArticle()\"\n            [disabled]=\"saving || uploadingMedia\"\n          >\n            Clear / New\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            *ngIf=\"editing\"\n            (click)=\"remove()\"\n            [disabled]=\"saving || uploadingMedia\"\n          >\n            Delete Article\n          </button>\n\n        </div>\n\n      </form>\n\n    </section>\n\n  </div>\n\n</section>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI\n   ADMIN NEWS MANAGEMENT\n   PREMIUM DARK THEME\n========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  color: #f3f5fb;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* MAIN PAGE */\n\n.admin-articles {\n  width: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 18px 0 40px;\n  color: #f3f5fb;\n}\n\n/* MAIN TWO-COLUMN LAYOUT */\n\n.admin-columns {\n  display: grid;\n  grid-template-columns:\n    minmax(290px, 0.85fr)\n    minmax(0, 1.75fr);\n  align-items: start;\n  gap: 18px;\n  width: 100%;\n}\n\n/* COMMON PANEL */\n\n.admin-columns .panel {\n  width: 100%;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid #394354;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #202633 0%,\n      #161d2a 100%\n    );\n  box-shadow:\n    0 12px 35px rgba(0, 0, 0, 0.12);\n}\n\n/* PANEL HEADING */\n\n.panel-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n\n.panel-heading h2 {\n  margin: 0 0 8px;\n  padding-left: 12px;\n  border-left: 4px solid #ef2348;\n  font-size: clamp(19px, 1.6vw, 24px);\n  font-weight: 800;\n  line-height: 1.3;\n  color: #f8fafc;\n}\n\n.panel-heading p {\n  margin: 6px 0 0;\n  color: #aeb9c9;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n/* ==========================================\n   LEFT SIDE - ARTICLES\n========================================== */\n\n.articles-list-panel {\n  position: sticky;\n  top: 20px;\n}\n\n.articles-list-panel .panel-heading {\n  align-items: center;\n}\n\n.admin-list {\n  display: grid;\n  gap: 10px;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n\n/* ARTICLE ITEM */\n\n.admin-list-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 10px;\n  border: 1px solid #354154;\n  border-radius: 12px;\n  background: #121b29;\n  color: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.admin-list-item:hover {\n  background: #202b3b;\n  border-color: #ee334f;\n  transform: translateY(-1px);\n}\n\n.admin-list-item.selected {\n  background: #3d1725;\n  border-color: #ee334f;\n}\n\n.admin-list-item:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n/* ARTICLE IMAGE */\n\n.admin-list-item img {\n  display: block;\n  width: 88px;\n  height: 78px;\n  flex-shrink: 0;\n  object-fit: cover;\n  border-radius: 8px;\n  background: #293244;\n}\n\n/* ARTICLE TEXT */\n\n.admin-list-item span {\n  flex: 1;\n  min-width: 0;\n}\n\n.admin-list-item b {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #fff;\n}\n\n.admin-list-item small {\n  display: block;\n  margin-top: 5px;\n  font-size: 11px;\n  line-height: 1.5;\n  color: #b9c4d5;\n  overflow-wrap: anywhere;\n}\n\n/* SCROLLBAR */\n\n.admin-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.admin-list::-webkit-scrollbar-track {\n  background: #101725;\n  border-radius: 8px;\n}\n\n.admin-list::-webkit-scrollbar-thumb {\n  background: #647083;\n  border-radius: 8px;\n}\n\n/* ==========================================\n   RIGHT SIDE - EDITOR\n========================================== */\n\n.editor-panel {\n  max-width: 100%;\n  min-width: 0;\n}\n\n.article-editor-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 100%;\n}\n\n/* FIELD GRID */\n\n.form-grid {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  width: 100%;\n  align-items: start;\n}\n\n/* FORM SECTION */\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  min-width: 0;\n  padding-top: 22px;\n  border-top: 1px solid #343f50;\n}\n\n.form-section h3 {\n  margin: 0 0 4px;\n  color: #f8fafc;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.4;\n}\n\n/* FIELD LABEL */\n\n.article-editor-form .field {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 9px;\n  width: 100%;\n  min-width: 0;\n  margin: 0;\n  color: #e5eaf3;\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.5;\n}\n\n.article-editor-form .field > span {\n  display: block;\n}\n\n/* TEXT INPUTS, SELECTS & TEXTAREAS */\n\n.article-editor-form .field input[type=\"text\"],\n.article-editor-form .field input[type=\"url\"],\n.article-editor-form .field input[type=\"datetime-local\"],\n.article-editor-form .field select,\n.article-editor-form .field textarea {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  min-height: 46px;\n  margin: 0;\n  padding: 12px 14px;\n  border: 1px solid #3a4659;\n  border-radius: 9px;\n  background: #0c1422;\n  color: #f8fafc;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.5;\n  outline: none;\n  box-shadow: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n/* INPUT PLACEHOLDERS */\n\n.article-editor-form input::placeholder,\n.article-editor-form textarea::placeholder {\n  color: #7e8a9c;\n  opacity: 1;\n}\n\n/* INPUT FOCUS */\n\n.article-editor-form .field input:focus,\n.article-editor-form .field select:focus,\n.article-editor-form .field textarea:focus {\n  border-color: #ef334f;\n  background: #111b2b;\n  box-shadow:\n    0 0 0 3px rgba(239, 51, 79, 0.12);\n}\n\n/* DISABLED INPUTS */\n\n.article-editor-form input:disabled,\n.article-editor-form select:disabled,\n.article-editor-form textarea:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n/* SELECT DROPDOWN */\n\n.article-editor-form select {\n  cursor: pointer;\n}\n\n.article-editor-form select option {\n  background: #101827;\n  color: #fff;\n  padding: 10px;\n}\n\n/* TEXTAREA */\n\n.article-editor-form .field textarea {\n  min-height: 170px;\n  resize: vertical;\n  overflow-wrap: break-word;\n}\n\n.article-editor-form .field textarea[name=\"bodyTa\"],\n.article-editor-form .field textarea[name=\"bodyEn\"] {\n  min-height: 190px;\n}\n\n/* DATETIME INPUT */\n\n.article-editor-form input[type=\"datetime-local\"] {\n  color-scheme: dark;\n}\n\n/* SMALL TEXT */\n\n.article-editor-form small,\n.helper-text {\n  display: block;\n  margin: 0;\n  color: #9eabba;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.65;\n}\n\n/* ==========================================\n   PHOTO PREVIEW\n========================================== */\n\n.image-preview {\n  width: 100%;\n  max-width: 440px;\n  overflow: hidden;\n  border: 1px solid #384354;\n  border-radius: 12px;\n  background: #0c1422;\n}\n\n.image-preview img {\n  display: block;\n  width: 100%;\n  max-height: 280px;\n  object-fit: contain;\n}\n\n/* ==========================================\n   AUDIO PREVIEW\n========================================== */\n\n.audio-preview {\n  padding: 15px;\n  border: 1px solid #354154;\n  border-radius: 12px;\n  background: #101827;\n}\n\n.audio-preview p {\n  margin: 0 0 10px;\n  font-size: 13px;\n  font-weight: 650;\n  color: #e9edf5;\n}\n\n.audio-preview audio {\n  display: block;\n  width: 100%;\n  max-width: 500px;\n}\n\n/* ==========================================\n   PUBLISHING OPTIONS\n========================================== */\n\n.checkbox-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.article-editor-form .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 15px;\n  border: 1px solid #354154;\n  border-radius: 10px;\n  background: #101827;\n  color: #e5ebf5;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.article-editor-form .checkbox-label input {\n  width: 17px;\n  height: 17px;\n  margin: 0;\n  accent-color: #e11d48;\n  cursor: pointer;\n}\n\n/* ==========================================\n   BUTTONS\n========================================== */\n\n.admin-articles .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 43px;\n  padding: 11px 17px;\n  border: 1px solid #3c4658;\n  border-radius: 10px;\n  background: #293244;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 750;\n  line-height: 1.4;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n.admin-articles .btn:hover:not(:disabled) {\n  background: #39465d;\n  transform: translateY(-1px);\n}\n\n.admin-articles .btn-red {\n  background: linear-gradient(\n    135deg,\n    #ed173d,\n    #b90f2b\n  );\n  border-color: #f13a57;\n}\n\n.admin-articles .btn-red:hover:not(:disabled) {\n  background: #d61235;\n}\n\n.admin-articles .btn-danger {\n  background: #451c29;\n  border-color: #96364c;\n  color: #ffccd4;\n}\n\n.admin-articles .btn-danger:hover:not(:disabled) {\n  background: #702437;\n}\n\n.admin-articles .btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* EDITOR ACTION BUTTONS */\n\n.form-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 22px;\n  border-top: 1px solid #343f50;\n}\n\n/* ==========================================\n   SUCCESS AND ERROR MESSAGES\n========================================== */\n\n.error-message,\n.success-message {\n  margin-bottom: 18px;\n  padding: 14px 17px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.6;\n}\n\n.error-message {\n  border: 1px solid #874052;\n  background: #3b1b29;\n  color: #ffb9c7;\n}\n\n.success-message {\n  border: 1px solid #28775b;\n  background: #123b2e;\n  color: #b6f5d7;\n}\n\n/* ==========================================\n   TABLET RESPONSIVE\n========================================== */\n\n\n\n/* ==========================================\n   MOBILE RESPONSIVE\n========================================== */\n\n\n\n/* ==========================================\n   SMALL MOBILE\n========================================== */\n\n\n\n/* Bilingual newspaper story composer */\n.editorial-toolkit{display:grid;gap:13px;background:linear-gradient(130deg,#0b528b,#063865);border:1px solid #6eadd780;border-radius:12px;padding:17px}\n.editorial-toolkit h3{margin:0;color:#f7fbff}\n.editorial-toolkit h3 i{color:#fa2544;margin-right:8px}\n.editorial-toolkit .helper-text{color:#bdd9ee;line-height:1.7;margin:0}\n.editorial-tool-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}\n.editorial-tool-grid>div{padding:12px;background:#053769;border:1px solid #82b8e055;border-radius:9px;min-width:0}\n.editorial-tool-grid b{display:block;margin-bottom:9px;color:#fff}\n.editorial-tool-buttons{display:flex;flex-wrap:wrap;gap:8px}\n.editorial-image-upload{display:grid;gap:8px;background:#053769;border:1px solid #82b8e055;border-radius:9px;padding:12px}\n.editorial-image-upload label{font-weight:750;font-size:.79rem;color:#deefff}\n.editorial-image-upload select,.editorial-image-upload input{max-width:100%;min-width:0}\n\n.article-record-controls{display:flex;flex-wrap:wrap;gap:7px;margin:8px 0}\n.article-record-preview{display:grid;gap:8px;padding:10px;border:1px solid #78acd27c;background:#053b6d;border-radius:9px}\n.article-record-preview audio{width:100%;max-width:100%}\n.article-record-preview small{font-size:.67rem;color:#c3def1;line-height:1.6}\n", "/* Responsive rules for articles; isolated from common/desktop CSS. */\n@media (max-width: 1180px) {\n\n  .admin-columns {\n    grid-template-columns: 1fr;\n  }\n\n  .articles-list-panel {\n    position: static;\n  }\n\n  .admin-list {\n    max-height: 300px;\n  }\n\n}@media (max-width: 700px) {\n\n  .admin-articles {\n    padding: 8px 0 30px;\n  }\n\n  .admin-columns {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n\n  .admin-columns .panel {\n    padding: 17px;\n    border-radius: 13px;\n  }\n\n  .panel-heading {\n    gap: 12px;\n    margin-bottom: 18px;\n  }\n\n  .panel-heading h2 {\n    font-size: 19px;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .article-editor-form {\n    gap: 20px;\n  }\n\n  .form-section {\n    padding-top: 19px;\n  }\n\n  .form-section h3 {\n    font-size: 16px;\n  }\n\n  .article-editor-form .field textarea {\n    min-height: 150px;\n  }\n\n  .checkbox-group {\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .form-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .form-actions .btn {\n    width: 100%;\n  }\n\n  .admin-list-item img {\n    width: 75px;\n    height: 68px;\n  }\n\n}@media (max-width: 420px) {\n\n  .admin-columns .panel {\n    padding: 13px;\n  }\n\n  .panel-heading h2 {\n    font-size: 17px;\n  }\n\n  .article-editor-form .field input,\n  .article-editor-form .field select,\n  .article-editor-form .field textarea {\n    font-size: 14px;\n  }\n\n}@media(max-width:650px){.editorial-tool-grid{grid-template-columns:1fr}.editorial-toolkit{padding:12px}}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.NewsApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ArticlesAdminComponent, { className: "ArticlesAdminComponent", filePath: "src/app/admin/articles/articles.component.ts", lineNumber: 75 }); })();
//# sourceMappingURL=articles.component.js.map