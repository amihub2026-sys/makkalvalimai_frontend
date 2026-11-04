import { Component, computed, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PollComponent } from '../../../shared/poll/poll.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
function HomeIssuesPollsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "img", 10);
    i0.ɵɵelementStart(2, "div")(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵelement(6, "i", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const issue_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.media.url(issue_r1.photo), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(issue_r1.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", issue_r1.area, " ");
} }
function HomeIssuesPollsComponent_div_11_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const poll_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prefs.txt(poll_r4.question));
} }
function HomeIssuesPollsComponent_div_11_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_11_div_14_button_1_Template_button_click_0_listener() { const i_r6 = i0.ɵɵrestoreView(_r5).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openPoll(i_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r6 + 1);
} }
function HomeIssuesPollsComponent_div_11_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, HomeIssuesPollsComponent_div_11_div_14_button_1_Template, 2, 1, "button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.store.polls());
} }
function HomeIssuesPollsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 2)(3, "h2");
    i0.ɵɵelement(4, "i", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, HomeIssuesPollsComponent_div_11_p_8_Template, 2, 1, "p", 16);
    i0.ɵɵelementStart(9, "p", 17);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 18);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_11_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openPoll()); });
    i0.ɵɵelement(12, "i", 19);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, HomeIssuesPollsComponent_div_11_div_14_Template, 2, 1, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", "People\u2019s Opinion Poll"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.currentPoll());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.prefs.label("\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BAE\u0BCD. \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0B95\u0BC0\u0BB4\u0BC7 \u0BA4\u0BCA\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD.", "Your voice matters. Tap below to participate."));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD", "Vote in the poll"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.store.polls().length > 1);
} }
function HomeIssuesPollsComponent_div_12_app_poll_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-poll", 33);
} if (rf & 2) {
    const poll_r8 = ctx.ngIf;
    i0.ɵɵproperty("poll", poll_r8);
} }
function HomeIssuesPollsComponent_div_12_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_12_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.pollIndex.set((ctx_r1.pollIndex() + 1) % ctx_r1.store.polls().length)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.prefs.label("\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BA4\u0BC1", "Next poll"), " \u2192");
} }
function HomeIssuesPollsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_12_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePoll()); });
    i0.ɵɵelementStart(1, "section", 26);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_12_Template_section_click_1_listener($event) { i0.ɵɵrestoreView(_r7); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 27)(3, "strong");
    i0.ɵɵelement(4, "i", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 28);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_12_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePoll()); });
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, HomeIssuesPollsComponent_div_12_app_poll_8_Template, 1, 1, "app-poll", 29);
    i0.ɵɵelementStart(9, "div", 30)(10, "a", 31);
    i0.ɵɵlistener("click", function HomeIssuesPollsComponent_div_12_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePoll()); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, HomeIssuesPollsComponent_div_12_button_12_Template, 2, 1, "button", 32);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", "Opinion Poll"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.currentPoll());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "All polls"), " \u2192");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.store.polls().length > 1);
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeIssuesPollsComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    pollIndex = signal(0, ...(ngDevMode ? [{ debugName: "pollIndex" }] : []));
    pollPopupOpen = signal(false, ...(ngDevMode ? [{ debugName: "pollPopupOpen" }] : []));
    currentPoll = computed(() => this.store.polls()[this.pollIndex() % Math.max(this.store.polls().length, 1)] || null, ...(ngDevMode ? [{ debugName: "currentPoll" }] : []));
    openPoll(i = 0) { this.pollIndex.set(i); this.pollPopupOpen.set(true); }
    closePoll() { this.pollPopupOpen.set(false); }
    closeOnEscape() { if (this.pollPopupOpen())
        this.closePoll(); }
    static ɵfac = function HomeIssuesPollsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeIssuesPollsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeIssuesPollsComponent, selectors: [["app-home-issues-polls"]], hostBindings: function HomeIssuesPollsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function HomeIssuesPollsComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 13, vars: 6, consts: [[1, "home-mid"], [1, "panel", "glass"], [1, "section-title"], [1, "fa-solid", "fa-road"], ["routerLink", "/public-issues"], ["class", "issue-preview", 4, "ngFor", "ngForOf"], ["routerLink", "/report-problem", 1, "btn", "btn-red", "wide"], ["class", "home-polls", 4, "ngIf"], ["class", "poll-modal-backdrop", 3, "click", 4, "ngIf"], [1, "issue-preview"], ["alt", "Submitted public issue photo", "loading", "lazy", 3, "src"], [1, "fa-solid", "fa-location-dot"], [1, "home-polls"], [1, "poll-spotlight", "glass"], [1, "fa-solid", "fa-square-poll-vertical"], ["routerLink", "/opinion-polls"], ["class", "poll-question", 4, "ngIf"], [1, "muted", "micro"], ["type", "button", 1, "btn", "btn-red", "wide", 3, "click"], [1, "fa-solid", "fa-check-to-slot"], ["class", "poll-spotlight-dots", 4, "ngIf"], [1, "poll-question"], [1, "poll-spotlight-dots"], ["type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [1, "poll-modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "People's Opinion Poll", 1, "poll-modal-dialog", 3, "click"], [1, "poll-modal-head"], ["type", "button", "aria-label", "Close poll", 3, "click"], [3, "poll", 4, "ngIf"], [1, "poll-modal-foot"], ["routerLink", "/opinion-polls", 3, "click"], ["type", "button", 3, "click", 4, "ngIf"], [3, "poll"]], template: function HomeIssuesPollsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵelement(4, "i", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(8, HomeIssuesPollsComponent_div_8_Template, 8, 3, "div", 5);
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, HomeIssuesPollsComponent_div_11_Template, 15, 6, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, HomeIssuesPollsComponent_div_12_Template, 13, 4, "div", 8);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD", "Public Issues"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192 ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.store.approvedIssues().slice(0, 3));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95", "Report a public issue"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.store.polls().length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pollPopupOpen());
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, RouterLink, PollComponent], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.home[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-hero-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-two[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-mid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n}\n\n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.home-polls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 16px;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-mid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%], .home-polls[_ngcontent-%COMP%], .home-section[_ngcontent-%COMP%]{min-width:0}\n\n.poll-spotlight[_ngcontent-%COMP%]{padding:1.1rem;display:flex;flex-direction:column;gap:12px;border-radius:12px}\n\n.poll-spotlight[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin:0}\n\n.poll-question[_ngcontent-%COMP%]{font-size:1rem;font-weight:850;line-height:1.75;margin:0}\n\n.poll-spotlight[_ngcontent-%COMP%]   .btn.wide[_ngcontent-%COMP%]{margin-top:auto}\n\n.poll-spotlight-dots[_ngcontent-%COMP%]{display:flex;gap:7px;flex-wrap:wrap}\n\n.poll-spotlight-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background:#0a5897;border:1px solid #7ba9d175;border-radius:7px;padding:4px 8px}\n\n.poll-modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:450;background:#00172bda;display:grid;place-items:center;padding:14px}\n\n.poll-modal-dialog[_ngcontent-%COMP%]{width:min(470px,100%);max-height:min(88vh,750px);overflow-y:auto;background:linear-gradient(130deg,#0b5695,#043665);border:1px solid #83bee86b;box-shadow:0 25px 75px #00142ca6;border-radius:16px;padding:0;min-width:0}\n\n.poll-modal-head[_ngcontent-%COMP%], .poll-modal-foot[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 17px;background:#084376}\n\n.poll-modal-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.85rem}\n\n.poll-modal-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ff5470}\n\n.poll-modal-head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#072e57;color:white;border:1px solid #ffffff55;border-radius:50%;width:31px;height:31px;font-size:1.3rem}\n\n.poll-modal-dialog[_ngcontent-%COMP%]   app-poll[_ngcontent-%COMP%]{display:block;margin:10px}\n\n.poll-modal-dialog[_ngcontent-%COMP%]   app-poll[_ngcontent-%COMP%]   .poll[_ngcontent-%COMP%]{box-shadow:none}\n\n.poll-modal-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .poll-modal-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.76rem;background:none;border:0;color:#d7efff;font-weight:750}", "\n\n@media (max-width: 850px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n}\n\n@media(max-width:650px){\n.poll-spotlight[_ngcontent-%COMP%]{padding:.9rem}\n.poll-modal-dialog[_ngcontent-%COMP%]{max-height:78vh}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeIssuesPollsComponent, [{
        type: Component,
        args: [{ selector: 'app-home-issues-polls', standalone: true, imports: [CommonModule, RouterLink, PollComponent], template: "<!-- ==========================================\n       PUBLIC ISSUES AND OPINION POLL\n       ========================================== -->\n\n  <div class=\"home-mid\">\n\n    <!-- PUBLIC ISSUES -->\n\n    <section class=\"panel glass\">\n\n      <div class=\"section-title\">\n\n        <h2>\n          <i class=\"fa-solid fa-road\"></i>\n          {{ prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD', 'Public Issues') }}\n        </h2>\n\n        <a routerLink=\"/public-issues\">\n          {{ prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD', 'View all') }} \u2192\n        </a>\n\n      </div>\n\n      <div\n        class=\"issue-preview\"\n        *ngFor=\"let issue of store.approvedIssues().slice(0,3)\"\n      >\n\n        <img\n          [src]=\"media.url(issue.photo)\"\n          alt=\"Submitted public issue photo\"\n          loading=\"lazy\"\n        />\n\n        <div>\n\n          <b>{{ issue.title }}</b>\n\n          <small>\n            <i class=\"fa-solid fa-location-dot\"></i>\n            {{ issue.area }}\n          </small>\n\n        </div>\n\n      </div>\n\n      <a\n        class=\"btn btn-red wide\"\n        routerLink=\"/report-problem\"\n      >\n        {{\n          prefs.label(\n            '\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95',\n            'Report a public issue'\n          )\n        }}\n      </a>\n\n    </section>\n\n    <!-- PUBLIC OPINION POLL -->\n\n \n<!-- SMALL POLL SPOTLIGHT: VOTING OPENS ON DEMAND -->\n<div class=\"home-polls\" *ngIf=\"store.polls().length\">\n  <div class=\"poll-spotlight glass\">\n    <div class=\"section-title\"><h2><i class=\"fa-solid fa-square-poll-vertical\"></i> {{prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1','People\u2019s Opinion Poll')}}</h2><a routerLink=\"/opinion-polls\">{{prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD','View all')}} \u2192</a></div>\n    <p class=\"poll-question\" *ngIf=\"currentPoll() as poll\">{{prefs.txt(poll.question)}}</p>\n    <p class=\"muted micro\">{{prefs.label('\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BAE\u0BCD. \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95 \u0B95\u0BC0\u0BB4\u0BC7 \u0BA4\u0BCA\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD.','Your voice matters. Tap below to participate.')}}</p>\n    <button class=\"btn btn-red wide\" type=\"button\" (click)=\"openPoll()\"><i class=\"fa-solid fa-check-to-slot\"></i> {{prefs.label('\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD','Vote in the poll')}}</button>\n    <div class=\"poll-spotlight-dots\" *ngIf=\"store.polls().length > 1\"><button *ngFor=\"let poll of store.polls(); let i=index\" type=\"button\" (click)=\"openPoll(i)\">{{i+1}}</button></div>\n  </div>\n</div>\n\n  </div>\n\n<!-- COMPACT POLL MODAL \u2014 live MongoDB voting through app-poll -->\n<div class=\"poll-modal-backdrop\" *ngIf=\"pollPopupOpen()\" (click)=\"closePoll()\">\n  <section class=\"poll-modal-dialog\" role=\"dialog\" aria-modal=\"true\" aria-label=\"People's Opinion Poll\" (click)=\"$event.stopPropagation()\">\n    <div class=\"poll-modal-head\"><strong><i class=\"fa-solid fa-square-poll-vertical\"></i> {{prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1','Opinion Poll')}}</strong><button type=\"button\" (click)=\"closePoll()\" aria-label=\"Close poll\">\u00D7</button></div>\n    <app-poll *ngIf=\"currentPoll() as poll\" [poll]=\"poll\" />\n    <div class=\"poll-modal-foot\"><a routerLink=\"/opinion-polls\" (click)=\"closePoll()\">{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','All polls')}} \u2192</a><button type=\"button\" *ngIf=\"store.polls().length > 1\" (click)=\"pollIndex.set((pollIndex()+1)%store.polls().length)\">{{prefs.label('\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BA4\u0BC1','Next poll')}} \u2192</button></div>\n  </section>\n</div>\n", styles: [":host{display:block;min-width:0}\n.home,\n.home > *,\n.home-hero-grid > *,\n.home-categories > *,\n.home-mid > *,\n.home-two > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-mid {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n}\n\n.home-mid > * {\n  min-width: 0;\n}\n\n.home-polls {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 16px;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-mid .panel,.home-polls,.home-section{min-width:0}\n\n.poll-spotlight{padding:1.1rem;display:flex;flex-direction:column;gap:12px;border-radius:12px}\n\n.poll-spotlight .section-title{margin:0}\n\n.poll-question{font-size:1rem;font-weight:850;line-height:1.75;margin:0}\n\n.poll-spotlight .btn.wide{margin-top:auto}\n\n.poll-spotlight-dots{display:flex;gap:7px;flex-wrap:wrap}\n\n.poll-spotlight-dots button{color:#fff;background:#0a5897;border:1px solid #7ba9d175;border-radius:7px;padding:4px 8px}\n\n.poll-modal-backdrop{position:fixed;inset:0;z-index:450;background:#00172bda;display:grid;place-items:center;padding:14px}\n\n.poll-modal-dialog{width:min(470px,100%);max-height:min(88vh,750px);overflow-y:auto;background:linear-gradient(130deg,#0b5695,#043665);border:1px solid #83bee86b;box-shadow:0 25px 75px #00142ca6;border-radius:16px;padding:0;min-width:0}\n\n.poll-modal-head,.poll-modal-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 17px;background:#084376}\n\n.poll-modal-head strong{font-size:.85rem}\n\n.poll-modal-head i{color:#ff5470}\n\n.poll-modal-head button{background:#072e57;color:white;border:1px solid #ffffff55;border-radius:50%;width:31px;height:31px;font-size:1.3rem}\n\n.poll-modal-dialog app-poll{display:block;margin:10px}\n\n.poll-modal-dialog app-poll .poll{box-shadow:none}\n\n.poll-modal-foot a,.poll-modal-foot button{font-size:.76rem;background:none;border:0;color:#d7efff;font-weight:750}\n", "/* Responsive overrides specific to issues-polls */\n@media (max-width: 850px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n}\n\n@media(max-width:650px){\n.poll-spotlight{padding:.9rem}\n.poll-modal-dialog{max-height:78vh}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], { closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeIssuesPollsComponent, { className: "HomeIssuesPollsComponent", filePath: "src/app/pages/home/issues-polls/issues-polls.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=issues-polls.component.js.map