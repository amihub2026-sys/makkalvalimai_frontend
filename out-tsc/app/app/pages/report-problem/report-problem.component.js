import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ISSUE_CATEGORIES } from '../../core/models';
import { SUGGESTED_AREAS } from '../../core/areas';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ReportProblemComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r2, " ");
} }
function ReportProblemComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 32);
} if (rf & 2) {
    const locality_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", locality_r3);
} }
function ReportProblemComponent_p_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 33);
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.prefs.label("\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD \u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...", "Preparing photo preview..."), " ");
} }
function ReportProblemComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "p", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 37);
    i0.ɵɵelementStart(4, "button", 38);
    i0.ɵɵlistener("click", function ReportProblemComponent_div_46_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.removePhoto()); });
    i0.ɵɵelement(5, "i", 39);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 40);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.prefs.label("\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD", "Selected Photo Preview"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r5.photo, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r5.submitting || ctx_r5.uploadingPhoto);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.prefs.label("\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1", "Remove Photo"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.prefs.label("\u0BB5\u0BC7\u0BB1\u0BC1 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BC6\u0BA9\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB2\u0BB0\u0BBF \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B95\u0BC7\u0BAE\u0BB0\u0BBE\u0BB5\u0BC8 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD.", "To change the photo, choose Gallery or Camera again."), " ");
} }
function ReportProblemComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵelement(1, "i", 42);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.error, " ");
} }
function ReportProblemComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelement(1, "i", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.prefs.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0BA4\u0BCD\u0BA4 \u0BAA\u0BBF\u0BB1\u0B95\u0BC7 \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.", "Report saved as Pending. It will not show publicly until approved."), " ");
} }
export class ReportProblemComponent {
    store;
    prefs;
    api;
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
    selectedPhoto = null;
    error = '';
    complete = false;
    submitting = false;
    uploadingPhoto = false;
    categories = ISSUE_CATEGORIES;
    areas = SUGGESTED_AREAS;
    // Prevent an outdated FileReader result from
    // replacing a newer photo selection.
    photoRequestId = 0;
    constructor(store, prefs, api) {
        this.store = store;
        this.prefs = prefs;
        this.api = api;
    }
    // ==========================================
    // SELECT IMAGE FROM GALLERY OR CAMERA
    // ==========================================
    async upload(event) {
        const input = event.target;
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
        if (file.size <= 0 ||
            file.size > 8 * 1000 * 1000) {
            this.error =
                'Photo must be larger than 0 bytes and under 8 MB.';
            return;
        }
        this.uploadingPhoto = true;
        try {
            // Read the image locally using FileReader
            const preview = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    if (typeof reader.result === 'string') {
                        resolve(reader.result);
                    }
                    else {
                        reject(new Error('Unable to preview image.'));
                    }
                };
                reader.onerror = () => {
                    reject(new Error('Unable to read selected image.'));
                };
                reader.readAsDataURL(file);
            });
            if (requestId !== this.photoRequestId) {
                return;
            }
            // Save original file for complaint submission
            this.selectedPhoto = file;
            // Show local image preview directly
            this.photo = preview;
            this.error = '';
        }
        catch (error) {
            if (requestId !== this.photoRequestId) {
                return;
            }
            this.error =
                error instanceof Error
                    ? error.message
                    : 'Unable to preview the selected photo.';
        }
        finally {
            if (requestId === this.photoRequestId) {
                this.uploadingPhoto = false;
            }
        }
    }
    // ==========================================
    // REMOVE SELECTED PHOTO
    // ==========================================
    removePhoto() {
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
    async submit() {
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
        if (title.length < 5 ||
            title.length > 180) {
            this.error =
                'Complaint title must contain 5 to 180 characters.';
            return;
        }
        if (area.length < 2 ||
            area.length > 160) {
            this.error =
                'Enter a valid area or location.';
            return;
        }
        if (description.length < 15 ||
            description.length > 4000) {
            this.error =
                'Complaint description must contain 15 to 4000 characters.';
            return;
        }
        if (street.length > 160) {
            this.error =
                'Street / landmark must be under 160 characters.';
            return;
        }
        if (!this.categories.some(item => item === category)) {
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
            data.append('file', this.selectedPhoto, this.selectedPhoto.name);
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
            }
            catch {
                // Submission has already succeeded.
                // Do not display a false submission error.
            }
        }
        catch (error) {
            this.complete = false;
            this.error = this.getError(error);
        }
        finally {
            this.submitting = false;
        }
    }
    // ==========================================
    // CLEAR PHOTO AFTER SUCCESS
    // ==========================================
    removePhotoAfterSubmit() {
        ++this.photoRequestId;
        this.selectedPhoto = null;
        this.photo = '';
        this.uploadingPhoto = false;
    }
    // ==========================================
    // COMPONENT CLEANUP
    // ==========================================
    ngOnDestroy() {
        this.removePhotoAfterSubmit();
    }
    // ==========================================
    // BACKEND ERROR HANDLING
    // ==========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            const serverMessage = error.error?.error ||
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
    static ɵfac = function ReportProblemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportProblemComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.NewsApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportProblemComponent, selectors: [["app-report"]], decls: 55, vars: 40, consts: [["galleryInput", ""], ["cameraInput", ""], [1, "container", "page-section", "report-problem-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-bullhorn", "giant-icon"], [3, "src"], [1, "editor-form", "report-form", "glass", 3, "ngSubmit"], [1, "form-grid"], ["type", "text", "name", "title", "placeholder", "Potholes near the main road", "required", "", "minlength", "5", "maxlength", "180", 3, "ngModelChange", "ngModel", "disabled"], ["name", "category", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "area", "placeholder", "KK Nagar, Melur, Vadipatti...", "list", "mv-areas", "required", "", "minlength", "2", "maxlength", "160", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "street", "placeholder", "Landmark only; avoid home addresses", "maxlength", "160", 3, "ngModelChange", "ngModel", "disabled"], ["id", "mv-areas"], ["name", "description", "rows", "5", "required", "", "minlength", "15", "maxlength", "4000", "placeholder", "Explain the issue, location and how residents are affected.", 3, "ngModelChange", "ngModel", "disabled"], [1, "report-photo-options"], [1, "photo-option-buttons", 2, "display", "flex", "flex-wrap", "wrap", "align-items", "center", "gap", "12px", "margin-top", "12px", "margin-bottom", "15px"], ["type", "button", 1, "btn", "outline", 3, "click", "disabled"], [1, "fa-solid", "fa-images"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], [1, "fa-solid", "fa-camera"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 2, "display", "none", 3, "change", "disabled"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", "capture", "environment", 2, "display", "none", 3, "change", "disabled"], ["class", "muted", "role", "status", 4, "ngIf"], ["class", "report-photo-preview", "style", "\n        margin-top:10px;\n        margin-bottom:18px;\n      ", 4, "ngIf"], [1, "safety-note"], [1, "fa-solid", "fa-shield-halved"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-red", 3, "disabled"], [1, "fa-solid"], ["class", "success-message", "role", "status", 4, "ngIf"], [3, "value"], ["role", "status", 1, "muted"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "report-photo-preview", 2, "margin-top", "10px", "margin-bottom", "18px"], [1, "muted"], ["alt", "Selected complaint photo preview", 1, "upload-preview", 2, "display", "block", "max-width", "100%", "max-height", "260px", "width", "auto", "height", "auto", "object-fit", "contain", "border-radius", "12px", 3, "src"], ["type", "button", 1, "btn", "outline", "small", 2, "margin-top", "12px", 3, "click", "disabled"], [1, "fa-solid", "fa-trash-can"], [1, "muted", 2, "font-size", "12px", "margin-top", "8px"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"]], template: function ReportProblemComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "span", 4);
            i0.ɵɵtext(4, " PUBLIC CIVIC REPORTING \u00B7 MADURAI DISTRICT ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(9, "i", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "app-audio-player", 6);
            i0.ɵɵelementStart(11, "form", 7);
            i0.ɵɵlistener("ngSubmit", function ReportProblemComponent_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(12, "div", 8)(13, "label");
            i0.ɵɵtext(14);
            i0.ɵɵelementStart(15, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function ReportProblemComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.title, $event) || (ctx.title = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "label");
            i0.ɵɵtext(17);
            i0.ɵɵelementStart(18, "select", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function ReportProblemComponent_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.category, $event) || (ctx.category = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(19, ReportProblemComponent_option_19_Template, 2, 2, "option", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "label");
            i0.ɵɵtext(21);
            i0.ɵɵelementStart(22, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ReportProblemComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.area, $event) || (ctx.area = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵtext(24);
            i0.ɵɵelementStart(25, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function ReportProblemComponent_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.street, $event) || (ctx.street = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "datalist", 14);
            i0.ɵɵtemplate(27, ReportProblemComponent_option_27_Template, 1, 1, "option", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "label");
            i0.ɵɵtext(29);
            i0.ɵɵelementStart(30, "textarea", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ReportProblemComponent_Template_textarea_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.description, $event) || (ctx.description = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 16)(32, "label");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 17)(35, "button", 18);
            i0.ɵɵlistener("click", function ReportProblemComponent_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r1); const galleryInput_r4 = i0.ɵɵreference(42); return i0.ɵɵresetView(galleryInput_r4.click()); });
            i0.ɵɵelement(36, "i", 19);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 20);
            i0.ɵɵlistener("click", function ReportProblemComponent_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r1); const cameraInput_r5 = i0.ɵɵreference(44); return i0.ɵɵresetView(cameraInput_r5.click()); });
            i0.ɵɵelement(39, "i", 21);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "input", 22, 0);
            i0.ɵɵlistener("change", function ReportProblemComponent_Template_input_change_41_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.upload($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "input", 23, 1);
            i0.ɵɵlistener("change", function ReportProblemComponent_Template_input_change_43_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.upload($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(45, ReportProblemComponent_p_45_Template, 3, 1, "p", 24)(46, ReportProblemComponent_div_46_Template, 9, 5, "div", 25);
            i0.ɵɵelementStart(47, "p", 26);
            i0.ɵɵelement(48, "i", 27);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(50, ReportProblemComponent_p_50_Template, 3, 1, "p", 28);
            i0.ɵɵelementStart(51, "button", 29);
            i0.ɵɵelement(52, "i", 30);
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(54, ReportProblemComponent_div_54_Template, 3, 1, "div", 31);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD", "Report a Public Problem"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B9A\u0BBE\u0BB2\u0BC8, \u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD, \u0BAE\u0BBF\u0BA9\u0BCD\u0BB5\u0BBF\u0BB3\u0B95\u0BCD\u0B95\u0BC1, \u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB1 \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BC8 \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.", "Report roads, water, drainage, waste, streetlights and other Madurai district issues."), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.prefs.language() === "ta" ? ((tmp_4_0 = ctx.store.settings().sectionAudio.report) == null ? null : tmp_4_0.ta) || "" : ((tmp_4_0 = ctx.store.settings().sectionAudio.report) == null ? null : tmp_4_0.en) || "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BBF\u0BA9\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1", "Issue title"), " * ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.title);
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BB5\u0B95\u0BC8", "Category"), " * ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.category);
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0B95\u0BC1\u0BA4\u0BBF / \u0B8A\u0BB0\u0BCD", "Area / Town / Village"), " * ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.area);
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BA4\u0BC6\u0BB0\u0BC1 \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD (\u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD)", "Street / landmark (optional)"), " ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.street);
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.areas);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Describe the problem"), " * ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.description);
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD", "Problem Photo"), " (JPEG, PNG, WebP \u00B7 Max 8MB) ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.submitting || ctx.uploadingPhoto);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B95\u0BC7\u0BB2\u0BB0\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95", "Choose from Gallery"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.submitting || ctx.uploadingPhoto);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B95\u0BC7\u0BAE\u0BB0\u0BBE\u0BB5\u0BBF\u0BB2\u0BCD \u0BAA\u0B9F\u0BAE\u0BCD \u0B8E\u0B9F\u0BC1\u0B95\u0BCD\u0B95", "Take Photo"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.submitting || ctx.uploadingPhoto);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.submitting || ctx.uploadingPhoto);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.uploadingPhoto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.photo);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0BA4\u0BCD\u0BA4 \u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BB5\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1\u0BB5\u0BBF\u0BB2\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1. \u0BA4\u0BA9\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0B95\u0BB5\u0BB2\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B86\u0BA4\u0BBE\u0BB0\u0BAE\u0BB1\u0BCD\u0BB1 \u0B95\u0BC1\u0BB1\u0BCD\u0BB1\u0B9A\u0BCD\u0B9A\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD.", "Your report stays private until an administrator approves it. Avoid personal information and unsupported allegations."), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.submitting || ctx.uploadingPhoto);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spinner", ctx.submitting)("fa-spin", ctx.submitting)("fa-paper-plane", !ctx.submitting);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.submitting ? ctx.prefs.label("\u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...", "Submitting complaint...") : ctx.prefs.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BC8\u0B9A\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95", "Submit for admin review"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.complete);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.MaxLengthValidator, i5.NgModel, i5.NgForm, AudioPlayerComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.report-problem-page[_ngcontent-%COMP%] { min-width: 0; }\n.report-problem-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .report-problem-page[_ngcontent-%COMP%] { width: 100%; }\n  .report-problem-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportProblemComponent, [{
        type: Component,
        args: [{ selector: 'app-report', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    AudioPlayerComponent
                ], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI\n     REPORT A PUBLIC PROBLEM\n     GALLERY + CAMERA + MONGODB\n     ========================================== -->\n\n<div class=\"container page-section report-problem-page\">\n\n  <!-- ======================================\n       PAGE INTRODUCTION\n       ====================================== -->\n\n  <div class=\"page-intro glass\">\n\n    <div>\n\n      <span class=\"eyebrow\">\n        PUBLIC CIVIC REPORTING \u00B7 MADURAI DISTRICT\n      </span>\n\n      <h1>\n        {{\n          prefs.label(\n            '\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD',\n            'Report a Public Problem'\n          )\n        }}\n      </h1>\n\n      <p>\n        {{\n          prefs.label(\n            '\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0B9A\u0BBE\u0BB2\u0BC8, \u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD, \u0BAE\u0BBF\u0BA9\u0BCD\u0BB5\u0BBF\u0BB3\u0B95\u0BCD\u0B95\u0BC1, \u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB1 \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BC8 \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.',\n            'Report roads, water, drainage, waste, streetlights and other Madurai district issues.'\n          )\n        }}\n      </p>\n\n    </div>\n\n    <i class=\"fa-solid fa-bullhorn giant-icon\"></i>\n\n  </div>\n\n  <!-- ======================================\n       OPTIONAL AUDIO GUIDE\n       ====================================== -->\n\n  <app-audio-player\n    [src]=\"\n      prefs.language() === 'ta'\n        ? (store.settings().sectionAudio.report?.ta || '')\n        : (store.settings().sectionAudio.report?.en || '')\n    \"\n  />\n\n  <!-- ======================================\n       REPORT SUBMISSION FORM\n       ====================================== -->\n\n  <form\n    class=\"editor-form report-form glass\"\n    (ngSubmit)=\"submit()\"\n  >\n\n    <div class=\"form-grid\">\n\n      <!-- ISSUE TITLE -->\n      <label>\n\n        {{\n          prefs.label(\n            '\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BBF\u0BA9\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1',\n            'Issue title'\n          )\n        }}\n        *\n\n        <input\n          type=\"text\"\n          name=\"title\"\n          [(ngModel)]=\"title\"\n          placeholder=\"Potholes near the main road\"\n          required\n          minlength=\"5\"\n          maxlength=\"180\"\n          [disabled]=\"submitting\"\n        />\n\n      </label>\n\n      <!-- ISSUE CATEGORY -->\n      <label>\n\n        {{\n          prefs.label(\n            '\u0BB5\u0B95\u0BC8',\n            'Category'\n          )\n        }}\n        *\n\n        <select\n          name=\"category\"\n          [(ngModel)]=\"category\"\n          required\n          [disabled]=\"submitting\"\n        >\n\n          <option\n            *ngFor=\"let c of categories\"\n            [value]=\"c\"\n          >\n            {{ c }}\n          </option>\n\n        </select>\n\n      </label>\n\n      <!-- AREA / LOCALITY -->\n      <label>\n\n        {{\n          prefs.label(\n            '\u0BAA\u0B95\u0BC1\u0BA4\u0BBF / \u0B8A\u0BB0\u0BCD',\n            'Area / Town / Village'\n          )\n        }}\n        *\n\n        <input\n          type=\"text\"\n          name=\"area\"\n          [(ngModel)]=\"area\"\n          placeholder=\"KK Nagar, Melur, Vadipatti...\"\n          list=\"mv-areas\"\n          required\n          minlength=\"2\"\n          maxlength=\"160\"\n          [disabled]=\"submitting\"\n        />\n\n      </label>\n\n      <!-- STREET OR LANDMARK -->\n      <label>\n\n        {{\n          prefs.label(\n            '\u0BA4\u0BC6\u0BB0\u0BC1 \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD (\u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD)',\n            'Street / landmark (optional)'\n          )\n        }}\n\n        <input\n          type=\"text\"\n          name=\"street\"\n          [(ngModel)]=\"street\"\n          placeholder=\"Landmark only; avoid home addresses\"\n          maxlength=\"160\"\n          [disabled]=\"submitting\"\n        />\n\n      </label>\n\n    </div>\n\n    <!-- ======================================\n         MADURAI AREA SUGGESTIONS\n         ====================================== -->\n\n    <datalist id=\"mv-areas\">\n\n      <option\n        *ngFor=\"let locality of areas\"\n        [value]=\"locality\"\n      ></option>\n\n    </datalist>\n\n    <!-- ======================================\n         ISSUE DESCRIPTION\n         ====================================== -->\n\n    <label>\n\n      {{\n        prefs.label(\n          '\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8 \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD',\n          'Describe the problem'\n        )\n      }}\n      *\n\n      <textarea\n        name=\"description\"\n        [(ngModel)]=\"description\"\n        rows=\"5\"\n        required\n        minlength=\"15\"\n        maxlength=\"4000\"\n        [disabled]=\"submitting\"\n        placeholder=\"Explain the issue, location and how residents are affected.\"\n      ></textarea>\n\n    </label>\n\n    <!-- ======================================\n         PROBLEM PHOTO\n         ====================================== -->\n\n    <div class=\"report-photo-options\">\n\n      <label>\n\n        {{\n          prefs.label(\n            '\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD',\n            'Problem Photo'\n          )\n        }}\n\n        (JPEG, PNG, WebP \u00B7 Max 8MB)\n\n      </label>\n\n      <!-- PHOTO ACTION BUTTONS -->\n      <div\n        class=\"photo-option-buttons\"\n        style=\"\n          display:flex;\n          flex-wrap:wrap;\n          align-items:center;\n          gap:12px;\n          margin-top:12px;\n          margin-bottom:15px;\n        \"\n      >\n\n        <!-- GALLERY BUTTON -->\n        <button\n          type=\"button\"\n          class=\"btn outline\"\n          (click)=\"galleryInput.click()\"\n          [disabled]=\"submitting || uploadingPhoto\"\n        >\n\n          <i class=\"fa-solid fa-images\"></i>\n\n          {{\n            prefs.label(\n              '\u0B95\u0BC7\u0BB2\u0BB0\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95',\n              'Choose from Gallery'\n            )\n          }}\n\n        </button>\n\n        <!-- CAMERA BUTTON -->\n        <button\n          type=\"button\"\n          class=\"btn btn-red\"\n          (click)=\"cameraInput.click()\"\n          [disabled]=\"submitting || uploadingPhoto\"\n        >\n\n          <i class=\"fa-solid fa-camera\"></i>\n\n          {{\n            prefs.label(\n              '\u0B95\u0BC7\u0BAE\u0BB0\u0BBE\u0BB5\u0BBF\u0BB2\u0BCD \u0BAA\u0B9F\u0BAE\u0BCD \u0B8E\u0B9F\u0BC1\u0B95\u0BCD\u0B95',\n              'Take Photo'\n            )\n          }}\n\n        </button>\n\n      </div>\n\n      <!-- ==================================\n           HIDDEN GALLERY INPUT\n           ================================== -->\n\n      <input\n        #galleryInput\n        type=\"file\"\n        accept=\"image/jpeg,image/png,image/webp\"\n        (change)=\"upload($event)\"\n        [disabled]=\"submitting || uploadingPhoto\"\n        style=\"display:none\"\n      />\n\n      <!-- ==================================\n           HIDDEN CAMERA INPUT\n           REQUEST REAR CAMERA ON MOBILE\n           ================================== -->\n\n      <input\n        #cameraInput\n        type=\"file\"\n        accept=\"image/jpeg,image/png,image/webp\"\n        capture=\"environment\"\n        (change)=\"upload($event)\"\n        [disabled]=\"submitting || uploadingPhoto\"\n        style=\"display:none\"\n      />\n\n    </div>\n\n    <!-- ======================================\n         PHOTO LOADING\n         ====================================== -->\n\n    <p\n      *ngIf=\"uploadingPhoto\"\n      class=\"muted\"\n      role=\"status\"\n    >\n\n      <i class=\"fa-solid fa-spinner fa-spin\"></i>\n\n      {{\n        prefs.label(\n          '\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD \u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...',\n          'Preparing photo preview...'\n        )\n      }}\n\n    </p>\n\n    <!-- ======================================\n         SELECTED PHOTO PREVIEW\n         ====================================== -->\n\n    <div\n      *ngIf=\"photo\"\n      class=\"report-photo-preview\"\n      style=\"\n        margin-top:10px;\n        margin-bottom:18px;\n      \"\n    >\n\n      <p class=\"muted\">\n\n        {{\n          prefs.label(\n            '\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD',\n            'Selected Photo Preview'\n          )\n        }}\n\n      </p>\n\n      <!-- IMPORTANT:\n           USE photo DIRECTLY.\n           DO NOT USE media.url(photo). -->\n\n      <img\n        class=\"upload-preview\"\n        [src]=\"photo\"\n        alt=\"Selected complaint photo preview\"\n        style=\"\n          display:block;\n          max-width:100%;\n          max-height:260px;\n          width:auto;\n          height:auto;\n          object-fit:contain;\n          border-radius:12px;\n        \"\n      />\n\n      <!-- REMOVE PHOTO BUTTON -->\n      <button\n        type=\"button\"\n        class=\"btn outline small\"\n        (click)=\"removePhoto()\"\n        [disabled]=\"submitting || uploadingPhoto\"\n        style=\"margin-top:12px\"\n      >\n\n        <i class=\"fa-solid fa-trash-can\"></i>\n\n        {{\n          prefs.label(\n            '\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1',\n            'Remove Photo'\n          )\n        }}\n\n      </button>\n\n      <p\n        class=\"muted\"\n        style=\"\n          font-size:12px;\n          margin-top:8px;\n        \"\n      >\n\n        {{\n          prefs.label(\n            '\u0BB5\u0BC7\u0BB1\u0BC1 \u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BAE\u0BCD \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BC6\u0BA9\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB2\u0BB0\u0BBF \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B95\u0BC7\u0BAE\u0BB0\u0BBE\u0BB5\u0BC8 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD.',\n            'To change the photo, choose Gallery or Camera again.'\n          )\n        }}\n\n      </p>\n\n    </div>\n\n    <!-- ======================================\n         PRIVACY NOTICE\n         ====================================== -->\n\n    <p class=\"safety-note\">\n\n      <i class=\"fa-solid fa-shield-halved\"></i>\n\n      {{\n        prefs.label(\n          '\u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0BA4\u0BCD\u0BA4 \u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BB5\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1\u0BB5\u0BBF\u0BB2\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BBE\u0BA4\u0BC1. \u0BA4\u0BA9\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0B95\u0BB5\u0BB2\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B86\u0BA4\u0BBE\u0BB0\u0BAE\u0BB1\u0BCD\u0BB1 \u0B95\u0BC1\u0BB1\u0BCD\u0BB1\u0B9A\u0BCD\u0B9A\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC8\u0B9A\u0BCD \u0B9A\u0BC7\u0BB0\u0BCD\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD.',\n          'Your report stays private until an administrator approves it. Avoid personal information and unsupported allegations.'\n        )\n      }}\n\n    </p>\n\n    <!-- ======================================\n         VALIDATION OR API ERROR\n         ====================================== -->\n\n    <p\n      *ngIf=\"error\"\n      class=\"form-error\"\n      role=\"alert\"\n    >\n\n      <i class=\"fa-solid fa-circle-exclamation\"></i>\n\n      {{ error }}\n\n    </p>\n\n    <!-- ======================================\n         SUBMIT BUTTON\n         ====================================== -->\n\n    <button\n      class=\"btn btn-red\"\n      type=\"submit\"\n      [disabled]=\"submitting || uploadingPhoto\"\n    >\n\n      <i\n        class=\"fa-solid\"\n        [class.fa-spinner]=\"submitting\"\n        [class.fa-spin]=\"submitting\"\n        [class.fa-paper-plane]=\"!submitting\"\n      ></i>\n\n      {{\n        submitting\n          ? prefs.label(\n              '\u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...',\n              'Submitting complaint...'\n            )\n          : prefs.label(\n              '\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BC8\u0B9A\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95',\n              'Submit for admin review'\n            )\n      }}\n\n    </button>\n\n    <!-- ======================================\n         SUCCESS MESSAGE\n         ONLY AFTER BACKEND RESPONSE\n         ====================================== -->\n\n    <div\n      *ngIf=\"complete\"\n      class=\"success-message\"\n      role=\"status\"\n    >\n\n      <i class=\"fa-solid fa-circle-check\"></i>\n\n      {{\n        prefs.label(\n          '\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0BA4\u0BCD\u0BA4 \u0BAA\u0BBF\u0BB1\u0B95\u0BC7 \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.',\n          'Report saved as Pending. It will not show publicly until approved.'\n        )\n      }}\n\n    </div>\n\n  </form>\n\n</div>\n", styles: ["/* report-problem: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.report-problem-page { min-width: 0; }\n.report-problem-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for report-problem; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .report-problem-page { width: 100%; }\n  .report-problem-page .page-intro { margin-bottom: 1rem; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.NewsApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportProblemComponent, { className: "ReportProblemComponent", filePath: "src/app/pages/report-problem/report-problem.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=report-problem.component.js.map