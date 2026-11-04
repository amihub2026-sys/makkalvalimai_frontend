// problems-solved — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ISSUE_CATEGORIES } from '../../core/models';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { SUGGESTED_AREAS } from '../../core/areas';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "../../services/media.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ProblemsSolvedComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r1);
} }
function ProblemsSolvedComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95", "Report an issue"));
} }
function ProblemsSolvedComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 15);
} if (rf & 2) {
    const locality_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", locality_r3);
} }
function ProblemsSolvedComponent_article_25_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.media.url(item_r4.photo), i0.ɵɵsanitizeUrl);
} }
function ProblemsSolvedComponent_article_25_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 29);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.media.url(item_r4.afterPhoto), i0.ɵɵsanitizeUrl);
} }
function ProblemsSolvedComponent_article_25_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.prefs.label("\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1:", "Resolution:"), " ", item_r4.resolution);
} }
function ProblemsSolvedComponent_article_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 18)(1, "div", 19);
    i0.ɵɵtemplate(2, ProblemsSolvedComponent_article_25_img_2_Template, 1, 1, "img", 20)(3, ProblemsSolvedComponent_article_25_img_3_Template, 1, 1, "img", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 22)(5, "span", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ProblemsSolvedComponent_article_25_p_11_Template, 2, 2, "p", 23);
    i0.ɵɵelementStart(12, "div", 24)(13, "span", 25);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 26);
    i0.ɵɵelement(16, "i", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(17, "app-audio-player", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r4.photo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.solved && item_r4.afterPhoto);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r4.category, " \u00B7 ", item_r4.area);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.solved);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("green", ctx_r1.solved);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.solved ? "\u2713 Verified solved" : "\u2713 Admin approved");
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r1.share(item_r4), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.prefs.language() === "ta" ? item_r4.audio.ta : item_r4.audio.en);
} }
function ProblemsSolvedComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prefs.label("\u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8", "No approved reports for the selected filters"));
} }
export class ProblemsSolvedComponent {
    store;
    prefs;
    media;
    solved = true;
    category = '';
    area = '';
    categories = ISSUE_CATEGORIES;
    areas = SUGGESTED_AREAS;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    get filtered() { return (this.solved ? this.store.solvedIssues() : this.store.approvedIssues()).filter(x => (!this.category || x.category === this.category) && (!this.area || x.area.toLowerCase().includes(this.area.toLowerCase()))); }
    share(item) { const url = new URL(`/public-issues?area=${encodeURIComponent(item.area)}`, window.location.origin).href; return 'https://wa.me/?text=' + encodeURIComponent(item.title + '\n' + url); }
    static ɵfac = function ProblemsSolvedComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProblemsSolvedComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProblemsSolvedComponent, selectors: [["app-problems-solved"]], decls: 27, vars: 13, consts: [[1, "container", "page-section", "problems-solved-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-road", "giant-icon"], [1, "filter-panel", "glass"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["list", "mv-areas", "placeholder", "Madurai / Melur / Usilampatti...", 3, "ngModelChange", "ngModel"], ["routerLink", "/report-problem", "class", "btn btn-red", 4, "ngIf"], ["id", "mv-areas"], [3, "src"], [1, "issue-list"], ["class", "issue-card glass", 4, "ngFor", "ngForOf"], ["class", "empty-state glass", 4, "ngIf"], [3, "value"], ["routerLink", "/report-problem", 1, "btn", "btn-red"], [1, "fa-solid", "fa-plus"], [1, "issue-card", "glass"], [1, "issue-pictures"], ["alt", "Reported issue photograph", "loading", "lazy", 3, "src", 4, "ngIf"], ["alt", "After: verified resolution", "loading", "lazy", 3, "src", 4, "ngIf"], [1, "issue-data"], ["class", "muted", 4, "ngIf"], [1, "card-actions"], [1, "chip"], ["target", "_blank", "rel", "noopener noreferrer", 1, "share", 3, "href"], [1, "fa-brands", "fa-whatsapp"], ["alt", "Reported issue photograph", "loading", "lazy", 3, "src"], ["alt", "After: verified resolution", "loading", "lazy", 3, "src"], [1, "muted"], [1, "empty-state", "glass"]], template: function ProblemsSolvedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "MADURAI CIVIC REPORTING");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(9, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4)(11, "label");
            i0.ɵɵtext(12);
            i0.ɵɵelementStart(13, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function ProblemsSolvedComponent_Template_select_ngModelChange_13_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.category, $event) || (ctx.category = $event); return $event; });
            i0.ɵɵelementStart(14, "option", 6);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, ProblemsSolvedComponent_option_16_Template, 2, 2, "option", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "label");
            i0.ɵɵtext(18);
            i0.ɵɵelementStart(19, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function ProblemsSolvedComponent_Template_input_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.area, $event) || (ctx.area = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(20, ProblemsSolvedComponent_a_20_Template, 3, 1, "a", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "datalist", 10);
            i0.ɵɵtemplate(22, ProblemsSolvedComponent_option_22_Template, 1, 1, "option", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "app-audio-player", 11);
            i0.ɵɵelementStart(24, "div", 12);
            i0.ɵɵtemplate(25, ProblemsSolvedComponent_article_25_Template, 18, 12, "article", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, ProblemsSolvedComponent_div_26_Template, 2, 1, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_10_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.solved ? ctx.prefs.label("\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1 \u0B95\u0BA3\u0BCD\u0B9F \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD", "Problems Solved") : ctx.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD", "Public Issues"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.solved ? ctx.prefs.label("\u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD", "Verified outcomes and before/after photographs") : ctx.prefs.label("\u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95\u0BBF \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B85\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4 \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD", "Only admin-approved reports are visible publicly"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8 \u0BB5\u0B95\u0BC8", "Category"));
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.category);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "All categories"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0B95\u0BC1\u0BA4\u0BBF", "Your area"));
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.area);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.solved);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.areas);
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.prefs.language() === "ta" ? ((tmp_10_0 = ctx.store.settings().sectionAudio[ctx.solved ? "solved" : "issues"]) == null ? null : tmp_10_0.ta) || "" : ((tmp_10_0 = ctx.store.settings().sectionAudio[ctx.solved ? "solved" : "issues"]) == null ? null : tmp_10_0.en) || "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.filtered);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.filtered.length);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel, RouterLink, AudioPlayerComponent], styles: ["\n\n.issue-preview[_ngcontent-%COMP%] {\n  display:flex;gap:.8rem;align-items:center;margin:.7rem 0\n}\n\n.issue-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:80px;height:64px;object-fit:cover;border-radius:8px\n}\n\n.issue-preview[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .issue-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display:block\n}\n\n.issue-preview[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n\n.issue-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color:#bfc2c9\n}\n\n.issue-list[_ngcontent-%COMP%] {\n  display:grid;gap:1rem;margin-top:1rem\n}\n\n.issue-card[_ngcontent-%COMP%] {\n  display:grid;grid-template-columns:minmax(200px,.85fr) minmax(0,1.45fr);gap:1rem;overflow:hidden\n}\n\n.issue-pictures[_ngcontent-%COMP%] {\n  display:flex;min-height:195px;max-height:320px\n}\n\n.issue-pictures[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:100%;min-width:0;object-fit:cover;flex:1\n}\n\n.issue-pictures[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] + img[_ngcontent-%COMP%] {\n  width:50%\n}\n\n.issue-data[_ngcontent-%COMP%] {\n  padding:1rem;min-width:0\n}\n\n.issue-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin:.5rem 0\n}\n\n.issue-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n\n\n\n\n", "\n\n@media (max-width:600px) {\n.issue-pictures[_ngcontent-%COMP%] {\n  min-height:185px;max-height:240px\n}\n.issue-data[_ngcontent-%COMP%] {\n  padding:.9rem\n}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProblemsSolvedComponent, [{
        type: Component,
        args: [{ selector: 'app-problems-solved', standalone: true, imports: [CommonModule, FormsModule, RouterLink, AudioPlayerComponent], template: "<div class=\"container page-section problems-solved-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">MADURAI CIVIC REPORTING</span>\n<h1>{{solved?prefs.label('\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1 \u0B95\u0BA3\u0BCD\u0B9F \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD','Problems Solved'):prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD','Public Issues')}}</h1>\n<p>{{solved?prefs.label('\u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD','Verified outcomes and before/after photographs'):prefs.label('\u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95\u0BBF \u0B92\u0BAA\u0BCD\u0BAA\u0BC1\u0BA4\u0BB2\u0BCD \u0B85\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4 \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD','Only admin-approved reports are visible publicly')}}</p>\n</div>\n<i class=\"fa-solid fa-road giant-icon\">\n</i>\n</div>\n<div class=\"filter-panel glass\">\n<label>{{prefs.label('\u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8 \u0BB5\u0B95\u0BC8','Category')}}<select [(ngModel)]=\"category\">\n<option value=\"\">{{prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD','All categories')}}</option>\n<option *ngFor=\"let c of categories\" [value]=\"c\">{{c}}</option>\n</select>\n</label>\n<label>{{prefs.label('\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0B95\u0BC1\u0BA4\u0BBF','Your area')}}<input [(ngModel)]=\"area\" list=\"mv-areas\" placeholder=\"Madurai / Melur / Usilampatti...\"/>\n</label>\n<a routerLink=\"/report-problem\" class=\"btn btn-red\" *ngIf=\"!solved\">\n<i class=\"fa-solid fa-plus\">\n</i> {{prefs.label('\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0B95','Report an issue')}}</a>\n</div>\n<datalist id=\"mv-areas\">\n<option *ngFor=\"let locality of areas\" [value]=\"locality\">\n</option>\n</datalist>\n<app-audio-player [src]=\"prefs.language()==='ta'?(store.settings().sectionAudio[solved?'solved':'issues']?.ta||''):(store.settings().sectionAudio[solved?'solved':'issues']?.en||'')\"/>\n<div class=\"issue-list\">\n<article class=\"issue-card glass\" *ngFor=\"let item of filtered\">\n<div class=\"issue-pictures\">\n<img *ngIf=\"item.photo\" [src]=\"media.url(item.photo)\" alt=\"Reported issue photograph\" loading=\"lazy\"/>\n<img *ngIf=\"solved&&item.afterPhoto\" [src]=\"media.url(item.afterPhoto)\" alt=\"After: verified resolution\" loading=\"lazy\"/>\n</div>\n<div class=\"issue-data\">\n<span class=\"eyebrow\">{{item.category}} \u00B7 {{item.area}}</span>\n<h3>{{item.title}}</h3>\n<p>{{item.description}}</p>\n<p class=\"muted\" *ngIf=\"solved\">{{prefs.label('\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1:','Resolution:')}} {{item.resolution}}</p>\n<div class=\"card-actions\">\n<span class=\"chip\" [class.green]=\"solved\">{{solved?'\u2713 Verified solved':'\u2713 Admin approved'}}</span>\n<a [href]=\"share(item)\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"share\">\n<i class=\"fa-brands fa-whatsapp\">\n</i>\n</a>\n</div>\n<app-audio-player [src]=\"prefs.language()==='ta'?item.audio.ta:item.audio.en\"/>\n</div>\n</article>\n</div>\n<div class=\"empty-state glass\" *ngIf=\"!filtered.length\">{{prefs.label('\u0B87\u0BA8\u0BCD\u0BA4 \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8','No approved reports for the selected filters')}}</div>\n</div>\n", styles: ["/* public-issues \u2014 section layout and responsive styles */\n.issue-preview {\n  display:flex;gap:.8rem;align-items:center;margin:.7rem 0\n}\n\n.issue-preview img {\n  width:80px;height:64px;object-fit:cover;border-radius:8px\n}\n\n.issue-preview b,.issue-preview small {\n  display:block\n}\n\n.issue-preview b {\n  font-size:.8rem\n}\n\n.issue-preview small {\n  color:#bfc2c9\n}\n\n.issue-list {\n  display:grid;gap:1rem;margin-top:1rem\n}\n\n.issue-card {\n  display:grid;grid-template-columns:minmax(200px,.85fr) minmax(0,1.45fr);gap:1rem;overflow:hidden\n}\n\n.issue-pictures {\n  display:flex;min-height:195px;max-height:320px\n}\n\n.issue-pictures img {\n  width:100%;min-width:0;object-fit:cover;flex:1\n}\n\n.issue-pictures img+img {\n  width:50%\n}\n\n.issue-data {\n  padding:1rem;min-width:0\n}\n\n.issue-data h3 {\n  margin:.5rem 0\n}\n\n.issue-data p {\n  font-size:.8rem\n}\n\n\n\n/* Solved-page layout can be changed independently. */\n", "/* Responsive rules for problems-solved; isolated from common/desktop CSS. */\n@media (max-width:600px) {\n.issue-pictures {\n  min-height:185px;max-height:240px\n}\n.issue-data {\n  padding:.9rem\n}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProblemsSolvedComponent, { className: "ProblemsSolvedComponent", filePath: "src/app/pages/problems-solved/problems-solved.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=problems-solved.component.js.map