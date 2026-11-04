import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ReportsAdminComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵtext(2, " Loading resident complaints from MongoDB... ");
    i0.ɵɵelementEnd();
} }
function ReportsAdminComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵelement(1, "i", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.message, " ");
} }
function ReportsAdminComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error, " ");
} }
function ReportsAdminComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No resident issues found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 3);
    i0.ɵɵtext(5, " Complaints submitted by residents will appear here for admin approval. ");
    i0.ɵɵelementEnd()();
} }
function ReportsAdminComponent_article_17_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} if (rf & 2) {
    const issue_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.issuePhoto(issue_r2), i0.ɵɵsanitizeUrl)("alt", "Reported issue: " + issue_r2.title);
} }
function ReportsAdminComponent_article_17_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ReportsAdminComponent_article_17_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const issue_r2 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateStatus(issue_r2, "approved")); });
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵtext(2, " Approve & Publish ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.loading);
} }
function ReportsAdminComponent_article_17_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function ReportsAdminComponent_article_17_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const issue_r2 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateStatus(issue_r2, "rejected")); });
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵtext(2, " Reject ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.loading);
} }
function ReportsAdminComponent_article_17_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function ReportsAdminComponent_article_17_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const issue_r2 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.select(issue_r2)); });
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵtext(2, " Mark Solved / Add Evidence ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.uploadingAfter);
} }
function ReportsAdminComponent_article_17_div_20_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵtext(2, " Uploading after-photo... ");
    i0.ɵɵelementEnd();
} }
function ReportsAdminComponent_article_17_div_20_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 3);
    i0.ɵɵtext(2, " Uploaded after-resolution photo: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.afterPreviewUrl, i0.ɵɵsanitizeUrl);
} }
function ReportsAdminComponent_article_17_div_20_label_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Uploaded Media Reference ");
    i0.ɵɵelement(2, "input", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.issueDraft.afterPhoto);
} }
function ReportsAdminComponent_article_17_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h3");
    i0.ɵɵelement(2, "i", 34);
    i0.ɵɵtext(3, " Resolution Verification ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 3);
    i0.ɵɵtext(5, " Add details of how this public issue was resolved. A verified after-photo is required. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label");
    i0.ɵɵtext(7, " Resolution Note * ");
    i0.ɵɵelementStart(8, "textarea", 35);
    i0.ɵɵtwoWayListener("ngModelChange", function ReportsAdminComponent_article_17_div_20_Template_textarea_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.issueDraft.resolution, $event) || (ctx_r0.issueDraft.resolution = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label");
    i0.ɵɵtext(10, " Upload After-Resolution Photo * ");
    i0.ɵɵelementStart(11, "input", 36);
    i0.ɵɵlistener("change", function ReportsAdminComponent_article_17_div_20_Template_input_change_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.uploadAfter($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, ReportsAdminComponent_article_17_div_20_p_12_Template, 3, 0, "p", 7)(13, ReportsAdminComponent_article_17_div_20_div_13_Template, 4, 1, "div", 37)(14, ReportsAdminComponent_article_17_div_20_label_14_Template, 3, 1, "label", 37);
    i0.ɵɵelementStart(15, "div", 4)(16, "button", 29);
    i0.ɵɵlistener("click", function ReportsAdminComponent_article_17_div_20_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveDetails(true)); });
    i0.ɵɵelement(17, "i", 15);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 5);
    i0.ɵɵlistener("click", function ReportsAdminComponent_article_17_div_20_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editing = ""); });
    i0.ɵɵtext(20, " Cancel ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.issueDraft.resolution);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.uploadingAfter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.uploadingAfter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.uploadingAfter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.afterPreviewUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.issueDraft.afterPhoto);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.uploadingAfter);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving ? "Saving..." : "Verify & Mark Solved", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving || ctx_r0.uploadingAfter);
} }
function ReportsAdminComponent_article_17_div_21_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2, "Resolution:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const issue_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", issue_r2.resolution, " ");
} }
function ReportsAdminComponent_article_17_div_21_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const issue_r2 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.media.url(issue_r2.afterPhoto), i0.ɵɵsanitizeUrl);
} }
function ReportsAdminComponent_article_17_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "span", 40);
    i0.ɵɵelement(2, "i", 15);
    i0.ɵɵtext(3, " Issue Resolved ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ReportsAdminComponent_article_17_div_21_p_4_Template, 4, 1, "p", 37)(5, ReportsAdminComponent_article_17_div_21_img_5_Template, 1, 1, "img", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const issue_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", issue_r2.resolution);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", issue_r2.afterPhoto);
} }
function ReportsAdminComponent_article_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 19);
    i0.ɵɵtemplate(1, ReportsAdminComponent_article_17_img_1_Template, 1, 2, "img", 20);
    i0.ɵɵelementStart(2, "div", 21)(3, "div", 22)(4, "span", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 3);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "h3");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 4);
    i0.ɵɵtemplate(17, ReportsAdminComponent_article_17_button_17_Template, 3, 1, "button", 24)(18, ReportsAdminComponent_article_17_button_18_Template, 3, 1, "button", 25)(19, ReportsAdminComponent_article_17_button_19_Template, 3, 1, "button", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, ReportsAdminComponent_article_17_div_20_Template, 21, 9, "div", 27)(21, ReportsAdminComponent_article_17_div_21_Template, 6, 2, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const issue_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", issue_r2.photo || issue_r2.privateMediaId);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("green", issue_r2.status === "approved" || issue_r2.status === "solved")("warning", issue_r2.status === "pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 16, issue_r2.status), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(9, 18, issue_r2.createdAt, "medium", "+0530"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(issue_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", issue_r2.category, " \u00B7 ", issue_r2.area, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", issue_r2.status === "pending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", issue_r2.status === "pending");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", issue_r2.status === "approved");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.issueDraft && ctx_r0.editing === issue_r2.id && issue_r2.status === "approved");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", issue_r2.status === "solved");
} }
export class ReportsAdminComponent {
    store;
    media;
    api;
    // All issues loaded from MongoDB
    issues = [];
    // Selected issue
    editing = '';
    issueDraft;
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
    constructor(store, media, api) {
        this.store = store;
        this.media = media;
        this.api = api;
    }
    ngOnInit() {
        void this.loadIssues();
    }
    // ==========================================
    // PENDING ISSUES COUNT
    // ==========================================
    get pendingCount() {
        return this.issues.filter(issue => issue.status === 'pending').length;
    }
    // ==========================================
    // LOAD ALL ISSUES FROM MONGODB
    // ==========================================
    async loadIssues() {
        this.loading = true;
        this.error = '';
        try {
            const result = await this.api.adminIssues();
            this.issues = result;
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // ISSUE PHOTO URL
    // ==========================================
    issuePhoto(issue) {
        // Approved public photo
        if (issue.photo) {
            return this.media.url(issue.photo);
        }
        // Pending issue private photo.
        // This endpoint requires an admin session.
        if (issue.privateMediaId) {
            const origin = new URL(environment.apiBaseUrl).origin;
            return new URL('/api/admin/media/private/' +
                encodeURIComponent(issue.privateMediaId), origin).href;
        }
        return '';
    }
    // ==========================================
    // APPROVE OR REJECT ISSUE
    // ==========================================
    async updateStatus(item, status) {
        if (this.saving || this.uploadingAfter) {
            return;
        }
        this.error = '';
        this.message = '';
        if (status !== 'approved' &&
            status !== 'rejected') {
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
            await this.api.moderateIssue(item.id, status);
            // Refresh admin complaints from MongoDB
            await this.loadIssues();
            // Refresh public website data
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Admin moderation has already succeeded.
            }
            this.message =
                status === 'approved'
                    ? 'Issue approved and published successfully.'
                    : 'Issue rejected successfully.';
            if (this.editing === item.id) {
                this.editing = '';
            }
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // SELECT ISSUE FOR REVIEW
    // ==========================================
    select(item) {
        if (this.saving || this.uploadingAfter) {
            return;
        }
        this.editing = item.id;
        this.issueDraft = structuredClone(item);
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
    async uploadAfter(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file) {
            return;
        }
        input.value = '';
        if (!this.editing ||
            !this.issueDraft ||
            this.saving ||
            this.uploadingAfter) {
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
        if (file.size <= 0 ||
            file.size > 10 * 1000 * 1000) {
            this.error =
                'Image must be larger than 0 bytes and under 10 MB.';
            return;
        }
        this.uploadingAfter = true;
        try {
            // Upload to real backend media API
            const result = await this.api.uploadMedia(file);
            if (result.kind !== 'image') {
                throw new Error('Uploaded file is not an image.');
            }
            // Backend moderation expects:
            // /api/public/media/UUID
            // Not http://localhost:5000/...
            const url = new URL(result.url, new URL(environment.apiBaseUrl, window.location.origin).origin);
            const relativePath = url.pathname;
            if (!/^\/api\/public\/media\/[a-f0-9-]{36}$/i.test(relativePath)) {
                throw new Error('Unexpected uploaded media reference.');
            }
            this.issueDraft.afterPhoto = relativePath;
            this.afterPreviewUrl = result.url;
            this.message =
                'After-photo uploaded. Add the resolution note and click Verify & Mark Solved.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingAfter = false;
        }
    }
    // ==========================================
    // ISSUE MP3 AUDIO
    // ==========================================
    uploadAudio(event, lang) {
        const input = event.target;
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
    async saveDetails(solved) {
        if (!this.issueDraft ||
            !this.editing ||
            this.saving ||
            this.uploadingAfter) {
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
        const resolution = this.issueDraft.resolution?.trim() || '';
        const afterPhoto = this.issueDraft.afterPhoto || '';
        if (resolution.length < 15) {
            this.error =
                'Resolution description must contain at least 15 characters.';
            return;
        }
        if (!/^\/api\/public\/media\/[a-f0-9-]{36}$/i.test(afterPhoto)) {
            this.error =
                'Upload a valid after-resolution photo first.';
            return;
        }
        this.saving = true;
        try {
            // Real MongoDB moderation request
            await this.api.moderateIssue(this.issueDraft.id, 'solved', {
                resolution,
                afterPhoto
            });
            // Refresh admin issues
            await this.loadIssues();
            // Refresh public data
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Resolution has already been saved.
            }
            this.editing = '';
            this.message =
                'Issue verified and marked solved successfully.';
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
            const serverMessage = error.error?.error ||
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
    static ɵfac = function ReportsAdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportsAdminComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.NewsApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReportsAdminComponent, selectors: [["app-admin-reports"]], decls: 18, vars: 7, consts: [[1, "panel", "glass"], [1, "section-title"], [1, "chip", "warning"], [1, "muted"], [1, "moderation-actions"], ["type", "button", 1, "btn", "outline", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], ["class", "muted", 4, "ngIf"], ["class", "chip green", "role", "status", 4, "ngIf"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "moderation-list"], ["class", "moderation-item", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-spinner", "fa-spin"], ["role", "status", 1, "chip", "green"], [1, "fa-solid", "fa-circle-check"], ["role", "alert", 1, "form-error"], [1, "empty-state"], [1, "fa-solid", "fa-clipboard-check"], [1, "moderation-item"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], [1, "moderation-body"], [1, "card-actions"], [1, "chip"], ["type", "button", "class", "btn success", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn outline danger", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn outline", 3, "disabled", "click", 4, "ngIf"], ["class", "issue-editor", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt"], ["type", "button", 1, "btn", "success", 3, "click", "disabled"], [1, "fa-solid", "fa-check"], ["type", "button", 1, "btn", "outline", "danger", 3, "click", "disabled"], [1, "fa-solid", "fa-xmark"], [1, "issue-editor"], [1, "fa-solid", "fa-file-circle-check"], ["rows", "4", "placeholder", "Explain how the issue was resolved (minimum 15 characters)", 3, "ngModelChange", "ngModel", "disabled"], ["type", "file", "accept", ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp", 3, "change", "disabled"], [4, "ngIf"], ["alt", "After-resolution evidence", 2, "display", "block", "width", "220px", "max-width", "100%", "height", "145px", "object-fit", "cover", "border-radius", "10px", 3, "src"], ["type", "text", "readonly", "", 3, "value"], [1, "chip", "green"], ["alt", "Verified resolution photo", "loading", "lazy", "style", "\n              display:block;\n              width:220px;\n              max-width:100%;\n              height:145px;\n              object-fit:cover;\n              border-radius:10px;\n            ", 3, "src", 4, "ngIf"], ["alt", "Verified resolution photo", "loading", "lazy", 2, "display", "block", "width", "220px", "max-width", "100%", "height", "145px", "object-fit", "cover", "border-radius", "10px", 3, "src"]], template: function ReportsAdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "Resident Issues \u2014 Admin Review");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "p", 3);
            i0.ɵɵtext(7, " No resident report is visible publicly until you approve it. Before marking an issue solved, verify the outcome and include an after-photo and resolution description. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4)(9, "button", 5);
            i0.ɵɵlistener("click", function ReportsAdminComponent_Template_button_click_9_listener() { return ctx.loadIssues(); });
            i0.ɵɵelement(10, "i", 6);
            i0.ɵɵtext(11, " Refresh Issues ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, ReportsAdminComponent_p_12_Template, 3, 0, "p", 7)(13, ReportsAdminComponent_p_13_Template, 3, 1, "p", 8)(14, ReportsAdminComponent_p_14_Template, 2, 1, "p", 9)(15, ReportsAdminComponent_div_15_Template, 6, 0, "div", 10);
            i0.ɵɵelementStart(16, "div", 11);
            i0.ɵɵtemplate(17, ReportsAdminComponent_article_17_Template, 22, 22, "article", 12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.pendingCount, " Pending ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.saving);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.issues.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.issues);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i4.UpperCasePipe, i4.DatePipe], styles: ["\n\n.moderation-list[_ngcontent-%COMP%] {\n  display:grid;gap:1rem\n}\n\n.moderation-item[_ngcontent-%COMP%] {\n  background:#101724;border:1px solid var(--line);border-radius:12px;padding:1rem;display:grid;grid-template-columns:155px minmax(0,1fr);gap:1rem\n}\n\n.moderation-item[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px\n}\n\n.moderation-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n\n.moderation-body[_ngcontent-%COMP%] > small[_ngcontent-%COMP%] {\n  display:block;margin:.3rem 0 1rem;color:#c2c7d5\n}\n\n.issue-editor[_ngcontent-%COMP%] {\n  padding:1rem;margin-top:1rem;background:#1a2230;border:1px solid #ffffff19;border-radius:12px;display:grid;gap:1rem\n}", "\n\n@media (max-width:600px) {\n.moderation-item[_ngcontent-%COMP%] {\n  grid-template-columns:90px minmax(0,1fr);padding:.65rem;gap:.55rem\n}\n.moderation-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n.moderation-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size:.71rem\n}\n.moderation-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size:.7rem;padding:.45rem\n}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-reports', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                ], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI\n     PUBLIC ISSUES - ADMIN MODERATION\n     ========================================== -->\n\n<section class=\"panel glass\">\n\n  <!-- PAGE HEADING -->\n  <div class=\"section-title\">\n    <h2>Resident Issues \u2014 Admin Review</h2>\n\n    <span class=\"chip warning\">\n      {{ pendingCount }} Pending\n    </span>\n  </div>\n\n  <p class=\"muted\">\n    No resident report is visible publicly until\n    you approve it. Before marking an issue solved,\n    verify the outcome and include an after-photo\n    and resolution description.\n  </p>\n\n  <!-- REFRESH FROM MONGODB -->\n  <div class=\"moderation-actions\">\n    <button\n      type=\"button\"\n      class=\"btn outline\"\n      (click)=\"loadIssues()\"\n      [disabled]=\"loading || saving\"\n    >\n      <i class=\"fa-solid fa-rotate\"></i>\n      Refresh Issues\n    </button>\n  </div>\n\n  <!-- LOADING -->\n  <p class=\"muted\" *ngIf=\"loading\">\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n    Loading resident complaints from MongoDB...\n  </p>\n\n  <!-- SUCCESS -->\n  <p\n    *ngIf=\"message\"\n    class=\"chip green\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-circle-check\"></i>\n    {{ message }}\n  </p>\n\n  <!-- ERROR -->\n  <p\n    *ngIf=\"error\"\n    class=\"form-error\"\n    role=\"alert\"\n  >\n    {{ error }}\n  </p>\n\n  <!-- EMPTY LIST -->\n  <div\n    *ngIf=\"!loading && issues.length === 0\"\n    class=\"empty-state\"\n  >\n    <i class=\"fa-solid fa-clipboard-check\"></i>\n\n    <h3>No resident issues found</h3>\n\n    <p class=\"muted\">\n      Complaints submitted by residents will\n      appear here for admin approval.\n    </p>\n  </div>\n\n  <!-- ======================================\n       ISSUES LOADED FROM MONGODB\n       ====================================== -->\n\n  <div class=\"moderation-list\">\n\n    <article\n      class=\"moderation-item\"\n      *ngFor=\"let issue of issues\"\n    >\n\n      <!-- REPORTED ISSUE IMAGE -->\n      <img\n        *ngIf=\"issue.photo || issue.privateMediaId\"\n        [src]=\"issuePhoto(issue)\"\n        [alt]=\"'Reported issue: ' + issue.title\"\n        loading=\"lazy\"\n      />\n\n      <div class=\"moderation-body\">\n\n        <!-- ISSUE STATUS AND DATE -->\n        <div class=\"card-actions\">\n\n          <span\n            class=\"chip\"\n            [class.green]=\"\n              issue.status === 'approved' ||\n              issue.status === 'solved'\n            \"\n            [class.warning]=\"issue.status === 'pending'\"\n          >\n            {{ issue.status | uppercase }}\n          </span>\n\n          <span class=\"muted\">\n            {{ issue.createdAt | date:'medium':'+0530' }}\n          </span>\n\n        </div>\n\n        <!-- ISSUE INFORMATION -->\n        <h3>{{ issue.title }}</h3>\n\n        <p>{{ issue.description }}</p>\n\n        <small>\n          {{ issue.category }} \u00B7 {{ issue.area }}\n        </small>\n\n        <!-- ==================================\n             APPROVE / REJECT / SOLVE\n             ================================== -->\n\n        <div class=\"moderation-actions\">\n\n          <!-- APPROVE PENDING ISSUE -->\n          <button\n            type=\"button\"\n            *ngIf=\"issue.status === 'pending'\"\n            class=\"btn success\"\n            (click)=\"updateStatus(issue, 'approved')\"\n            [disabled]=\"saving || loading\"\n          >\n            <i class=\"fa-solid fa-check\"></i>\n            Approve & Publish\n          </button>\n\n          <!-- REJECT PENDING ISSUE -->\n          <button\n            type=\"button\"\n            *ngIf=\"issue.status === 'pending'\"\n            class=\"btn outline danger\"\n            (click)=\"updateStatus(issue, 'rejected')\"\n            [disabled]=\"saving || loading\"\n          >\n            <i class=\"fa-solid fa-xmark\"></i>\n            Reject\n          </button>\n\n          <!-- ADD RESOLUTION EVIDENCE -->\n          <button\n            type=\"button\"\n            *ngIf=\"issue.status === 'approved'\"\n            class=\"btn outline\"\n            (click)=\"select(issue)\"\n            [disabled]=\"saving || uploadingAfter\"\n          >\n            <i class=\"fa-solid fa-clipboard-check\"></i>\n            Mark Solved / Add Evidence\n          </button>\n\n        </div>\n\n        <!-- ==================================\n             RESOLUTION EDITOR\n             ================================== -->\n\n        <div\n          class=\"issue-editor\"\n          *ngIf=\"\n            issueDraft &&\n            editing === issue.id &&\n            issue.status === 'approved'\n          \"\n        >\n\n          <h3>\n            <i class=\"fa-solid fa-file-circle-check\"></i>\n            Resolution Verification\n          </h3>\n\n          <p class=\"muted\">\n            Add details of how this public issue\n            was resolved. A verified after-photo\n            is required.\n          </p>\n\n          <!-- RESOLUTION DESCRIPTION -->\n          <label>\n            Resolution Note *\n\n            <textarea\n              [(ngModel)]=\"issueDraft.resolution\"\n              rows=\"4\"\n              placeholder=\"Explain how the issue was resolved (minimum 15 characters)\"\n              [disabled]=\"saving || uploadingAfter\"\n            ></textarea>\n          </label>\n\n          <!-- AFTER PHOTO UPLOAD -->\n          <label>\n            Upload After-Resolution Photo *\n\n            <input\n              type=\"file\"\n              accept=\".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp\"\n              (change)=\"uploadAfter($event)\"\n              [disabled]=\"saving || uploadingAfter\"\n            />\n          </label>\n\n          <!-- UPLOAD PROGRESS -->\n          <p\n            class=\"muted\"\n            *ngIf=\"uploadingAfter\"\n          >\n            <i class=\"fa-solid fa-spinner fa-spin\"></i>\n            Uploading after-photo...\n          </p>\n\n          <!-- AFTER PHOTO PREVIEW -->\n          <div *ngIf=\"afterPreviewUrl\">\n\n            <p class=\"muted\">\n              Uploaded after-resolution photo:\n            </p>\n\n            <img\n              [src]=\"afterPreviewUrl\"\n              alt=\"After-resolution evidence\"\n              style=\"\n                display:block;\n                width:220px;\n                max-width:100%;\n                height:145px;\n                object-fit:cover;\n                border-radius:10px;\n              \"\n            />\n\n          </div>\n\n          <!-- EXISTING MEDIA REFERENCE -->\n          <label *ngIf=\"issueDraft.afterPhoto\">\n            Uploaded Media Reference\n\n            <input\n              type=\"text\"\n              [value]=\"issueDraft.afterPhoto\"\n              readonly\n            />\n          </label>\n\n          <!-- ACTION BUTTONS -->\n          <div class=\"moderation-actions\">\n\n            <button\n              type=\"button\"\n              class=\"btn success\"\n              (click)=\"saveDetails(true)\"\n              [disabled]=\"saving || uploadingAfter\"\n            >\n              <i class=\"fa-solid fa-circle-check\"></i>\n              {{ saving\n                ? 'Saving...'\n                : 'Verify & Mark Solved'\n              }}\n            </button>\n\n            <button\n              type=\"button\"\n              class=\"btn outline\"\n              (click)=\"editing = ''\"\n              [disabled]=\"saving || uploadingAfter\"\n            >\n              Cancel\n            </button>\n\n          </div>\n\n        </div>\n\n        <!-- ==================================\n             SOLVED ISSUE DETAILS\n             ================================== -->\n\n        <div\n          class=\"issue-editor\"\n          *ngIf=\"issue.status === 'solved'\"\n        >\n\n          <span class=\"chip green\">\n            <i class=\"fa-solid fa-circle-check\"></i>\n            Issue Resolved\n          </span>\n\n          <p *ngIf=\"issue.resolution\">\n            <strong>Resolution:</strong>\n            {{ issue.resolution }}\n          </p>\n\n          <img\n            *ngIf=\"issue.afterPhoto\"\n            [src]=\"media.url(issue.afterPhoto)\"\n            alt=\"Verified resolution photo\"\n            loading=\"lazy\"\n            style=\"\n              display:block;\n              width:220px;\n              max-width:100%;\n              height:145px;\n              object-fit:cover;\n              border-radius:10px;\n            \"\n          />\n\n        </div>\n\n      </div>\n\n    </article>\n\n  </div>\n\n</section>\n", styles: ["/* reports \u2014 section layout and responsive styles */\n.moderation-list {\n  display:grid;gap:1rem\n}\n\n.moderation-item {\n  background:#101724;border:1px solid var(--line);border-radius:12px;padding:1rem;display:grid;grid-template-columns:155px minmax(0,1fr);gap:1rem\n}\n\n.moderation-item>img {\n  width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px\n}\n\n.moderation-body>p {\n  font-size:.8rem\n}\n\n.moderation-body>small {\n  display:block;margin:.3rem 0 1rem;color:#c2c7d5\n}\n\n.issue-editor {\n  padding:1rem;margin-top:1rem;background:#1a2230;border:1px solid #ffffff19;border-radius:12px;display:grid;gap:1rem\n}\n", "/* Responsive rules for reports; isolated from common/desktop CSS. */\n@media (max-width:600px) {\n.moderation-item {\n  grid-template-columns:90px minmax(0,1fr);padding:.65rem;gap:.55rem\n}\n.moderation-body h3 {\n  font-size:.8rem\n}\n.moderation-body p {\n  font-size:.71rem\n}\n.moderation-actions .btn {\n  font-size:.7rem;padding:.45rem\n}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.NewsApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReportsAdminComponent, { className: "ReportsAdminComponent", filePath: "src/app/admin/reports/reports.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=reports.component.js.map