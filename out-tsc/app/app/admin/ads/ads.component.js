import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { uid } from '../../core/models';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function AdminAdsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2, " Loading advertisements... ");
    i0.ɵɵelementEnd();
} }
function AdminAdsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "i", 43);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No Advertisements Found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 5);
    i0.ɵɵtext(5, " Create an advertisement to get started. ");
    i0.ɵɵelementEnd()();
} }
function AdminAdsComponent_div_18_article_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.media.url(a_r2.image), i0.ɵɵsanitizeUrl)("alt", a_r2.brand);
} }
function AdminAdsComponent_div_18_article_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelement(1, "i", 61);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "No Image");
    i0.ɵɵelementEnd()();
} }
function AdminAdsComponent_div_18_article_1_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 62);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r2.caption, " ");
} }
function AdminAdsComponent_div_18_article_1_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 63);
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", a_r2.link, " ");
} }
function AdminAdsComponent_div_18_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 46)(1, "div", 47);
    i0.ɵɵtemplate(2, AdminAdsComponent_div_18_article_1_img_2_Template, 1, 2, "img", 48)(3, AdminAdsComponent_div_18_article_1_div_3_Template, 4, 0, "div", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 50)(5, "div", 51)(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 52);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span", 53);
    i0.ɵɵelement(11, "i", 54);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AdminAdsComponent_div_18_article_1_p_13_Template, 2, 1, "p", 55)(14, AdminAdsComponent_div_18_article_1_p_14_Template, 3, 1, "p", 56);
    i0.ɵɵelementStart(15, "div", 57)(16, "button", 7);
    i0.ɵɵlistener("click", function AdminAdsComponent_div_18_article_1_Template_button_click_16_listener() { const a_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectAd(a_r2)); });
    i0.ɵɵelement(17, "i", 58);
    i0.ɵɵtext(18, " Edit Advertisement ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r2.draft.id === a_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", a_r2.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !a_r2.image);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r2.brand);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("green", a_r2.enabled)("warning", !a_r2.enabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r2.enabled ? "VISIBLE" : "HIDDEN", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.positionLabel(a_r2.position), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r2.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r2.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingImage);
} }
function AdminAdsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, AdminAdsComponent_div_18_article_1_Template, 19, 14, "article", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.ads);
} }
function AdminAdsComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2, " Uploading image to the backend... ");
    i0.ɵɵelementEnd();
} }
function AdminAdsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "h4");
    i0.ɵɵtext(2, "Image Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r2.media.url(ctx_r2.draft.image), i0.ɵɵsanitizeUrl)("alt", ctx_r2.draft.brand || "Advertisement preview");
} }
function AdminAdsComponent_p_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵelement(1, "i", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.error, " ");
} }
function AdminAdsComponent_p_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 70);
    i0.ɵɵelement(1, "i", 71);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.message, " ");
} }
function AdminAdsComponent_button_73_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function AdminAdsComponent_button_73_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.remove()); });
    i0.ɵɵelement(1, "i", 73);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingImage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.deleting ? "Deleting..." : "Delete Advertisement", " ");
} }
// ==========================================
// NEW ADVERTISEMENT
// ==========================================
function blank() {
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
export class AdminAdsComponent {
    store;
    media;
    api;
    http;
    draft = blank();
    ads = [];
    error = '';
    message = '';
    loading = false;
    saving = false;
    deleting = false;
    uploadingImage = false;
    constructor(store, media, api, http) {
        this.store = store;
        this.media = media;
        this.api = api;
        this.http = http;
    }
    ngOnInit() {
        void this.loadAds();
    }
    // ==========================================
    // LOAD ADVERTISEMENTS FROM MONGODB
    // ==========================================
    async loadAds() {
        if (this.loading)
            return;
        this.loading = true;
        this.error = '';
        try {
            await this.api.restoreSession();
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/ads`, {
                withCredentials: true
            }));
            if (!Array.isArray(response)) {
                throw new Error('Invalid advertisement list received from backend.');
            }
            this.ads = response;
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // CREATE NEW ADVERTISEMENT
    // ==========================================
    newAd() {
        if (this.saving ||
            this.deleting ||
            this.uploadingImage) {
            return;
        }
        this.draft = blank();
        this.error = '';
        this.message = '';
    }
    // ==========================================
    // SELECT EXISTING ADVERTISEMENT
    // ==========================================
    clone(ad) {
        return structuredClone(ad);
    }
    selectAd(ad) {
        if (this.saving ||
            this.deleting ||
            this.uploadingImage) {
            return;
        }
        this.draft = this.clone(ad);
        this.error = '';
        this.message = '';
    }
    get isSaved() {
        return this.ads.some(ad => ad.id === this.draft.id);
    }
    // ==========================================
    // POSITION LABELS
    // ==========================================
    positionLabel(position) {
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
    async imageUpload(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file)
            return;
        if (this.uploadingImage ||
            this.saving ||
            this.deleting) {
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
            const uploaded = await this.api.uploadMedia(file);
            // Use the URL returned by the backend service.
            if (!uploaded ||
                typeof uploaded.url !== 'string' ||
                uploaded.url.length === 0) {
                throw new Error('The backend did not return a valid image URL.');
            }
            this.draft.image = uploaded.url;
            this.message =
                'Image uploaded successfully. Click Save Advertisement to save the record.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingImage = false;
            input.value = '';
        }
    }
    // ==========================================
    // SAVE ADVERTISEMENT TO MONGODB
    // PUT /api/admin/ads/:id
    // ==========================================
    async save() {
        if (this.saving ||
            this.deleting ||
            this.uploadingImage) {
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
        if (!['banner', 'sidebar', 'popup'].includes(payload.position)) {
            this.error =
                'Please select a valid advertisement position.';
            return;
        }
        // Image is required for visible ads.
        if (payload.enabled &&
            !payload.image) {
            this.error =
                'Upload an image before enabling this advertisement.';
            return;
        }
        // Validate optional destination link.
        if (payload.link &&
            !/^https?:\/\/\S+$/i.test(payload.link)) {
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
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/ads`, {
                withCredentials: true
            }));
            if (!Array.isArray(response)) {
                throw new Error('Advertisement saved, but the refreshed list could not be loaded.');
            }
            this.ads = response;
            const savedAd = this.ads.find(ad => ad.id === payload.id);
            this.draft = savedAd
                ? this.clone(savedAd)
                : payload;
            // Refresh the public website snapshot.
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // MongoDB save has already completed.
            }
            this.message = payload.enabled
                ? 'Advertisement saved and enabled successfully.'
                : 'Advertisement saved as hidden successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // DELETE ADVERTISEMENT FROM MONGODB
    // DELETE /api/admin/ads/:id
    // ==========================================
    async remove() {
        if (!this.isSaved ||
            this.saving ||
            this.deleting ||
            this.uploadingImage) {
            return;
        }
        const confirmed = window.confirm(`Are you sure you want to delete "${this.draft.brand}"?`);
        if (!confirmed)
            return;
        this.deleting = true;
        this.error = '';
        this.message = '';
        try {
            const session = await this.api.restoreSession();
            const adId = this.draft.id;
            // Delete the advertisement record.
            await firstValueFrom(this.http.delete(`${environment.apiBaseUrl}/admin/ads/${encodeURIComponent(adId)}`, {
                withCredentials: true,
                headers: {
                    'X-CSRF-Token': session.csrfToken
                }
            }));
            // Update the admin list.
            this.ads = this.ads.filter(ad => ad.id !== adId);
            // Reset the editor.
            this.draft = blank();
            // Refresh public data.
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // MongoDB deletion has already completed.
            }
            this.message =
                'Advertisement deleted successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.deleting = false;
        }
    }
    // ==========================================
    // HANDLE BACKEND ERRORS
    // ==========================================
    getError(error) {
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
            const details = error.error?.error ??
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
    static ɵfac = function AdminAdsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminAdsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.NewsApiService), i0.ɵɵdirectiveInject(i4.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAdsComponent, selectors: [["app-admin-ads"]], decls: 74, vars: 43, consts: [[1, "admin-columns", "admin-ads-page"], [1, "panel", "glass", "ads-list-panel"], [1, "section-title", "ads-panel-heading"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], [1, "fa-solid", "fa-plus"], [1, "muted"], [1, "ads-toolbar"], ["type", "button", 1, "btn", "outline", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], [1, "ads-count"], ["class", "ads-loading", "role", "status", 4, "ngIf"], ["class", "ads-empty-state", 4, "ngIf"], ["class", "saved-ads", 4, "ngIf"], [1, "panel", "glass", "ads-editor-panel"], [1, "section-title", "ads-editor-heading"], [1, "chip"], [1, "editor-form", "ads-editor-form", 3, "ngSubmit"], ["type", "text", "name", "brand", "placeholder", "Enter advertiser or brand name", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["name", "position", 3, "ngModelChange", "ngModel", "disabled"], ["value", "banner"], ["value", "sidebar"], ["value", "popup"], ["type", "text", "name", "caption", "placeholder", "Enter advertisement caption", 3, "ngModelChange", "ngModel", "disabled"], ["type", "url", "name", "link", "placeholder", "https://example.com", 3, "ngModelChange", "ngModel", "disabled"], [1, "ads-upload-section"], [1, "ads-upload-label"], [1, "fa-solid", "fa-cloud-arrow-up"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["type", "text", "name", "image", "placeholder", "Upload an image or enter its URL", 3, "ngModelChange", "ngModel", "disabled"], ["class", "muted", "role", "status", 4, "ngIf"], ["class", "ads-preview", 4, "ngIf"], [1, "ads-visibility-control"], [1, "checkbox-label"], ["type", "checkbox", "name", "enabled", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["class", "success-message", "role", "status", 4, "ngIf"], [1, "ads-editor-actions"], ["type", "submit", 1, "btn", "btn-red", 3, "disabled"], [1, "fa-solid"], ["type", "button", "class", "btn outline danger", 3, "disabled", "click", 4, "ngIf"], ["role", "status", 1, "ads-loading"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "ads-empty-state"], [1, "fa-solid", "fa-rectangle-ad"], [1, "saved-ads"], ["class", "saved-ad-card", 3, "is-selected", 4, "ngFor", "ngForOf"], [1, "saved-ad-card"], [1, "saved-ad-image"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "saved-ad-placeholder", 4, "ngIf"], [1, "saved-ad-content"], [1, "saved-ad-heading"], [1, "chip", "ad-status"], [1, "ad-position"], [1, "fa-solid", "fa-layer-group"], ["class", "ad-caption", 4, "ngIf"], ["class", "ad-link", 4, "ngIf"], [1, "saved-ad-actions"], [1, "fa-solid", "fa-pen-to-square"], ["loading", "lazy", 3, "src", "alt"], [1, "saved-ad-placeholder"], [1, "fa-solid", "fa-image"], [1, "ad-caption"], [1, "ad-link"], [1, "fa-solid", "fa-link"], ["role", "status", 1, "muted"], [1, "ads-preview"], [1, "upload-preview", 3, "src", "alt"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"], ["type", "button", 1, "btn", "outline", "danger", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"]], template: function AdminAdsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵtext(4, "Banner / Slider / Popup Ads");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function AdminAdsComponent_Template_button_click_5_listener() { return ctx.newAd(); });
            i0.ɵɵelement(6, "i", 4);
            i0.ɵɵtext(7, " New Advertisement ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Manage advertisements stored in MongoDB. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function AdminAdsComponent_Template_button_click_11_listener() { return ctx.loadAds(); });
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 9);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, AdminAdsComponent_div_16_Template, 3, 0, "div", 10)(17, AdminAdsComponent_div_17_Template, 6, 0, "div", 11)(18, AdminAdsComponent_div_18_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "section", 13)(20, "div", 14)(21, "h2");
            i0.ɵɵtext(22, "Advertisement Editor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 15);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "p", 5);
            i0.ɵɵtext(26, " Add advertiser details, upload an image and choose where the advertisement appears. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminAdsComponent_Template_form_ngSubmit_27_listener() { return ctx.save(); });
            i0.ɵɵelementStart(28, "label");
            i0.ɵɵtext(29, " Advertiser / Brand * ");
            i0.ɵɵelementStart(30, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_input_ngModelChange_30_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.brand, $event) || (ctx.draft.brand = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "label");
            i0.ɵɵtext(32, " Advertisement Position ");
            i0.ɵɵelementStart(33, "select", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_select_ngModelChange_33_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.position, $event) || (ctx.draft.position = $event); return $event; });
            i0.ɵɵelementStart(34, "option", 19);
            i0.ɵɵtext(35, " Homepage Top Banner ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "option", 20);
            i0.ɵɵtext(37, " Rotating Sidebar Slider ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "option", 21);
            i0.ɵɵtext(39, " Optional Popup Advertisement ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "label");
            i0.ɵɵtext(41, " Advertisement Caption ");
            i0.ɵɵelementStart(42, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_input_ngModelChange_42_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.caption, $event) || (ctx.draft.caption = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "label");
            i0.ɵɵtext(44, " Destination Link (Optional) ");
            i0.ɵɵelementStart(45, "input", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_input_ngModelChange_45_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.link, $event) || (ctx.draft.link = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 24)(47, "h3");
            i0.ɵɵtext(48, "Advertisement Image");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "p", 5);
            i0.ɵɵtext(50, " Upload a JPG, PNG or WebP image, up to 8 MB. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "label", 25);
            i0.ɵɵelement(52, "i", 26);
            i0.ɵɵelementStart(53, "span");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "input", 27);
            i0.ɵɵlistener("change", function AdminAdsComponent_Template_input_change_55_listener($event) { return ctx.imageUpload($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "label");
            i0.ɵɵtext(57, " Image URL ");
            i0.ɵɵelementStart(58, "input", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_input_ngModelChange_58_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.image, $event) || (ctx.draft.image = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(59, AdminAdsComponent_p_59_Template, 3, 0, "p", 29)(60, AdminAdsComponent_div_60_Template, 4, 2, "div", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 31)(62, "label", 32)(63, "input", 33);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAdsComponent_Template_input_ngModelChange_63_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.enabled, $event) || (ctx.draft.enabled = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(64, " Show this advertisement ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "p", 5);
            i0.ɵɵtext(66);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(67, AdminAdsComponent_p_67_Template, 3, 1, "p", 34)(68, AdminAdsComponent_p_68_Template, 3, 1, "p", 35);
            i0.ɵɵelementStart(69, "div", 36)(70, "button", 37);
            i0.ɵɵelement(71, "i", 38);
            i0.ɵɵtext(72);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(73, AdminAdsComponent_button_73_Template, 3, 2, "button", 39);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingImage);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.saving || ctx.deleting);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spin", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading ? "Loading..." : "Refresh Ads", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.ads.length, " ", ctx.ads.length === 1 ? "Advertisement" : "Advertisements", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.ads.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.ads.length > 0);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("green", ctx.draft.enabled)("warning", !ctx.draft.enabled);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.draft.enabled ? "Visible" : "Hidden", " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.brand);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.position);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.caption);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.link);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" ", ctx.uploadingImage ? "Uploading Image..." : "Choose Advertisement Image", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.uploadingImage || ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.image);
            i0.ɵɵproperty("disabled", ctx.uploadingImage || ctx.saving || ctx.deleting);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadingImage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.draft.image);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.enabled);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.draft.enabled ? "This advertisement is enabled for public display." : "This advertisement is hidden from public display.", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingImage);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spinner", ctx.saving)("fa-spin", ctx.saving)("fa-floppy-disk", !ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Saving Advertisement..." : "Save Advertisement", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSaved);
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, FormsModule, i6.ɵNgNoValidate, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.CheckboxControlValueAccessor, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.RequiredValidator, i6.NgModel, i6.NgForm], styles: ["\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n\n\n\n\n\n.admin-ads-page[_ngcontent-%COMP%], \n.admin-ads-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n.admin-ads-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.admin-ads-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.admin-columns.admin-ads-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 22px;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-ads-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n\n.ads-list-panel[_ngcontent-%COMP%], \n.ads-editor-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n\n\n\n\n\n.ads-panel-heading[_ngcontent-%COMP%], \n.ads-editor-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.ads-panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.ads-editor-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 21px;\n  line-height: 1.4;\n}\n\n.admin-ads-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    opacity 0.2s ease,\n    border-color 0.2s ease;\n}\n\n.admin-ads-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.ads-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin: 20px 0;\n}\n\n.ads-count[_ngcontent-%COMP%] {\n  color: #adb8cb;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n\n\n\n\n\n.ads-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  color: #b8c4d5;\n  font-size: 14px;\n}\n\n\n\n\n\n\n.ads-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 210px;\n  padding: 30px 18px;\n  border: 1px dashed #46516a;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.025);\n  text-align: center;\n}\n\n.ads-empty-state[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: #fa4b72;\n  font-size: 34px;\n}\n\n.ads-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: #ffffff;\n  font-size: 19px;\n}\n\n.ads-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n\n\n\n\n\n\n.saved-ads[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 18px;\n  margin-top: 18px;\n  width: 100%;\n}\n\n\n\n\n\n\n.saved-ad-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(130px, 34%) minmax(0, 1fr);\n  align-items: stretch;\n  gap: 18px;\n  min-width: 0;\n  width: 100%;\n  padding: 15px;\n  border: 1px solid #354159;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    #1a2435,\n    #101827\n  );\n  overflow: hidden;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.saved-ad-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(250, 75, 114, 0.5);\n}\n\n.saved-ad-card.is-selected[_ngcontent-%COMP%] {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 1px rgba(245, 71, 108, 0.15);\n}\n\n\n\n\n\n\n.saved-ad-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 0;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  border: 1px solid #38435a;\n  border-radius: 10px;\n  background: #0b1220;\n  overflow: hidden;\n}\n\n.saved-ad-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n}\n\n\n\n\n\n\n.saved-ad-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  color: #8290a8;\n  font-size: 12px;\n  text-align: center;\n}\n\n.saved-ad-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6a7892;\n  font-size: 30px;\n}\n\n\n\n\n\n\n.saved-ad-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 11px;\n  min-width: 0;\n}\n\n.saved-ad-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n}\n\n.saved-ad-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n\n\n.ad-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 5px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.4px;\n}\n\n.ad-status.green[_ngcontent-%COMP%] {\n  border: 1px solid rgba(40, 198, 124, 0.35);\n  background: rgba(40, 198, 124, 0.12);\n  color: #80edb5;\n}\n\n.ad-status.warning[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 179, 71, 0.35);\n  background: rgba(255, 179, 71, 0.1);\n  color: #ffd18d;\n}\n\n\n\n\n\n\n.ad-position[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  max-width: 100%;\n  padding: 6px 10px;\n  border: 1px solid #3c4760;\n  border-radius: 8px;\n  background: #202b3f;\n  color: #c8d2e1;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.ad-position[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f35078;\n}\n\n\n\n\n\n\n.ad-caption[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b8c3d5;\n  font-size: 13px;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n\n.ad-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0;\n  color: #8bbef0;\n  font-size: 12px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.ad-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n  color: #f35078;\n}\n\n\n\n\n\n\n.saved-ad-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n  margin-top: auto;\n  padding-top: 7px;\n}\n\n.saved-ad-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  font-size: 12px;\n}\n\n\n\n\n\n\n.ads-editor-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.ads-editor-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n  margin-top: 22px;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.ads-upload-section[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:not(.ads-upload-label) {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n  color: #dae3f1;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=\"checkbox\"]):not([type=\"file\"]), \n.ads-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 45px;\n  padding: 11px 13px;\n  border: 1px solid #404d65;\n  border-radius: 9px;\n  background: #0d1626;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8190a6;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.ads-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #f44a72;\n  box-shadow: 0 0 0 3px rgba(244, 74, 114, 0.12);\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, \n.ads-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #111a2b;\n  color: #ffffff;\n}\n\n\n\n\n\n\n.ads-upload-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #3b4760;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.ads-upload-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n}\n\n.ads-upload-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #aebad0;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n\n\n\n\n\n.ads-upload-label[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 135px;\n  padding: 22px 16px;\n  border: 2px dashed #56637a;\n  border-radius: 12px;\n  background: #10192a;\n  color: #dbe4f2;\n  text-align: center;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.ads-upload-label[_ngcontent-%COMP%]:hover {\n  border-color: #fa5079;\n  background: #192237;\n}\n\n.ads-upload-label[_ngcontent-%COMP%]:focus-within {\n  outline: 2px solid #ff6488;\n  outline-offset: 3px;\n}\n\n.ads-upload-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fb5078;\n  font-size: 29px;\n}\n\n.ads-upload-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.ads-upload-label[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n\n\n\n\n\n\n.ads-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #3a465d;\n  border-radius: 12px;\n  background: #0e1726;\n}\n\n.ads-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dae3f0;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.ads-preview[_ngcontent-%COMP%]   .upload-preview[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 360px;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  border: 1px solid #3c4760;\n  border-radius: 9px;\n  background: #0a1120;\n}\n\n\n\n\n\n\n.ads-visibility-control[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 17px;\n  border: 1px solid #3d4860;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.ads-visibility-control[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.ads-visibility-control[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #f44770;\n  flex-shrink: 0;\n}\n\n.ads-visibility-control[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a9b6c9;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.ads-editor-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%], \n.ads-editor-form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin: 0;\n  padding: 13px 15px;\n  border-radius: 9px;\n  font-size: 13px;\n  line-height: 1.65;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  border: 1px solid rgba(245, 70, 106, 0.35);\n  background: rgba(245, 70, 106, 0.1);\n  color: #ffa0b4;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  border: 1px solid rgba(36, 195, 127, 0.35);\n  background: rgba(36, 195, 127, 0.1);\n  color: #84edbc;\n}\n\n.ads-editor-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.ads-editor-form[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n\n\n\n\n\n.ads-editor-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 13px;\n  margin-top: 6px;\n}\n\n.ads-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 18px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n\n@media (min-width: 1400px) {\n\n  .admin-columns.admin-ads-page[_ngcontent-%COMP%] {\n    grid-template-columns:\n      minmax(0, 1.1fr)\n      minmax(0, 1fr);\n  }\n\n}@media (max-width: 1100px) {\n\n  .saved-ad-card[_ngcontent-%COMP%] {\n    grid-template-columns:\n      minmax(125px, 32%)\n      minmax(0, 1fr);\n  }\n\n  .ads-panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .ads-editor-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n}@media (max-width: 700px) {\n\n  .admin-columns.admin-ads-page[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n\n  .ads-panel-heading[_ngcontent-%COMP%], \n   .ads-editor-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 12px;\n  }\n\n  .ads-panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .ads-editor-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .saved-ads[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n\n  .saved-ad-card[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 13px;\n    padding: 13px;\n  }\n\n  .saved-ad-image[_ngcontent-%COMP%] {\n    aspect-ratio: 16 / 9;\n  }\n\n  .saved-ad-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .saved-ad-actions[_ngcontent-%COMP%] {\n    margin-top: 6px;\n  }\n\n  .ads-editor-form[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n\n  .ads-upload-section[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .ads-upload-label[_ngcontent-%COMP%] {\n    min-height: 115px;\n    padding: 19px 12px;\n  }\n\n  .ads-preview[_ngcontent-%COMP%]   .upload-preview[_ngcontent-%COMP%] {\n    max-height: 270px;\n  }\n\n  .ads-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n}@media (max-width: 420px) {\n\n  .ads-panel-heading[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .ads-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .saved-ad-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .ad-status[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n\n  .saved-ad-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .ads-editor-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .ads-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .saved-ad-card[_ngcontent-%COMP%], \n   .admin-ads-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n   .ads-upload-label[_ngcontent-%COMP%], \n   .ads-editor-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .ads-editor-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    transition: none;\n  }\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAdsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-ads', standalone: true, imports: [CommonModule, FormsModule], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI - ADMIN ADVERTISEMENTS\n     ========================================== -->\n\n<div class=\"admin-columns admin-ads-page\">\n\n  <!-- ======================================\n       SAVED ADVERTISEMENTS\n       ====================================== -->\n\n  <section class=\"panel glass ads-list-panel\">\n\n    <div class=\"section-title ads-panel-heading\">\n\n      <h2>Banner / Slider / Popup Ads</h2>\n\n      <button\n        type=\"button\"\n        class=\"btn btn-red\"\n        (click)=\"newAd()\"\n        [disabled]=\"saving || deleting || uploadingImage\"\n      >\n        <i class=\"fa-solid fa-plus\"></i>\n        New Advertisement\n      </button>\n\n    </div>\n\n    <p class=\"muted\">\n      Manage advertisements stored in MongoDB.\n    </p>\n\n    <!-- TOOLBAR -->\n\n    <div class=\"ads-toolbar\">\n\n      <button\n        type=\"button\"\n        class=\"btn outline small\"\n        (click)=\"loadAds()\"\n        [disabled]=\"loading || saving || deleting\"\n      >\n        <i\n          class=\"fa-solid fa-rotate\"\n          [class.fa-spin]=\"loading\"\n        ></i>\n\n        {{ loading ? 'Loading...' : 'Refresh Ads' }}\n      </button>\n\n      <span class=\"ads-count\">\n        {{ ads.length }}\n        {{ ads.length === 1 ? 'Advertisement' : 'Advertisements' }}\n      </span>\n\n    </div>\n\n    <!-- LOADING -->\n\n    <div\n      *ngIf=\"loading\"\n      class=\"ads-loading\"\n      role=\"status\"\n    >\n      <i class=\"fa-solid fa-spinner fa-spin\"></i>\n      Loading advertisements...\n    </div>\n\n    <!-- EMPTY STATE -->\n\n    <div\n      *ngIf=\"!loading && ads.length === 0\"\n      class=\"ads-empty-state\"\n    >\n      <i class=\"fa-solid fa-rectangle-ad\"></i>\n\n      <h3>No Advertisements Found</h3>\n\n      <p class=\"muted\">\n        Create an advertisement to get started.\n      </p>\n    </div>\n\n    <!-- SAVED ADVERTISEMENTS -->\n\n    <div class=\"saved-ads\" *ngIf=\"ads.length > 0\">\n\n      <article\n        *ngFor=\"let a of ads\"\n        class=\"saved-ad-card\"\n        [class.is-selected]=\"draft.id === a.id\"\n      >\n\n        <!-- ADVERTISEMENT IMAGE -->\n\n        <div class=\"saved-ad-image\">\n\n          <img\n            *ngIf=\"a.image\"\n            [src]=\"media.url(a.image)\"\n            [alt]=\"a.brand\"\n            loading=\"lazy\"\n          />\n\n          <div\n            *ngIf=\"!a.image\"\n            class=\"saved-ad-placeholder\"\n          >\n            <i class=\"fa-solid fa-image\"></i>\n            <span>No Image</span>\n          </div>\n\n        </div>\n\n        <!-- ADVERTISEMENT DETAILS -->\n\n        <div class=\"saved-ad-content\">\n\n          <div class=\"saved-ad-heading\">\n\n            <h3>{{ a.brand }}</h3>\n\n            <span\n              class=\"chip ad-status\"\n              [class.green]=\"a.enabled\"\n              [class.warning]=\"!a.enabled\"\n            >\n              {{ a.enabled ? 'VISIBLE' : 'HIDDEN' }}\n            </span>\n\n          </div>\n\n          <span class=\"ad-position\">\n            <i class=\"fa-solid fa-layer-group\"></i>\n            {{ positionLabel(a.position) }}\n          </span>\n\n          <p\n            class=\"ad-caption\"\n            *ngIf=\"a.caption\"\n          >\n            {{ a.caption }}\n          </p>\n\n          <p\n            class=\"ad-link\"\n            *ngIf=\"a.link\"\n          >\n            <i class=\"fa-solid fa-link\"></i>\n            {{ a.link }}\n          </p>\n\n          <div class=\"saved-ad-actions\">\n\n            <button\n              type=\"button\"\n              class=\"btn outline small\"\n              (click)=\"selectAd(a)\"\n              [disabled]=\"saving || deleting || uploadingImage\"\n            >\n              <i class=\"fa-solid fa-pen-to-square\"></i>\n              Edit Advertisement\n            </button>\n\n          </div>\n\n        </div>\n\n      </article>\n\n    </div>\n\n  </section>\n\n  <!-- ======================================\n       ADVERTISEMENT EDITOR\n       ====================================== -->\n\n  <section class=\"panel glass ads-editor-panel\">\n\n    <div class=\"section-title ads-editor-heading\">\n\n      <h2>Advertisement Editor</h2>\n\n      <span\n        class=\"chip\"\n        [class.green]=\"draft.enabled\"\n        [class.warning]=\"!draft.enabled\"\n      >\n        {{ draft.enabled ? 'Visible' : 'Hidden' }}\n      </span>\n\n    </div>\n\n    <p class=\"muted\">\n      Add advertiser details, upload an image\n      and choose where the advertisement appears.\n    </p>\n\n    <form\n      class=\"editor-form ads-editor-form\"\n      (ngSubmit)=\"save()\"\n    >\n\n      <!-- ADVERTISER -->\n\n      <label>\n        Advertiser / Brand *\n\n        <input\n          type=\"text\"\n          name=\"brand\"\n          [(ngModel)]=\"draft.brand\"\n          placeholder=\"Enter advertiser or brand name\"\n          required\n          [disabled]=\"saving || deleting\"\n        />\n      </label>\n\n      <!-- POSITION -->\n\n      <label>\n        Advertisement Position\n\n        <select\n          name=\"position\"\n          [(ngModel)]=\"draft.position\"\n          [disabled]=\"saving || deleting\"\n        >\n          <option value=\"banner\">\n            Homepage Top Banner\n          </option>\n\n          <option value=\"sidebar\">\n            Rotating Sidebar Slider\n          </option>\n\n\n          <option value=\"popup\">\n            Optional Popup Advertisement\n          </option>\n        </select>\n      </label>\n\n      <!-- CAPTION -->\n\n      <label>\n        Advertisement Caption\n\n        <input\n          type=\"text\"\n          name=\"caption\"\n          [(ngModel)]=\"draft.caption\"\n          placeholder=\"Enter advertisement caption\"\n          [disabled]=\"saving || deleting\"\n        />\n      </label>\n\n      <!-- DESTINATION -->\n\n      <label>\n        Destination Link (Optional)\n\n        <input\n          type=\"url\"\n          name=\"link\"\n          [(ngModel)]=\"draft.link\"\n          placeholder=\"https://example.com\"\n          [disabled]=\"saving || deleting\"\n        />\n      </label>\n\n      <!-- IMAGE UPLOAD -->\n\n      <div class=\"ads-upload-section\">\n\n        <h3>Advertisement Image</h3>\n\n        <p class=\"muted\">\n          Upload a JPG, PNG or WebP image,\n          up to 8 MB.\n        </p>\n\n        <label class=\"ads-upload-label\">\n\n          <i class=\"fa-solid fa-cloud-arrow-up\"></i>\n\n          <span>\n            {{\n              uploadingImage\n                ? 'Uploading Image...'\n                : 'Choose Advertisement Image'\n            }}\n          </span>\n\n          <input\n            type=\"file\"\n            accept=\"image/jpeg,image/png,image/webp\"\n            (change)=\"imageUpload($event)\"\n            [disabled]=\"uploadingImage || saving || deleting\"\n          />\n\n        </label>\n\n        <!-- IMAGE URL -->\n\n        <label>\n          Image URL\n\n          <input\n            type=\"text\"\n            name=\"image\"\n            [(ngModel)]=\"draft.image\"\n            placeholder=\"Upload an image or enter its URL\"\n            [disabled]=\"uploadingImage || saving || deleting\"\n          />\n        </label>\n\n        <!-- UPLOAD PROGRESS -->\n\n        <p\n          class=\"muted\"\n          *ngIf=\"uploadingImage\"\n          role=\"status\"\n        >\n          <i class=\"fa-solid fa-spinner fa-spin\"></i>\n          Uploading image to the backend...\n        </p>\n\n        <!-- IMAGE PREVIEW -->\n\n        <div\n          class=\"ads-preview\"\n          *ngIf=\"draft.image\"\n        >\n\n          <h4>Image Preview</h4>\n\n          <img\n            class=\"upload-preview\"\n            [src]=\"media.url(draft.image)\"\n            [alt]=\"draft.brand || 'Advertisement preview'\"\n          />\n\n        </div>\n\n      </div>\n\n      <!-- ADVERTISEMENT VISIBILITY -->\n\n      <div class=\"ads-visibility-control\">\n\n        <label class=\"checkbox-label\">\n\n          <input\n            type=\"checkbox\"\n            name=\"enabled\"\n            [(ngModel)]=\"draft.enabled\"\n            [disabled]=\"saving || deleting\"\n          />\n\n          Show this advertisement\n\n        </label>\n\n        <p class=\"muted\">\n\n          {{\n            draft.enabled\n              ? 'This advertisement is enabled for public display.'\n              : 'This advertisement is hidden from public display.'\n          }}\n\n        </p>\n\n      </div>\n\n      <!-- ERRORS -->\n\n      <p\n        class=\"form-error\"\n        *ngIf=\"error\"\n        role=\"alert\"\n      >\n        <i class=\"fa-solid fa-circle-exclamation\"></i>\n        {{ error }}\n      </p>\n\n      <!-- SUCCESS -->\n\n      <p\n        class=\"success-message\"\n        *ngIf=\"message\"\n        role=\"status\"\n      >\n        <i class=\"fa-solid fa-circle-check\"></i>\n        {{ message }}\n      </p>\n\n      <!-- FORM BUTTONS -->\n\n      <div class=\"ads-editor-actions\">\n\n        <button\n          type=\"submit\"\n          class=\"btn btn-red\"\n          [disabled]=\"saving || deleting || uploadingImage\"\n        >\n\n          <i\n            class=\"fa-solid\"\n            [class.fa-spinner]=\"saving\"\n            [class.fa-spin]=\"saving\"\n            [class.fa-floppy-disk]=\"!saving\"\n          ></i>\n\n          {{\n            saving\n              ? 'Saving Advertisement...'\n              : 'Save Advertisement'\n          }}\n\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"btn outline danger\"\n          *ngIf=\"isSaved\"\n          (click)=\"remove()\"\n          [disabled]=\"saving || deleting || uploadingImage\"\n        >\n          <i class=\"fa-solid fa-trash\"></i>\n\n          {{\n            deleting\n              ? 'Deleting...'\n              : 'Delete Advertisement'\n          }}\n        </button>\n\n      </div>\n\n    </form>\n\n  </section>\n\n</div>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI - ADMIN ADVERTISEMENTS\n   Banner / Slider / Popup Management\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n/* ==========================================\n   MAIN LAYOUT\n   ========================================== */\n\n.admin-ads-page,\n.admin-ads-page *,\n.admin-ads-page *::before,\n.admin-ads-page *::after {\n  box-sizing: border-box;\n}\n\n.admin-columns.admin-ads-page {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 22px;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-ads-page .panel {\n  min-width: 0;\n  width: 100%;\n}\n\n.ads-list-panel,\n.ads-editor-panel {\n  min-width: 0;\n}\n\n/* ==========================================\n   SECTION HEADINGS\n   ========================================== */\n\n.ads-panel-heading,\n.ads-editor-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.ads-panel-heading h2,\n.ads-editor-heading h2 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 21px;\n  line-height: 1.4;\n}\n\n.admin-ads-page .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition:\n    opacity 0.2s ease,\n    border-color 0.2s ease;\n}\n\n.admin-ads-page .btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   ADS TOOLBAR\n   ========================================== */\n\n.ads-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin: 20px 0;\n}\n\n.ads-count {\n  color: #adb8cb;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n/* ==========================================\n   LOADING\n   ========================================== */\n\n.ads-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  color: #b8c4d5;\n  font-size: 14px;\n}\n\n/* ==========================================\n   EMPTY STATE\n   ========================================== */\n\n.ads-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 210px;\n  padding: 30px 18px;\n  border: 1px dashed #46516a;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.025);\n  text-align: center;\n}\n\n.ads-empty-state > i {\n  margin-bottom: 14px;\n  color: #fa4b72;\n  font-size: 34px;\n}\n\n.ads-empty-state h3 {\n  margin: 0 0 9px;\n  color: #ffffff;\n  font-size: 19px;\n}\n\n.ads-empty-state p {\n  margin: 0;\n  font-size: 13px;\n}\n\n/* ==========================================\n   SAVED ADVERTISEMENTS LIST\n   ========================================== */\n\n.saved-ads {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 18px;\n  margin-top: 18px;\n  width: 100%;\n}\n\n/* ==========================================\n   ADVERTISEMENT CARD\n   ========================================== */\n\n.saved-ad-card {\n  display: grid;\n  grid-template-columns: minmax(130px, 34%) minmax(0, 1fr);\n  align-items: stretch;\n  gap: 18px;\n  min-width: 0;\n  width: 100%;\n  padding: 15px;\n  border: 1px solid #354159;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    #1a2435,\n    #101827\n  );\n  overflow: hidden;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.saved-ad-card:hover {\n  border-color: rgba(250, 75, 114, 0.5);\n}\n\n.saved-ad-card.is-selected {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 1px rgba(245, 71, 108, 0.15);\n}\n\n/* ==========================================\n   SAVED ADVERTISEMENT IMAGE\n   ========================================== */\n\n.saved-ad-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 0;\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  border: 1px solid #38435a;\n  border-radius: 10px;\n  background: #0b1220;\n  overflow: hidden;\n}\n\n.saved-ad-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n}\n\n/* ==========================================\n   NO IMAGE PLACEHOLDER\n   ========================================== */\n\n.saved-ad-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  color: #8290a8;\n  font-size: 12px;\n  text-align: center;\n}\n\n.saved-ad-placeholder i {\n  color: #6a7892;\n  font-size: 30px;\n}\n\n/* ==========================================\n   SAVED ADVERTISEMENT CONTENT\n   ========================================== */\n\n.saved-ad-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 11px;\n  min-width: 0;\n}\n\n.saved-ad-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n}\n\n.saved-ad-heading h3 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n/* ==========================================\n   VISIBLE / HIDDEN STATUS\n   ========================================== */\n\n.ad-status {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 5px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.4px;\n}\n\n.ad-status.green {\n  border: 1px solid rgba(40, 198, 124, 0.35);\n  background: rgba(40, 198, 124, 0.12);\n  color: #80edb5;\n}\n\n.ad-status.warning {\n  border: 1px solid rgba(255, 179, 71, 0.35);\n  background: rgba(255, 179, 71, 0.1);\n  color: #ffd18d;\n}\n\n/* ==========================================\n   ADVERTISEMENT POSITION\n   ========================================== */\n\n.ad-position {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  max-width: 100%;\n  padding: 6px 10px;\n  border: 1px solid #3c4760;\n  border-radius: 8px;\n  background: #202b3f;\n  color: #c8d2e1;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.ad-position i {\n  color: #f35078;\n}\n\n/* ==========================================\n   AD CAPTION AND LINK\n   ========================================== */\n\n.ad-caption {\n  margin: 0;\n  color: #b8c3d5;\n  font-size: 13px;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n\n.ad-link {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0;\n  color: #8bbef0;\n  font-size: 12px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.ad-link i {\n  flex-shrink: 0;\n  margin-top: 3px;\n  color: #f35078;\n}\n\n/* ==========================================\n   SAVED AD ACTIONS\n   ========================================== */\n\n.saved-ad-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n  margin-top: auto;\n  padding-top: 7px;\n}\n\n.saved-ad-actions .btn {\n  min-height: 38px;\n  font-size: 12px;\n}\n\n/* ==========================================\n   ADVERTISEMENT EDITOR\n   ========================================== */\n\n.ads-editor-panel {\n  min-width: 0;\n}\n\n.ads-editor-form {\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n  margin-top: 22px;\n}\n\n.ads-editor-form > label,\n.ads-upload-section > label:not(.ads-upload-label) {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n  color: #dae3f1;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.ads-editor-form input:not([type=\"checkbox\"]):not([type=\"file\"]),\n.ads-editor-form select {\n  width: 100%;\n  min-width: 0;\n  min-height: 45px;\n  padding: 11px 13px;\n  border: 1px solid #404d65;\n  border-radius: 9px;\n  background: #0d1626;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.ads-editor-form input::placeholder {\n  color: #8190a6;\n}\n\n.ads-editor-form input:focus,\n.ads-editor-form select:focus {\n  border-color: #f44a72;\n  box-shadow: 0 0 0 3px rgba(244, 74, 114, 0.12);\n}\n\n.ads-editor-form input:disabled,\n.ads-editor-form select:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.ads-editor-form select option {\n  background: #111a2b;\n  color: #ffffff;\n}\n\n/* ==========================================\n   IMAGE UPLOAD SECTION\n   ========================================== */\n\n.ads-upload-section {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #3b4760;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.ads-upload-section h3 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n}\n\n.ads-upload-section > p {\n  margin: 0;\n  color: #aebad0;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n/* ==========================================\n   FILE UPLOAD BUTTON\n   ========================================== */\n\n.ads-upload-label {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 135px;\n  padding: 22px 16px;\n  border: 2px dashed #56637a;\n  border-radius: 12px;\n  background: #10192a;\n  color: #dbe4f2;\n  text-align: center;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.ads-upload-label:hover {\n  border-color: #fa5079;\n  background: #192237;\n}\n\n.ads-upload-label:focus-within {\n  outline: 2px solid #ff6488;\n  outline-offset: 3px;\n}\n\n.ads-upload-label i {\n  color: #fb5078;\n  font-size: 29px;\n}\n\n.ads-upload-label span {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.ads-upload-label input[type=\"file\"] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n\n/* ==========================================\n   ADVERTISEMENT IMAGE PREVIEW\n   ========================================== */\n\n.ads-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #3a465d;\n  border-radius: 12px;\n  background: #0e1726;\n}\n\n.ads-preview h4 {\n  margin: 0;\n  color: #dae3f0;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.ads-preview .upload-preview {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 360px;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  border: 1px solid #3c4760;\n  border-radius: 9px;\n  background: #0a1120;\n}\n\n/* ==========================================\n   ADVERTISEMENT VISIBILITY CONTROL\n   ========================================== */\n\n.ads-visibility-control {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 17px;\n  border: 1px solid #3d4860;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.ads-visibility-control .checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 11px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.ads-visibility-control input[type=\"checkbox\"] {\n  width: 18px;\n  height: 18px;\n  accent-color: #f44770;\n  flex-shrink: 0;\n}\n\n.ads-visibility-control p {\n  margin: 0;\n  color: #a9b6c9;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   SUCCESS AND ERROR FEEDBACK\n   ========================================== */\n\n.ads-editor-form .form-error,\n.ads-editor-form .success-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin: 0;\n  padding: 13px 15px;\n  border-radius: 9px;\n  font-size: 13px;\n  line-height: 1.65;\n}\n\n.ads-editor-form .form-error {\n  border: 1px solid rgba(245, 70, 106, 0.35);\n  background: rgba(245, 70, 106, 0.1);\n  color: #ffa0b4;\n}\n\n.ads-editor-form .success-message {\n  border: 1px solid rgba(36, 195, 127, 0.35);\n  background: rgba(36, 195, 127, 0.1);\n  color: #84edbc;\n}\n\n.ads-editor-form .form-error i,\n.ads-editor-form .success-message i {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n/* ==========================================\n   SAVE AND DELETE BUTTONS\n   ========================================== */\n\n.ads-editor-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 13px;\n  margin-top: 6px;\n}\n\n.ads-editor-actions .btn {\n  min-height: 44px;\n  padding: 11px 18px;\n}\n\n/* ==========================================\n   LARGE DESKTOP\n   ========================================== */\n\n\n\n/* ==========================================\n   TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   SMALL MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   REDUCED MOTION\n   ========================================== */\n", "/* Responsive rules for ads; isolated from common/desktop CSS. */\n@media (min-width: 1400px) {\n\n  .admin-columns.admin-ads-page {\n    grid-template-columns:\n      minmax(0, 1.1fr)\n      minmax(0, 1fr);\n  }\n\n}@media (max-width: 1100px) {\n\n  .saved-ad-card {\n    grid-template-columns:\n      minmax(125px, 32%)\n      minmax(0, 1fr);\n  }\n\n  .ads-panel-heading h2,\n  .ads-editor-heading h2 {\n    font-size: 19px;\n  }\n\n}@media (max-width: 700px) {\n\n  .admin-columns.admin-ads-page {\n    gap: 16px;\n  }\n\n  .ads-panel-heading,\n  .ads-editor-heading {\n    align-items: flex-start;\n    gap: 12px;\n  }\n\n  .ads-panel-heading h2,\n  .ads-editor-heading h2 {\n    font-size: 18px;\n  }\n\n  .saved-ads {\n    gap: 14px;\n  }\n\n  .saved-ad-card {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 13px;\n    padding: 13px;\n  }\n\n  .saved-ad-image {\n    aspect-ratio: 16 / 9;\n  }\n\n  .saved-ad-heading h3 {\n    font-size: 16px;\n  }\n\n  .saved-ad-actions {\n    margin-top: 6px;\n  }\n\n  .ads-editor-form {\n    gap: 15px;\n  }\n\n  .ads-upload-section {\n    padding: 14px;\n  }\n\n  .ads-upload-label {\n    min-height: 115px;\n    padding: 19px 12px;\n  }\n\n  .ads-preview .upload-preview {\n    max-height: 270px;\n  }\n\n  .ads-editor-actions .btn {\n    flex: 1;\n  }\n\n}@media (max-width: 420px) {\n\n  .ads-panel-heading .btn {\n    width: 100%;\n  }\n\n  .ads-toolbar {\n    align-items: flex-start;\n  }\n\n  .saved-ad-heading {\n    flex-direction: column;\n  }\n\n  .ad-status {\n    align-self: flex-start;\n  }\n\n  .saved-ad-actions .btn {\n    width: 100%;\n  }\n\n  .ads-editor-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .ads-editor-actions .btn {\n    width: 100%;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .saved-ad-card,\n  .admin-ads-page .btn,\n  .ads-upload-label,\n  .ads-editor-form input,\n  .ads-editor-form select {\n    transition: none;\n  }\n\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.NewsApiService }, { type: i4.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAdsComponent, { className: "AdminAdsComponent", filePath: "src/app/admin/ads/ads.component.ts", lineNumber: 40 }); })();
//# sourceMappingURL=ads.component.js.map