import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SECTIONS } from '../../core/models';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { AudioRecorderComponent } from '../../shared/audio-recorder/audio-recorder.component';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/news-api.service";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function SectionAudioAdminComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2, " Loading saved audio settings... ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", entry_r1.section);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", entry_r1.name.en, " \u00B7 ", entry_r1.name.ta, " ");
} }
function SectionAudioAdminComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2, " Processing / Uploading Tamil audio... ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, " No Tamil recording assigned to this section. ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2, " Processing / Uploading English audio... ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_p_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, " No English recording assigned to this section. ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_p_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2, " Saving audio assignment to MongoDB... ");
    i0.ɵɵelementEnd();
} }
function SectionAudioAdminComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.message, " ");
} }
function SectionAudioAdminComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
export class SectionAudioAdminComponent {
    store;
    api;
    http;
    // ========================================
    // SECTION SELECTION
    // ========================================
    section = 'home';
    sections = SECTIONS;
    // ========================================
    // SETTINGS
    // ========================================
    settings;
    // ========================================
    // LOADING STATES
    // ========================================
    loading = false;
    saving = false;
    uploading = null;
    // ========================================
    // MESSAGES
    // ========================================
    message = '';
    error = '';
    // ========================================
    // CONSTRUCTOR
    // ========================================
    constructor(store, api, http) {
        this.store = store;
        this.api = api;
        this.http = http;
        this.settings = structuredClone(this.store.settings());
    }
    // ========================================
    // INITIAL LOAD
    // ========================================
    ngOnInit() {
        void this.loadSettings();
    }
    // ========================================
    // BUSY STATUS
    // ========================================
    get busy() {
        return (this.loading ||
            this.saving ||
            this.uploading !== null);
    }
    // ========================================
    // RESET MESSAGES
    // ========================================
    clearMessages() {
        this.message = '';
        this.error = '';
    }
    // ========================================
    // LOAD AUDIO SETTINGS
    // ========================================
    async loadSettings() {
        if (this.busy)
            return;
        this.loading = true;
        this.clearMessages();
        try {
            await this.api.restoreSession();
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/settings`, {
                withCredentials: true
            }));
            if (!response ||
                typeof response !== 'object' ||
                Array.isArray(response)) {
                throw new Error('Invalid audio settings received from backend.');
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
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ========================================
    // CURRENT SECTION AUDIO
    // ========================================
    source(lang) {
        return (this.settings.sectionAudio?.[this.section]?.[lang] ||
            '');
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
    async assignRecordedAudio(lang, url) {
        // The recorder may still report itself as
        // uploading while it emits the URL.
        // Therefore, do not block on this.busy here.
        if (this.saving)
            return;
        this.clearMessages();
        if (typeof url !== 'string' ||
            !url.trim()) {
            this.error =
                'Audio upload did not return a valid URL.';
            return;
        }
        const targetSection = this.section;
        try {
            await this.persistAudio(targetSection, lang, url.trim());
            const language = lang === 'ta' ? 'Tamil' : 'English';
            this.message =
                `${language} audio uploaded and saved successfully.`;
        }
        catch (error) {
            this.error = this.getError(error);
        }
    }
    // ========================================
    // REMOVE AUDIO
    // ========================================
    async remove(lang) {
        if (this.busy)
            return;
        this.clearMessages();
        const existingUrl = this.source(lang);
        if (!existingUrl) {
            this.message =
                'No audio is assigned to this section.';
            return;
        }
        const language = lang === 'ta' ? 'Tamil' : 'English';
        const confirmed = window.confirm(`Remove ${language} audio from this section?`);
        if (!confirmed)
            return;
        const targetSection = this.section;
        try {
            await this.persistAudio(targetSection, lang, '');
            this.message =
                `${language} audio removed successfully.`;
        }
        catch (error) {
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
    async persistAudio(targetSection, lang, url) {
        if (this.saving) {
            throw new Error('Another audio assignment is being saved.');
        }
        this.saving = true;
        try {
            // Restore the existing admin session.
            const session = await this.api.restoreSession();
            if (!session?.csrfToken) {
                throw new Error('Missing CSRF token. Please log in again.');
            }
            // Fetch the latest settings to preserve
            // other website configuration.
            const current = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/settings`, {
                withCredentials: true
            }));
            if (!current ||
                typeof current !== 'object' ||
                Array.isArray(current)) {
                throw new Error('Unable to load current website settings.');
            }
            // Make a safe copy.
            const next = structuredClone(current);
            // Preserve existing section assignments.
            next.sectionAudio = {
                ...(next.sectionAudio || {})
            };
            const previousAudio = next.sectionAudio[targetSection] || {
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
            await firstValueFrom(this.http.put(`${environment.apiBaseUrl}/admin/settings`, next, {
                withCredentials: true,
                headers: {
                    'X-CSRF-Token': session.csrfToken
                }
            }));
            // Update current Angular state.
            this.settings = next;
            // Refresh public content.
            // Failure here does not undo a
            // successful backend save.
            try {
                await this.store.refreshFromBackend();
            }
            catch (refreshError) {
                console.warn('Audio saved, but public refresh failed.', refreshError);
            }
        }
        finally {
            this.saving = false;
        }
    }
    // ========================================
    // ERROR HANDLING
    // ========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
                return ('Cannot connect to the Node.js backend. ' +
                    'Check whether the server is running.');
            }
            if (error.status === 401) {
                return ('Your admin session has expired. ' +
                    'Please log in again.');
            }
            if (error.status === 403) {
                return ('Access denied or invalid CSRF token.');
            }
            if (error.status === 413) {
                return ('Audio file exceeds the backend upload limit.');
            }
            if (error.status === 400 ||
                error.status === 415) {
                return ('Backend rejected the audio request. ' +
                    this.backendMessage(error));
            }
            return (this.backendMessage(error) ||
                `Backend request failed (${error.status}).`);
        }
        if (error instanceof Error) {
            return error.message;
        }
        return 'Unexpected error while saving audio.';
    }
    // ========================================
    // BACKEND ERROR MESSAGE
    // ========================================
    backendMessage(error) {
        const details = error.error?.error ??
            error.error?.message;
        if (typeof details === 'string') {
            return details;
        }
        return '';
    }
    static ɵfac = function SectionAudioAdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SectionAudioAdminComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.NewsApiService), i0.ɵɵdirectiveInject(i3.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SectionAudioAdminComponent, selectors: [["app-admin-audio"]], decls: 50, vars: 20, consts: [[1, "panel", "glass", "audio-admin-page"], [1, "section-title", "audio-admin-heading"], [1, "fa-solid", "fa-headphones"], ["type", "button", 1, "btn", "outline", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], [1, "muted"], ["class", "muted audio-loading", "role", "status", 4, "ngIf"], [1, "audio-section-picker"], ["for", "audio-section-select"], ["id", "audio-section-select", "name", "section", 3, "ngModelChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-grid", "audio-admin-grid"], [1, "glass", "audio-upload-box"], [1, "fa-solid", "fa-volume-high"], ["language", "ta", 3, "uploaded", "disabled"], ["class", "muted", "role", "status", 4, "ngIf"], [1, "audio-preview"], [3, "src"], ["class", "muted", 4, "ngIf"], ["type", "button", 1, "btn", "outline", "danger", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"], ["language", "en", 3, "uploaded", "disabled"], ["class", "success-message", "role", "status", 4, "ngIf"], ["class", "form-error", "role", "alert", 4, "ngIf"], [1, "muted", "audio-admin-note"], ["role", "status", 1, "muted", "audio-loading"], [1, "fa-solid", "fa-spinner", "fa-spin"], [3, "value"], ["role", "status", 1, "muted"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"]], template: function SectionAudioAdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵelement(3, "i", 2);
            i0.ɵɵtext(4, " Audio Management \u2014 Every Website Section ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function SectionAudioAdminComponent_Template_button_click_5_listener() { return ctx.loadSettings(); });
            i0.ɵɵelement(6, "i", 4);
            i0.ɵɵtext(7, " Reload Audio ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Choose Record New Audio or Select Audio File separately for Tamil and English. Recordings and selected files are processed in the browser and uploaded using your existing media API. ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, SectionAudioAdminComponent_p_10_Template, 3, 0, "p", 6);
            i0.ɵɵelementStart(11, "div", 7)(12, "label", 8);
            i0.ɵɵtext(13, " Choose a Website Section ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function SectionAudioAdminComponent_Template_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.section, $event) || (ctx.section = $event); return $event; });
            i0.ɵɵtemplate(15, SectionAudioAdminComponent_option_15_Template, 2, 3, "option", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 11)(17, "section", 12)(18, "h3");
            i0.ɵɵelement(19, "i", 13);
            i0.ɵɵtext(20, " \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B92\u0BB2\u0BBF \u00B7 Tamil Audio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "app-audio-recorder", 14);
            i0.ɵɵlistener("uploaded", function SectionAudioAdminComponent_Template_app_audio_recorder_uploaded_21_listener($event) { return ctx.assignRecordedAudio("ta", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, SectionAudioAdminComponent_p_22_Template, 3, 0, "p", 15);
            i0.ɵɵelementStart(23, "div", 16)(24, "h4");
            i0.ɵɵtext(25, "Current Tamil Recording");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "app-audio-player", 17);
            i0.ɵɵtemplate(27, SectionAudioAdminComponent_p_27_Template, 2, 0, "p", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 19);
            i0.ɵɵlistener("click", function SectionAudioAdminComponent_Template_button_click_28_listener() { return ctx.remove("ta"); });
            i0.ɵɵelement(29, "i", 20);
            i0.ɵɵtext(30, " Remove Tamil Audio ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "section", 12)(32, "h3");
            i0.ɵɵelement(33, "i", 13);
            i0.ɵɵtext(34, " English Audio ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "app-audio-recorder", 21);
            i0.ɵɵlistener("uploaded", function SectionAudioAdminComponent_Template_app_audio_recorder_uploaded_35_listener($event) { return ctx.assignRecordedAudio("en", $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, SectionAudioAdminComponent_p_36_Template, 3, 0, "p", 15);
            i0.ɵɵelementStart(37, "div", 16)(38, "h4");
            i0.ɵɵtext(39, "Current English Recording");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "app-audio-player", 17);
            i0.ɵɵtemplate(41, SectionAudioAdminComponent_p_41_Template, 2, 0, "p", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button", 19);
            i0.ɵɵlistener("click", function SectionAudioAdminComponent_Template_button_click_42_listener() { return ctx.remove("en"); });
            i0.ɵɵelement(43, "i", 20);
            i0.ɵɵtext(44, " Remove English Audio ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(45, SectionAudioAdminComponent_p_45_Template, 3, 0, "p", 15)(46, SectionAudioAdminComponent_p_46_Template, 3, 1, "p", 22)(47, SectionAudioAdminComponent_p_47_Template, 3, 1, "p", 23);
            i0.ɵɵelementStart(48, "p", 24);
            i0.ɵɵtext(49, " Supported source formats: MP3 and compatible OGG/Opus recordings. Microphone recordings and OGG files are converted to MP3 in the browser before upload. Maximum audio size: 20 MB. Microphone permission is required for recording. ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.busy);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spin", ctx.loading);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.section);
            i0.ɵɵproperty("disabled", ctx.busy);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.sections);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.busy);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploading === "ta");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.source("ta"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.source("ta"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.busy || !ctx.source("ta"));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.busy);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploading === "en");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.source("en"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.source("en"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.busy || !ctx.source("en"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel, AudioPlayerComponent,
            AudioRecorderComponent], styles: ["\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.audio-admin-page[_ngcontent-%COMP%], \n.audio-admin-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n.audio-admin-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.audio-admin-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n\n\n\n\n\n.audio-admin-page[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  color: #f5f6fa;\n}\n\n\n\n\n\n\n.audio-admin-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.audio-admin-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(19px, 2vw, 24px);\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.audio-admin-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #ff4f77;\n}\n\n.audio-admin-heading[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 39px;\n}\n\n.audio-admin-page[_ngcontent-%COMP%]    > p.muted[_ngcontent-%COMP%] {\n  color: #b1bdce;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n\n\n\n\n\n.audio-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 15px;\n  margin: 15px 0;\n  border: 1px solid #35425a;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.035);\n  color: #c5d1e1;\n  font-size: 13px;\n}\n\n.audio-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff5279;\n}\n\n\n\n\n\n\n.audio-section-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  width: 100%;\n  min-width: 0;\n  margin: 25px 0 21px;\n  padding: 20px;\n  border: 1px solid #3c4860;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #e7edf7;\n  font-size: 14px;\n  font-weight: 750;\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 47px;\n  padding: 11px 14px;\n  border: 1px solid #45536b;\n  border-radius: 9px;\n  background: #0c1525;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6d7c95;\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #f64b74;\n  box-shadow: 0 0 0 3px rgba(246, 75, 116, 0.13);\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #111b2c;\n  color: #ffffff;\n}\n\n\n\n\n\n\n.audio-admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: stretch;\n  gap: 20px;\n  width: 100%;\n  min-width: 0;\n  margin: 1.3rem 0;\n}\n\n.audio-admin-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n\n\n\n\n\n.audio-upload-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  min-width: 0;\n  width: 100%;\n  padding: 22px;\n  border: 1px solid #3b475e;\n  border-radius: 15px;\n  background: linear-gradient(\n    145deg,\n    rgba(27, 37, 54, 0.96),\n    rgba(12, 19, 32, 0.98)\n  );\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin: 0;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #fa4e75;\n  font-size: 19px;\n}\n\n\n\n\n\n\n.audio-upload-box[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  min-width: 0;\n  color: #dce5f2;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.6;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  padding: 12px;\n  border: 1px dashed #596780;\n  border-radius: 10px;\n  background: #0b1423;\n  color: #c4cede;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]::file-selector-button {\n  margin-right: 12px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 7px;\n  background: #d51140;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #ff5079;\n  background: #101c30;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff7192;\n  outline-offset: 3px;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.audio-upload-box[_ngcontent-%COMP%]    > p.muted[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #aebcd0;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]    > p.muted[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fa4e75;\n}\n\n\n\n\n\n\n.audio-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  flex: 1;\n  min-width: 0;\n  width: 100%;\n  padding: 17px;\n  border: 1px solid #36445b;\n  border-radius: 12px;\n  background: #0c1423;\n}\n\n.audio-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 750;\n}\n\n.audio-preview[_ngcontent-%COMP%]   app-audio-player[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.audio-preview[_ngcontent-%COMP%]   p.muted[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #9eacc2;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n\n\n\n\n\n.audio-upload-box[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 44px;\n  padding: 11px 15px;\n  font-size: 13px;\n  font-weight: 700;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]    > .btn.danger[_ngcontent-%COMP%] {\n  border-color: rgba(245, 69, 106, 0.35);\n  color: #ff8ba5;\n}\n\n.audio-upload-box[_ngcontent-%COMP%]    > .btn.danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #fa4e75;\n  background: rgba(245, 69, 106, 0.09);\n}\n\n.audio-upload-box[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.audio-admin-page[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 18px 0 0;\n  padding: 14px 16px;\n  border: 1px solid rgba(40, 199, 130, 0.35);\n  border-radius: 10px;\n  background: rgba(40, 199, 130, 0.09);\n  color: #88edbd;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.audio-admin-page[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n\n\n\n\n\n.audio-admin-page[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 18px 0 0;\n  padding: 14px 16px;\n  border: 1px solid rgba(246, 64, 105, 0.4);\n  border-radius: 10px;\n  background: rgba(246, 64, 105, 0.09);\n  color: #ff9caf;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.audio-admin-page[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n\n\n\n\n\n.audio-admin-note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 15px 17px;\n  border: 1px solid #35445d;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.025);\n  color: #a7b5c9;\n  font-size: 12px;\n  line-height: 1.8;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.audio-record-tools[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:9px}\n.audio-record-tools[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:auto;min-height:38px}\n.audio-record-preview[_ngcontent-%COMP%]{display:grid;gap:9px;padding:12px;border:1px solid #699ed27a;border-radius:10px;background:#053767}\n.audio-record-preview[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{width:100%;max-width:100%}\n.audio-record-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}", "\n\n@media (max-width: 1000px) {\n\n  .audio-admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .audio-section-picker[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n\n}@media (max-width: 600px) {\n\n  .audio-admin-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 13px;\n  }\n\n  .audio-admin-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .audio-admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 14px;\n    margin: 1rem 0;\n  }\n\n  .audio-section-picker[_ngcontent-%COMP%] {\n    margin: 19px 0;\n    padding: 14px;\n  }\n\n  .audio-section-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 11px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]::file-selector-button {\n    padding: 9px 10px;\n    margin-right: 8px;\n  }\n\n  .audio-preview[_ngcontent-%COMP%] {\n    padding: 13px;\n    gap: 12px;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .audio-admin-note[_ngcontent-%COMP%] {\n    padding: 13px;\n    font-size: 11px;\n  }\n\n}@media (max-width: 400px) {\n\n  .audio-admin-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .audio-admin-heading[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .audio-upload-box[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .audio-preview[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .audio-upload-box[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%], \n   .audio-upload-box[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], \n   .audio-section-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    transition: none;\n  }\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SectionAudioAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-audio', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    AudioPlayerComponent,
                    AudioRecorderComponent
                ], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI\n     SECTION AUDIO MANAGEMENT\n     Record / Upload / Drag & Drop\n========================================== -->\n\n<div class=\"panel glass audio-admin-page\">\n\n  <!-- PAGE HEADER -->\n  <div class=\"section-title audio-admin-heading\">\n\n    <h2>\n      <i class=\"fa-solid fa-headphones\"></i>\n      Audio Management \u2014 Every Website Section\n    </h2>\n\n    <button\n      type=\"button\"\n      class=\"btn outline small\"\n      (click)=\"loadSettings()\"\n      [disabled]=\"busy\"\n    >\n      <i\n        class=\"fa-solid fa-rotate\"\n        [class.fa-spin]=\"loading\"\n      ></i>\n      Reload Audio\n    </button>\n\n  </div>\n\n  <p class=\"muted\">\n    Choose Record New Audio or Select Audio File\n    separately for Tamil and English.\n    Recordings and selected files are processed\n    in the browser and uploaded using your\n    existing media API.\n  </p>\n\n  <!-- LOADING -->\n  <p\n    class=\"muted audio-loading\"\n    *ngIf=\"loading\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n    Loading saved audio settings...\n  </p>\n\n  <!-- SECTION PICKER -->\n  <div class=\"audio-section-picker\">\n\n    <label for=\"audio-section-select\">\n      Choose a Website Section\n    </label>\n\n    <select\n      id=\"audio-section-select\"\n      name=\"section\"\n      [(ngModel)]=\"section\"\n      [disabled]=\"busy\"\n    >\n      <option\n        *ngFor=\"let entry of sections\"\n        [value]=\"entry.section\"\n      >\n        {{ entry.name.en }} \u00B7 {{ entry.name.ta }}\n      </option>\n    </select>\n\n  </div>\n\n  <!-- LANGUAGE AUDIO CARDS -->\n  <div class=\"form-grid audio-admin-grid\">\n\n    <!-- =====================================\n         TAMIL AUDIO\n    ====================================== -->\n    <section class=\"glass audio-upload-box\">\n\n      <h3>\n        <i class=\"fa-solid fa-volume-high\"></i>\n        \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0B92\u0BB2\u0BBF \u00B7 Tamil Audio\n      </h3>\n\n      <!-- RECORD / SELECT FILE COMPONENT -->\n     <app-audio-recorder\n  language=\"ta\"\n  [disabled]=\"busy\"\n  (uploaded)=\"assignRecordedAudio('ta', $event)\">\n</app-audio-recorder>\n      \n\n      <!-- UPLOAD PROGRESS -->\n      <p\n        class=\"muted\"\n        *ngIf=\"uploading === 'ta'\"\n        role=\"status\"\n      >\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        Processing / Uploading Tamil audio...\n      </p>\n\n      <!-- SAVED AUDIO -->\n      <div class=\"audio-preview\">\n\n        <h4>Current Tamil Recording</h4>\n\n        <app-audio-player\n          [src]=\"source('ta')\"\n        >\n        </app-audio-player>\n\n        <p\n          class=\"muted\"\n          *ngIf=\"!source('ta')\"\n        >\n          No Tamil recording assigned to this section.\n        </p>\n\n      </div>\n\n      <!-- REMOVE -->\n      <button\n        type=\"button\"\n        class=\"btn outline danger\"\n        (click)=\"remove('ta')\"\n        [disabled]=\"busy || !source('ta')\"\n      >\n        <i class=\"fa-solid fa-trash\"></i>\n        Remove Tamil Audio\n      </button>\n\n    </section>\n\n    <!-- =====================================\n         ENGLISH AUDIO\n    ====================================== -->\n    <section class=\"glass audio-upload-box\">\n\n      <h3>\n        <i class=\"fa-solid fa-volume-high\"></i>\n        English Audio\n      </h3>\n\n      <!-- RECORD / SELECT FILE COMPONENT -->\n   <app-audio-recorder\n  language=\"en\"\n  [disabled]=\"busy\"\n  (uploaded)=\"assignRecordedAudio('en', $event)\">\n</app-audio-recorder>\n\n      <!-- UPLOAD PROGRESS -->\n      <p\n        class=\"muted\"\n        *ngIf=\"uploading === 'en'\"\n        role=\"status\"\n      >\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        Processing / Uploading English audio...\n      </p>\n\n      <!-- SAVED AUDIO -->\n      <div class=\"audio-preview\">\n\n        <h4>Current English Recording</h4>\n\n        <app-audio-player\n          [src]=\"source('en')\"\n        >\n        </app-audio-player>\n\n        <p\n          class=\"muted\"\n          *ngIf=\"!source('en')\"\n        >\n          No English recording assigned to this section.\n        </p>\n\n      </div>\n\n      <!-- REMOVE -->\n      <button\n        type=\"button\"\n        class=\"btn outline danger\"\n        (click)=\"remove('en')\"\n        [disabled]=\"busy || !source('en')\"\n      >\n        <i class=\"fa-solid fa-trash\"></i>\n        Remove English Audio\n      </button>\n\n    </section>\n\n  </div>\n\n  <!-- SAVING -->\n  <p\n    class=\"muted\"\n    *ngIf=\"saving\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n    Saving audio assignment to MongoDB...\n  </p>\n\n  <!-- SUCCESS MESSAGE -->\n  <p\n    class=\"success-message\"\n    *ngIf=\"message\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-circle-check\"></i>\n    {{ message }}\n  </p>\n\n  <!-- ERROR MESSAGE -->\n  <p\n    class=\"form-error\"\n    *ngIf=\"error\"\n    role=\"alert\"\n  >\n    <i class=\"fa-solid fa-circle-exclamation\"></i>\n    {{ error }}\n  </p>\n\n  <!-- FILE INFORMATION -->\n  <p class=\"muted audio-admin-note\">\n    Supported source formats: MP3 and compatible\n    OGG/Opus recordings.\n    Microphone recordings and OGG files are converted\n    to MP3 in the browser before upload.\n    Maximum audio size: 20 MB.\n    Microphone permission is required for recording.\n  </p>\n\n</div>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI - ADMIN SECTION MP3 AUDIO\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.audio-admin-page,\n.audio-admin-page *,\n.audio-admin-page *::before,\n.audio-admin-page *::after {\n  box-sizing: border-box;\n}\n\n/* ==========================================\n   MAIN CONTAINER\n   ========================================== */\n\n.audio-admin-page {\n  width: 100%;\n  min-width: 0;\n  color: #f5f6fa;\n}\n\n/* ==========================================\n   PAGE HEADING\n   ========================================== */\n\n.audio-admin-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.audio-admin-heading h2 {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(19px, 2vw, 24px);\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.audio-admin-heading h2 i {\n  flex-shrink: 0;\n  color: #ff4f77;\n}\n\n.audio-admin-heading .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 39px;\n}\n\n.audio-admin-page > p.muted {\n  color: #b1bdce;\n  font-size: 13px;\n  line-height: 1.75;\n}\n\n/* ==========================================\n   LOADING MESSAGE\n   ========================================== */\n\n.audio-loading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 15px;\n  margin: 15px 0;\n  border: 1px solid #35425a;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.035);\n  color: #c5d1e1;\n  font-size: 13px;\n}\n\n.audio-loading i {\n  color: #ff5279;\n}\n\n/* ==========================================\n   WEBSITE SECTION SELECTOR\n   ========================================== */\n\n.audio-section-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  width: 100%;\n  min-width: 0;\n  margin: 25px 0 21px;\n  padding: 20px;\n  border: 1px solid #3c4860;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.audio-section-picker label {\n  color: #e7edf7;\n  font-size: 14px;\n  font-weight: 750;\n}\n\n.audio-section-picker select {\n  width: 100%;\n  min-width: 0;\n  min-height: 47px;\n  padding: 11px 14px;\n  border: 1px solid #45536b;\n  border-radius: 9px;\n  background: #0c1525;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-section-picker select:hover:not(:disabled) {\n  border-color: #6d7c95;\n}\n\n.audio-section-picker select:focus {\n  border-color: #f64b74;\n  box-shadow: 0 0 0 3px rgba(246, 75, 116, 0.13);\n}\n\n.audio-section-picker select:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.audio-section-picker select option {\n  background: #111b2c;\n  color: #ffffff;\n}\n\n/* ==========================================\n   TAMIL AND ENGLISH AUDIO GRID\n   ========================================== */\n\n.audio-admin-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: stretch;\n  gap: 20px;\n  width: 100%;\n  min-width: 0;\n  margin: 1.3rem 0;\n}\n\n.audio-admin-grid > * {\n  min-width: 0;\n}\n\n/* ==========================================\n   AUDIO UPLOAD CARDS\n   ========================================== */\n\n.audio-upload-box {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  min-width: 0;\n  width: 100%;\n  padding: 22px;\n  border: 1px solid #3b475e;\n  border-radius: 15px;\n  background: linear-gradient(\n    145deg,\n    rgba(27, 37, 54, 0.96),\n    rgba(12, 19, 32, 0.98)\n  );\n}\n\n.audio-upload-box h3 {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin: 0;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.audio-upload-box h3 i {\n  flex-shrink: 0;\n  color: #fa4e75;\n  font-size: 19px;\n}\n\n/* ==========================================\n   FILE UPLOAD FIELD\n   ========================================== */\n\n.audio-upload-box > label {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  min-width: 0;\n  color: #dce5f2;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.6;\n}\n\n.audio-upload-box input[type=\"file\"] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  padding: 12px;\n  border: 1px dashed #596780;\n  border-radius: 10px;\n  background: #0b1423;\n  color: #c4cede;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.audio-upload-box input[type=\"file\"]::file-selector-button {\n  margin-right: 12px;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 7px;\n  background: #d51140;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.audio-upload-box input[type=\"file\"]:hover:not(:disabled) {\n  border-color: #ff5079;\n  background: #101c30;\n}\n\n.audio-upload-box input[type=\"file\"]:focus-visible {\n  outline: 2px solid #ff7192;\n  outline-offset: 3px;\n}\n\n.audio-upload-box input[type=\"file\"]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   AUDIO UPLOAD PROGRESS\n   ========================================== */\n\n.audio-upload-box > p.muted {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #aebcd0;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-upload-box > p.muted i {\n  color: #fa4e75;\n}\n\n/* ==========================================\n   SAVED AUDIO PREVIEW\n   ========================================== */\n\n.audio-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  flex: 1;\n  min-width: 0;\n  width: 100%;\n  padding: 17px;\n  border: 1px solid #36445b;\n  border-radius: 12px;\n  background: #0c1423;\n}\n\n.audio-preview h4 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 750;\n}\n\n.audio-preview app-audio-player {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.audio-preview p.muted {\n  margin: 0;\n  color: #9eacc2;\n  font-size: 12px;\n  line-height: 1.65;\n}\n\n/* ==========================================\n   REMOVE AUDIO BUTTONS\n   ========================================== */\n\n.audio-upload-box > .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 44px;\n  padding: 11px 15px;\n  font-size: 13px;\n  font-weight: 700;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.audio-upload-box > .btn.danger {\n  border-color: rgba(245, 69, 106, 0.35);\n  color: #ff8ba5;\n}\n\n.audio-upload-box > .btn.danger:hover:not(:disabled) {\n  border-color: #fa4e75;\n  background: rgba(245, 69, 106, 0.09);\n}\n\n.audio-upload-box > .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   SUCCESS MESSAGE\n   ========================================== */\n\n.audio-admin-page .success-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 18px 0 0;\n  padding: 14px 16px;\n  border: 1px solid rgba(40, 199, 130, 0.35);\n  border-radius: 10px;\n  background: rgba(40, 199, 130, 0.09);\n  color: #88edbd;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.audio-admin-page .success-message i {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n/* ==========================================\n   ERROR MESSAGE\n   ========================================== */\n\n.audio-admin-page .form-error {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 18px 0 0;\n  padding: 14px 16px;\n  border: 1px solid rgba(246, 64, 105, 0.4);\n  border-radius: 10px;\n  background: rgba(246, 64, 105, 0.09);\n  color: #ff9caf;\n  font-size: 13px;\n  line-height: 1.7;\n}\n\n.audio-admin-page .form-error i {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n/* ==========================================\n   AUDIO INFORMATION NOTE\n   ========================================== */\n\n.audio-admin-note {\n  margin-top: 24px;\n  padding: 15px 17px;\n  border: 1px solid #35445d;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.025);\n  color: #a7b5c9;\n  font-size: 12px;\n  line-height: 1.8;\n}\n\n/* ==========================================\n   TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   SMALL MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   REDUCED MOTION\n   ========================================== */\n\n\n.audio-record-tools{display:flex;align-items:center;flex-wrap:wrap;gap:9px}\n.audio-record-tools .btn{width:auto;min-height:38px}\n.audio-record-preview{display:grid;gap:9px;padding:12px;border:1px solid #699ed27a;border-radius:10px;background:#053767}\n.audio-record-preview audio{width:100%;max-width:100%}\n.audio-record-preview p{margin:0}\n", "/* Responsive rules for audio; isolated from common/desktop CSS. */\n@media (max-width: 1000px) {\n\n  .audio-admin-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n\n  .audio-upload-box {\n    padding: 20px;\n  }\n\n  .audio-section-picker {\n    padding: 17px;\n  }\n\n}@media (max-width: 600px) {\n\n  .audio-admin-heading {\n    align-items: flex-start;\n    gap: 13px;\n  }\n\n  .audio-admin-heading h2 {\n    font-size: 18px;\n  }\n\n  .audio-admin-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 14px;\n    margin: 1rem 0;\n  }\n\n  .audio-section-picker {\n    margin: 19px 0;\n    padding: 14px;\n  }\n\n  .audio-section-picker label {\n    font-size: 13px;\n  }\n\n  .audio-section-picker select {\n    font-size: 13px;\n  }\n\n  .audio-upload-box {\n    gap: 16px;\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  .audio-upload-box h3 {\n    font-size: 15px;\n  }\n\n  .audio-upload-box input[type=\"file\"] {\n    padding: 10px;\n    font-size: 11px;\n  }\n\n  .audio-upload-box input[type=\"file\"]::file-selector-button {\n    padding: 9px 10px;\n    margin-right: 8px;\n  }\n\n  .audio-preview {\n    padding: 13px;\n    gap: 12px;\n  }\n\n  .audio-upload-box > .btn {\n    font-size: 12px;\n  }\n\n  .audio-admin-note {\n    padding: 13px;\n    font-size: 11px;\n  }\n\n}@media (max-width: 400px) {\n\n  .audio-admin-heading {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .audio-admin-heading .btn {\n    width: 100%;\n  }\n\n  .audio-upload-box {\n    padding: 12px;\n  }\n\n  .audio-preview {\n    padding: 11px;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .audio-upload-box input[type=\"file\"],\n  .audio-upload-box > .btn,\n  .audio-section-picker select {\n    transition: none;\n  }\n\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.NewsApiService }, { type: i3.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SectionAudioAdminComponent, { className: "SectionAudioAdminComponent", filePath: "src/app/admin/audio/audio.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=audio.component.js.map