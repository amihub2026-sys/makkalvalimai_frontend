import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { uid, istDay } from '../../core/models';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function AdminAlertsComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2, " Loading alerts from MongoDB... ");
    i0.ɵɵelementEnd();
} }
function AdminAlertsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "i", 43);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No public alerts yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 5);
    i0.ɵɵtext(5, "Select New Alert to create your first public notice.");
    i0.ɵɵelementEnd()();
} }
function AdminAlertsComponent_button_19_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r2.title.ta);
} }
function AdminAlertsComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function AdminAlertsComponent_button_19_Template_button_click_0_listener() { const a_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.draft = ctx_r2.clone(a_r2)); });
    i0.ɵɵelementStart(1, "span")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AdminAlertsComponent_button_19_small_6_Template, 2, 1, "small", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.draft.id === a_r2.id);
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingAudio);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r2.title.en || a_r2.title.ta || "Untitled Alert");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", a_r2.area, " \u00B7 ", a_r2.published ? "Published" : "Draft", " \u00B7 ", a_r2.effectiveDate, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r2.title.ta);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("green", a_r2.published)("warning", !a_r2.published);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r2.published ? "LIVE" : "DRAFT", " ");
} }
function AdminAlertsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-audio-player", 45);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function AdminAlertsComponent_div_75_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.draft.audio.ta = ""); });
    i0.ɵɵtext(3, " Remove Tamil Audio ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.draft.audio.ta);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingAudio);
} }
function AdminAlertsComponent_p_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "No Tamil MP3 selected.");
    i0.ɵɵelementEnd();
} }
function AdminAlertsComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-audio-player", 45);
    i0.ɵɵelementStart(2, "button", 7);
    i0.ɵɵlistener("click", function AdminAlertsComponent_div_81_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.draft.audio.en = ""); });
    i0.ɵɵtext(3, " Remove English Audio ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.draft.audio.en);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingAudio);
} }
function AdminAlertsComponent_p_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "No English MP3 selected.");
    i0.ɵɵelementEnd();
} }
function AdminAlertsComponent_p_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2, " Uploading MP3 to backend... ");
    i0.ɵɵelementEnd();
} }
function AdminAlertsComponent_p_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 46);
    i0.ɵɵelement(1, "i", 47);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.error, " ");
} }
function AdminAlertsComponent_p_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 48);
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.message, " ");
} }
function AdminAlertsComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function AdminAlertsComponent_button_95_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.remove()); });
    i0.ɵɵelement(1, "i", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.saving || ctx_r2.deleting || ctx_r2.uploadingAudio);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.deleting ? "Deleting..." : "Delete / Clear", " ");
} }
// ==========================================
// CREATE BLANK PUBLIC ALERT
// ==========================================
function blank() {
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
        expiresAt: istDay(new Date(Date.now() + 7 * 86400000)),
        source: '',
        published: false,
        audio: {
            ta: '',
            en: ''
        }
    };
}
export class AdminAlertsComponent {
    store;
    media;
    api;
    http;
    // ==========================================
    // ALERT DATA
    // ==========================================
    draft = blank();
    // All alerts from MongoDB, including drafts
    alerts = [];
    error = '';
    message = '';
    loading = false;
    saving = false;
    deleting = false;
    uploadingAudio = false;
    constructor(store, media, api, http) {
        this.store = store;
        this.media = media;
        this.api = api;
        this.http = http;
    }
    ngOnInit() {
        void this.loadAlerts();
    }
    // ==========================================
    // LOAD ALL ADMIN ALERTS FROM MONGODB
    // ==========================================
    async loadAlerts() {
        this.loading = true;
        this.error = '';
        try {
            await this.api.restoreSession();
            const result = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/alerts`, {
                withCredentials: true
            }));
            this.alerts = result;
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // EDIT EXISTING ALERT
    // ==========================================
    clone(a) {
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
    newAlert() {
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
    async audio(event, lang) {
        const input = event.target;
        const file = input.files?.[0];
        input.value = '';
        if (!file || this.saving || this.uploadingAudio) {
            return;
        }
        this.error = '';
        this.message = '';
        // MP3 validation
        if (file.type !== 'audio/mpeg' &&
            !/\.mp3$/i.test(file.name)) {
            this.error = 'Only MP3 audio files are supported.';
            return;
        }
        if (file.size <= 0 ||
            file.size > 20 * 1024 * 1024) {
            this.error =
                'MP3 file must be under 20 MB.';
            return;
        }
        this.uploadingAudio = true;
        try {
            // Upload directly to Node.js backend
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'audio') {
                throw new Error('The uploaded file was not recognized as audio.');
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
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingAudio = false;
        }
    }
    // ==========================================
    // SAVE ALERT TO MONGODB
    // ==========================================
    async save() {
        if (this.saving || this.uploadingAudio) {
            return;
        }
        this.error = '';
        this.message = '';
        // Both languages required
        if (!this.draft.title.en.trim() ||
            !this.draft.title.ta.trim() ||
            !this.draft.body.en.trim() ||
            !this.draft.body.ta.trim() ||
            !this.draft.source.trim()) {
            this.error =
                'Both languages and official source are required.';
            return;
        }
        if (!this.draft.area.trim()) {
            this.error = 'Alert location is required.';
            return;
        }
        if (!this.draft.effectiveDate ||
            !this.draft.expiresAt) {
            this.error =
                'Effective date and expiry date are required.';
            return;
        }
        if (this.draft.expiresAt < this.draft.effectiveDate) {
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
            const saved = await this.api.upsertAlert(structuredClone(this.draft));
            // Update the editor only after saving
            this.draft = this.clone(saved);
            // Reload admin alerts from MongoDB
            await this.loadAlerts();
            // Refresh published website content
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Alert was saved even if public refresh fails.
            }
            this.message = saved.published
                ? 'Public alert published successfully.'
                : 'Public alert saved as draft successfully.';
            this.error = '';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // DELETE ALERT FROM MONGODB
    // ==========================================
    async remove() {
        if (this.saving || this.deleting) {
            return;
        }
        this.error = '';
        this.message = '';
        const id = this.draft.id;
        // If this is an unsaved draft, clear it.
        const exists = this.alerts.some(alert => alert.id === id);
        if (!exists) {
            this.newAlert();
            return;
        }
        const confirmed = window.confirm('Are you sure you want to delete this public alert?');
        if (!confirmed) {
            return;
        }
        this.deleting = true;
        try {
            const session = await this.api.restoreSession();
            // Existing Node.js endpoint:
            // DELETE /api/admin/alerts/:id
            await firstValueFrom(this.http.delete(`${environment.apiBaseUrl}/admin/alerts/${encodeURIComponent(id)}`, {
                withCredentials: true,
                headers: {
                    'X-CSRF-Token': session.csrfToken
                }
            }));
            this.draft = blank();
            await this.loadAlerts();
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Deletion has already succeeded.
            }
            this.error = '';
            this.message =
                'Public alert deleted successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.deleting = false;
        }
    }
    // ==========================================
    // ERROR HANDLING
    // ==========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            const message = error.error?.error ||
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
    static ɵfac = function AdminAlertsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminAlertsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.NewsApiService), i0.ɵɵdirectiveInject(i4.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAlertsComponent, selectors: [["app-admin-alerts"]], decls: 96, vars: 53, consts: [[1, "admin-columns"], [1, "panel", "glass"], [1, "section-title"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], [1, "fa-solid", "fa-plus"], [1, "muted"], [1, "moderation-actions"], ["type", "button", 1, "btn", "outline", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], ["class", "muted", "role", "status", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "admin-list"], ["type", "button", "class", "admin-list-item", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "panel", "glass", "editor-form", 3, "ngSubmit"], [1, "chip"], [1, "form-grid"], ["type", "text", "name", "ta", "required", "", "placeholder", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "en", "required", "", "placeholder", "Public notice heading", 3, "ngModelChange", "ngModel", "disabled"], ["name", "bodyta", "rows", "5", "required", "", "placeholder", "\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BBF\u0BA9\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD", 3, "ngModelChange", "ngModel", "disabled"], ["name", "bodyen", "rows", "5", "required", "", "placeholder", "Complete details of the public notice", 3, "ngModelChange", "ngModel", "disabled"], ["name", "type", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["value", "water"], ["value", "electricity"], ["value", "traffic"], ["value", "rain"], ["value", "other"], ["type", "text", "name", "area", "required", "", "placeholder", "Madurai district", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", "name", "effective", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", "name", "expiry", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "source", "required", "", "placeholder", "Official notice, department or verified source", 3, "ngModelChange", "ngModel", "disabled"], ["type", "file", "accept", ".mp3,audio/mpeg", 3, "change", "disabled"], [4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "checkbox-label"], ["type", "checkbox", "name", "published", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["class", "success-message", "role", "status", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-red", 3, "disabled"], [1, "fa-solid"], ["type", "button", "class", "btn outline danger", 3, "disabled", "click", 4, "ngIf"], ["role", "status", 1, "muted"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "empty-state"], [1, "fa-solid", "fa-bell"], ["type", "button", 1, "admin-list-item", 3, "click", "disabled"], [3, "src"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"], ["type", "button", 1, "btn", "outline", "danger", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"]], template: function AdminAlertsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵtext(4, "Public Notices");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function AdminAlertsComponent_Template_button_click_5_listener() { return ctx.newAlert(); });
            i0.ɵɵelement(6, "i", 4);
            i0.ɵɵtext(7, " New Alert ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, "Manage public notices saved in MongoDB.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function AdminAlertsComponent_Template_button_click_11_listener() { return ctx.loadAlerts(); });
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 5);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, AdminAlertsComponent_p_16_Template, 3, 0, "p", 9)(17, AdminAlertsComponent_div_17_Template, 6, 0, "div", 10);
            i0.ɵɵelementStart(18, "div", 11);
            i0.ɵɵtemplate(19, AdminAlertsComponent_button_19_Template, 9, 13, "button", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "form", 13);
            i0.ɵɵlistener("ngSubmit", function AdminAlertsComponent_Template_form_ngSubmit_20_listener() { return ctx.save(); });
            i0.ɵɵelementStart(21, "div", 2)(22, "h2");
            i0.ɵɵtext(23, "Madurai Public Alert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 14);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "p", 5);
            i0.ɵɵtext(27, "Enter verified information in Tamil and English.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 15)(29, "label");
            i0.ɵɵtext(30, " Tamil Heading * ");
            i0.ɵɵelementStart(31, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_31_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.title.ta, $event) || (ctx.draft.title.ta = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "label");
            i0.ɵɵtext(33, " English Heading * ");
            i0.ɵɵelementStart(34, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_34_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.title.en, $event) || (ctx.draft.title.en = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "div", 15)(36, "label");
            i0.ɵɵtext(37, " \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 * ");
            i0.ɵɵelementStart(38, "textarea", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_textarea_ngModelChange_38_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.body.ta, $event) || (ctx.draft.body.ta = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "label");
            i0.ɵɵtext(40, " English Notice * ");
            i0.ɵɵelementStart(41, "textarea", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_textarea_ngModelChange_41_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.body.en, $event) || (ctx.draft.body.en = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 15)(43, "label");
            i0.ɵɵtext(44, " Alert Type * ");
            i0.ɵɵelementStart(45, "select", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_select_ngModelChange_45_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.type, $event) || (ctx.draft.type = $event); return $event; });
            i0.ɵɵelementStart(46, "option", 21);
            i0.ɵɵtext(47, "Water Supply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "option", 22);
            i0.ɵɵtext(49, "Electricity");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "option", 23);
            i0.ɵɵtext(51, "Traffic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "option", 24);
            i0.ɵɵtext(53, "Rain / Weather");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "option", 25);
            i0.ɵɵtext(55, "Other");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "label");
            i0.ɵɵtext(57, " Area / Location * ");
            i0.ɵɵelementStart(58, "input", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_58_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.area, $event) || (ctx.draft.area = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "label");
            i0.ɵɵtext(60, " Effective Date * ");
            i0.ɵɵelementStart(61, "input", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_61_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.effectiveDate, $event) || (ctx.draft.effectiveDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "label");
            i0.ɵɵtext(63, " Expires On * ");
            i0.ɵɵelementStart(64, "input", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_64_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.expiresAt, $event) || (ctx.draft.expiresAt = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "label");
            i0.ɵɵtext(66, " Official Source / Verification * ");
            i0.ɵɵelementStart(67, "input", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_67_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.source, $event) || (ctx.draft.source = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "p", 5);
            i0.ɵɵtext(69, "Check the source and dates before publishing.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 15)(71, "div")(72, "label");
            i0.ɵɵtext(73, " Tamil MP3 (Optional) ");
            i0.ɵɵelementStart(74, "input", 30);
            i0.ɵɵlistener("change", function AdminAlertsComponent_Template_input_change_74_listener($event) { return ctx.audio($event, "ta"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(75, AdminAlertsComponent_div_75_Template, 4, 2, "div", 31)(76, AdminAlertsComponent_p_76_Template, 2, 0, "p", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div")(78, "label");
            i0.ɵɵtext(79, " English MP3 (Optional) ");
            i0.ɵɵelementStart(80, "input", 30);
            i0.ɵɵlistener("change", function AdminAlertsComponent_Template_input_change_80_listener($event) { return ctx.audio($event, "en"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(81, AdminAlertsComponent_div_81_Template, 4, 2, "div", 31)(82, AdminAlertsComponent_p_82_Template, 2, 0, "p", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(83, AdminAlertsComponent_p_83_Template, 3, 0, "p", 9);
            i0.ɵɵelementStart(84, "label", 33)(85, "input", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminAlertsComponent_Template_input_ngModelChange_85_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.published, $event) || (ctx.draft.published = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(86, " Publish Alert ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "p", 5);
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(89, AdminAlertsComponent_p_89_Template, 3, 1, "p", 35)(90, AdminAlertsComponent_p_90_Template, 3, 1, "p", 36);
            i0.ɵɵelementStart(91, "div", 6)(92, "button", 37);
            i0.ɵɵelement(93, "i", 38);
            i0.ɵɵtext(94);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(95, AdminAlertsComponent_button_95_Template, 3, 2, "button", 39);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spin", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading ? "Loading..." : "Refresh Alerts", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.alerts.length, " saved alerts");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.alerts.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("green", ctx.draft.published)("warning", !ctx.draft.published);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.draft.published ? "Publish selected" : "Draft", " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.title.ta);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.title.en);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.body.ta);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.body.en);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.type);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(13);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.area);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.effectiveDate);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.expiresAt);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.source);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.draft.audio.ta);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.draft.audio.ta);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.draft.audio.en);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.draft.audio.en);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadingAudio);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.published);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.draft.published ? "This alert is marked for publication. Verify its content and dates before saving." : "This alert remains a draft until you choose to publish it.", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.uploadingAudio);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spinner", ctx.saving)("fa-spin", ctx.saving)("fa-floppy-disk", !ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Saving Alert..." : ctx.draft.published ? "Save & Publish" : "Save Draft", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.alerts.length > 0);
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, FormsModule, i6.ɵNgNoValidate, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.CheckboxControlValueAccessor, i6.SelectControlValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.RequiredValidator, i6.NgModel, i6.NgForm, AudioPlayerComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }", "\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%] { width: 100%; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAlertsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-alerts', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    AudioPlayerComponent
                ], template: "\n<!-- MAKKAL VALIMAI - PUBLIC ALERTS ADMIN -->\n<div class=\"admin-columns\">\n\n  <!-- LEFT: ALERTS FROM MONGODB -->\n  <section class=\"panel glass\">\n    <div class=\"section-title\">\n      <h2>Public Notices</h2>\n      <button\n        type=\"button\"\n        class=\"btn btn-red\"\n        (click)=\"newAlert()\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n      >\n        <i class=\"fa-solid fa-plus\"></i> New Alert\n      </button>\n    </div>\n\n    <p class=\"muted\">Manage public notices saved in MongoDB.</p>\n\n    <div class=\"moderation-actions\">\n      <button\n        type=\"button\"\n        class=\"btn outline small\"\n        (click)=\"loadAlerts()\"\n        [disabled]=\"loading || saving || deleting || uploadingAudio\"\n      >\n        <i class=\"fa-solid fa-rotate\" [class.fa-spin]=\"loading\"></i>\n        {{ loading ? 'Loading...' : 'Refresh Alerts' }}\n      </button>\n      <span class=\"muted\">{{ alerts.length }} saved alerts</span>\n    </div>\n\n    <p class=\"muted\" *ngIf=\"loading\" role=\"status\">\n      <i class=\"fa-solid fa-spinner fa-spin\"></i> Loading alerts from MongoDB...\n    </p>\n\n    <div class=\"empty-state\" *ngIf=\"!loading && alerts.length === 0\">\n      <i class=\"fa-solid fa-bell\"></i>\n      <h3>No public alerts yet</h3>\n      <p class=\"muted\">Select New Alert to create your first public notice.</p>\n    </div>\n\n    <div class=\"admin-list\">\n      <button\n        *ngFor=\"let a of alerts\"\n        type=\"button\"\n        class=\"admin-list-item\"\n        (click)=\"draft = clone(a)\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n        [class.active]=\"draft.id === a.id\"\n      >\n        <span>\n          <b>{{ a.title.en || a.title.ta || 'Untitled Alert' }}</b>\n          <small>\n            {{ a.area }} \u00B7 {{ a.published ? 'Published' : 'Draft' }}\n            \u00B7 {{ a.effectiveDate }}\n          </small>\n          <small *ngIf=\"a.title.ta\">{{ a.title.ta }}</small>\n        </span>\n        <span\n          class=\"chip\"\n          [class.green]=\"a.published\"\n          [class.warning]=\"!a.published\"\n        >\n          {{ a.published ? 'LIVE' : 'DRAFT' }}\n        </span>\n      </button>\n    </div>\n  </section>\n\n  <!-- RIGHT: CREATE / EDIT ALERT -->\n  <form class=\"panel glass editor-form\" (ngSubmit)=\"save()\">\n    <div class=\"section-title\">\n      <h2>Madurai Public Alert</h2>\n      <span\n        class=\"chip\"\n        [class.green]=\"draft.published\"\n        [class.warning]=\"!draft.published\"\n      >\n        {{ draft.published ? 'Publish selected' : 'Draft' }}\n      </span>\n    </div>\n\n    <p class=\"muted\">Enter verified information in Tamil and English.</p>\n\n    <div class=\"form-grid\">\n      <label>\n        Tamil Heading *\n        <input\n          type=\"text\"\n          name=\"ta\"\n          [(ngModel)]=\"draft.title.ta\"\n          required\n          placeholder=\"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\"\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        />\n      </label>\n\n      <label>\n        English Heading *\n        <input\n          type=\"text\"\n          name=\"en\"\n          [(ngModel)]=\"draft.title.en\"\n          required\n          placeholder=\"Public notice heading\"\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        />\n      </label>\n    </div>\n\n    <div class=\"form-grid\">\n      <label>\n        \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 *\n        <textarea\n          name=\"bodyta\"\n          [(ngModel)]=\"draft.body.ta\"\n          rows=\"5\"\n          required\n          placeholder=\"\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BBF\u0BA9\u0BCD \u0BAE\u0BC1\u0BB4\u0BC1 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD\"\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        ></textarea>\n      </label>\n\n      <label>\n        English Notice *\n        <textarea\n          name=\"bodyen\"\n          [(ngModel)]=\"draft.body.en\"\n          rows=\"5\"\n          required\n          placeholder=\"Complete details of the public notice\"\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        ></textarea>\n      </label>\n    </div>\n\n    <div class=\"form-grid\">\n      <label>\n        Alert Type *\n        <select\n          name=\"type\"\n          [(ngModel)]=\"draft.type\"\n          required\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        >\n          <option value=\"water\">Water Supply</option>\n          <option value=\"electricity\">Electricity</option>\n          <option value=\"traffic\">Traffic</option>\n          <option value=\"rain\">Rain / Weather</option>\n          <option value=\"other\">Other</option>\n        </select>\n      </label>\n\n      <label>\n        Area / Location *\n        <input\n          type=\"text\"\n          name=\"area\"\n          [(ngModel)]=\"draft.area\"\n          required\n          placeholder=\"Madurai district\"\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        />\n      </label>\n\n      <label>\n        Effective Date *\n        <input\n          type=\"date\"\n          name=\"effective\"\n          [(ngModel)]=\"draft.effectiveDate\"\n          required\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        />\n      </label>\n\n      <label>\n        Expires On *\n        <input\n          type=\"date\"\n          name=\"expiry\"\n          [(ngModel)]=\"draft.expiresAt\"\n          required\n          [disabled]=\"saving || deleting || uploadingAudio\"\n        />\n      </label>\n    </div>\n\n    <label>\n      Official Source / Verification *\n      <input\n        type=\"text\"\n        name=\"source\"\n        [(ngModel)]=\"draft.source\"\n        required\n        placeholder=\"Official notice, department or verified source\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n      />\n    </label>\n    <p class=\"muted\">Check the source and dates before publishing.</p>\n\n    <div class=\"form-grid\">\n      <div>\n        <label>\n          Tamil MP3 (Optional)\n          <input\n            type=\"file\"\n            accept=\".mp3,audio/mpeg\"\n            (change)=\"audio($event, 'ta')\"\n            [disabled]=\"saving || deleting || uploadingAudio\"\n          />\n        </label>\n        <div *ngIf=\"draft.audio.ta\">\n          <app-audio-player [src]=\"draft.audio.ta\" />\n          <button\n            type=\"button\"\n            class=\"btn outline small\"\n            (click)=\"draft.audio.ta = ''\"\n            [disabled]=\"saving || deleting || uploadingAudio\"\n          >\n            Remove Tamil Audio\n          </button>\n        </div>\n        <p class=\"muted\" *ngIf=\"!draft.audio.ta\">No Tamil MP3 selected.</p>\n      </div>\n\n      <div>\n        <label>\n          English MP3 (Optional)\n          <input\n            type=\"file\"\n            accept=\".mp3,audio/mpeg\"\n            (change)=\"audio($event, 'en')\"\n            [disabled]=\"saving || deleting || uploadingAudio\"\n          />\n        </label>\n        <div *ngIf=\"draft.audio.en\">\n          <app-audio-player [src]=\"draft.audio.en\" />\n          <button\n            type=\"button\"\n            class=\"btn outline small\"\n            (click)=\"draft.audio.en = ''\"\n            [disabled]=\"saving || deleting || uploadingAudio\"\n          >\n            Remove English Audio\n          </button>\n        </div>\n        <p class=\"muted\" *ngIf=\"!draft.audio.en\">No English MP3 selected.</p>\n      </div>\n    </div>\n\n    <p *ngIf=\"uploadingAudio\" class=\"muted\" role=\"status\">\n      <i class=\"fa-solid fa-spinner fa-spin\"></i> Uploading MP3 to backend...\n    </p>\n\n    <label class=\"checkbox-label\">\n      <input\n        type=\"checkbox\"\n        name=\"published\"\n        [(ngModel)]=\"draft.published\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n      />\n      Publish Alert\n    </label>\n    <p class=\"muted\">\n      {{ draft.published\n        ? 'This alert is marked for publication. Verify its content and dates before saving.'\n        : 'This alert remains a draft until you choose to publish it.' }}\n    </p>\n\n    <p class=\"form-error\" *ngIf=\"error\" role=\"alert\">\n      <i class=\"fa-solid fa-circle-exclamation\"></i> {{ error }}\n    </p>\n    <p class=\"success-message\" *ngIf=\"message\" role=\"status\">\n      <i class=\"fa-solid fa-circle-check\"></i> {{ message }}\n    </p>\n\n    <div class=\"moderation-actions\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-red\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n      >\n        <i\n          class=\"fa-solid\"\n          [class.fa-spinner]=\"saving\"\n          [class.fa-spin]=\"saving\"\n          [class.fa-floppy-disk]=\"!saving\"\n        ></i>\n        {{ saving ? 'Saving Alert...' : (draft.published ? 'Save & Publish' : 'Save Draft') }}\n      </button>\n\n      <!-- The remove() method checks whether the selected alert is saved. -->\n      <button\n        *ngIf=\"alerts.length > 0\"\n        type=\"button\"\n        class=\"btn outline danger\"\n        (click)=\"remove()\"\n        [disabled]=\"saving || deleting || uploadingAudio\"\n      >\n        <i class=\"fa-solid fa-trash\"></i>\n        {{ deleting ? 'Deleting...' : 'Delete / Clear' }}\n      </button>\n    </div>\n  </form>\n</div>\n", styles: ["/* alerts page \u2014 edit this file to change this page without touching others.\n   Layout tokens (.glass, .panel, .container, .btn) live in src/styles.css. */\n:host { display: block; min-width: 0; }\n", "/* Responsive rules for alerts; isolated from common/desktop CSS. */\n@media (max-width: 640px) {\n  :host { width: 100%; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.NewsApiService }, { type: i4.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAlertsComponent, { className: "AdminAlertsComponent", filePath: "src/app/admin/alerts/alerts.component.ts", lineNumber: 83 }); })();
//# sourceMappingURL=alerts.component.js.map