import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common";
function PollComponent_section_0_button_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.percentage(i_r2), "% ");
} }
function PollComponent_section_0_button_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", ctx_r2.percentage(i_r2), "%");
} }
function PollComponent_section_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function PollComponent_section_0_button_9_Template_button_click_0_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.vote(i_r2)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PollComponent_section_0_button_9_span_3_Template, 2, 1, "span", 12)(4, PollComponent_section_0_button_9_span_4_Template, 1, 2, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r2.voting || ctx_r2.hasVoted() || !ctx_r2.poll.active);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.txt(opt_r4), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasVoted());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasVoted());
} }
function PollComponent_section_0_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1 \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...", "Recording your vote..."), " ");
} }
function PollComponent_section_0_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1 \u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95 \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.", "Your vote was recorded successfully."), " ");
} }
function PollComponent_section_0_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵelement(1, "i", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.error, " ");
} }
function PollComponent_section_0_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r2.prefs.label("\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD", "Total Votes"), ": ", ctx_r2.totalVotes, " ");
} }
function PollComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1)(1, "div", 2);
    i0.ɵɵelement(2, "i", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 4);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 5);
    i0.ɵɵtemplate(9, PollComponent_section_0_button_9_Template, 5, 4, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PollComponent_section_0_p_10_Template, 3, 1, "p", 7)(11, PollComponent_section_0_p_11_Template, 3, 1, "p", 8)(12, PollComponent_section_0_p_12_Template, 3, 1, "p", 9);
    i0.ɵɵelementStart(13, "p", 4);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, PollComponent_section_0_p_15_Template, 2, 2, "p", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", "People\u2019s Opinion Poll"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.txt(ctx_r2.poll.question), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B87\u0BA4\u0BC1 \u0BA4\u0BB3 \u0BB5\u0BBE\u0B9A\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1; \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAF\u0BB2\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B85\u0BB2\u0BCD\u0BB2.", "Voluntary visitor poll, not a representative survey."), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.poll.options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.voting);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.success);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.error);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", !ctx_r2.poll.active ? ctx_r2.prefs.label("\u0B87\u0BA8\u0BCD\u0BA4 \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BB1\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BAE\u0BC1\u0B9F\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.", "This poll is currently closed.") : ctx_r2.hasVoted() ? ctx_r2.prefs.label("\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BA8\u0BA9\u0BCD\u0BB1\u0BBF", "Thanks for voting") : ctx_r2.prefs.label("\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD", "Tap one option to vote"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasVoted());
} }
export class PollComponent {
    store;
    prefs;
    api;
    poll;
    voting = false;
    error = '';
    success = '';
    votedLocally = false;
    latestCounts = null;
    constructor(store, prefs, api) {
        this.store = store;
        this.prefs = prefs;
        this.api = api;
    }
    // ==========================================
    // RESET STATE WHEN POLL CHANGES
    // ==========================================
    ngOnChanges(changes) {
        if (!changes['poll']) {
            return;
        }
        const previousId = changes['poll'].previousValue?.id;
        const currentId = changes['poll'].currentValue?.id;
        if (previousId !== currentId) {
            this.votedLocally = false;
            this.latestCounts = null;
            this.error = '';
            this.success = '';
        }
    }
    // ==========================================
    // CHECK WHETHER VISITOR ALREADY VOTED
    // ==========================================
    hasVoted() {
        if (!this.poll?.id) {
            return false;
        }
        if (this.votedLocally) {
            return true;
        }
        try {
            return localStorage.getItem(this.voteStorageKey()) === '1';
        }
        catch {
            return false;
        }
    }
    voteStorageKey() {
        return `makkal-valimai-voted:${this.poll.id}`;
    }
    // ==========================================
    // GET LATEST VOTE COUNTS
    // ==========================================
    get counts() {
        if (this.latestCounts &&
            this.latestCounts.length === this.poll.options.length) {
            return this.latestCounts;
        }
        return this.poll.counts || [];
    }
    // ==========================================
    // TOTAL VOTES
    // ==========================================
    get totalVotes() {
        return this.counts.reduce((sum, count) => sum + (Number(count) || 0), 0);
    }
    // ==========================================
    // CALCULATE VOTE PERCENTAGE
    // ==========================================
    percentage(index) {
        const total = this.totalVotes;
        if (!total) {
            return 0;
        }
        const votes = Number(this.counts[index]) || 0;
        return Math.round((votes / total) * 100);
    }
    // ==========================================
    // SUBMIT VOTE TO NODE.JS + MONGODB
    // ==========================================
    async vote(index) {
        if (this.voting ||
            !this.poll?.active ||
            this.hasVoted()) {
            return;
        }
        if (index < 0 ||
            index >= this.poll.options.length) {
            return;
        }
        this.voting = true;
        this.error = '';
        this.success = '';
        try {
            // REAL BACKEND API
            // POST /api/public/polls/:id/votes
            const response = await this.api.vote(this.poll.id, index);
            // Use backend counts if returned directly.
            if (Array.isArray(response?.counts) &&
                response.counts.length === this.poll.options.length) {
                this.latestCounts = [...response.counts];
            }
            // Refresh public data from MongoDB.
            try {
                await this.store.refreshFromBackend();
                const refreshed = this.store.polls().find(item => item.id === this.poll.id);
                if (refreshed &&
                    Array.isArray(refreshed.counts) &&
                    refreshed.counts.length === this.poll.options.length) {
                    this.latestCounts = [...refreshed.counts];
                }
            }
            catch {
                // The vote request has already succeeded.
            }
            // Remember successful participation
            // in this browser.
            this.votedLocally = true;
            try {
                localStorage.setItem(this.voteStorageKey(), '1');
            }
            catch {
                // Voting still succeeds if storage is blocked.
            }
            this.success =
                'Your vote was recorded successfully.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.voting = false;
        }
    }
    // ==========================================
    // ERROR HANDLING
    // ==========================================
    getError(error) {
        if (error instanceof HttpErrorResponse) {
            if (error.status === 0) {
                return 'Unable to connect to the voting server.';
            }
            if (error.status === 404) {
                return 'This poll is no longer available.';
            }
            if (error.status === 409) {
                return 'Your vote could not be accepted. You may have already voted or the poll may have closed.';
            }
            if (error.status === 429) {
                return 'Too many voting requests. Please try later.';
            }
            const message = error.error?.error ||
                error.error?.message;
            if (typeof message === 'string') {
                return message;
            }
            return `Unable to record vote (${error.status}).`;
        }
        return error instanceof Error
            ? error.message
            : 'Unable to record vote.';
    }
    static ɵfac = function PollComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PollComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.NewsApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PollComponent, selectors: [["app-poll"]], inputs: { poll: "poll" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "poll glass", 4, "ngIf"], [1, "poll", "glass"], [1, "section-eyebrow"], [1, "fa-solid", "fa-square-poll-vertical"], [1, "muted", "micro"], [1, "poll-options"], ["type", "button", "class", "poll-option", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "muted micro", "role", "status", 4, "ngIf"], ["class", "success-message", "role", "status", 4, "ngIf"], ["class", "form-error", "role", "alert", 4, "ngIf"], ["class", "muted micro", 4, "ngIf"], ["type", "button", 1, "poll-option", 3, "click", "disabled"], [4, "ngIf"], ["class", "poll-fill", 3, "width", 4, "ngIf"], [1, "poll-fill"], ["role", "status", 1, "muted", "micro"], [1, "fa-solid", "fa-spinner", "fa-spin"], ["role", "status", 1, "success-message"], [1, "fa-solid", "fa-circle-check"], ["role", "alert", 1, "form-error"], [1, "fa-solid", "fa-circle-exclamation"]], template: function PollComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PollComponent_section_0_Template, 16, 9, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.poll);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf], styles: ["\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.poll[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 20px;\n  border-radius: 14px;\n}\n\n.poll[_ngcontent-%COMP%], \n.poll[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n\n.poll[_ngcontent-%COMP%]   .section-eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n  color: #fb476c;\n  font-size: 12px;\n  font-weight: 750;\n  letter-spacing: 0.3px;\n  line-height: 1.6;\n}\n\n.poll[_ngcontent-%COMP%]   .section-eyebrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n\n\n\n.poll[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  color: #ffffff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.poll[_ngcontent-%COMP%]   .muted.micro[_ngcontent-%COMP%] {\n  margin: 10px 0 14px;\n  color: #a9b5c8;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.poll-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 10px;\n  margin-top: 18px;\n}\n\n.poll-option[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  min-height: 50px;\n  padding: 12px 15px;\n  overflow: hidden;\n  border: 1px solid #465168;\n  border-radius: 10px;\n  background: #111725;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.poll-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1b2539;\n  border-color: #fa456d;\n  box-shadow: 0 0 0 1px rgba(250, 69, 109, 0.12);\n}\n\n.poll-option[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #ff6484;\n  outline-offset: 3px;\n}\n\n.poll-option[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.995);\n}\n\n.poll-option[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.poll-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.poll-fill) {\n  position: relative;\n  z-index: 1;\n}\n\n.poll-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.poll-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2):not(.poll-fill) {\n  flex-shrink: 0;\n  padding: 4px 7px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n\n\n\n\n\n\n.poll-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  border-radius: 8px 0 0 8px;\n  background: linear-gradient(\n    90deg,\n    rgba(173, 19, 58, 0.7),\n    rgba(241, 47, 94, 0.65)\n  );\n  pointer-events: none;\n  transition: width 0.45s ease;\n}\n\n\n\n\n\n\n.poll[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 15px;\n  padding: 11px 12px;\n  border: 1px solid rgba(37, 195, 125, 0.35);\n  border-radius: 9px;\n  background: rgba(37, 195, 125, 0.1);\n  color: #85ebbb;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.poll[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 15px;\n  padding: 11px 12px;\n  border: 1px solid rgba(250, 65, 104, 0.35);\n  border-radius: 9px;\n  background: rgba(250, 65, 104, 0.1);\n  color: #ffa5b9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.poll[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.poll[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n\n@media (max-width: 900px) {\n  .poll[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .poll[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .poll-option[_ngcontent-%COMP%] {\n    min-height: 48px;\n  }\n}@media (max-width: 600px) {\n  .poll[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  .poll[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    font-size: 17px;\n  }\n\n  .poll[_ngcontent-%COMP%]   .section-eyebrow[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .poll-options[_ngcontent-%COMP%] {\n    gap: 9px;\n    margin-top: 15px;\n  }\n\n  .poll-option[_ngcontent-%COMP%] {\n    gap: 8px;\n    min-height: 47px;\n    padding: 11px 12px;\n    font-size: 13px;\n  }\n\n  .poll[_ngcontent-%COMP%]   .muted.micro[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}@media (prefers-reduced-motion: reduce) {\n  .poll-option[_ngcontent-%COMP%], \n   .poll-fill[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PollComponent, [{
        type: Component,
        args: [{ selector: 'app-poll', standalone: true, imports: [CommonModule], template: "\n<!-- =========================================\n     MAKKAL VALIMAI - PUBLIC OPINION POLL\n     ========================================= -->\n\n<section class=\"poll glass\" *ngIf=\"poll\">\n\n  <!-- POLL HEADING -->\n\n  <div class=\"section-eyebrow\">\n\n    <i class=\"fa-solid fa-square-poll-vertical\"></i>\n\n    {{\n      prefs.label(\n        '\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1',\n        'People\u2019s Opinion Poll'\n      )\n    }}\n\n  </div>\n\n  <!-- POLL QUESTION -->\n\n  <h3>\n    {{ prefs.txt(poll.question) }}\n  </h3>\n\n  <!-- POLL INFORMATION -->\n\n  <p class=\"muted micro\">\n\n    {{\n      prefs.label(\n        '\u0B87\u0BA4\u0BC1 \u0BA4\u0BB3 \u0BB5\u0BBE\u0B9A\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1; \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAF\u0BB2\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0B85\u0BB2\u0BCD\u0BB2.',\n        'Voluntary visitor poll, not a representative survey.'\n      )\n    }}\n\n  </p>\n\n  <!-- POLL OPTIONS -->\n\n  <div class=\"poll-options\">\n\n    <button\n      *ngFor=\"let opt of poll.options; let i = index\"\n      type=\"button\"\n      class=\"poll-option\"\n      [disabled]=\"voting || hasVoted() || !poll.active\"\n      (click)=\"vote(i)\"\n    >\n\n      <!-- OPTION NAME -->\n\n      <span>\n        {{ prefs.txt(opt) }}\n      </span>\n\n      <!-- VOTE PERCENTAGE -->\n\n      <span *ngIf=\"hasVoted()\">\n        {{ percentage(i) }}%\n      </span>\n\n      <!-- RESULT PROGRESS BAR -->\n\n      <span\n        *ngIf=\"hasVoted()\"\n        class=\"poll-fill\"\n        [style.width.%]=\"percentage(i)\"\n      ></span>\n\n    </button>\n\n  </div>\n\n  <!-- VOTING LOADING -->\n\n  <p\n    class=\"muted micro\"\n    *ngIf=\"voting\"\n    role=\"status\"\n  >\n\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n\n    {{\n      prefs.label(\n        '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1 \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1...',\n        'Recording your vote...'\n      )\n    }}\n\n  </p>\n\n  <!-- VOTING SUCCESS -->\n\n  <p\n    class=\"success-message\"\n    *ngIf=\"success\"\n    role=\"status\"\n  >\n\n    <i class=\"fa-solid fa-circle-check\"></i>\n\n    {{\n      prefs.label(\n        '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1 \u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95 \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.',\n        'Your vote was recorded successfully.'\n      )\n    }}\n\n  </p>\n\n  <!-- VOTING ERROR -->\n\n  <p\n    class=\"form-error\"\n    *ngIf=\"error\"\n    role=\"alert\"\n  >\n\n    <i class=\"fa-solid fa-circle-exclamation\"></i>\n\n    {{ error }}\n\n  </p>\n\n  <!-- POLL STATUS -->\n\n  <p class=\"muted micro\">\n\n    {{\n      !poll.active\n        ? prefs.label(\n            '\u0B87\u0BA8\u0BCD\u0BA4 \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1 \u0BA4\u0BB1\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0BAE\u0BC1\u0B9F\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1.',\n            'This poll is currently closed.'\n          )\n        : hasVoted()\n          ? prefs.label(\n              '\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BA8\u0BA9\u0BCD\u0BB1\u0BBF',\n              'Thanks for voting'\n            )\n          : prefs.label(\n              '\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BA4\u0BCD\u0BA4\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD',\n              'Tap one option to vote'\n            )\n    }}\n\n  </p>\n\n  <!-- TOTAL VOTES AFTER VOTING -->\n\n  <p\n    class=\"muted micro\"\n    *ngIf=\"hasVoted()\"\n  >\n\n    {{\n      prefs.label(\n        '\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD',\n        'Total Votes'\n      )\n    }}:\n\n    {{ totalVotes }}\n\n  </p>\n\n</section>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI - PUBLIC OPINION POLL\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.poll {\n  width: 100%;\n  min-width: 0;\n  padding: 20px;\n  border-radius: 14px;\n}\n\n.poll,\n.poll * {\n  box-sizing: border-box;\n}\n\n/* HEADING */\n\n.poll .section-eyebrow {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n  color: #fb476c;\n  font-size: 12px;\n  font-weight: 750;\n  letter-spacing: 0.3px;\n  line-height: 1.6;\n}\n\n.poll .section-eyebrow i {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n/* POLL QUESTION */\n\n.poll h3 {\n  margin: 12px 0;\n  color: #ffffff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.poll .muted.micro {\n  margin: 10px 0 14px;\n  color: #a9b5c8;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   VOTING OPTIONS\n   ========================================== */\n\n.poll-options {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 10px;\n  margin-top: 18px;\n}\n\n.poll-option {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  min-height: 50px;\n  padding: 12px 15px;\n  overflow: hidden;\n  border: 1px solid #465168;\n  border-radius: 10px;\n  background: #111725;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.poll-option:hover:not(:disabled) {\n  background: #1b2539;\n  border-color: #fa456d;\n  box-shadow: 0 0 0 1px rgba(250, 69, 109, 0.12);\n}\n\n.poll-option:focus-visible {\n  outline: 2px solid #ff6484;\n  outline-offset: 3px;\n}\n\n.poll-option:active:not(:disabled) {\n  transform: scale(0.995);\n}\n\n.poll-option:disabled {\n  cursor: default;\n}\n\n.poll-option > span:not(.poll-fill) {\n  position: relative;\n  z-index: 1;\n}\n\n.poll-option > span:first-child {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.poll-option > span:nth-child(2):not(.poll-fill) {\n  flex-shrink: 0;\n  padding: 4px 7px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n\n/* ==========================================\n   RESULT BAR AFTER VOTING\n   ========================================== */\n\n.poll-fill {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  border-radius: 8px 0 0 8px;\n  background: linear-gradient(\n    90deg,\n    rgba(173, 19, 58, 0.7),\n    rgba(241, 47, 94, 0.65)\n  );\n  pointer-events: none;\n  transition: width 0.45s ease;\n}\n\n/* ==========================================\n   SUCCESS AND ERROR MESSAGES\n   ========================================== */\n\n.poll .success-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 15px;\n  padding: 11px 12px;\n  border: 1px solid rgba(37, 195, 125, 0.35);\n  border-radius: 9px;\n  background: rgba(37, 195, 125, 0.1);\n  color: #85ebbb;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.poll .form-error {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 15px;\n  padding: 11px 12px;\n  border: 1px solid rgba(250, 65, 104, 0.35);\n  border-radius: 9px;\n  background: rgba(250, 65, 104, 0.1);\n  color: #ffa5b9;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.poll .success-message i,\n.poll .form-error i {\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n/* ==========================================\n   TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE\n   ========================================== */\n\n\n\n/* ACCESSIBILITY */\n", "/* Responsive rules for poll; isolated from common/desktop CSS. */\n@media (max-width: 900px) {\n  .poll {\n    padding: 18px;\n  }\n\n  .poll h3 {\n    font-size: 18px;\n  }\n\n  .poll-option {\n    min-height: 48px;\n  }\n}@media (max-width: 600px) {\n  .poll {\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  .poll h3 {\n    margin: 10px 0;\n    font-size: 17px;\n  }\n\n  .poll .section-eyebrow {\n    font-size: 11px;\n  }\n\n  .poll-options {\n    gap: 9px;\n    margin-top: 15px;\n  }\n\n  .poll-option {\n    gap: 8px;\n    min-height: 47px;\n    padding: 11px 12px;\n    font-size: 13px;\n  }\n\n  .poll .muted.micro {\n    font-size: 11px;\n  }\n}@media (prefers-reduced-motion: reduce) {\n  .poll-option,\n  .poll-fill {\n    transition: none;\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.NewsApiService }], { poll: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PollComponent, { className: "PollComponent", filePath: "src/app/shared/poll/poll.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=poll.component.js.map