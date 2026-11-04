import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { uid } from '../../core/models';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/news-api.service";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function AdminPollsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtext(2, " Loading polls from MongoDB... ");
    i0.ɵɵelementEnd();
} }
function AdminPollsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelement(1, "i", 39);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No Opinion Polls Found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 5);
    i0.ɵɵtext(5, " Create your first opinion poll. ");
    i0.ɵɵelementEnd()();
} }
function AdminPollsComponent_div_18_article_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "span", 56);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 57)(4, "span", 58);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 59);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 60)(9, "strong", 61);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 62);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const p_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i_r3 + 1, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", option_r2.ta, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", option_r2.en, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", p_r4.counts[i_r3] || 0, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (p_r4.counts[i_r3] || 0) === 1 ? "Vote" : "Votes", " ");
} }
function AdminPollsComponent_div_18_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 42)(1, "div", 43)(2, "div", 44)(3, "h3", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 47);
    i0.ɵɵelement(8, "i", 34);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 48);
    i0.ɵɵtemplate(11, AdminPollsComponent_div_18_article_1_div_11_Template, 13, 5, "div", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 50)(13, "div", 51);
    i0.ɵɵelement(14, "i", 52);
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "Total Votes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "button", 53);
    i0.ɵɵlistener("click", function AdminPollsComponent_div_18_article_1_Template_button_click_19_listener() { const p_r4 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectPoll(p_r4)); });
    i0.ɵɵelement(20, "i", 54);
    i0.ɵɵtext(21, " Edit Poll ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r4.draft.id === p_r4.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", p_r4.question.ta, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", p_r4.question.en, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("green", p_r4.active)("warning", !p_r4.active);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-circle-check", p_r4.active)("fa-circle-xmark", !p_r4.active);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", p_r4.active ? "ACTIVE" : "CLOSED", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", p_r4.options);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.total(p_r4), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r4.saving || ctx_r4.deleting);
} }
function AdminPollsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, AdminPollsComponent_div_18_article_1_Template, 22, 16, "article", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.polls);
} }
function AdminPollsComponent_div_43_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function AdminPollsComponent_div_43_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const i_r9 = i0.ɵɵnextContext().index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.removeOption(i_r9)); });
    i0.ɵɵelement(1, "i", 70);
    i0.ɵɵtext(2, " Remove Option ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r4.saving || ctx_r4.deleting || ctx_r4.hasVotes);
} }
function AdminPollsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 17)(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminPollsComponent_div_43_Template_input_ngModelChange_4_listener($event) { const o_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(o_r7.ta, $event) || (o_r7.ta = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminPollsComponent_div_43_Template_input_ngModelChange_7_listener($event) { const o_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(o_r7.en, $event) || (o_r7.en = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 65)(9, "span", 66);
    i0.ɵɵelement(10, "i", 67);
    i0.ɵɵtext(11, " Votes: ");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, AdminPollsComponent_div_43_button_14_Template, 3, 1, "button", 68);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Option ", i_r9 + 1, " Tamil * ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", "ta" + i_r9);
    i0.ɵɵtwoWayProperty("ngModel", o_r7.ta);
    i0.ɵɵproperty("disabled", ctx_r4.saving || ctx_r4.deleting || ctx_r4.hasVotes);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Option ", i_r9 + 1, " English * ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", "en" + i_r9);
    i0.ɵɵtwoWayProperty("ngModel", o_r7.en);
    i0.ɵɵproperty("disabled", ctx_r4.saving || ctx_r4.deleting || ctx_r4.hasVotes);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.draft.counts[i_r9] || 0, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.draft.options.length > 2);
} }
function AdminPollsComponent_p_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, " No votes have been recorded yet. ");
    i0.ɵɵelementEnd();
} }
function AdminPollsComponent_p_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, " Votes are retrieved from MongoDB. Answer options are locked after voting to protect previously recorded votes. ");
    i0.ɵɵelementEnd();
} }
function AdminPollsComponent_p_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 71);
    i0.ɵɵelement(1, "i", 72);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.error, " ");
} }
function AdminPollsComponent_p_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 73);
    i0.ɵɵelement(1, "i", 74);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.message, " ");
} }
function AdminPollsComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 75);
    i0.ɵɵlistener("click", function AdminPollsComponent_button_67_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.remove()); });
    i0.ɵɵelement(1, "i", 76);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.saving || ctx_r4.deleting);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.deleting ? "Deleting..." : "Delete Poll", " ");
} }
function blank() {
    return {
        id: uid('poll'),
        question: {
            ta: '',
            en: ''
        },
        options: [
            { ta: '', en: '' },
            { ta: '', en: '' }
        ],
        counts: [0, 0],
        active: false,
        voters: []
    };
}
export class AdminPollsComponent {
    store;
    api;
    http;
    draft = blank();
    polls = [];
    error = '';
    message = '';
    loading = false;
    saving = false;
    deleting = false;
    constructor(store, api, http) {
        this.store = store;
        this.api = api;
        this.http = http;
    }
    ngOnInit() {
        void this.loadPolls();
    }
    // ==========================================
    // LOAD ADMIN POLLS FROM MONGODB
    // ==========================================
    async loadPolls() {
        if (this.loading)
            return;
        this.loading = true;
        this.error = '';
        try {
            await this.api.restoreSession();
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/polls`, { withCredentials: true }));
            this.polls = response;
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // NEW POLL
    // ==========================================
    newPoll() {
        if (this.saving || this.deleting)
            return;
        this.draft = blank();
        this.error = '';
        this.message = '';
    }
    // ==========================================
    // EDIT EXISTING POLL
    // ==========================================
    clone(p) {
        const copy = structuredClone(p);
        copy.counts ??= copy.options.map(() => 0);
        copy.voters ??= [];
        return copy;
    }
    selectPoll(p) {
        if (this.saving || this.deleting)
            return;
        this.draft = this.clone(p);
        this.error = '';
        this.message = '';
    }
    // ==========================================
    // TOTAL VOTE COUNT
    // ==========================================
    total(p) {
        return (p.counts || []).reduce((sum, count) => sum + (Number(count) || 0), 0);
    }
    get hasVotes() {
        return this.total(this.draft) > 0;
    }
    get isSaved() {
        return this.polls.some(p => p.id === this.draft.id);
    }
    // ==========================================
    // POLL OPTIONS
    // ==========================================
    addOption() {
        if (this.saving ||
            this.deleting ||
            this.hasVotes ||
            this.draft.options.length >= 6) {
            return;
        }
        this.draft.options.push({
            ta: '',
            en: ''
        });
        this.draft.counts.push(0);
    }
    removeOption(index) {
        if (this.saving ||
            this.deleting ||
            this.hasVotes ||
            this.draft.options.length <= 2) {
            return;
        }
        this.draft.options.splice(index, 1);
        this.draft.counts.splice(index, 1);
    }
    // ==========================================
    // SAVE POLL TO NODE.JS + MONGODB
    // ==========================================
    async save() {
        if (this.saving || this.deleting)
            return;
        this.error = '';
        this.message = '';
        const payload = this.clone(this.draft);
        payload.question.ta =
            payload.question.ta.trim();
        payload.question.en =
            payload.question.en.trim();
        payload.options = payload.options.map(o => ({
            ta: o.ta.trim(),
            en: o.en.trim()
        }));
        if (!payload.question.ta ||
            !payload.question.en) {
            this.error =
                'Both Tamil and English questions are required.';
            return;
        }
        if (payload.options.length < 2 ||
            payload.options.length > 6) {
            this.error =
                'A poll must have 2 to 6 options.';
            return;
        }
        if (payload.options.some(o => !o.ta || !o.en)) {
            this.error =
                'Both languages are required for every option.';
            return;
        }
        if (payload.counts.length !==
            payload.options.length) {
            this.error =
                'Poll options and vote counts do not match.';
            return;
        }
        this.saving = true;
        try {
            // Required for protected write requests.
            await this.api.restoreSession();
            // PUT /api/admin/polls/:id
            await this.api.upsertPoll(payload);
            // Reload persisted data from MongoDB.
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/polls`, { withCredentials: true }));
            this.polls = response;
            const saved = this.polls.find(p => p.id === payload.id);
            this.draft = saved
                ? this.clone(saved)
                : payload;
            // Refresh the public-site snapshot.
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // The poll was already saved successfully.
            }
            this.message = payload.active
                ? 'Poll saved and activated successfully.'
                : 'Inactive poll saved successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.saving = false;
        }
    }
    // ==========================================
    // DELETE POLL FROM MONGODB
    // ==========================================
    async remove() {
        if (this.saving ||
            this.deleting ||
            !this.isSaved) {
            return;
        }
        const confirmed = window.confirm('Delete this poll and its recorded votes permanently?');
        if (!confirmed)
            return;
        this.deleting = true;
        this.error = '';
        this.message = '';
        try {
            const session = await this.api.restoreSession();
            await firstValueFrom(this.http.delete(`${environment.apiBaseUrl}/admin/polls/${encodeURIComponent(this.draft.id)}`, {
                withCredentials: true,
                headers: {
                    'X-CSRF-Token': session.csrfToken
                }
            }));
            this.polls = this.polls.filter(p => p.id !== this.draft.id);
            this.draft = blank();
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Deletion was already successful.
            }
            this.message =
                'Poll deleted successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.deleting = false;
        }
    }
    // ==========================================
    // BACKEND ERROR HANDLING
    // ==========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            const detail = error.error?.error ??
                error.error?.message;
            if (typeof detail === 'string') {
                return detail;
            }
            if (Array.isArray(detail)) {
                return JSON.stringify(detail);
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
    static ɵfac = function AdminPollsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminPollsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.NewsApiService), i0.ɵɵdirectiveInject(i3.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPollsComponent, selectors: [["app-admin-polls"]], decls: 68, vars: 39, consts: [[1, "admin-columns", "admin-polls-page"], [1, "panel", "glass", "polls-list-panel"], [1, "section-title", "polls-panel-heading"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], [1, "fa-solid", "fa-plus"], [1, "muted"], [1, "polls-toolbar"], ["type", "button", 1, "btn", "outline", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], [1, "polls-count"], ["class", "polls-loading", "role", "status", 4, "ngIf"], ["class", "polls-empty-state", 4, "ngIf"], ["class", "saved-polls", 4, "ngIf"], [1, "panel", "glass", "poll-editor-panel"], [1, "section-title"], [1, "chip"], [1, "editor-form", 3, "ngSubmit"], [1, "form-grid"], ["type", "text", "name", "qta", "placeholder", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB3\u0BCD\u0BB5\u0BBF\u0BAF\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "qen", "placeholder", "Enter the poll question", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "poll-editor-options-heading"], [1, "poll-editor-options"], ["class", "poll-editor-option", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "outline", "small", "add-poll-option-btn", 3, "click", "disabled"], [1, "poll-voting-summary"], [1, "poll-summary-heading"], ["class", "muted", 4, "ngIf"], [1, "poll-active-control"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["class", "success-message", "role", "status", 4, "ngIf"], [1, "poll-editor-actions"], ["type", "submit", 1, "btn", "btn-red", 3, "disabled"], [1, "fa-solid"], ["type", "button", "class", "btn outline danger", 3, "disabled", "click", 4, "ngIf"], ["role", "status", 1, "polls-loading"], [1, "fa-solid", "fa-spinner", "fa-spin"], [1, "polls-empty-state"], [1, "fa-solid", "fa-chart-simple"], [1, "saved-polls"], ["class", "saved-poll-card", 3, "is-selected", 4, "ngFor", "ngForOf"], [1, "saved-poll-card"], [1, "saved-poll-header"], [1, "saved-poll-question"], [1, "poll-question-ta"], [1, "poll-question-en"], [1, "chip", "poll-status"], [1, "saved-poll-options"], ["class", "saved-poll-option", 4, "ngFor", "ngForOf"], [1, "saved-poll-footer"], [1, "saved-poll-total"], [1, "fa-solid", "fa-users"], ["type", "button", 1, "btn", "outline", "small", "edit-poll-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-pen-to-square"], [1, "saved-poll-option"], [1, "poll-option-number"], [1, "saved-poll-option-text"], [1, "option-title-ta"], [1, "option-title-en"], [1, "saved-poll-votes"], [1, "vote-count"], [1, "vote-label"], [1, "poll-editor-option"], ["type", "text", "required", "", 3, "ngModelChange", "name", "ngModel", "disabled"], [1, "poll-option-actions"], [1, "option-votes-info"], [1, "fa-solid", "fa-chart-bar"], ["type", "button", "class", "btn outline danger small", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "outline", "danger", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-xmark"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"], ["type", "button", 1, "btn", "outline", "danger", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"]], template: function AdminPollsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵtext(4, "Opinion Polls");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function AdminPollsComponent_Template_button_click_5_listener() { return ctx.newPoll(); });
            i0.ɵɵelement(6, "i", 4);
            i0.ɵɵtext(7, " New Poll ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " Manage public opinion polls and view real vote counts from MongoDB. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function AdminPollsComponent_Template_button_click_11_listener() { return ctx.loadPolls(); });
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 9);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, AdminPollsComponent_div_16_Template, 3, 0, "div", 10)(17, AdminPollsComponent_div_17_Template, 6, 0, "div", 11)(18, AdminPollsComponent_div_18_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "section", 13)(20, "div", 14)(21, "h2");
            i0.ɵɵtext(22, "Create or Edit a Poll");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 15);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "p", 5);
            i0.ɵɵtext(26, " Voluntary visitor participation only. Results are not statistically representative. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPollsComponent_Template_form_ngSubmit_27_listener() { return ctx.save(); });
            i0.ɵɵelementStart(28, "div", 17)(29, "label");
            i0.ɵɵtext(30, " Question Tamil * ");
            i0.ɵɵelementStart(31, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminPollsComponent_Template_input_ngModelChange_31_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.question.ta, $event) || (ctx.draft.question.ta = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "label");
            i0.ɵɵtext(33, " Question English * ");
            i0.ɵɵelementStart(34, "input", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminPollsComponent_Template_input_ngModelChange_34_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.question.en, $event) || (ctx.draft.question.en = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "div", 20)(36, "h3");
            i0.ɵɵtext(37, "Answer Options");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span", 5);
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "p", 5);
            i0.ɵɵtext(41, " Enter each option in Tamil and English. A poll must contain at least two options. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 21);
            i0.ɵɵtemplate(43, AdminPollsComponent_div_43_Template, 15, 10, "div", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 23);
            i0.ɵɵlistener("click", function AdminPollsComponent_Template_button_click_44_listener() { return ctx.addOption(); });
            i0.ɵɵelement(45, "i", 4);
            i0.ɵɵtext(46, " Add Option ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 24)(48, "div", 25)(49, "h3");
            i0.ɵɵtext(50, "Total Votes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "strong");
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(53, AdminPollsComponent_p_53_Template, 2, 0, "p", 26)(54, AdminPollsComponent_p_54_Template, 2, 0, "p", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 27)(56, "label", 28)(57, "input", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminPollsComponent_Template_input_ngModelChange_57_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.draft.active, $event) || (ctx.draft.active = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(58, " Poll Active ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "p", 5);
            i0.ɵɵtext(60);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(61, AdminPollsComponent_p_61_Template, 3, 1, "p", 30)(62, AdminPollsComponent_p_62_Template, 3, 1, "p", 31);
            i0.ɵɵelementStart(63, "div", 32)(64, "button", 33);
            i0.ɵɵelement(65, "i", 34);
            i0.ɵɵtext(66);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(67, AdminPollsComponent_button_67_Template, 3, 2, "button", 35);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.loading || ctx.saving || ctx.deleting);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spin", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading ? "Loading..." : "Refresh Polls", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.polls.length, " ", ctx.polls.length === 1 ? "Saved Poll" : "Saved Polls", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.polls.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.polls.length > 0);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("green", ctx.draft.active)("warning", !ctx.draft.active);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.draft.active ? "Active" : "Inactive", " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.question.ta);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.question.en);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.draft.options.length, " / 6 options ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.draft.options);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting || ctx.hasVotes || ctx.draft.options.length >= 6);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.total(ctx.draft), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hasVotes);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hasVotes);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.draft.active);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.draft.active ? "This poll is active for public voting." : "This poll is inactive and cannot accept public votes.", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving || ctx.deleting);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("fa-spinner", ctx.saving)("fa-spin", ctx.saving)("fa-floppy-disk", !ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Saving Poll..." : "Save Poll", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isSaved);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.NgModel, i5.NgForm], styles: ["\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-polls-page[_ngcontent-%COMP%], \n.admin-polls-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n.admin-polls-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.admin-polls-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n\n\n\n\n\n.admin-columns.admin-polls-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 22px;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-polls-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n\n.polls-list-panel[_ngcontent-%COMP%], \n.poll-editor-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n\n\n\n\n\n.polls-panel-heading[_ngcontent-%COMP%], \n.poll-editor-panel[_ngcontent-%COMP%]    > .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n\n.polls-panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.poll-editor-panel[_ngcontent-%COMP%]    > .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  line-height: 1.4;\n}\n\n.admin-polls-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.admin-polls-page[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.polls-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 20px 0;\n}\n\n.polls-count[_ngcontent-%COMP%] {\n  color: #aab6c9;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n\n\n\n\n\n.polls-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  color: #b7c2d4;\n  font-size: 14px;\n}\n\n.polls-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  padding: 28px 18px;\n  border: 1px dashed #46516a;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.025);\n  text-align: center;\n}\n\n.polls-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #f5476c;\n  font-size: 30px;\n}\n\n.polls-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 18px;\n}\n\n.polls-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n\n\n\n.saved-polls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 20px;\n  width: 100%;\n  margin-top: 18px;\n}\n\n.saved-poll-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  width: 100%;\n  padding: 20px;\n  border: 1px solid #354058;\n  border-radius: 15px;\n  background: linear-gradient(\n    145deg,\n    #1b2436,\n    #101827\n  );\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.saved-poll-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(245, 71, 108, 0.55);\n}\n\n.saved-poll-card.is-selected[_ngcontent-%COMP%] {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 1px rgba(245, 71, 108, 0.15);\n}\n\n\n\n\n\n\n.saved-poll-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  min-width: 0;\n  padding-bottom: 17px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.saved-poll-question[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.poll-question-ta[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #fff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.55;\n  overflow-wrap: anywhere;\n}\n\n.poll-question-en[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #acb8cc;\n  font-size: 13px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n.poll-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  flex-shrink: 0;\n  white-space: nowrap;\n  font-size: 11px;\n  font-weight: 750;\n  letter-spacing: 0.3px;\n}\n\n.poll-status.green[_ngcontent-%COMP%] {\n  border: 1px solid rgba(44, 201, 132, 0.35);\n  background: rgba(44, 201, 132, 0.1);\n  color: #80ebba;\n}\n\n.poll-status.warning[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 184, 74, 0.35);\n  background: rgba(255, 184, 74, 0.1);\n  color: #ffd088;\n}\n\n\n\n\n\n\n.saved-poll-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 11px;\n  margin-top: 18px;\n  width: 100%;\n}\n\n.saved-poll-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  min-height: 75px;\n  padding: 12px 14px;\n  border: 1px solid #39455d;\n  border-radius: 11px;\n  background: #111a2a;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.saved-poll-option[_ngcontent-%COMP%]:hover {\n  border-color: #576581;\n  background: #192338;\n}\n\n\n\n\n.poll-option-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 33px;\n  height: 33px;\n  border: 1px solid rgba(248, 68, 111, 0.3);\n  border-radius: 9px;\n  background: rgba(248, 68, 111, 0.1);\n  color: #fa5a7f;\n  font-size: 13px;\n  font-weight: 800;\n}\n\n\n\n\n.saved-poll-option-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 4px;\n  min-width: 0;\n}\n\n.option-title-ta[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.option-title-en[_ngcontent-%COMP%] {\n  color: #a9b5c9;\n  font-size: 12px;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n\n\n.saved-poll-votes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: 65px;\n  padding: 9px 11px;\n  border: 1px solid rgba(248, 68, 111, 0.25);\n  border-radius: 10px;\n  background: rgba(248, 68, 111, 0.09);\n  text-align: center;\n}\n\n.vote-count[_ngcontent-%COMP%] {\n  color: #ff5d81;\n  font-size: 23px;\n  font-weight: 800;\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.vote-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #b6c1d3;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n\n\n\n\n\n.saved-poll-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-top: 18px;\n  padding-top: 17px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.saved-poll-total[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  color: #c5cddd;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.saved-poll-total[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fb4f74;\n}\n\n.saved-poll-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 35px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: #29344a;\n  color: #fff;\n  font-size: 16px;\n  font-variant-numeric: tabular-nums;\n}\n\n.edit-poll-btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  white-space: nowrap;\n}\n\n\n\n\n\n\n.poll-editor-panel[_ngcontent-%COMP%]   .editor-form[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 22px;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n  color: #d9e1ef;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 45px;\n  padding: 11px 12px;\n  border: 1px solid #404c64;\n  border-radius: 9px;\n  background: #0e1727;\n  color: #fff;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8391a9;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 3px rgba(245, 71, 108, 0.12);\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.poll-editor-options-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  margin-bottom: 12px;\n}\n\n.poll-editor-options-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n}\n\n.poll-editor-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 14px;\n  margin-top: 16px;\n}\n\n.poll-editor-option[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 16px;\n  border: 1px solid #354159;\n  border-radius: 12px;\n  background: rgba(11, 19, 32, 0.45);\n}\n\n.poll-option-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 13px;\n}\n\n.option-votes-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #b1bdd0;\n  font-size: 13px;\n}\n\n.option-votes-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f54d75;\n}\n\n.option-votes-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-variant-numeric: tabular-nums;\n}\n\n\n\n\n.add-poll-option-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 43px;\n  margin-top: 14px;\n  padding: 11px 14px;\n  border: 1px dashed #56627a;\n  border-radius: 9px;\n}\n\n.add-poll-option-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #f5476c;\n  color: #ff6588;\n}\n\n\n\n\n\n\n.poll-voting-summary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 17px;\n  border: 1px solid #3c4860;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.035);\n}\n\n.poll-summary-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.poll-summary-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 17px;\n}\n\n.poll-summary-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ff5d81;\n  font-size: 24px;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n\n.poll-voting-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.poll-active-control[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  padding: 17px;\n  border: 1px solid #3c4860;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.poll-active-control[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.poll-active-control[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  accent-color: #f5476c;\n}\n\n.poll-active-control[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #aab6c9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n\n\n\n\n\n.poll-editor-panel[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  margin-top: 17px;\n  padding: 12px 14px;\n  border: 1px solid rgba(245, 71, 108, 0.35);\n  border-radius: 9px;\n  background: rgba(245, 71, 108, 0.1);\n  color: #ff9caf;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.poll-editor-panel[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  margin-top: 17px;\n  padding: 12px 14px;\n  border: 1px solid rgba(39, 197, 127, 0.35);\n  border-radius: 9px;\n  background: rgba(39, 197, 127, 0.1);\n  color: #7beab6;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n\n\n\n\n\n.poll-editor-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 23px;\n}\n\n.poll-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 43px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n\n@media (min-width: 1400px) {\n  .admin-columns.admin-polls-page[_ngcontent-%COMP%] {\n    grid-template-columns:\n      minmax(0, 1.1fr)\n      minmax(0, 1fr);\n  }\n}@media (max-width: 1050px) {\n  .poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .saved-poll-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}@media (max-width: 700px) {\n  .admin-columns.admin-polls-page[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n\n  .polls-panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .poll-editor-panel[_ngcontent-%COMP%]    > .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .polls-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 12px;\n  }\n\n  .saved-polls[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n\n  .saved-poll-card[_ngcontent-%COMP%] {\n    padding: 14px;\n    border-radius: 12px;\n  }\n\n  .saved-poll-header[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding-bottom: 14px;\n  }\n\n  .poll-question-ta[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .poll-question-en[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .saved-poll-options[_ngcontent-%COMP%] {\n    gap: 9px;\n    margin-top: 14px;\n  }\n\n  .saved-poll-option[_ngcontent-%COMP%] {\n    gap: 9px;\n    min-height: 70px;\n    padding: 10px;\n  }\n\n  .poll-option-number[_ngcontent-%COMP%] {\n    width: 29px;\n    height: 29px;\n    font-size: 12px;\n  }\n\n  .option-title-ta[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .option-title-en[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .saved-poll-votes[_ngcontent-%COMP%] {\n    min-width: 54px;\n    padding: 7px;\n  }\n\n  .vote-count[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .saved-poll-footer[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n\n  .poll-editor-panel[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .poll-editor-option[_ngcontent-%COMP%] {\n    padding: 13px;\n  }\n\n  .poll-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}@media (max-width: 400px) {\n  .saved-poll-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .poll-status[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n\n  .saved-poll-option[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n\n  .saved-poll-votes[_ngcontent-%COMP%] {\n    min-width: 48px;\n  }\n\n  .vote-count[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .edit-poll-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .poll-editor-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .poll-editor-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}@media (prefers-reduced-motion: reduce) {\n  .saved-poll-card[_ngcontent-%COMP%], \n   .saved-poll-option[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPollsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-polls', standalone: true, imports: [
                    CommonModule,
                    FormsModule
                ], template: "\n<!-- =========================================\n     MAKKAL VALIMAI - ADMIN OPINION POLLS\n     ========================================= -->\n\n<div class=\"admin-columns admin-polls-page\">\n\n  <!-- =====================================\n       LEFT SECTION - SAVED POLLS\n       ===================================== -->\n\n  <section class=\"panel glass polls-list-panel\">\n\n    <!-- HEADER -->\n\n    <div class=\"section-title polls-panel-heading\">\n\n      <h2>Opinion Polls</h2>\n\n      <button\n        type=\"button\"\n        class=\"btn btn-red\"\n        (click)=\"newPoll()\"\n        [disabled]=\"saving || deleting\"\n      >\n        <i class=\"fa-solid fa-plus\"></i>\n        New Poll\n      </button>\n\n    </div>\n\n    <p class=\"muted\">\n      Manage public opinion polls and view\n      real vote counts from MongoDB.\n    </p>\n\n    <!-- TOOLBAR -->\n\n    <div class=\"polls-toolbar\">\n\n      <button\n        type=\"button\"\n        class=\"btn outline small\"\n        (click)=\"loadPolls()\"\n        [disabled]=\"loading || saving || deleting\"\n      >\n\n        <i\n          class=\"fa-solid fa-rotate\"\n          [class.fa-spin]=\"loading\"\n        ></i>\n\n        {{ loading ? 'Loading...' : 'Refresh Polls' }}\n\n      </button>\n\n      <span class=\"polls-count\">\n\n        {{ polls.length }}\n\n        {{\n          polls.length === 1\n            ? 'Saved Poll'\n            : 'Saved Polls'\n        }}\n\n      </span>\n\n    </div>\n\n    <!-- LOADING STATE -->\n\n    <div\n      class=\"polls-loading\"\n      *ngIf=\"loading\"\n      role=\"status\"\n    >\n\n      <i class=\"fa-solid fa-spinner fa-spin\"></i>\n\n      Loading polls from MongoDB...\n\n    </div>\n\n    <!-- NO POLLS -->\n\n    <div\n      class=\"polls-empty-state\"\n      *ngIf=\"!loading && polls.length === 0\"\n    >\n\n      <i class=\"fa-solid fa-chart-simple\"></i>\n\n      <h3>No Opinion Polls Found</h3>\n\n      <p class=\"muted\">\n        Create your first opinion poll.\n      </p>\n\n    </div>\n\n    <!-- =====================================\n         SAVED POLLS LIST\n         ===================================== -->\n\n    <div\n      class=\"saved-polls\"\n      *ngIf=\"polls.length > 0\"\n    >\n\n      <article\n        *ngFor=\"let p of polls\"\n        class=\"saved-poll-card\"\n        [class.is-selected]=\"draft.id === p.id\"\n      >\n\n        <!-- POLL QUESTION -->\n\n        <div class=\"saved-poll-header\">\n\n          <div class=\"saved-poll-question\">\n\n            <h3 class=\"poll-question-ta\">\n              {{ p.question.ta }}\n            </h3>\n\n            <p class=\"poll-question-en\">\n              {{ p.question.en }}\n            </p>\n\n          </div>\n\n          <!-- STATUS -->\n\n          <span\n            class=\"chip poll-status\"\n            [class.green]=\"p.active\"\n            [class.warning]=\"!p.active\"\n          >\n\n            <i\n              class=\"fa-solid\"\n              [class.fa-circle-check]=\"p.active\"\n              [class.fa-circle-xmark]=\"!p.active\"\n            ></i>\n\n            {{ p.active ? 'ACTIVE' : 'CLOSED' }}\n\n          </span>\n\n        </div>\n\n        <!-- =================================\n             ALL OPTIONS AND VOTE COUNTS\n             ================================= -->\n\n        <div class=\"saved-poll-options\">\n\n          <div\n            class=\"saved-poll-option\"\n            *ngFor=\"let option of p.options; let i = index\"\n          >\n\n            <!-- OPTION NUMBER -->\n\n            <span class=\"poll-option-number\">\n              {{ i + 1 }}\n            </span>\n\n            <!-- OPTION NAME -->\n\n            <div class=\"saved-poll-option-text\">\n\n              <span class=\"option-title-ta\">\n                {{ option.ta }}\n              </span>\n\n              <span class=\"option-title-en\">\n                {{ option.en }}\n              </span>\n\n            </div>\n\n            <!-- REAL VOTE COUNT -->\n\n            <div class=\"saved-poll-votes\">\n\n              <strong class=\"vote-count\">\n                {{ p.counts[i] || 0 }}\n              </strong>\n\n              <span class=\"vote-label\">\n\n                {{\n                  (p.counts[i] || 0) === 1\n                    ? 'Vote'\n                    : 'Votes'\n                }}\n\n              </span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <!-- TOTAL VOTES AND EDIT BUTTON -->\n\n        <div class=\"saved-poll-footer\">\n\n          <div class=\"saved-poll-total\">\n\n            <i class=\"fa-solid fa-users\"></i>\n\n            <span>Total Votes</span>\n\n            <strong>\n              {{ total(p) }}\n            </strong>\n\n          </div>\n\n          <button\n            type=\"button\"\n            class=\"btn outline small edit-poll-btn\"\n            (click)=\"selectPoll(p)\"\n            [disabled]=\"saving || deleting\"\n          >\n\n            <i class=\"fa-solid fa-pen-to-square\"></i>\n\n            Edit Poll\n\n          </button>\n\n        </div>\n\n      </article>\n\n    </div>\n\n  </section>\n\n  <!-- =====================================\n       RIGHT SECTION - CREATE / EDIT POLL\n       ===================================== -->\n\n  <section class=\"panel glass poll-editor-panel\">\n\n    <!-- EDITOR HEADER -->\n\n    <div class=\"section-title\">\n\n      <h2>Create or Edit a Poll</h2>\n\n      <span\n        class=\"chip\"\n        [class.green]=\"draft.active\"\n        [class.warning]=\"!draft.active\"\n      >\n\n        {{ draft.active ? 'Active' : 'Inactive' }}\n\n      </span>\n\n    </div>\n\n    <p class=\"muted\">\n      Voluntary visitor participation only.\n      Results are not statistically representative.\n    </p>\n\n    <!-- POLL FORM -->\n\n    <form\n      class=\"editor-form\"\n      (ngSubmit)=\"save()\"\n    >\n\n      <!-- =================================\n           POLL QUESTIONS\n           ================================= -->\n\n      <div class=\"form-grid\">\n\n        <label>\n\n          Question Tamil *\n\n          <input\n            type=\"text\"\n            name=\"qta\"\n            [(ngModel)]=\"draft.question.ta\"\n            placeholder=\"\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB3\u0BCD\u0BB5\u0BBF\u0BAF\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD\"\n            required\n            [disabled]=\"saving || deleting\"\n          />\n\n        </label>\n\n        <label>\n\n          Question English *\n\n          <input\n            type=\"text\"\n            name=\"qen\"\n            [(ngModel)]=\"draft.question.en\"\n            placeholder=\"Enter the poll question\"\n            required\n            [disabled]=\"saving || deleting\"\n          />\n\n        </label>\n\n      </div>\n\n      <!-- =================================\n           ANSWER OPTIONS HEADER\n           ================================= -->\n\n      <div class=\"poll-editor-options-heading\">\n\n        <h3>Answer Options</h3>\n\n        <span class=\"muted\">\n\n          {{ draft.options.length }} / 6 options\n\n        </span>\n\n      </div>\n\n      <p class=\"muted\">\n        Enter each option in Tamil and English.\n        A poll must contain at least two options.\n      </p>\n\n      <!-- =================================\n           EDITABLE ANSWER OPTIONS\n           ================================= -->\n\n      <div class=\"poll-editor-options\">\n\n        <div\n          class=\"poll-editor-option\"\n          *ngFor=\"let o of draft.options; let i = index\"\n        >\n\n          <div class=\"form-grid\">\n\n            <label>\n\n              Option {{ i + 1 }} Tamil *\n\n              <input\n                type=\"text\"\n                [name]=\"'ta' + i\"\n                [(ngModel)]=\"o.ta\"\n                required\n                [disabled]=\"saving || deleting || hasVotes\"\n              />\n\n            </label>\n\n            <label>\n\n              Option {{ i + 1 }} English *\n\n              <input\n                type=\"text\"\n                [name]=\"'en' + i\"\n                [(ngModel)]=\"o.en\"\n                required\n                [disabled]=\"saving || deleting || hasVotes\"\n              />\n\n            </label>\n\n          </div>\n\n          <!-- OPTION VOTES AND REMOVE -->\n\n          <div class=\"poll-option-actions\">\n\n            <span class=\"option-votes-info\">\n\n              <i class=\"fa-solid fa-chart-bar\"></i>\n\n              Votes:\n\n              <strong>\n                {{ draft.counts[i] || 0 }}\n              </strong>\n\n            </span>\n\n            <button\n              *ngIf=\"draft.options.length > 2\"\n              type=\"button\"\n              class=\"btn outline danger small\"\n              (click)=\"removeOption(i)\"\n              [disabled]=\"saving || deleting || hasVotes\"\n            >\n\n              <i class=\"fa-solid fa-xmark\"></i>\n\n              Remove Option\n\n            </button>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- ADD NEW OPTION -->\n\n      <button\n        type=\"button\"\n        class=\"btn outline small add-poll-option-btn\"\n        (click)=\"addOption()\"\n        [disabled]=\"\n          saving ||\n          deleting ||\n          hasVotes ||\n          draft.options.length >= 6\n        \"\n      >\n\n        <i class=\"fa-solid fa-plus\"></i>\n\n        Add Option\n\n      </button>\n\n      <!-- =================================\n           TOTAL VOTES SUMMARY\n           ================================= -->\n\n      <div class=\"poll-voting-summary\">\n\n        <div class=\"poll-summary-heading\">\n\n          <h3>Total Votes</h3>\n\n          <strong>\n            {{ total(draft) }}\n          </strong>\n\n        </div>\n\n        <p\n          class=\"muted\"\n          *ngIf=\"!hasVotes\"\n        >\n          No votes have been recorded yet.\n        </p>\n\n        <p\n          class=\"muted\"\n          *ngIf=\"hasVotes\"\n        >\n          Votes are retrieved from MongoDB.\n          Answer options are locked after voting\n          to protect previously recorded votes.\n        </p>\n\n      </div>\n\n      <!-- =================================\n           ACTIVE / INACTIVE STATUS\n           ================================= -->\n\n      <div class=\"poll-active-control\">\n\n        <label class=\"checkbox-label\">\n\n          <input\n            type=\"checkbox\"\n            name=\"active\"\n            [(ngModel)]=\"draft.active\"\n            [disabled]=\"saving || deleting\"\n          />\n\n          Poll Active\n\n        </label>\n\n        <p class=\"muted\">\n\n          {{\n            draft.active\n              ? 'This poll is active for public voting.'\n              : 'This poll is inactive and cannot accept public votes.'\n          }}\n\n        </p>\n\n      </div>\n\n      <!-- ERROR MESSAGE -->\n\n      <p\n        class=\"form-error\"\n        *ngIf=\"error\"\n        role=\"alert\"\n      >\n\n        <i class=\"fa-solid fa-circle-exclamation\"></i>\n\n        {{ error }}\n\n      </p>\n\n      <!-- SUCCESS MESSAGE -->\n\n      <p\n        class=\"success-message\"\n        *ngIf=\"message\"\n        role=\"status\"\n      >\n\n        <i class=\"fa-solid fa-circle-check\"></i>\n\n        {{ message }}\n\n      </p>\n\n      <!-- =================================\n           SAVE / DELETE ACTIONS\n           ================================= -->\n\n      <div class=\"poll-editor-actions\">\n\n        <!-- SAVE POLL -->\n\n        <button\n          type=\"submit\"\n          class=\"btn btn-red\"\n          [disabled]=\"saving || deleting\"\n        >\n\n          <i\n            class=\"fa-solid\"\n            [class.fa-spinner]=\"saving\"\n            [class.fa-spin]=\"saving\"\n            [class.fa-floppy-disk]=\"!saving\"\n          ></i>\n\n          {{\n            saving\n              ? 'Saving Poll...'\n              : 'Save Poll'\n          }}\n\n        </button>\n\n        <!-- DELETE POLL -->\n\n        <button\n          *ngIf=\"isSaved\"\n          type=\"button\"\n          class=\"btn outline danger\"\n          (click)=\"remove()\"\n          [disabled]=\"saving || deleting\"\n        >\n\n          <i class=\"fa-solid fa-trash\"></i>\n\n          {{\n            deleting\n              ? 'Deleting...'\n              : 'Delete Poll'\n          }}\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </section>\n\n</div>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI - ADMIN OPINION POLLS\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-polls-page,\n.admin-polls-page *,\n.admin-polls-page *::before,\n.admin-polls-page *::after {\n  box-sizing: border-box;\n}\n\n/* ==========================================\n   MAIN LAYOUT\n   ========================================== */\n\n.admin-columns.admin-polls-page {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 22px;\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-polls-page .panel {\n  min-width: 0;\n  width: 100%;\n}\n\n.polls-list-panel,\n.poll-editor-panel {\n  min-width: 0;\n}\n\n/* ==========================================\n   PAGE HEADING\n   ========================================== */\n\n.polls-panel-heading,\n.poll-editor-panel > .section-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n\n.polls-panel-heading h2,\n.poll-editor-panel > .section-title h2 {\n  margin: 0;\n  font-size: 22px;\n  line-height: 1.4;\n}\n\n.admin-polls-page .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.admin-polls-page .btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   POLL LIST TOOLBAR\n   ========================================== */\n\n.polls-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 20px 0;\n}\n\n.polls-count {\n  color: #aab6c9;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n/* ==========================================\n   LOADING AND EMPTY STATES\n   ========================================== */\n\n.polls-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  color: #b7c2d4;\n  font-size: 14px;\n}\n\n.polls-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  padding: 28px 18px;\n  border: 1px dashed #46516a;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.025);\n  text-align: center;\n}\n\n.polls-empty-state i {\n  margin-bottom: 12px;\n  color: #f5476c;\n  font-size: 30px;\n}\n\n.polls-empty-state h3 {\n  margin: 0 0 8px;\n  font-size: 18px;\n}\n\n.polls-empty-state p {\n  margin: 0;\n}\n\n/* ==========================================\n   SAVED POLLS\n   ========================================== */\n\n.saved-polls {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 20px;\n  width: 100%;\n  margin-top: 18px;\n}\n\n.saved-poll-card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  width: 100%;\n  padding: 20px;\n  border: 1px solid #354058;\n  border-radius: 15px;\n  background: linear-gradient(\n    145deg,\n    #1b2436,\n    #101827\n  );\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.saved-poll-card:hover {\n  border-color: rgba(245, 71, 108, 0.55);\n}\n\n.saved-poll-card.is-selected {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 1px rgba(245, 71, 108, 0.15);\n}\n\n/* ==========================================\n   QUESTION HEADER\n   ========================================== */\n\n.saved-poll-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  min-width: 0;\n  padding-bottom: 17px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.saved-poll-question {\n  flex: 1;\n  min-width: 0;\n}\n\n.poll-question-ta {\n  margin: 0 0 8px;\n  color: #fff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.55;\n  overflow-wrap: anywhere;\n}\n\n.poll-question-en {\n  margin: 0;\n  color: #acb8cc;\n  font-size: 13px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n/* ACTIVE / CLOSED STATUS */\n\n.poll-status {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  flex-shrink: 0;\n  white-space: nowrap;\n  font-size: 11px;\n  font-weight: 750;\n  letter-spacing: 0.3px;\n}\n\n.poll-status.green {\n  border: 1px solid rgba(44, 201, 132, 0.35);\n  background: rgba(44, 201, 132, 0.1);\n  color: #80ebba;\n}\n\n.poll-status.warning {\n  border: 1px solid rgba(255, 184, 74, 0.35);\n  background: rgba(255, 184, 74, 0.1);\n  color: #ffd088;\n}\n\n/* ==========================================\n   ALL ANSWER OPTIONS\n   ========================================== */\n\n.saved-poll-options {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 11px;\n  margin-top: 18px;\n  width: 100%;\n}\n\n.saved-poll-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  min-height: 75px;\n  padding: 12px 14px;\n  border: 1px solid #39455d;\n  border-radius: 11px;\n  background: #111a2a;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n\n.saved-poll-option:hover {\n  border-color: #576581;\n  background: #192338;\n}\n\n/* OPTION NUMBER */\n\n.poll-option-number {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 33px;\n  height: 33px;\n  border: 1px solid rgba(248, 68, 111, 0.3);\n  border-radius: 9px;\n  background: rgba(248, 68, 111, 0.1);\n  color: #fa5a7f;\n  font-size: 13px;\n  font-weight: 800;\n}\n\n/* TAMIL AND ENGLISH OPTION TEXT */\n\n.saved-poll-option-text {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 4px;\n  min-width: 0;\n}\n\n.option-title-ta {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n.option-title-en {\n  color: #a9b5c9;\n  font-size: 12px;\n  line-height: 1.5;\n  overflow-wrap: anywhere;\n}\n\n/* ==========================================\n   VOTES BESIDE EACH OPTION\n   ========================================== */\n\n.saved-poll-votes {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  min-width: 65px;\n  padding: 9px 11px;\n  border: 1px solid rgba(248, 68, 111, 0.25);\n  border-radius: 10px;\n  background: rgba(248, 68, 111, 0.09);\n  text-align: center;\n}\n\n.vote-count {\n  color: #ff5d81;\n  font-size: 23px;\n  font-weight: 800;\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.vote-label {\n  margin-top: 4px;\n  color: #b6c1d3;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n/* ==========================================\n   TOTAL VOTES AND EDIT BUTTON\n   ========================================== */\n\n.saved-poll-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-top: 18px;\n  padding-top: 17px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.saved-poll-total {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  color: #c5cddd;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.saved-poll-total i {\n  color: #fb4f74;\n}\n\n.saved-poll-total strong {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 35px;\n  padding: 6px 10px;\n  border-radius: 8px;\n  background: #29344a;\n  color: #fff;\n  font-size: 16px;\n  font-variant-numeric: tabular-nums;\n}\n\n.edit-poll-btn {\n  min-height: 38px;\n  white-space: nowrap;\n}\n\n/* ==========================================\n   ADMIN POLL EDITOR\n   ========================================== */\n\n.poll-editor-panel .editor-form {\n  display: block;\n  margin-top: 22px;\n}\n\n.poll-editor-panel .form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.poll-editor-panel .form-grid label {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n  color: #d9e1ef;\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.poll-editor-panel .form-grid input {\n  width: 100%;\n  min-width: 0;\n  min-height: 45px;\n  padding: 11px 12px;\n  border: 1px solid #404c64;\n  border-radius: 9px;\n  background: #0e1727;\n  color: #fff;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n}\n\n.poll-editor-panel .form-grid input::placeholder {\n  color: #8391a9;\n}\n\n.poll-editor-panel .form-grid input:focus {\n  border-color: #f5476c;\n  box-shadow: 0 0 0 3px rgba(245, 71, 108, 0.12);\n}\n\n.poll-editor-panel .form-grid input:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   EDITOR OPTIONS\n   ========================================== */\n\n.poll-editor-options-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  margin-bottom: 12px;\n}\n\n.poll-editor-options-heading h3 {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n}\n\n.poll-editor-options {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 14px;\n  margin-top: 16px;\n}\n\n.poll-editor-option {\n  min-width: 0;\n  padding: 16px;\n  border: 1px solid #354159;\n  border-radius: 12px;\n  background: rgba(11, 19, 32, 0.45);\n}\n\n.poll-option-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 13px;\n}\n\n.option-votes-info {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #b1bdd0;\n  font-size: 13px;\n}\n\n.option-votes-info i {\n  color: #f54d75;\n}\n\n.option-votes-info strong {\n  color: #fff;\n  font-variant-numeric: tabular-nums;\n}\n\n/* ADD OPTION */\n\n.add-poll-option-btn {\n  width: 100%;\n  min-height: 43px;\n  margin-top: 14px;\n  padding: 11px 14px;\n  border: 1px dashed #56627a;\n  border-radius: 9px;\n}\n\n.add-poll-option-btn:hover:not(:disabled) {\n  border-color: #f5476c;\n  color: #ff6588;\n}\n\n/* ==========================================\n   TOTAL VOTE SUMMARY\n   ========================================== */\n\n.poll-voting-summary {\n  margin-top: 24px;\n  padding: 17px;\n  border: 1px solid #3c4860;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.035);\n}\n\n.poll-summary-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.poll-summary-heading h3 {\n  margin: 0;\n  color: #fff;\n  font-size: 17px;\n}\n\n.poll-summary-heading strong {\n  color: #ff5d81;\n  font-size: 24px;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n\n.poll-voting-summary p {\n  margin-bottom: 0;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   ACTIVE POLL CONTROL\n   ========================================== */\n\n.poll-active-control {\n  margin-top: 22px;\n  padding: 17px;\n  border: 1px solid #3c4860;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.poll-active-control .checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.poll-active-control input[type=\"checkbox\"] {\n  width: 17px;\n  height: 17px;\n  accent-color: #f5476c;\n}\n\n.poll-active-control p {\n  margin: 10px 0 0;\n  color: #aab6c9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n/* ==========================================\n   FORM FEEDBACK\n   ========================================== */\n\n.poll-editor-panel .form-error {\n  margin-top: 17px;\n  padding: 12px 14px;\n  border: 1px solid rgba(245, 71, 108, 0.35);\n  border-radius: 9px;\n  background: rgba(245, 71, 108, 0.1);\n  color: #ff9caf;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.poll-editor-panel .success-message {\n  margin-top: 17px;\n  padding: 12px 14px;\n  border: 1px solid rgba(39, 197, 127, 0.35);\n  border-radius: 9px;\n  background: rgba(39, 197, 127, 0.1);\n  color: #7beab6;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n/* ==========================================\n   SAVE AND DELETE BUTTONS\n   ========================================== */\n\n.poll-editor-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 23px;\n}\n\n.poll-editor-actions .btn {\n  min-height: 43px;\n}\n\n/* ==========================================\n   LARGE DESKTOP LAYOUT\n   ========================================== */\n\n\n\n/* ==========================================\n   TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   SMALL MOBILE\n   ========================================== */\n\n\n\n/* ACCESSIBILITY */\n", "/* Responsive rules for polls; isolated from common/desktop CSS. */\n@media (min-width: 1400px) {\n  .admin-columns.admin-polls-page {\n    grid-template-columns:\n      minmax(0, 1.1fr)\n      minmax(0, 1fr);\n  }\n}@media (max-width: 1050px) {\n  .poll-editor-panel .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .saved-poll-card {\n    padding: 18px;\n  }\n}@media (max-width: 700px) {\n  .admin-columns.admin-polls-page {\n    gap: 16px;\n  }\n\n  .polls-panel-heading h2,\n  .poll-editor-panel > .section-title h2 {\n    font-size: 19px;\n  }\n\n  .polls-toolbar {\n    align-items: flex-start;\n    gap: 12px;\n  }\n\n  .saved-polls {\n    gap: 15px;\n  }\n\n  .saved-poll-card {\n    padding: 14px;\n    border-radius: 12px;\n  }\n\n  .saved-poll-header {\n    gap: 10px;\n    padding-bottom: 14px;\n  }\n\n  .poll-question-ta {\n    font-size: 16px;\n  }\n\n  .poll-question-en {\n    font-size: 12px;\n  }\n\n  .saved-poll-options {\n    gap: 9px;\n    margin-top: 14px;\n  }\n\n  .saved-poll-option {\n    gap: 9px;\n    min-height: 70px;\n    padding: 10px;\n  }\n\n  .poll-option-number {\n    width: 29px;\n    height: 29px;\n    font-size: 12px;\n  }\n\n  .option-title-ta {\n    font-size: 13px;\n  }\n\n  .option-title-en {\n    font-size: 11px;\n  }\n\n  .saved-poll-votes {\n    min-width: 54px;\n    padding: 7px;\n  }\n\n  .vote-count {\n    font-size: 19px;\n  }\n\n  .saved-poll-footer {\n    gap: 12px;\n  }\n\n  .poll-editor-panel .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .poll-editor-option {\n    padding: 13px;\n  }\n\n  .poll-editor-actions .btn {\n    flex: 1;\n  }\n}@media (max-width: 400px) {\n  .saved-poll-header {\n    flex-direction: column;\n  }\n\n  .poll-status {\n    align-self: flex-start;\n  }\n\n  .saved-poll-option {\n    gap: 7px;\n  }\n\n  .saved-poll-votes {\n    min-width: 48px;\n  }\n\n  .vote-count {\n    font-size: 18px;\n  }\n\n  .edit-poll-btn {\n    width: 100%;\n  }\n\n  .poll-editor-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .poll-editor-actions .btn {\n    width: 100%;\n  }\n}@media (prefers-reduced-motion: reduce) {\n  .saved-poll-card,\n  .saved-poll-option {\n    transition: none;\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.NewsApiService }, { type: i3.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminPollsComponent, { className: "AdminPollsComponent", filePath: "src/app/admin/polls/polls.component.ts", lineNumber: 43 }); })();
//# sourceMappingURL=polls.component.js.map