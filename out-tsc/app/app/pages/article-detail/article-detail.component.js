import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/content.service";
import * as i3 from "../../services/media.service";
import * as i4 from "../../services/preferences.service";
import * as i5 from "../../services/news-api.service";
import * as i6 from "@angular/common";
const _c0 = a0 => ["/news", a0];
function ArticleDetailComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "img", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.media.url(a_r2.image), i0.ɵɵsanitizeUrl)("alt", ctx_r2.prefs.txt(a_r2.title));
} }
function ArticleDetailComponent_div_0_p_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind3(2, 2, ctx_r2.prefs.txt(a_r2.body), 0, 180), " ", ctx_r2.prefs.txt(a_r2.body).length > 180 ? "\u2026" : "", " ");
} }
function ArticleDetailComponent_div_0_ng_container_35_h3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(block_r4.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const part_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(part_r5.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const part_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(part_r5.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_strong_1_Template, 2, 1, "strong", 48)(2, ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 48);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const part_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", part_r5.bold);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !part_r5.bold);
} }
function ArticleDetailComponent_div_0_ng_container_35_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 47);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_ng_container_35_p_2_ng_container_1_Template, 3, 2, "ng-container", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", block_r4.parts);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_figcaption_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figcaption");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(block_r4.caption);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const part_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(part_r6.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const part_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(part_r6.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_strong_1_Template, 2, 1, "strong", 48)(2, ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 48);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", part_r6.bold);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !part_r6.bold);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 53);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_ng_container_1_Template, 3, 2, "ng-container", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", block_r4.parts);
} }
function ArticleDetailComponent_div_0_ng_container_35_figure_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure", 49)(1, "div", 50);
    i0.ɵɵelement(2, "img", 51);
    i0.ɵɵtemplate(3, ArticleDetailComponent_div_0_ng_container_35_figure_3_figcaption_3_Template, 2, 1, "figcaption", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ArticleDetailComponent_div_0_ng_container_35_figure_3_p_4_Template, 2, 1, "p", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r4 = i0.ɵɵnextContext().$implicit;
    const a_r2 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("image-right", block_r4.kind === "image-right")("image-full", block_r4.kind === "image-full");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r2.media.url(block_r4.image), i0.ɵɵsanitizeUrl)("alt", block_r4.caption || ctx_r2.prefs.txt(a_r2.title));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", block_r4.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", block_r4.text);
} }
function ArticleDetailComponent_div_0_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_ng_container_35_h3_1_Template, 2, 1, "h3", 43)(2, ArticleDetailComponent_div_0_ng_container_35_p_2_Template, 2, 1, "p", 44)(3, ArticleDetailComponent_div_0_ng_container_35_figure_3_Template, 5, 8, "figure", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const block_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", block_r4.kind === "heading");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", block_r4.kind === "paragraph");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", block_r4.image);
} }
function ArticleDetailComponent_div_0_section_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 54)(1, "h3", 55);
    i0.ɵɵelement(2, "i", 56);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 57);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 58)(7, "video", 59);
    i0.ɵɵtext(8, " Your browser does not support video playback. ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF", "News Video"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BBE\u0BA9 \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.", "Watch the video related to this news report."), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r2.media.url(a_r2.video), i0.ɵɵsanitizeUrl)("poster", a_r2.image ? ctx_r2.media.url(a_r2.image) : null);
    i0.ɵɵattribute("aria-label", ctx_r2.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF", "News video"));
} }
function ArticleDetailComponent_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "h3");
    i0.ɵɵelement(2, "i", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "app-audio-player", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B92\u0BB2\u0BBF \u0BB5\u0B9F\u0BBF\u0BB5\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Listen to This News"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.prefs.language() === "ta" ? (a_r2.audio == null ? null : a_r2.audio.ta) || "" : (a_r2.audio == null ? null : a_r2.audio.en) || "");
} }
function ArticleDetailComponent_div_0_div_58_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 51);
} if (rf & 2) {
    const b_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r2.media.url(b_r7.image), i0.ɵɵsanitizeUrl)("alt", ctx_r2.prefs.txt(b_r7.title));
} }
function ArticleDetailComponent_div_0_div_58_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 65);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_div_58_a_1_img_1_Template, 1, 2, "img", 66);
    i0.ɵɵelementStart(2, "div", 67)(3, "span", 68);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const b_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, b_r7.slug));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", b_r7.image);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 5, b_r7.kind), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.txt(b_r7.title), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(10, 7, b_r7.publishedAt, "dd MMM yyyy", "+0530"), " ");
} }
function ArticleDetailComponent_div_0_div_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵtemplate(1, ArticleDetailComponent_div_0_div_58_a_1_Template, 11, 13, "a", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.otherStories());
} }
function ArticleDetailComponent_div_0_p_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B87\u0BA9\u0BCD\u0BA9\u0BC1\u0BAE\u0BCD \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.", "No other news has been published yet."), " ");
} }
function ArticleDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "article", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, ArticleDetailComponent_div_0_div_3_Template, 2, 2, "div", 6);
    i0.ɵɵelementStart(4, "div", 7)(5, "a", 8);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelement(8, "span", 10);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 11);
    i0.ɵɵelement(12, "i", 12);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "h1", 13);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 14)(17, "span");
    i0.ɵɵelement(18, "i", 15);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵelement(22, "i", 16);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵelement(26, "i", 17);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(28, ArticleDetailComponent_div_0_p_28_Template, 3, 6, "p", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 19)(30, "div", 20);
    i0.ɵɵelement(31, "span", 21);
    i0.ɵɵelementStart(32, "h2");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 22);
    i0.ɵɵtemplate(35, ArticleDetailComponent_div_0_ng_container_35_Template, 4, 3, "ng-container", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, ArticleDetailComponent_div_0_section_36_Template, 9, 5, "section", 24)(37, ArticleDetailComponent_div_0_div_37_Template, 5, 2, "div", 25);
    i0.ɵɵelementStart(38, "div", 26)(39, "h3");
    i0.ɵɵelement(40, "i", 27);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 28)(43, "a", 29);
    i0.ɵɵelement(44, "i", 30);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 31);
    i0.ɵɵlistener("click", function ArticleDetailComponent_div_0_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.copyLink()); });
    i0.ɵɵelement(47, "i", 32);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "div", 33)(50, "a", 34);
    i0.ɵɵelement(51, "i", 35);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(53, "aside", 36)(54, "div", 37)(55, "h3");
    i0.ɵɵelement(56, "i", 17);
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(58, ArticleDetailComponent_div_0_div_58_Template, 2, 1, "div", 38)(59, ArticleDetailComponent_div_0_p_59_Template, 2, 1, "p", 39);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r2 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("no-sidebar", ctx_r2.otherStories().length === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", a_r2.image);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" \u2190 ", ctx_r2.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC1\u0BAE\u0BCD", "All News"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 23, a_r2.kind), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", a_r2.area, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.txt(a_r2.title), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(20, 25, a_r2.publishedAt, "dd MMM yyyy", "+0530"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(24, 29, a_r2.publishedAt, "hh:mm a", "+0530"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8", "Makkal Valimai"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.prefs.txt(a_r2.body));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0BC1\u0BB4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF", "Full News Report"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.blocks());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r2.video);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.prefs.language() === "ta" ? a_r2.audio == null ? null : a_r2.audio.ta : a_r2.audio == null ? null : a_r2.audio.en);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Share This News"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r2.whatsapp, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BB5\u0BBE\u0B9F\u0BCD\u0BB8\u0BCD\u0B85\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD", "Share on WhatsApp"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.copied ? ctx_r2.prefs.label("\u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1", "Copied!") : ctx_r2.prefs.label("\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1", "Copy Link"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "More Madurai News"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0BB1\u0BCD\u0BB1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "More News"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otherStories().length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.otherStories().length === 0);
} }
function ArticleDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtext(1, "Loading article\u2026");
    i0.ɵɵelementEnd();
} }
function ArticleDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 72);
    i0.ɵɵelement(7, "i", 73);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8", "Article Not Found"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.", ctx_r2.articleError() || "The requested news article is unavailable."), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.prefs.label("\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1", "Back to Home"), " ");
} }
function inlineBold(text) {
    const output = [];
    const exp = /\*\*(.+?)\*\*/g;
    let last = 0;
    for (const match of text.matchAll(exp)) {
        const index = match.index ?? 0;
        if (index > last)
            output.push({ text: text.slice(last, index), bold: false });
        output.push({ text: match[1], bold: true });
        last = index + match[0].length;
    }
    if (last < text.length)
        output.push({ text: text.slice(last), bold: false });
    return output.length ? output : [{ text, bold: false }];
}
// Uses plain bilingual body strings already supported by MongoDB.
// Image directives require an already-uploaded HTTPS or local development media URL.
function parseArticle(text) {
    const chunks = text.replace(/\r\n/g, '\n').split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
    const blocks = [];
    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const heading = chunk.match(/^#{2,3}\s+([\s\S]+)$/) || chunk.match(/^\*\*([^*]+)\*\*$/);
        if (heading) {
            blocks.push({ kind: 'heading', text: heading[1], parts: [{ text: heading[1], bold: true }] });
            continue;
        }
        const image = chunk.match(/^\[\[image-(left|right|full):([^\]|]+)(?:\|([^\]]+))?\]\]$/i);
        if (image) {
            const url = image[2].trim();
            const safe = /^https:\/\//i.test(url) || /^\/api\/public\/media\//.test(url) || /^http:\/\/localhost:5000\/api\/public\/media\//i.test(url);
            if (safe) {
                const kind = `image-${image[1].toLowerCase()}`;
                const paragraph = kind === 'image-full' ? '' : (chunks[++i] || '');
                blocks.push({ kind, image: url, caption: image[3]?.trim() || '', text: paragraph, parts: inlineBold(paragraph) });
                continue;
            }
        }
        blocks.push({ kind: 'paragraph', text: chunk, parts: inlineBold(chunk) });
    }
    return blocks;
}
export class ArticleDetailComponent {
    route;
    store;
    media;
    prefs;
    api;
    slug = signal('', ...(ngDevMode ? [{ debugName: "slug" }] : []));
    remoteArticle = signal(null, ...(ngDevMode ? [{ debugName: "remoteArticle" }] : []));
    articleLoading = signal(true, ...(ngDevMode ? [{ debugName: "articleLoading" }] : []));
    articleError = signal('', ...(ngDevMode ? [{ debugName: "articleError" }] : []));
    article = computed(() => this.remoteArticle() || this.store.published().find(a => a.slug === this.slug()), ...(ngDevMode ? [{ debugName: "article" }] : []));
    otherStories = computed(() => this.store.published().filter(a => a.id !== this.article()?.id).slice(0, 4), ...(ngDevMode ? [{ debugName: "otherStories" }] : []));
    blocks = computed(() => parseArticle(this.prefs.txt(this.article()?.body)), ...(ngDevMode ? [{ debugName: "blocks" }] : []));
    copied = false;
    routeSub;
    constructor(route, store, media, prefs, api) {
        this.route = route;
        this.store = store;
        this.media = media;
        this.prefs = prefs;
        this.api = api;
    }
    ngOnInit() {
        this.routeSub = this.route.paramMap.subscribe(params => {
            const slug = params.get('slug') || '';
            this.slug.set(slug);
            this.remoteArticle.set(null);
            this.articleError.set('');
            this.copied = false;
            void this.loadArticle(slug);
        });
    }
    async loadArticle(slug) {
        this.articleLoading.set(true);
        if (!slug) {
            this.articleError.set('Invalid article URL.');
            this.articleLoading.set(false);
            return;
        }
        try {
            const value = await this.api.article(slug);
            if (this.slug() !== slug)
                return; // route changed during request
            if (!value || value.published !== true)
                throw new Error('This story is not available.');
            this.remoteArticle.set(value);
        }
        catch (error) {
            if (this.slug() === slug)
                this.articleError.set('The article could not be loaded. It may have been removed or the server may be unavailable.');
        }
        finally {
            if (this.slug() === slug)
                this.articleLoading.set(false);
        }
    }
    ngOnDestroy() { this.routeSub?.unsubscribe(); }
    get whatsapp() {
        const url = typeof window === 'undefined' ? '' : window.location.href;
        return 'https://wa.me/?text=' + encodeURIComponent(this.prefs.txt(this.article()?.title) + '\n' + url);
    }
    async copyLink() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            this.copied = true;
        }
        catch {
            this.copied = false;
        }
    }
    static ɵfac = function ArticleDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ArticleDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ContentService), i0.ɵɵdirectiveInject(i3.MediaService), i0.ɵɵdirectiveInject(i4.PreferencesService), i0.ɵɵdirectiveInject(i5.NewsApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ArticleDetailComponent, selectors: [["app-article-detail"]], decls: 3, vars: 3, consts: [["class", "container page-section article-detail-page article-layout", 3, "no-sidebar", 4, "ngIf"], ["class", "container empty-state glass", "role", "status", 4, "ngIf"], ["class", "container empty-state glass", 4, "ngIf"], [1, "container", "page-section", "article-detail-page", "article-layout"], [1, "article-main", "glass"], [1, "article-top-row"], ["class", "article-image-column", 4, "ngIf"], [1, "article-intro", "article-pad"], ["routerLink", "/madurai-news", 1, "tiny-link", "article-back"], [1, "article-category"], [1, "red-dot"], [1, "eyebrow", "article-location"], [1, "fa-solid", "fa-location-dot"], [1, "article-title"], [1, "article-meta"], [1, "fa-regular", "fa-calendar"], [1, "fa-regular", "fa-clock"], [1, "fa-solid", "fa-newspaper"], ["class", "article-summary", 4, "ngIf"], [1, "article-content", "article-pad"], [1, "article-content-heading"], [1, "article-heading-line"], [1, "article-body", "editorial-body"], [4, "ngFor", "ngForOf"], ["class", "article-video-section", 4, "ngIf"], ["class", "article-audio-section", 4, "ngIf"], [1, "article-share-section"], [1, "fa-solid", "fa-share-nodes"], [1, "article-share"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "whatsapp", 3, "href"], [1, "fa-brands", "fa-whatsapp"], ["type", "button", 1, "btn", "outline", 3, "click"], [1, "fa-solid", "fa-link"], [1, "article-bottom-navigation"], ["routerLink", "/madurai-news", 1, "tiny-link"], [1, "fa-solid", "fa-arrow-left"], [1, "article-sidebar", "glass"], [1, "sidebar-heading"], ["class", "other-stories-list", 4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "article-image-column"], [1, "article-cover", 3, "src", "alt"], [1, "article-summary"], ["class", "editorial-subheading", 4, "ngIf"], ["class", "editorial-paragraph", 4, "ngIf"], ["class", "editorial-image-row", 3, "image-right", "image-full", 4, "ngIf"], [1, "editorial-subheading"], [1, "editorial-paragraph"], [4, "ngIf"], [1, "editorial-image-row"], [1, "editorial-photo"], ["loading", "lazy", 3, "src", "alt"], ["class", "editorial-image-text", 4, "ngIf"], [1, "editorial-image-text"], [1, "article-video-section"], [1, "article-media-heading"], [1, "fa-solid", "fa-video"], [1, "article-video-description"], [1, "article-video-container"], ["controls", "", "playsinline", "", "preload", "metadata", 1, "article-news-video", 3, "src", "poster"], [1, "article-audio-section"], [1, "fa-solid", "fa-headphones"], [3, "src"], [1, "other-stories-list"], ["class", "other-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "other-item", 3, "routerLink"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], [1, "other-item-content"], [1, "other-category"], [1, "muted"], ["role", "status", 1, "container", "empty-state", "glass"], [1, "container", "empty-state", "glass"], ["routerLink", "/", 1, "btn", "btn-red"], [1, "fa-solid", "fa-house"]], template: function ArticleDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ArticleDetailComponent_div_0_Template, 60, 33, "div", 0)(1, ArticleDetailComponent_div_1_Template, 2, 0, "div", 1)(2, ArticleDetailComponent_div_2_Template, 9, 3, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.article());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.articleLoading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.article() && !ctx.articleLoading());
        } }, dependencies: [CommonModule, i6.NgForOf, i6.NgIf, RouterLink, AudioPlayerComponent, i6.UpperCasePipe, i6.SlicePipe, i6.DatePipe], styles: ["\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n\n\n\n\n\n.article-detail-page.article-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1.25rem;\n  align-items: start;\n  width: calc(100% - 40px);\n  max-width: 1380px;\n  min-width: 0;\n  margin: 24px auto;\n  box-sizing: border-box;\n}\n\n.article-layout.no-sidebar[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.article-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n\n\n\n\n\n.article-main[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 18px;\n  background: linear-gradient(\n    145deg,\n    #1c2130 0%,\n    #10141e 100%\n  );\n}\n\n\n\n\n\n\n\n.article-top-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 46%) minmax(0, 54%);\n  align-items: stretch;\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.article-top-row[_ngcontent-%COMP%]:not(:has(.article-image-column)) {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n\n\n\n\n\n.article-image-column[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 370px;\n  min-width: 0;\n  overflow: hidden;\n  background: #080b12;\n}\n\n.article-cover[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-height: none;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 0;\n}\n\n\n\n\n\n\n.article-pad[_ngcontent-%COMP%] {\n  padding: 1.65rem;\n}\n\n\n\n\n\n\n.article-intro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.75rem;\n  min-width: 0;\n  background: linear-gradient(\n    135deg,\n    #1b2030 0%,\n    #111620 100%\n  );\n}\n\n\n\n\n.article-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #ff617a;\n  font-size: 0.79rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n\n.article-back[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n\n\n\n\n\n.article-category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  max-width: 100%;\n  color: #ff637d;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n  overflow-wrap: anywhere;\n}\n\n.article-category[_ngcontent-%COMP%]   .red-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  flex-shrink: 0;\n  background: #ff314f;\n  border-radius: 50%;\n  box-shadow: 0 0 9px #e21235;\n}\n\n\n\n\n\n\n.article-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 0;\n  color: #bdc5d2;\n  font-size: 0.79rem;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.article-location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff526e;\n}\n\n\n\n\n\n\n.article-title[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n  color: #ffffff;\n  font-size: clamp(1.55rem, 2.3vw, 2.35rem);\n  font-weight: 800;\n  line-height: 1.45;\n  letter-spacing: -0.4px;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n\n\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  column-gap: 1rem;\n  row-gap: 0.55rem;\n  width: 100%;\n  color: #c0c7d2;\n  font-size: 0.76rem;\n  line-height: 1.6;\n}\n\n.article-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 0;\n}\n\n.article-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff6078;\n  font-size: 0.85rem;\n}\n\n\n\n\n\n\n.article-summary[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: #d6dce7;\n  font-size: 0.93rem;\n  line-height: 1.85;\n  font-weight: 400;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n\n\n\n\n\n\n.article-content[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  background: #131823;\n}\n\n.article-content-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 1.4rem;\n}\n\n.article-heading-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 5px;\n  height: 30px;\n  flex-shrink: 0;\n  border-radius: 4px;\n  background: #e10c35;\n}\n\n.article-content-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.35rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n\n\n\n\n\n.article-body[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 850px;\n  color: #eef1f5;\n  font-size: 1.06rem;\n  line-height: 2.05;\n  font-weight: 400;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n  word-break: normal;\n  letter-spacing: 0.1px;\n}\n\n\n\n\n\n\n.demo-warning[_ngcontent-%COMP%] {\n  margin-bottom: 1.3rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid #b68638;\n  border-radius: 9px;\n  background: rgba(113, 66, 11, 0.45);\n  color: #ffe0a0;\n  font-size: 0.78rem;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.article-video-section[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  margin-top: 2rem;\n  padding: 1.35rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 13px;\n  background: linear-gradient(\n    145deg,\n    #1b2231,\n    #101725\n  );\n}\n\n\n\n\n.article-video-section[_ngcontent-%COMP%]   .article-media-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0 0 0.7rem;\n  color: #ffffff;\n  font-size: 1.13rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.article-video-section[_ngcontent-%COMP%]   .article-media-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #ff526e;\n  font-size: 1.15rem;\n}\n\n\n\n\n.article-video-description[_ngcontent-%COMP%] {\n  margin: 0 0 1.2rem;\n  color: #b9c3d3;\n  font-size: 0.86rem;\n  line-height: 1.75;\n}\n\n\n\n\n.article-video-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 920px;\n  min-width: 0;\n  margin: 0 auto;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 11px;\n  background: #05080f;\n}\n\n\n\n\n.article-news-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: contain;\n  object-position: center;\n  background: #05080f;\n}\n\n\n\n\n.article-news-video[_ngcontent-%COMP%]:fullscreen {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000000;\n}\n\n\n\n\n\n\n.article-audio-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.2rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  background: #1a2030;\n}\n\n.article-audio-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 0 1rem;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n}\n\n.article-audio-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff526e;\n}\n\n.article-audio-section[_ngcontent-%COMP%]   app-audio-player[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n\n\n\n\n\n.article-share-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.article-share-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 0 1rem;\n  color: #ffffff;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n\n.article-share-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff526e;\n}\n\n\n\n\n.article-share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.article-share[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  max-width: 100%;\n  min-height: 43px;\n  padding: 0.75rem 1.15rem;\n  font-size: 0.84rem;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: center;\n  cursor: pointer;\n}\n\n\n\n\n.article-share[_ngcontent-%COMP%]   .btn.whatsapp[_ngcontent-%COMP%] {\n  border: 1px solid #10c680;\n  background: #006c44;\n  color: #ffffff;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n.article-share[_ngcontent-%COMP%]   .btn.whatsapp[_ngcontent-%COMP%]:hover {\n  background: #078653;\n  transform: translateY(-2px);\n}\n\n\n\n\n.article-share[_ngcontent-%COMP%]   .btn.outline[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.article-share[_ngcontent-%COMP%]   .btn.outline[_ngcontent-%COMP%]:hover {\n  border-color: #ff526e;\n}\n\n\n\n\n\n\n.article-bottom-navigation[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.article-bottom-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #ff617a;\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.article-bottom-navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n\n\n\n\n\n\n.article-sidebar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  margin-top: 0;\n  padding: 1.15rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 16px;\n  background: linear-gradient(\n    150deg,\n    #1c2130,\n    #10141d\n  );\n}\n\n\n\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  padding-bottom: 0.85rem;\n  margin-bottom: 0.9rem;\n  border-bottom: 2px solid #bc1030;\n}\n\n.sidebar-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.13rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.sidebar-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff526e;\n}\n\n\n\n\n\n\n.other-stories-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n}\n\n\n\n\n.other-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 0.7rem;\n  min-width: 0;\n  padding: 0.8rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  color: inherit;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.025);\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.other-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 82, 110, 0.45);\n  transform: translateY(-3px);\n}\n\n\n\n\n.other-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 165px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 8px;\n}\n\n\n\n\n.other-item-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n  min-width: 0;\n}\n\n.other-category[_ngcontent-%COMP%] {\n  color: #ff526e;\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.2px;\n  overflow-wrap: anywhere;\n}\n\n.other-item-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  overflow: hidden;\n  color: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 700;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.other-item-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: #aeb7c6;\n  font-size: 0.72rem;\n  line-height: 1.5;\n}\n\n.other-item-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff526e;\n}\n\n\n\n\n.sidebar-view-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.85rem 0.65rem;\n  border-radius: 9px;\n  background: #a9092b;\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: center;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n\n.sidebar-view-all[_ngcontent-%COMP%]:hover {\n  background: #dc123b;\n  color: #ffffff;\n}\n\n\n\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.empty-state[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #e01235;\n  font-size: 2.5rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.5rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #bfc6d0;\n  line-height: 1.8;\n}\n\n.empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.article-detail-page[_ngcontent-%COMP%]{max-width:1390px}\n.article-main[_ngcontent-%COMP%], .article-sidebar[_ngcontent-%COMP%]{border-radius:13px}\n.article-intro[_ngcontent-%COMP%]{background:linear-gradient(130deg,#0d5c9c,#074174)}\n.article-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#084b86,#04396c)}\n.editorial-body[_ngcontent-%COMP%]{max-width:100%;width:100%;font-size:1rem;line-height:1.9;white-space:normal;color:#edf7ff}\n.editorial-paragraph[_ngcontent-%COMP%]{margin:0 0 1.35em;white-space:pre-line;max-width:90ch}\n.editorial-paragraph[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .editorial-image-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:900;color:#fff}\n.editorial-subheading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.18rem;font-weight:900;color:#f9fcff;margin:1.7rem 0 .85rem;padding-left:13px;border-left:4px solid #f31c40;line-height:1.5}\n.editorial-image-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,42%) minmax(0,1fr);align-items:start;gap:22px;margin:1.35rem 0 1.8rem;padding:0}\n.editorial-image-row.image-right[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr) minmax(0,42%)}\n.editorial-image-row.image-right[_ngcontent-%COMP%]   .editorial-photo[_ngcontent-%COMP%]{order:2}\n.editorial-image-row.image-right[_ngcontent-%COMP%]   .editorial-image-text[_ngcontent-%COMP%]{order:1}\n.editorial-image-row.image-full[_ngcontent-%COMP%]{display:block;max-width:920px;margin:1.5rem auto 2rem}\n.editorial-photo[_ngcontent-%COMP%]{min-width:0;margin:0}\n.editorial-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:10px;border:1px solid #6cb6eb66}\n.editorial-photo[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{text-align:center;font-size:.73rem;line-height:1.6;color:#c1dbf0;margin-top:8px}\n.editorial-image-text[_ngcontent-%COMP%]{margin:0;line-height:1.95;font-size:1rem;white-space:pre-line}\n.article-sidebar[_ngcontent-%COMP%]{margin-top:15px}\n.article-sidebar[_ngcontent-%COMP%]   .other-stories-list[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}", "\n\n@media (max-width: 1200px) {\n\n  .article-top-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 45%) minmax(0, 55%);\n  }\n\n  .article-image-column[_ngcontent-%COMP%] {\n    height: 340px;\n  }\n\n  .article-intro[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .article-title[_ngcontent-%COMP%] {\n    font-size: clamp(1.4rem, 2vw, 1.9rem);\n  }\n\n  .article-summary[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n    line-height: 1.7;\n  }\n\n}@media (max-width: 1000px) {\n\n  .article-top-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 45%) minmax(0, 55%);\n  }\n\n  .article-image-column[_ngcontent-%COMP%] {\n    height: 340px;\n  }\n\n  .article-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n}@media (max-width: 850px) {\n\n  .other-stories-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}@media (max-width: 700px) {\n\n  .article-detail-page.article-layout[_ngcontent-%COMP%] {\n    width: calc(100% - 24px);\n    margin: 14px auto;\n    gap: 1rem;\n  }\n\n  .article-main[_ngcontent-%COMP%] {\n    border-radius: 14px;\n  }\n\n  \n\n\n  .article-top-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .article-intro[_ngcontent-%COMP%] {\n    order: 1;\n    padding: 1.2rem;\n    gap: 0.65rem;\n  }\n\n  .article-image-column[_ngcontent-%COMP%] {\n    order: 2;\n    width: 100%;\n    height: 290px;\n  }\n\n  .article-cover[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .article-pad[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n\n  .article-title[_ngcontent-%COMP%] {\n    margin: 0.15rem 0;\n    font-size: 1.55rem;\n    line-height: 1.5;\n  }\n\n  .article-meta[_ngcontent-%COMP%] {\n    gap: 0.5rem 0.8rem;\n    font-size: 0.72rem;\n  }\n\n  .article-summary[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    line-height: 1.8;\n  }\n\n  .article-content-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .article-body[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.95;\n  }\n\n  \n\n\n  .article-video-section[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n    padding: 1rem;\n    border-radius: 11px;\n  }\n\n  .article-video-section[_ngcontent-%COMP%]   .article-media-heading[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .article-video-description[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n\n  .article-video-container[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n\n  .article-news-video[_ngcontent-%COMP%] {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n  }\n\n  \n\n\n  .article-audio-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  \n\n\n  .article-sidebar[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n}@media (max-width: 600px) {\n\n  .article-detail-page.article-layout[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n    margin: 12px auto;\n  }\n\n  .other-stories-list[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .other-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 180px;\n  }\n\n}@media (max-width: 420px) {\n\n  .article-pad[_ngcontent-%COMP%], \n   .article-intro[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .article-image-column[_ngcontent-%COMP%] {\n    height: 245px;\n  }\n\n  .article-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  .article-body[_ngcontent-%COMP%] {\n    font-size: 0.96rem;\n    line-height: 1.9;\n  }\n\n  \n\n\n  .article-video-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n\n  .article-video-section[_ngcontent-%COMP%]   .article-media-heading[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n\n  .article-video-description[_ngcontent-%COMP%] {\n    font-size: 0.76rem;\n  }\n\n  \n\n\n  .article-audio-section[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n\n  \n\n\n  .article-share[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .article-share[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .article-meta[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n\n  .article-sidebar[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .other-item[_ngcontent-%COMP%], \n   .article-share[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n   .sidebar-view-all[_ngcontent-%COMP%], \n   .article-back[_ngcontent-%COMP%] {\n    transition: none;\n  }\n\n}@media(max-width:900px){.article-sidebar[_ngcontent-%COMP%]   .other-stories-list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:650px){.editorial-image-row[_ngcontent-%COMP%], .editorial-image-row.image-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin:1rem 0}.editorial-image-row.image-right[_ngcontent-%COMP%]   .editorial-photo[_ngcontent-%COMP%], .editorial-image-row.image-right[_ngcontent-%COMP%]   .editorial-image-text[_ngcontent-%COMP%]{order:initial}.editorial-photo[_ngcontent-%COMP%]{width:100%}.editorial-subheading[_ngcontent-%COMP%]{font-size:1.05rem}.editorial-paragraph[_ngcontent-%COMP%], .editorial-image-text[_ngcontent-%COMP%]{font-size:.95rem}.article-sidebar[_ngcontent-%COMP%]   .other-stories-list[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:380px){.article-sidebar[_ngcontent-%COMP%]   .other-stories-list[_ngcontent-%COMP%]{grid-template-columns:1fr}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArticleDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-article-detail', standalone: true, imports: [CommonModule, RouterLink, AudioPlayerComponent], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI - NEWS ARTICLE DETAIL\n     IMAGE + VIDEO + AUDIO + FULL NEWS\n     ========================================== -->\n\n<div\n  class=\"container page-section article-detail-page article-layout\"\n  [class.no-sidebar]=\"otherStories().length === 0\"\n  *ngIf=\"article() as a\"\n>\n\n  <!-- ======================================\n       MAIN ARTICLE\n       ====================================== -->\n\n  <article class=\"article-main glass\">\n\n    <!-- TOP: IMAGE LEFT + NEWS DETAILS RIGHT -->\n\n    <div class=\"article-top-row\">\n\n      <!-- LEFT NEWS IMAGE -->\n\n      <div\n        class=\"article-image-column\"\n        *ngIf=\"a.image\"\n      >\n        <img\n          class=\"article-cover\"\n          [src]=\"media.url(a.image)\"\n          [alt]=\"prefs.txt(a.title)\"\n        />\n      </div>\n\n      <!-- RIGHT NEWS INFORMATION -->\n\n      <div class=\"article-intro article-pad\">\n\n        <a\n          routerLink=\"/madurai-news\"\n          class=\"tiny-link article-back\"\n        >\n          \u2190\n          {{ prefs.label(\n            '\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC1\u0BAE\u0BCD',\n            'All News'\n          ) }}\n        </a>\n\n        <!-- CATEGORY -->\n\n        <div class=\"article-category\">\n          <span class=\"red-dot\"></span>\n          {{ a.kind | uppercase }}\n        </div>\n\n        <!-- LOCATION -->\n\n        <p class=\"eyebrow article-location\">\n          <i class=\"fa-solid fa-location-dot\"></i>\n          {{ a.area }}\n        </p>\n\n        <!-- NEWS TITLE -->\n\n        <h1 class=\"article-title\">\n          {{ prefs.txt(a.title) }}\n        </h1>\n\n        <!-- DATE AND PUBLISHER -->\n\n        <div class=\"article-meta\">\n\n          <span>\n            <i class=\"fa-regular fa-calendar\"></i>\n            {{\n              a.publishedAt |\n              date:'dd MMM yyyy':'+0530'\n            }}\n          </span>\n\n          <span>\n            <i class=\"fa-regular fa-clock\"></i>\n            {{\n              a.publishedAt |\n              date:'hh:mm a':'+0530'\n            }}\n          </span>\n\n          <span>\n            <i class=\"fa-solid fa-newspaper\"></i>\n            {{\n              prefs.label(\n                '\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8',\n                'Makkal Valimai'\n              )\n            }}\n          </span>\n\n        </div>\n\n        <!-- SHORT NEWS INTRODUCTION -->\n\n        <p\n          class=\"article-summary\"\n          *ngIf=\"prefs.txt(a.body)\"\n        >\n          {{\n            prefs.txt(a.body) |\n            slice:0:180\n          }}\n          {{\n            prefs.txt(a.body).length > 180\n              ? '\u2026'\n              : ''\n          }}\n        </p>\n\n      </div>\n\n    </div>\n\n    <!-- ======================================\n         FULL NEWS ARTICLE\n         ====================================== -->\n\n    <div class=\"article-content article-pad\">\n\n      <!-- FULL NEWS HEADING -->\n\n      <div class=\"article-content-heading\">\n\n        <span class=\"article-heading-line\"></span>\n\n        <h2>\n          {{\n            prefs.label(\n              '\u0BAE\u0BC1\u0BB4\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF',\n              'Full News Report'\n            )\n          }}\n        </h2>\n\n      </div>\n\n      <!-- FULL NEWS BODY -->\n\n      <!-- Safe newspaper rich-content renderer: headings, bold text, alternate image/text blocks -->\n      <div class=\"article-body editorial-body\">\n        <ng-container *ngFor=\"let block of blocks()\">\n          <h3 *ngIf=\"block.kind === 'heading'\" class=\"editorial-subheading\">{{block.text}}</h3>\n          <p *ngIf=\"block.kind === 'paragraph'\" class=\"editorial-paragraph\"><ng-container *ngFor=\"let part of block.parts\"><strong *ngIf=\"part.bold\">{{part.text}}</strong><ng-container *ngIf=\"!part.bold\">{{part.text}}</ng-container></ng-container></p>\n          <figure *ngIf=\"block.image\" class=\"editorial-image-row\" [class.image-right]=\"block.kind === 'image-right'\" [class.image-full]=\"block.kind === 'image-full'\">\n            <div class=\"editorial-photo\"><img [src]=\"media.url(block.image)\" [alt]=\"block.caption || prefs.txt(a.title)\" loading=\"lazy\"/><figcaption *ngIf=\"block.caption\">{{block.caption}}</figcaption></div>\n            <p *ngIf=\"block.text\" class=\"editorial-image-text\"><ng-container *ngFor=\"let part of block.parts\"><strong *ngIf=\"part.bold\">{{part.text}}</strong><ng-container *ngIf=\"!part.bold\">{{part.text}}</ng-container></ng-container></p>\n          </figure>\n        </ng-container>\n      </div>\n\n      <!-- ======================================\n           NEW: INDIVIDUAL NEWS VIDEO\n           ====================================== -->\n\n      <section\n        class=\"article-video-section\"\n        *ngIf=\"a.video\"\n      >\n\n        <h3 class=\"article-media-heading\">\n          <i class=\"fa-solid fa-video\"></i>\n\n          {{\n            prefs.label(\n              '\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF',\n              'News Video'\n            )\n          }}\n        </h3>\n\n        <p class=\"article-video-description\">\n          {{\n            prefs.label(\n              '\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BBE\u0BA9 \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.',\n              'Watch the video related to this news report.'\n            )\n          }}\n        </p>\n\n        <div class=\"article-video-container\">\n\n          <video\n            class=\"article-news-video\"\n            controls\n            playsinline\n            preload=\"metadata\"\n            [src]=\"media.url(a.video)\"\n            [poster]=\"a.image ? media.url(a.image) : null\"\n            [attr.aria-label]=\"\n              prefs.label(\n                '\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBE\u0BA3\u0BCA\u0BB3\u0BBF',\n                'News video'\n              )\n            \"\n          >\n            Your browser does not support video playback.\n          </video>\n\n        </div>\n\n      </section>\n\n      <!-- ======================================\n           INDIVIDUAL TAMIL / ENGLISH AUDIO\n           ====================================== -->\n\n      <div\n        class=\"article-audio-section\"\n        *ngIf=\"\n          prefs.language() === 'ta'\n            ? a.audio?.ta\n            : a.audio?.en\n        \"\n      >\n\n        <h3>\n          <i class=\"fa-solid fa-headphones\"></i>\n\n          {{\n            prefs.label(\n              '\u0B92\u0BB2\u0BBF \u0BB5\u0B9F\u0BBF\u0BB5\u0BBF\u0BB2\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD',\n              'Listen to This News'\n            )\n          }}\n        </h3>\n\n        <app-audio-player\n          [src]=\"\n            prefs.language() === 'ta'\n              ? (a.audio?.ta || '')\n              : (a.audio?.en || '')\n          \"\n        />\n\n      </div>\n\n      <!-- ======================================\n           SHARE THIS NEWS\n           ====================================== -->\n\n      <div class=\"article-share-section\">\n\n        <h3>\n          <i class=\"fa-solid fa-share-nodes\"></i>\n\n          {{\n            prefs.label(\n              '\u0B87\u0BA8\u0BCD\u0BA4 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD',\n              'Share This News'\n            )\n          }}\n        </h3>\n\n        <div class=\"article-share\">\n\n          <!-- WHATSAPP -->\n\n          <a\n            class=\"btn whatsapp\"\n            [href]=\"whatsapp\"\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n          >\n\n            <i class=\"fa-brands fa-whatsapp\"></i>\n\n            {{\n              prefs.label(\n                '\u0BB5\u0BBE\u0B9F\u0BCD\u0BB8\u0BCD\u0B85\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD',\n                'Share on WhatsApp'\n              )\n            }}\n\n          </a>\n\n          <!-- COPY LINK -->\n\n          <button\n            type=\"button\"\n            class=\"btn outline\"\n            (click)=\"copyLink()\"\n          >\n\n            <i class=\"fa-solid fa-link\"></i>\n\n            {{\n              copied\n                ? prefs.label(\n                    '\u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1',\n                    'Copied!'\n                  )\n                : prefs.label(\n                    '\u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1',\n                    'Copy Link'\n                  )\n            }}\n\n          </button>\n\n        </div>\n\n      </div>\n\n      <!-- RETURN TO NEWS -->\n\n      <div class=\"article-bottom-navigation\">\n\n        <a\n          routerLink=\"/madurai-news\"\n          class=\"tiny-link\"\n        >\n\n          <i class=\"fa-solid fa-arrow-left\"></i>\n\n          {{\n            prefs.label(\n              '\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD',\n              'More Madurai News'\n            )\n          }}\n\n        </a>\n\n      </div>\n\n    </div>\n\n  </article>\n\n  <!-- ======================================\n       MORE NEWS BELOW THE MAIN ARTICLE\n       ====================================== -->\n\n  <aside class=\"article-sidebar glass\">\n\n    <div class=\"sidebar-heading\">\n\n      <h3>\n        <i class=\"fa-solid fa-newspaper\"></i>\n\n        {{\n          prefs.label(\n            '\u0BAE\u0BB1\u0BCD\u0BB1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD',\n            'More News'\n          )\n        }}\n\n      </h3>\n\n    </div>\n\n    <!-- OTHER PUBLISHED ARTICLES -->\n\n    <div\n      class=\"other-stories-list\"\n      *ngIf=\"otherStories().length > 0\"\n    >\n\n      <a\n        *ngFor=\"let b of otherStories()\"\n        class=\"other-item\"\n        [routerLink]=\"['/news', b.slug]\"\n      >\n\n        <img\n          *ngIf=\"b.image\"\n          [src]=\"media.url(b.image)\"\n          [alt]=\"prefs.txt(b.title)\"\n          loading=\"lazy\"\n        />\n\n        <div class=\"other-item-content\">\n\n          <span class=\"other-category\">\n            {{ b.kind | uppercase }}\n          </span>\n\n          <strong>\n            {{ prefs.txt(b.title) }}\n          </strong>\n\n          <small>\n            {{\n              b.publishedAt |\n              date:'dd MMM yyyy':'+0530'\n            }}\n          </small>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    <!-- NO OTHER ARTICLES -->\n\n    <p\n      class=\"muted\"\n      *ngIf=\"otherStories().length === 0\"\n    >\n      {{\n        prefs.label(\n          '\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B87\u0BA9\u0BCD\u0BA9\u0BC1\u0BAE\u0BCD \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.',\n          'No other news has been published yet.'\n        )\n      }}\n    </p>\n\n  </aside>\n\n</div>\n\n<!-- ==========================================\n     ARTICLE NOT FOUND\n     ========================================== -->\n\n<div class=\"container empty-state glass\" role=\"status\" *ngIf=\"articleLoading()\">Loading article\u2026</div>\n<div\n  *ngIf=\"!article() && !articleLoading()\"\n  class=\"container empty-state glass\"\n>\n\n  <i class=\"fa-solid fa-newspaper\"></i>\n\n  <h2>\n    {{\n      prefs.label(\n        '\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8',\n        'Article Not Found'\n      )\n    }}\n  </h2>\n\n  <p>\n    {{\n      prefs.label(\n        '\u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.',\n        articleError() || 'The requested news article is unavailable.'\n      )\n    }}\n  </p>\n\n  <a\n    routerLink=\"/\"\n    class=\"btn btn-red\"\n  >\n\n    <i class=\"fa-solid fa-house\"></i>\n\n    {{\n      prefs.label(\n        '\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1',\n        'Back to Home'\n      )\n    }}\n\n  </a>\n\n</div>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI\n   PUBLIC NEWS ARTICLE DETAIL PAGE\n   IMAGE + VIDEO + AUDIO\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n/* ==========================================\n   MAIN PAGE LAYOUT\n   ========================================== */\n\n.article-detail-page.article-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1.25rem;\n  align-items: start;\n  width: calc(100% - 40px);\n  max-width: 1380px;\n  min-width: 0;\n  margin: 24px auto;\n  box-sizing: border-box;\n}\n\n.article-layout.no-sidebar {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.article-layout > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n/* ==========================================\n   MAIN ARTICLE CONTAINER\n   ========================================== */\n\n.article-main {\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 18px;\n  background: linear-gradient(\n    145deg,\n    #1c2130 0%,\n    #10141e 100%\n  );\n}\n\n/* ==========================================\n   TOP SECTION\n   LEFT IMAGE + RIGHT NEWS INFORMATION\n   ========================================== */\n\n.article-top-row {\n  display: grid;\n  grid-template-columns: minmax(0, 46%) minmax(0, 54%);\n  align-items: stretch;\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.article-top-row:not(:has(.article-image-column)) {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n/* ==========================================\n   NEWS IMAGE\n   ========================================== */\n\n.article-image-column {\n  position: relative;\n  width: 100%;\n  height: 370px;\n  min-width: 0;\n  overflow: hidden;\n  background: #080b12;\n}\n\n.article-cover {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-height: none;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 0;\n}\n\n/* ==========================================\n   ARTICLE PADDING\n   ========================================== */\n\n.article-pad {\n  padding: 1.65rem;\n}\n\n/* ==========================================\n   NEWS INTRODUCTION\n   ========================================== */\n\n.article-intro {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.75rem;\n  min-width: 0;\n  background: linear-gradient(\n    135deg,\n    #1b2030 0%,\n    #111620 100%\n  );\n}\n\n/* BACK TO NEWS */\n\n.article-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #ff617a;\n  font-size: 0.79rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n\n.article-back:hover {\n  color: #ffffff;\n}\n\n/* ==========================================\n   NEWS CATEGORY\n   ========================================== */\n\n.article-category {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  max-width: 100%;\n  color: #ff637d;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n  overflow-wrap: anywhere;\n}\n\n.article-category .red-dot {\n  width: 8px;\n  height: 8px;\n  flex-shrink: 0;\n  background: #ff314f;\n  border-radius: 50%;\n  box-shadow: 0 0 9px #e21235;\n}\n\n/* ==========================================\n   NEWS LOCATION\n   ========================================== */\n\n.article-location {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 0;\n  color: #bdc5d2;\n  font-size: 0.79rem;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.article-location i {\n  color: #ff526e;\n}\n\n/* ==========================================\n   NEWS TITLE\n   ========================================== */\n\n.article-title {\n  margin: 0.2rem 0;\n  color: #ffffff;\n  font-size: clamp(1.55rem, 2.3vw, 2.35rem);\n  font-weight: 800;\n  line-height: 1.45;\n  letter-spacing: -0.4px;\n  overflow-wrap: anywhere;\n}\n\n/* ==========================================\n   NEWS DATE, TIME AND PUBLISHER\n   ========================================== */\n\n.article-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  column-gap: 1rem;\n  row-gap: 0.55rem;\n  width: 100%;\n  color: #c0c7d2;\n  font-size: 0.76rem;\n  line-height: 1.6;\n}\n\n.article-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 0;\n}\n\n.article-meta i {\n  color: #ff6078;\n  font-size: 0.85rem;\n}\n\n/* ==========================================\n   SHORT NEWS SUMMARY\n   ========================================== */\n\n.article-summary {\n  margin: 0.35rem 0 0;\n  color: #d6dce7;\n  font-size: 0.93rem;\n  line-height: 1.85;\n  font-weight: 400;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n\n/* ==========================================\n   FULL ARTICLE CONTENT\n   ========================================== */\n\n.article-content {\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  background: #131823;\n}\n\n.article-content-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  margin-bottom: 1.4rem;\n}\n\n.article-heading-line {\n  display: block;\n  width: 5px;\n  height: 30px;\n  flex-shrink: 0;\n  border-radius: 4px;\n  background: #e10c35;\n}\n\n.article-content-heading h2 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.35rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n/* ==========================================\n   FULL NEWS BODY\n   ========================================== */\n\n.article-body {\n  width: 100%;\n  max-width: 850px;\n  color: #eef1f5;\n  font-size: 1.06rem;\n  line-height: 2.05;\n  font-weight: 400;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n  word-break: normal;\n  letter-spacing: 0.1px;\n}\n\n/* ==========================================\n   DEMO ARTICLE WARNING\n   ========================================== */\n\n.demo-warning {\n  margin-bottom: 1.3rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid #b68638;\n  border-radius: 9px;\n  background: rgba(113, 66, 11, 0.45);\n  color: #ffe0a0;\n  font-size: 0.78rem;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   NEW: INDIVIDUAL NEWS VIDEO SECTION\n   ========================================== */\n\n.article-video-section {\n  width: 100%;\n  min-width: 0;\n  margin-top: 2rem;\n  padding: 1.35rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 13px;\n  background: linear-gradient(\n    145deg,\n    #1b2231,\n    #101725\n  );\n}\n\n/* VIDEO SECTION HEADING */\n\n.article-video-section .article-media-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0 0 0.7rem;\n  color: #ffffff;\n  font-size: 1.13rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.article-video-section .article-media-heading i {\n  flex-shrink: 0;\n  color: #ff526e;\n  font-size: 1.15rem;\n}\n\n/* VIDEO DESCRIPTION */\n\n.article-video-description {\n  margin: 0 0 1.2rem;\n  color: #b9c3d3;\n  font-size: 0.86rem;\n  line-height: 1.75;\n}\n\n/* VIDEO PLAYER WRAPPER */\n\n.article-video-container {\n  width: 100%;\n  max-width: 920px;\n  min-width: 0;\n  margin: 0 auto;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 11px;\n  background: #05080f;\n}\n\n/* ACTUAL VIDEO PLAYER */\n\n.article-news-video {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: contain;\n  object-position: center;\n  background: #05080f;\n}\n\n/* VIDEO FULLSCREEN */\n\n.article-news-video:fullscreen {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000000;\n}\n\n/* ==========================================\n   AUDIO NEWS SECTION\n   ========================================== */\n\n.article-audio-section {\n  margin-top: 2rem;\n  padding: 1.2rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  background: #1a2030;\n}\n\n.article-audio-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 0 1rem;\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n}\n\n.article-audio-section h3 i {\n  color: #ff526e;\n}\n\n.article-audio-section app-audio-player {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n/* ==========================================\n   SHARE ARTICLE SECTION\n   ========================================== */\n\n.article-share-section {\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.article-share-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0 0 1rem;\n  color: #ffffff;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n\n.article-share-section h3 i {\n  color: #ff526e;\n}\n\n/* SHARE BUTTONS */\n\n.article-share {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-top: 1rem;\n}\n\n.article-share .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  max-width: 100%;\n  min-height: 43px;\n  padding: 0.75rem 1.15rem;\n  font-size: 0.84rem;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: center;\n  cursor: pointer;\n}\n\n/* WHATSAPP BUTTON */\n\n.article-share .btn.whatsapp {\n  border: 1px solid #10c680;\n  background: #006c44;\n  color: #ffffff;\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease;\n}\n\n.article-share .btn.whatsapp:hover {\n  background: #078653;\n  transform: translateY(-2px);\n}\n\n/* COPY LINK BUTTON */\n\n.article-share .btn.outline {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.article-share .btn.outline:hover {\n  border-color: #ff526e;\n}\n\n/* ==========================================\n   BOTTOM NAVIGATION\n   ========================================== */\n\n.article-bottom-navigation {\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.article-bottom-navigation a {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #ff617a;\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.article-bottom-navigation a:hover {\n  color: #ffffff;\n}\n\n/* ==========================================\n   MORE NEWS SECTION\n   BELOW MAIN ARTICLE\n   ========================================== */\n\n.article-sidebar {\n  width: 100%;\n  min-width: 0;\n  margin-top: 0;\n  padding: 1.15rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 16px;\n  background: linear-gradient(\n    150deg,\n    #1c2130,\n    #10141d\n  );\n}\n\n/* SECTION HEADING */\n\n.sidebar-heading {\n  padding-bottom: 0.85rem;\n  margin-bottom: 0.9rem;\n  border-bottom: 2px solid #bc1030;\n}\n\n.sidebar-heading h3 {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0;\n  color: #ffffff;\n  font-size: 1.13rem;\n  font-weight: 800;\n  line-height: 1.5;\n}\n\n.sidebar-heading h3 i {\n  color: #ff526e;\n}\n\n/* ==========================================\n   MORE NEWS GRID\n   ========================================== */\n\n.other-stories-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n}\n\n/* RELATED NEWS CARD */\n\n.other-item {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 0.7rem;\n  min-width: 0;\n  padding: 0.8rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  color: inherit;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.025);\n  transition:\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n\n.other-item:hover {\n  border-color: rgba(255, 82, 110, 0.45);\n  transform: translateY(-3px);\n}\n\n/* RELATED NEWS IMAGE */\n\n.other-item img {\n  display: block;\n  width: 100%;\n  height: 165px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 8px;\n}\n\n/* RELATED NEWS TEXT */\n\n.other-item-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n  min-width: 0;\n}\n\n.other-category {\n  color: #ff526e;\n  font-size: 0.66rem;\n  font-weight: 800;\n  letter-spacing: 0.2px;\n  overflow-wrap: anywhere;\n}\n\n.other-item-content strong {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  overflow: hidden;\n  color: #ffffff;\n  font-size: 0.86rem;\n  font-weight: 700;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.other-item-content small {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: #aeb7c6;\n  font-size: 0.72rem;\n  line-height: 1.5;\n}\n\n.other-item-content small i {\n  color: #ff526e;\n}\n\n/* OPTIONAL RELATED NEWS LINK */\n\n.sidebar-view-all {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.85rem 0.65rem;\n  border-radius: 9px;\n  background: #a9092b;\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: center;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n\n.sidebar-view-all:hover {\n  background: #dc123b;\n  color: #ffffff;\n}\n\n/* ==========================================\n   ARTICLE NOT FOUND\n   ========================================== */\n\n.empty-state {\n  padding: 3rem 1.5rem;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.empty-state > i {\n  margin-bottom: 1rem;\n  color: #e01235;\n  font-size: 2.5rem;\n}\n\n.empty-state h2 {\n  color: #ffffff;\n  font-size: 1.5rem;\n}\n\n.empty-state p {\n  color: #bfc6d0;\n  line-height: 1.8;\n}\n\n.empty-state .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n\n/* ==========================================\n   SMALL DESKTOP / LAPTOP\n   ========================================== */\n\n\n\n/* ==========================================\n   TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   SMALL TABLET\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE - RELATED NEWS\n   ========================================== */\n\n\n\n/* ==========================================\n   EXTRA SMALL MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   REDUCED MOTION\n   ========================================== */\n\n\n\n/* Newspaper-longform blocks stored safely in the article's existing body field */\n.article-detail-page{max-width:1390px}\n.article-main,.article-sidebar{border-radius:13px}\n.article-intro{background:linear-gradient(130deg,#0d5c9c,#074174)}\n.article-content{background:linear-gradient(135deg,#084b86,#04396c)}\n.editorial-body{max-width:100%;width:100%;font-size:1rem;line-height:1.9;white-space:normal;color:#edf7ff}\n.editorial-paragraph{margin:0 0 1.35em;white-space:pre-line;max-width:90ch}\n.editorial-paragraph strong,.editorial-image-text strong{font-weight:900;color:#fff}\n.editorial-subheading{display:flex;align-items:center;gap:10px;font-size:1.18rem;font-weight:900;color:#f9fcff;margin:1.7rem 0 .85rem;padding-left:13px;border-left:4px solid #f31c40;line-height:1.5}\n.editorial-image-row{display:grid;grid-template-columns:minmax(0,42%) minmax(0,1fr);align-items:start;gap:22px;margin:1.35rem 0 1.8rem;padding:0}\n.editorial-image-row.image-right{grid-template-columns:minmax(0,1fr) minmax(0,42%)}\n.editorial-image-row.image-right .editorial-photo{order:2}\n.editorial-image-row.image-right .editorial-image-text{order:1}\n.editorial-image-row.image-full{display:block;max-width:920px;margin:1.5rem auto 2rem}\n.editorial-photo{min-width:0;margin:0}\n.editorial-photo img{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:10px;border:1px solid #6cb6eb66}\n.editorial-photo figcaption{text-align:center;font-size:.73rem;line-height:1.6;color:#c1dbf0;margin-top:8px}\n.editorial-image-text{margin:0;line-height:1.95;font-size:1rem;white-space:pre-line}\n.article-sidebar{margin-top:15px}\n.article-sidebar .other-stories-list{grid-template-columns:repeat(4,minmax(0,1fr))}\n", "/* Responsive rules for article-detail; isolated from common/desktop CSS. */\n@media (max-width: 1200px) {\n\n  .article-top-row {\n    grid-template-columns: minmax(0, 45%) minmax(0, 55%);\n  }\n\n  .article-image-column {\n    height: 340px;\n  }\n\n  .article-intro {\n    padding: 1.25rem;\n  }\n\n  .article-title {\n    font-size: clamp(1.4rem, 2vw, 1.9rem);\n  }\n\n  .article-summary {\n    font-size: 0.84rem;\n    line-height: 1.7;\n  }\n\n}@media (max-width: 1000px) {\n\n  .article-top-row {\n    grid-template-columns: minmax(0, 45%) minmax(0, 55%);\n  }\n\n  .article-image-column {\n    height: 340px;\n  }\n\n  .article-sidebar {\n    width: 100%;\n  }\n\n}@media (max-width: 850px) {\n\n  .other-stories-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n}@media (max-width: 700px) {\n\n  .article-detail-page.article-layout {\n    width: calc(100% - 24px);\n    margin: 14px auto;\n    gap: 1rem;\n  }\n\n  .article-main {\n    border-radius: 14px;\n  }\n\n  /* SHOW HEADLINE BEFORE IMAGE */\n\n  .article-top-row {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .article-intro {\n    order: 1;\n    padding: 1.2rem;\n    gap: 0.65rem;\n  }\n\n  .article-image-column {\n    order: 2;\n    width: 100%;\n    height: 290px;\n  }\n\n  .article-cover {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .article-pad {\n    padding: 1.2rem;\n  }\n\n  .article-title {\n    margin: 0.15rem 0;\n    font-size: 1.55rem;\n    line-height: 1.5;\n  }\n\n  .article-meta {\n    gap: 0.5rem 0.8rem;\n    font-size: 0.72rem;\n  }\n\n  .article-summary {\n    font-size: 0.85rem;\n    line-height: 1.8;\n  }\n\n  .article-content-heading h2 {\n    font-size: 1.2rem;\n  }\n\n  .article-body {\n    font-size: 1rem;\n    line-height: 1.95;\n  }\n\n  /* RESPONSIVE NEWS VIDEO */\n\n  .article-video-section {\n    margin-top: 1.5rem;\n    padding: 1rem;\n    border-radius: 11px;\n  }\n\n  .article-video-section .article-media-heading {\n    font-size: 1rem;\n  }\n\n  .article-video-description {\n    font-size: 0.82rem;\n  }\n\n  .article-video-container {\n    border-radius: 8px;\n  }\n\n  .article-news-video {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n  }\n\n  /* AUDIO */\n\n  .article-audio-section {\n    padding: 1rem;\n  }\n\n  /* RELATED NEWS */\n\n  .article-sidebar {\n    padding: 1rem;\n  }\n\n}@media (max-width: 600px) {\n\n  .article-detail-page.article-layout {\n    width: calc(100% - 20px);\n    margin: 12px auto;\n  }\n\n  .other-stories-list {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .other-item img {\n    width: 100%;\n    height: 180px;\n  }\n\n}@media (max-width: 420px) {\n\n  .article-pad,\n  .article-intro {\n    padding: 1rem;\n  }\n\n  .article-image-column {\n    height: 245px;\n  }\n\n  .article-title {\n    font-size: 1.4rem;\n  }\n\n  .article-body {\n    font-size: 0.96rem;\n    line-height: 1.9;\n  }\n\n  /* VIDEO */\n\n  .article-video-section {\n    padding: 0.75rem;\n  }\n\n  .article-video-section .article-media-heading {\n    font-size: 0.95rem;\n  }\n\n  .article-video-description {\n    font-size: 0.76rem;\n  }\n\n  /* AUDIO */\n\n  .article-audio-section {\n    padding: 0.85rem;\n  }\n\n  /* SHARE BUTTONS */\n\n  .article-share {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .article-share .btn {\n    width: 100%;\n  }\n\n  .article-meta {\n    font-size: 0.68rem;\n  }\n\n  .article-sidebar {\n    padding: 0.85rem;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .other-item,\n  .article-share .btn,\n  .sidebar-view-all,\n  .article-back {\n    transition: none;\n  }\n\n}@media(max-width:900px){.article-sidebar .other-stories-list{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:650px){.editorial-image-row,.editorial-image-row.image-right{display:flex;flex-direction:column;gap:12px;margin:1rem 0}.editorial-image-row.image-right .editorial-photo,.editorial-image-row.image-right .editorial-image-text{order:initial}.editorial-photo{width:100%}.editorial-subheading{font-size:1.05rem}.editorial-paragraph,.editorial-image-text{font-size:.95rem}.article-sidebar .other-stories-list{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:380px){.article-sidebar .other-stories-list{grid-template-columns:1fr}}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.ContentService }, { type: i3.MediaService }, { type: i4.PreferencesService }, { type: i5.NewsApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ArticleDetailComponent, { className: "ArticleDetailComponent", filePath: "src/app/pages/article-detail/article-detail.component.ts", lineNumber: 68 }); })();
//# sourceMappingURL=article-detail.component.js.map