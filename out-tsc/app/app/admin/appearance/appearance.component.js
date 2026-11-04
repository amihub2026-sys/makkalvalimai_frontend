import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/news-api.service";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function AppearanceComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2, " Loading website settings from MongoDB... ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2, " Uploading header image... ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "h4");
    i0.ɵɵtext(2, "Header Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 41);
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_div_20_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearImage("headerImage")); });
    i0.ɵɵelement(5, "i", 43);
    i0.ɵɵtext(6, " Remove Header Image ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.draft.headerImage), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
} }
function AppearanceComponent_div_0_p_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 44);
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵtext(2, " No header background image selected. ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_p_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2, " Uploading footer image... ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "h4");
    i0.ɵɵtext(2, "Footer Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 46);
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_div_34_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearImage("footerImage")); });
    i0.ɵɵelement(5, "i", 43);
    i0.ɵɵtext(6, " Remove Footer Image ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.media.url(ctx_r1.draft.footerImage), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
} }
function AppearanceComponent_div_0_p_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 44);
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵtext(2, " No footer background image selected. ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelement(1, "i", 48);
    i0.ɵɵelementStart(2, "p", 3);
    i0.ɵɵtext(3, " No breaking-news headlines added yet. ");
    i0.ɵɵelementEnd()();
} }
function AppearanceComponent_div_0_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 50)(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_div_48_Template_button_click_4_listener() { const i_r6 = i0.ɵɵrestoreView(_r5).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeHeadline(i_r6)); });
    i0.ɵɵelement(5, "i", 51);
    i0.ɵɵtext(6, " Remove ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 52)(8, "label");
    i0.ɵɵtext(9, " \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 * ");
    i0.ɵɵelementStart(10, "input", 53);
    i0.ɵɵtwoWayListener("ngModelChange", function AppearanceComponent_div_0_div_48_Template_input_ngModelChange_10_listener($event) { const h_r7 = i0.ɵɵrestoreView(_r5).$implicit; i0.ɵɵtwoWayBindingSet(h_r7.ta, $event) || (h_r7.ta = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, " English Headline * ");
    i0.ɵɵelementStart(13, "input", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function AppearanceComponent_div_0_div_48_Template_input_ngModelChange_13_listener($event) { const h_r7 = i0.ɵɵrestoreView(_r5).$implicit; i0.ɵɵtwoWayBindingSet(h_r7.en, $event) || (h_r7.en = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const h_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Headline ", i_r6 + 1, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("name", "headlineTa" + i_r6);
    i0.ɵɵtwoWayProperty("ngModel", h_r7.ta);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", "headlineEn" + i_r6);
    i0.ɵɵtwoWayProperty("ngModel", h_r7.en);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
} }
function AppearanceComponent_div_0_p_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 55);
    i0.ɵɵelement(1, "i", 56);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
function AppearanceComponent_div_0_p_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 57);
    i0.ɵɵelement(1, "i", 58);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.message, " ");
} }
function AppearanceComponent_div_0_span_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 59);
    i0.ɵɵelement(1, "i", 58);
    i0.ɵɵtext(2, " Saved to MongoDB ");
    i0.ɵɵelementEnd();
} }
function AppearanceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h2");
    i0.ɵɵtext(3, "Masthead, Footer & TV Headlines");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 3);
    i0.ɵɵtext(5, " Manage your website header, footer backgrounds and breaking-news headlines from the newsroom dashboard. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AppearanceComponent_div_0_p_6_Template, 3, 0, "p", 4);
    i0.ɵɵelementStart(7, "div", 5)(8, "section", 6)(9, "div", 7)(10, "h3");
    i0.ɵɵelement(11, "i", 8);
    i0.ɵɵtext(12, " Header Background ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label");
    i0.ɵɵtext(14, " Header Background URL ");
    i0.ɵɵelementStart(15, "input", 9);
    i0.ɵɵtwoWayListener("ngModelChange", function AppearanceComponent_div_0_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.draft.headerImage, $event) || (ctx_r1.draft.headerImage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label", 10);
    i0.ɵɵtext(17, " Or upload image ");
    i0.ɵɵelementStart(18, "input", 11);
    i0.ɵɵlistener("change", function AppearanceComponent_div_0_Template_input_change_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.upload($event, "headerImage")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, AppearanceComponent_div_0_p_19_Template, 3, 0, "p", 12)(20, AppearanceComponent_div_0_div_20_Template, 7, 2, "div", 13)(21, AppearanceComponent_div_0_p_21_Template, 3, 0, "p", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "section", 6)(23, "div", 7)(24, "h3");
    i0.ɵɵelement(25, "i", 8);
    i0.ɵɵtext(26, " Footer Background ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "label");
    i0.ɵɵtext(28, " Footer Background URL ");
    i0.ɵɵelementStart(29, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function AppearanceComponent_div_0_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.draft.footerImage, $event) || (ctx_r1.draft.footerImage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "label", 10);
    i0.ɵɵtext(31, " Or upload image ");
    i0.ɵɵelementStart(32, "input", 11);
    i0.ɵɵlistener("change", function AppearanceComponent_div_0_Template_input_change_32_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.upload($event, "footerImage")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, AppearanceComponent_div_0_p_33_Template, 3, 0, "p", 12)(34, AppearanceComponent_div_0_div_34_Template, 7, 2, "div", 13)(35, AppearanceComponent_div_0_p_35_Template, 3, 0, "p", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "section", 16)(37, "div", 17)(38, "div")(39, "h3");
    i0.ɵɵelement(40, "i", 18);
    i0.ɵɵtext(41, " Scrolling Breaking-News Headlines ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "p", 3);
    i0.ɵɵtext(43, " Enter each headline in Tamil and English. These headlines are saved in MongoDB. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "span", 19);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(46, AppearanceComponent_div_0_div_46_Template, 4, 0, "div", 20);
    i0.ɵɵelementStart(47, "div", 21);
    i0.ɵɵtemplate(48, AppearanceComponent_div_0_div_48_Template, 14, 8, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 23);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addHeadline()); });
    i0.ɵɵelement(50, "i", 24);
    i0.ɵɵtext(51, " Add Marquee Headline ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "section", 25)(53, "h3");
    i0.ɵɵelement(54, "i", 26);
    i0.ɵɵtext(55, " Advertisement Popup Setting ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "label", 27)(57, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function AppearanceComponent_div_0_Template_input_ngModelChange_57_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.draft.showPopup, $event) || (ctx_r1.draft.showPopup = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(58, " Enable advertising popup (if a popup ad exists) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "p", 3);
    i0.ɵɵtext(60, " This setting controls the saved popup preference. The public homepage popup display will be verified separately. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(61, AppearanceComponent_div_0_p_61_Template, 3, 1, "p", 29)(62, AppearanceComponent_div_0_p_62_Template, 3, 1, "p", 30);
    i0.ɵɵelementStart(63, "div", 31)(64, "button", 32);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_Template_button_click_64_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵelement(65, "i", 33);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "button", 34);
    i0.ɵɵlistener("click", function AppearanceComponent_div_0_Template_button_click_67_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadSettings()); });
    i0.ɵɵelement(68, "i", 35);
    i0.ɵɵtext(69, " Reload Saved Settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(70, AppearanceComponent_div_0_span_70_Template, 3, 0, "span", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.loading);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.draft.headerImage);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadingHeader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.draft.headerImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.draft.headerImage);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.draft.footerImage);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadingFooter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.draft.footerImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.draft.footerImage);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.draft.headlines.length, " ", ctx_r1.draft.headlines.length === 1 ? "Headline" : "Headlines", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.draft.headlines.length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.draft.headlines);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.draft.showPopup);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.error);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.message);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-spinner", ctx_r1.saving)("fa-spin", ctx_r1.saving)("fa-floppy-disk", !ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Saving Appearance..." : "Save Appearance", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.uploadingHeader || ctx_r1.uploadingFooter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.saved);
} }
export class AppearanceComponent {
    store;
    media;
    api;
    http;
    draft;
    // Existing success state
    saved = false;
    // API status
    loading = false;
    saving = false;
    // Image upload status
    uploadingHeader = false;
    uploadingFooter = false;
    // Feedback
    error = '';
    message = '';
    constructor(store, media, api, http) {
        this.store = store;
        this.media = media;
        this.api = api;
        this.http = http;
    }
    // ==========================================
    // COMPONENT INITIALIZATION
    // ==========================================
    ngOnInit() {
        // Show current frontend settings immediately.
        this.draft = structuredClone(this.store.settings());
        // Load authoritative settings from MongoDB.
        void this.loadSettings();
    }
    // ==========================================
    // LOAD SETTINGS FROM MONGODB
    // GET /api/admin/settings
    // ==========================================
    async loadSettings() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.error = '';
        this.message = '';
        try {
            // Verify admin authentication.
            await this.api.restoreSession();
            const response = await firstValueFrom(this.http.get(`${environment.apiBaseUrl}/admin/settings`, {
                withCredentials: true
            }));
            if (!response ||
                typeof response !== 'object' ||
                Array.isArray(response)) {
                throw new Error('Invalid website settings received from backend.');
            }
            // Keep existing default fields if the
            // backend omits optional settings.
            const current = this.store.settings();
            this.draft = structuredClone({
                ...current,
                ...response,
                headlines: Array.isArray(response.headlines)
                    ? response.headlines
                    : [],
                sectionAudio: {
                    ...(current.sectionAudio || {}),
                    ...(response.sectionAudio || {})
                }
            });
            this.saved = false;
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.loading = false;
        }
    }
    // ==========================================
    // HEADER AND FOOTER IMAGE UPLOAD
    // POST /api/admin/media
    // ==========================================
    async upload(event, key) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file) {
            return;
        }
        if (this.saving ||
            this.uploadingHeader ||
            this.uploadingFooter) {
            input.value = '';
            return;
        }
        this.error = '';
        this.message = '';
        this.saved = false;
        // ======================================
        // VALIDATE IMAGE FORMAT
        // ======================================
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
        // Maximum image size: 8 MB
        const maxSize = 8 * 1024 * 1024;
        if (file.size > maxSize) {
            this.error =
                'Image size must not exceed 8 MB.';
            input.value = '';
            return;
        }
        if (key === 'headerImage') {
            this.uploadingHeader = true;
        }
        else {
            this.uploadingFooter = true;
        }
        try {
            // Upload using the existing NewsApiService.
            //
            // Returns:
            // {
            //   id: string,
            //   url: string,
            //   kind: string
            // }
            const uploaded = await this.api.uploadMedia(file);
            if (!uploaded ||
                typeof uploaded.url !== 'string' ||
                uploaded.url.length === 0) {
                throw new Error('The backend did not return an image URL.');
            }
            // Update the correct image field.
            this.draft[key] = uploaded.url;
            this.message =
                key === 'headerImage'
                    ? 'Header image uploaded successfully. Click Save Appearance to apply it.'
                    : 'Footer image uploaded successfully. Click Save Appearance to apply it.';
        }
        catch (error) {
            this.error = this.getError(error);
        }
        finally {
            this.uploadingHeader = false;
            this.uploadingFooter = false;
            input.value = '';
        }
    }
    // ==========================================
    // ADD BREAKING NEWS HEADLINE
    // ==========================================
    addHeadline() {
        if (this.saving || this.loading) {
            return;
        }
        this.draft.headlines.push({
            ta: '',
            en: ''
        });
        this.saved = false;
        this.message = '';
    }
    // ==========================================
    // REMOVE BREAKING NEWS HEADLINE
    // ==========================================
    removeHeadline(index) {
        if (this.saving || this.loading) {
            return;
        }
        if (index < 0 ||
            index >= this.draft.headlines.length) {
            return;
        }
        this.draft.headlines.splice(index, 1);
        this.saved = false;
        this.message = '';
    }
    // ==========================================
    // REMOVE HEADER OR FOOTER IMAGE
    // ==========================================
    clearImage(key) {
        if (this.saving ||
            this.uploadingHeader ||
            this.uploadingFooter) {
            return;
        }
        this.draft[key] = '';
        this.saved = false;
        this.message = '';
    }
    // ==========================================
    // SAVE SETTINGS TO MONGODB
    // PUT /api/admin/settings
    // ==========================================
    async save() {
        if (this.saving ||
            this.loading ||
            this.uploadingHeader ||
            this.uploadingFooter) {
            return;
        }
        this.error = '';
        this.message = '';
        this.saved = false;
        const payload = structuredClone(this.draft);
        // ======================================
        // CLEAN IMAGE URLS
        // ======================================
        payload.headerImage =
            (payload.headerImage || '').trim();
        payload.footerImage =
            (payload.footerImage || '').trim();
        // ======================================
        // VALIDATE HEADLINES
        // ======================================
        if (!Array.isArray(payload.headlines)) {
            payload.headlines = [];
        }
        // Trim both languages.
        payload.headlines = payload.headlines.map(headline => ({
            ta: (headline.ta || '').trim(),
            en: (headline.en || '').trim()
        }));
        // Remove completely empty headline rows.
        payload.headlines = payload.headlines.filter(headline => headline.ta || headline.en);
        // Every headline must contain Tamil
        // and English content.
        const incompleteHeadline = payload.headlines.some(headline => !headline.ta ||
            !headline.en);
        if (incompleteHeadline) {
            this.error =
                'Every breaking-news headline must contain both Tamil and English text.';
            return;
        }
        // ======================================
        // PRESERVE SECTION AUDIO
        // ======================================
        payload.sectionAudio =
            payload.sectionAudio || {};
        // ======================================
        // PRESERVE POPUP SETTING
        // ======================================
        payload.showPopup =
            Boolean(payload.showPopup);
        this.saving = true;
        try {
            // Get valid session and CSRF token.
            const session = await this.api.restoreSession();
            // Send real settings to Node.js.
            await firstValueFrom(this.http.put(`${environment.apiBaseUrl}/admin/settings`, payload, {
                withCredentials: true,
                headers: {
                    'X-CSRF-Token': session.csrfToken
                }
            }));
            // Keep editor synchronized with saved data.
            this.draft = structuredClone(payload);
            // Refresh the public website data
            // from /api/public/bootstrap.
            try {
                await this.store.refreshFromBackend();
            }
            catch {
                // Settings were already saved.
                // A public refresh failure should not
                // incorrectly report a save failure.
            }
            this.saved = true;
            this.message =
                'Website appearance settings saved successfully.';
        }
        catch (error) {
            this.saved = false;
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
            if (error.status === 0) {
                return 'Cannot connect to the Node.js backend.';
            }
            if (error.status === 401) {
                return 'Admin session expired. Please log in again.';
            }
            if (error.status === 403) {
                return 'Access denied or invalid CSRF token.';
            }
            if (error.status === 404) {
                return 'Website settings API was not found.';
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
    static ɵfac = function AppearanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppearanceComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.NewsApiService), i0.ɵɵdirectiveInject(i4.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppearanceComponent, selectors: [["app-admin-appearance"]], decls: 1, vars: 1, consts: [["class", "panel glass editor-form appearance-page", 4, "ngIf"], [1, "panel", "glass", "editor-form", "appearance-page"], [1, "appearance-heading"], [1, "muted"], ["class", "appearance-loading", "role", "status", 4, "ngIf"], [1, "form-grid", "appearance-image-grid"], [1, "appearance-image-card"], [1, "appearance-card-heading"], [1, "fa-solid", "fa-image"], ["type", "text", "name", "headerImage", "placeholder", "Enter image URL or upload below", 3, "ngModelChange", "ngModel", "disabled"], [1, "appearance-file-label"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change", "disabled"], ["class", "muted appearance-upload-status", "role", "status", 4, "ngIf"], ["class", "appearance-preview", 4, "ngIf"], ["class", "muted appearance-empty-preview", 4, "ngIf"], ["type", "text", "name", "footerImage", "placeholder", "Enter image URL or upload below", 3, "ngModelChange", "ngModel", "disabled"], [1, "appearance-headlines-section"], [1, "appearance-section-heading"], [1, "fa-solid", "fa-bolt"], [1, "appearance-headline-count"], ["class", "appearance-empty-headlines", 4, "ngIf"], [1, "appearance-headlines-list"], ["class", "appearance-headline-card", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "outline", "appearance-add-headline", 3, "click", "disabled"], [1, "fa-solid", "fa-plus"], [1, "appearance-popup-section"], [1, "fa-solid", "fa-rectangle-ad"], [1, "checkbox-label"], ["type", "checkbox", "name", "showPopup", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error appearance-error", "role", "alert", 4, "ngIf"], ["class", "success-message appearance-success", "role", "status", 4, "ngIf"], [1, "appearance-actions"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"], [1, "fa-solid"], ["type", "button", 1, "btn", "outline", 3, "click", "disabled"], [1, "fa-solid", "fa-rotate"], ["class", "appearance-saved-indicator", 4, "ngIf"], ["role", "status", 1, "appearance-loading"], [1, "fa-solid", "fa-spinner", "fa-spin"], ["role", "status", 1, "muted", "appearance-upload-status"], [1, "appearance-preview"], ["alt", "Header background preview", 1, "upload-preview", 3, "src"], ["type", "button", 1, "btn", "outline", "danger", "small", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"], [1, "muted", "appearance-empty-preview"], [1, "fa-regular", "fa-image"], ["alt", "Footer background preview", 1, "upload-preview", 3, "src"], [1, "appearance-empty-headlines"], [1, "fa-solid", "fa-newspaper"], [1, "appearance-headline-card"], [1, "appearance-headline-card-heading"], [1, "fa-solid", "fa-xmark"], [1, "form-grid"], ["type", "text", "placeholder", "\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD", 3, "ngModelChange", "name", "ngModel", "disabled"], ["type", "text", "placeholder", "Enter headline in English", 3, "ngModelChange", "name", "ngModel", "disabled"], ["role", "alert", 1, "form-error", "appearance-error"], [1, "fa-solid", "fa-circle-exclamation"], ["role", "status", 1, "success-message", "appearance-success"], [1, "fa-solid", "fa-circle-check"], [1, "appearance-saved-indicator"]], template: function AppearanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AppearanceComponent_div_0_Template, 71, 32, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.draft);
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, FormsModule, i6.DefaultValueAccessor, i6.CheckboxControlValueAccessor, i6.NgControlStatus, i6.NgModel], styles: ["\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.appearance-page[_ngcontent-%COMP%], \n.appearance-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n.appearance-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.appearance-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.appearance-page[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  color: #f5f6fa;\n}\n\n\n\n\n\n\n.appearance-heading[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.appearance-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #ffffff;\n  font-size: clamp(21px, 2vw, 26px);\n  font-weight: 800;\n  line-height: 1.4;\n}\n\n.appearance-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b8c1d1;\n  font-size: 14px;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.appearance-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 16px 0;\n  padding: 14px 16px;\n  border: 1px solid #34435b;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.035);\n  color: #c6d2e4;\n  font-size: 13px;\n}\n\n.appearance-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff5276;\n}\n\n\n\n\n\n\n.appearance-image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 20px;\n  width: 100%;\n  margin-bottom: 28px;\n}\n\n.appearance-image-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid #39455b;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    rgba(29, 38, 54, 0.9),\n    rgba(12, 19, 32, 0.95)\n  );\n}\n\n\n\n\n.appearance-card-heading[_ngcontent-%COMP%] {\n  padding-bottom: 13px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.appearance-card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.appearance-card-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff4c73;\n  font-size: 18px;\n}\n\n\n\n\n\n\n.appearance-image-card[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.appearance-headline-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  min-width: 0;\n  color: #dce4f1;\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.5;\n}\n\n\n\n\n\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 13px;\n  border: 1px solid #3e4b63;\n  border-radius: 9px;\n  background: #0c1423;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]::placeholder {\n  color: #8190a5;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #68758e;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus {\n  border-color: #fa476e;\n  box-shadow: 0 0 0 3px rgba(250, 71, 110, 0.13);\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.appearance-file-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  min-width: 0;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  padding: 10px;\n  border: 1px dashed #58657b;\n  border-radius: 10px;\n  background: #0c1423;\n  color: #cbd4e3;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]::file-selector-button {\n  margin-right: 12px;\n  padding: 9px 13px;\n  border: none;\n  border-radius: 7px;\n  background: #d70f3c;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #fa476e;\n}\n\n.appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.appearance-upload-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #aab9ce;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.appearance-upload-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fb4b74;\n}\n\n\n\n\n\n\n.appearance-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #3d4860;\n  border-radius: 11px;\n  background: #0b1321;\n}\n\n.appearance-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dce4f2;\n  font-size: 13px;\n  font-weight: 750;\n}\n\n.appearance-preview[_ngcontent-%COMP%]   .upload-preview[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 190px;\n  max-height: 260px;\n  object-fit: contain;\n  object-position: center;\n  border: 1px solid #39465b;\n  border-radius: 9px;\n  background: #080e19;\n}\n\n.appearance-preview[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n\n\n\n\n\n.appearance-empty-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  margin: 0;\n  padding: 18px;\n  border: 1px dashed #3e4b63;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.13);\n  color: #99a8be;\n  font-size: 12px;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.appearance-empty-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f15376;\n  font-size: 22px;\n}\n\n\n\n\n\n\n.appearance-headlines-section[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  margin-top: 28px;\n  padding-top: 25px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.appearance-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n\n.appearance-section-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.appearance-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 9px;\n  color: #ffffff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.appearance-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff4c73;\n}\n\n.appearance-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #acb9cc;\n  font-size: 13px;\n  line-height: 1.65;\n}\n\n.appearance-headline-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 7px 12px;\n  border: 1px solid #4b3953;\n  border-radius: 8px;\n  background: rgba(228, 25, 69, 0.1);\n  color: #ff9cb3;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n\n\n\n\n\n.appearance-empty-headlines[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 145px;\n  padding: 25px 15px;\n  border: 1px dashed #48546c;\n  border-radius: 11px;\n  background: #111927;\n  text-align: center;\n}\n\n.appearance-empty-headlines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff557c;\n  font-size: 27px;\n}\n\n.appearance-empty-headlines[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a7b5c8;\n  font-size: 13px;\n}\n\n\n\n\n\n\n.appearance-headlines-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 15px;\n  width: 100%;\n}\n\n.appearance-headline-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #3b465c;\n  border-radius: 12px;\n  background: linear-gradient(\n    145deg,\n    #161f30,\n    #101827\n  );\n}\n\n.appearance-headline-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.appearance-headline-card-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 750;\n}\n\n.appearance-headline-card-heading[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n\n\n\n\n\n.appearance-headline-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n  width: 100%;\n}\n\n.appearance-headline-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n\n\n\n\n\n.appearance-add-headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 45px;\n  margin-top: 17px;\n  padding: 11px 16px;\n  border: 1px dashed #546178;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.025);\n  color: #f1f3f7;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.appearance-add-headline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #ff527b;\n  background: rgba(221, 24, 66, 0.09);\n}\n\n\n\n\n\n\n.appearance-popup-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: 28px;\n  padding: 21px;\n  border: 1px solid #3c465d;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.appearance-popup-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n}\n\n.appearance-popup-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fb4c73;\n}\n\n.appearance-popup-section[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #e8edf5;\n  font-size: 14px;\n  font-weight: 650;\n  line-height: 1.6;\n  cursor: pointer;\n}\n\n.appearance-popup-section[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  margin: 0;\n  accent-color: #ec1748;\n  cursor: pointer;\n}\n\n.appearance-popup-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a7b5c9;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n\n\n\n\n\n.appearance-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 20px;\n  padding: 13px 15px;\n  border: 1px solid rgba(247, 57, 98, 0.4);\n  border-radius: 10px;\n  background: rgba(247, 57, 98, 0.1);\n  color: #ffa3b6;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.appearance-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n\n\n\n\n\n.appearance-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 20px;\n  padding: 13px 15px;\n  border: 1px solid rgba(41, 196, 132, 0.35);\n  border-radius: 10px;\n  background: rgba(41, 196, 132, 0.09);\n  color: #86eab8;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.appearance-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n\n\n\n\n\n.appearance-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 13px;\n  margin-top: 25px;\n}\n\n.appearance-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 44px;\n  padding: 11px 18px;\n  font-size: 13px;\n}\n\n.appearance-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, \n.appearance-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.appearance-saved-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #7cebb4;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.appearance-saved-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n\n@media (max-width: 1000px) {\n\n  .appearance-image-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n\n  .appearance-preview[_ngcontent-%COMP%]   .upload-preview[_ngcontent-%COMP%] {\n    height: 225px;\n  }\n\n}@media (max-width: 700px) {\n\n  .appearance-heading[_ngcontent-%COMP%] {\n    margin-bottom: 19px;\n  }\n\n  .appearance-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .appearance-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .appearance-image-card[_ngcontent-%COMP%] {\n    padding: 15px;\n    gap: 13px;\n  }\n\n  .appearance-card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .appearance-headlines-section[_ngcontent-%COMP%] {\n    margin-top: 23px;\n    padding-top: 20px;\n  }\n\n  .appearance-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .appearance-headline-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .appearance-headline-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 14px;\n  }\n\n  .appearance-popup-section[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .appearance-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n\n  .appearance-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n}@media (max-width: 420px) {\n\n  .appearance-card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .appearance-page[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]::file-selector-button {\n    padding: 8px;\n    margin-right: 6px;\n  }\n\n  .appearance-preview[_ngcontent-%COMP%]   .upload-preview[_ngcontent-%COMP%] {\n    height: 165px;\n  }\n\n  .appearance-headline-card-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .appearance-popup-section[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .appearance-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .appearance-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .appearance-saved-indicator[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .appearance-page[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n    transition: none;\n  }\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppearanceComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-appearance', standalone: true, imports: [
                    CommonModule,
                    FormsModule
                ], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI - ADMIN APPEARANCE\n     HEADER, FOOTER AND BREAKING HEADLINES\n     ========================================== -->\n\n<div class=\"panel glass editor-form appearance-page\" *ngIf=\"draft\">\n\n  <!-- ======================================\n       PAGE HEADER\n       ====================================== -->\n\n  <div class=\"appearance-heading\">\n\n    <h2>Masthead, Footer & TV Headlines</h2>\n\n    <p class=\"muted\">\n      Manage your website header, footer backgrounds\n      and breaking-news headlines from the newsroom dashboard.\n    </p>\n\n  </div>\n\n  <!-- LOADING STATUS -->\n\n  <p\n    class=\"appearance-loading\"\n    *ngIf=\"loading\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n    Loading website settings from MongoDB...\n  </p>\n\n  <!-- ======================================\n       HEADER AND FOOTER IMAGES\n       ====================================== -->\n\n  <div class=\"form-grid appearance-image-grid\">\n\n    <!-- HEADER BACKGROUND -->\n\n    <section class=\"appearance-image-card\">\n\n      <div class=\"appearance-card-heading\">\n\n        <h3>\n          <i class=\"fa-solid fa-image\"></i>\n          Header Background\n        </h3>\n\n      </div>\n\n      <label>\n        Header Background URL\n\n        <input\n          type=\"text\"\n          name=\"headerImage\"\n          [(ngModel)]=\"draft.headerImage\"\n          placeholder=\"Enter image URL or upload below\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        />\n      </label>\n\n      <label class=\"appearance-file-label\">\n\n        Or upload image\n\n        <input\n          type=\"file\"\n          accept=\"image/jpeg,image/png,image/webp\"\n          (change)=\"upload($event, 'headerImage')\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        />\n\n      </label>\n\n      <p\n        class=\"muted appearance-upload-status\"\n        *ngIf=\"uploadingHeader\"\n        role=\"status\"\n      >\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        Uploading header image...\n      </p>\n\n      <!-- HEADER IMAGE PREVIEW -->\n\n      <div\n        class=\"appearance-preview\"\n        *ngIf=\"draft.headerImage\"\n      >\n\n        <h4>Header Preview</h4>\n\n        <img\n          class=\"upload-preview\"\n          [src]=\"media.url(draft.headerImage)\"\n          alt=\"Header background preview\"\n        />\n\n        <button\n          type=\"button\"\n          class=\"btn outline danger small\"\n          (click)=\"clearImage('headerImage')\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        >\n          <i class=\"fa-solid fa-trash\"></i>\n          Remove Header Image\n        </button>\n\n      </div>\n\n      <p\n        class=\"muted appearance-empty-preview\"\n        *ngIf=\"!draft.headerImage\"\n      >\n        <i class=\"fa-regular fa-image\"></i>\n        No header background image selected.\n      </p>\n\n    </section>\n\n    <!-- FOOTER BACKGROUND -->\n\n    <section class=\"appearance-image-card\">\n\n      <div class=\"appearance-card-heading\">\n\n        <h3>\n          <i class=\"fa-solid fa-image\"></i>\n          Footer Background\n        </h3>\n\n      </div>\n\n      <label>\n        Footer Background URL\n\n        <input\n          type=\"text\"\n          name=\"footerImage\"\n          [(ngModel)]=\"draft.footerImage\"\n          placeholder=\"Enter image URL or upload below\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        />\n      </label>\n\n      <label class=\"appearance-file-label\">\n\n        Or upload image\n\n        <input\n          type=\"file\"\n          accept=\"image/jpeg,image/png,image/webp\"\n          (change)=\"upload($event, 'footerImage')\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        />\n\n      </label>\n\n      <p\n        class=\"muted appearance-upload-status\"\n        *ngIf=\"uploadingFooter\"\n        role=\"status\"\n      >\n        <i class=\"fa-solid fa-spinner fa-spin\"></i>\n        Uploading footer image...\n      </p>\n\n      <!-- FOOTER IMAGE PREVIEW -->\n\n      <div\n        class=\"appearance-preview\"\n        *ngIf=\"draft.footerImage\"\n      >\n\n        <h4>Footer Preview</h4>\n\n        <img\n          class=\"upload-preview\"\n          [src]=\"media.url(draft.footerImage)\"\n          alt=\"Footer background preview\"\n        />\n\n        <button\n          type=\"button\"\n          class=\"btn outline danger small\"\n          (click)=\"clearImage('footerImage')\"\n          [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n        >\n          <i class=\"fa-solid fa-trash\"></i>\n          Remove Footer Image\n        </button>\n\n      </div>\n\n      <p\n        class=\"muted appearance-empty-preview\"\n        *ngIf=\"!draft.footerImage\"\n      >\n        <i class=\"fa-regular fa-image\"></i>\n        No footer background image selected.\n      </p>\n\n    </section>\n\n  </div>\n\n  <!-- ======================================\n       BREAKING NEWS HEADLINES\n       ====================================== -->\n\n  <section class=\"appearance-headlines-section\">\n\n    <div class=\"appearance-section-heading\">\n\n      <div>\n\n        <h3>\n          <i class=\"fa-solid fa-bolt\"></i>\n          Scrolling Breaking-News Headlines\n        </h3>\n\n        <p class=\"muted\">\n          Enter each headline in Tamil and English.\n          These headlines are saved in MongoDB.\n        </p>\n\n      </div>\n\n      <span class=\"appearance-headline-count\">\n        {{ draft.headlines.length }}\n        {{\n          draft.headlines.length === 1\n            ? 'Headline'\n            : 'Headlines'\n        }}\n      </span>\n\n    </div>\n\n    <!-- NO HEADLINES -->\n\n    <div\n      class=\"appearance-empty-headlines\"\n      *ngIf=\"draft.headlines.length === 0\"\n    >\n\n      <i class=\"fa-solid fa-newspaper\"></i>\n\n      <p class=\"muted\">\n        No breaking-news headlines added yet.\n      </p>\n\n    </div>\n\n    <!-- HEADLINE EDITORS -->\n\n    <div class=\"appearance-headlines-list\">\n\n      <div\n        class=\"appearance-headline-card\"\n        *ngFor=\"let h of draft.headlines; let i = index\"\n      >\n\n        <div class=\"appearance-headline-card-heading\">\n\n          <h4>\n            Headline {{ i + 1 }}\n          </h4>\n\n          <button\n            type=\"button\"\n            class=\"btn outline danger small\"\n            (click)=\"removeHeadline(i)\"\n            [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n          >\n            <i class=\"fa-solid fa-xmark\"></i>\n            Remove\n          </button>\n\n        </div>\n\n        <div class=\"form-grid\">\n\n          <label>\n            \u0BA4\u0BAE\u0BBF\u0BB4\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1 *\n\n            <input\n              type=\"text\"\n              [name]=\"'headlineTa' + i\"\n              [(ngModel)]=\"h.ta\"\n              placeholder=\"\u0BA4\u0BAE\u0BBF\u0BB4\u0BBF\u0BB2\u0BCD \u0BA4\u0BB2\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD\"\n              [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n            />\n          </label>\n\n          <label>\n            English Headline *\n\n            <input\n              type=\"text\"\n              [name]=\"'headlineEn' + i\"\n              [(ngModel)]=\"h.en\"\n              placeholder=\"Enter headline in English\"\n              [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n            />\n          </label>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- ADD HEADLINE -->\n\n    <button\n      type=\"button\"\n      class=\"btn outline appearance-add-headline\"\n      (click)=\"addHeadline()\"\n      [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n    >\n      <i class=\"fa-solid fa-plus\"></i>\n      Add Marquee Headline\n    </button>\n\n  </section>\n\n  <!-- ======================================\n       POPUP ADVERTISEMENT SETTING\n       ====================================== -->\n\n  <section class=\"appearance-popup-section\">\n\n    <h3>\n      <i class=\"fa-solid fa-rectangle-ad\"></i>\n      Advertisement Popup Setting\n    </h3>\n\n    <label class=\"checkbox-label\">\n\n      <input\n        type=\"checkbox\"\n        name=\"showPopup\"\n        [(ngModel)]=\"draft.showPopup\"\n        [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n      />\n\n      Enable advertising popup (if a popup ad exists)\n\n    </label>\n\n    <p class=\"muted\">\n      This setting controls the saved popup preference.\n      The public homepage popup display will be verified separately.\n    </p>\n\n  </section>\n\n  <!-- ======================================\n       ERROR AND SUCCESS MESSAGES\n       ====================================== -->\n\n  <p\n    class=\"form-error appearance-error\"\n    *ngIf=\"error\"\n    role=\"alert\"\n  >\n\n    <i class=\"fa-solid fa-circle-exclamation\"></i>\n\n    {{ error }}\n\n  </p>\n\n  <p\n    class=\"success-message appearance-success\"\n    *ngIf=\"message\"\n    role=\"status\"\n  >\n\n    <i class=\"fa-solid fa-circle-check\"></i>\n\n    {{ message }}\n\n  </p>\n\n  <!-- ======================================\n       SAVE AND REFRESH CONTROLS\n       ====================================== -->\n\n  <div class=\"appearance-actions\">\n\n    <button\n      type=\"button\"\n      class=\"btn btn-red\"\n      (click)=\"save()\"\n      [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n    >\n\n      <i\n        class=\"fa-solid\"\n        [class.fa-spinner]=\"saving\"\n        [class.fa-spin]=\"saving\"\n        [class.fa-floppy-disk]=\"!saving\"\n      ></i>\n\n      {{\n        saving\n          ? 'Saving Appearance...'\n          : 'Save Appearance'\n      }}\n\n    </button>\n\n    <button\n      type=\"button\"\n      class=\"btn outline\"\n      (click)=\"loadSettings()\"\n      [disabled]=\"loading || saving || uploadingHeader || uploadingFooter\"\n    >\n\n      <i class=\"fa-solid fa-rotate\"></i>\n\n      Reload Saved Settings\n\n    </button>\n\n    <span\n      class=\"appearance-saved-indicator\"\n      *ngIf=\"saved\"\n    >\n      <i class=\"fa-solid fa-circle-check\"></i>\n      Saved to MongoDB\n    </span>\n\n  </div>\n\n</div>\n", styles: ["/* ==========================================\n   MAKKAL VALIMAI - ADMIN APPEARANCE\n   HEADER, FOOTER AND BREAKING HEADLINES\n   ========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.appearance-page,\n.appearance-page *,\n.appearance-page *::before,\n.appearance-page *::after {\n  box-sizing: border-box;\n}\n\n.appearance-page {\n  width: 100%;\n  min-width: 0;\n  color: #f5f6fa;\n}\n\n/* ==========================================\n   PAGE HEADER\n   ========================================== */\n\n.appearance-heading {\n  margin-bottom: 24px;\n}\n\n.appearance-heading h2 {\n  margin: 0 0 12px;\n  color: #ffffff;\n  font-size: clamp(21px, 2vw, 26px);\n  font-weight: 800;\n  line-height: 1.4;\n}\n\n.appearance-heading p {\n  margin: 0;\n  color: #b8c1d1;\n  font-size: 14px;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   LOADING STATUS\n   ========================================== */\n\n.appearance-loading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 16px 0;\n  padding: 14px 16px;\n  border: 1px solid #34435b;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.035);\n  color: #c6d2e4;\n  font-size: 13px;\n}\n\n.appearance-loading i {\n  color: #ff5276;\n}\n\n/* ==========================================\n   HEADER AND FOOTER IMAGE GRID\n   ========================================== */\n\n.appearance-image-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 20px;\n  width: 100%;\n  margin-bottom: 28px;\n}\n\n.appearance-image-card {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid #39455b;\n  border-radius: 14px;\n  background: linear-gradient(\n    145deg,\n    rgba(29, 38, 54, 0.9),\n    rgba(12, 19, 32, 0.95)\n  );\n}\n\n/* IMAGE CARD HEADINGS */\n\n.appearance-card-heading {\n  padding-bottom: 13px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.appearance-card-heading h3 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.appearance-card-heading i {\n  color: #ff4c73;\n  font-size: 18px;\n}\n\n/* ==========================================\n   INPUT LABELS\n   ========================================== */\n\n.appearance-image-card > label,\n.appearance-headline-card .form-grid label {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  min-width: 0;\n  color: #dce4f1;\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.5;\n}\n\n/* ==========================================\n   TEXT INPUTS\n   ========================================== */\n\n.appearance-page input[type=\"text\"] {\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 13px;\n  border: 1px solid #3e4b63;\n  border-radius: 9px;\n  background: #0c1423;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.appearance-page input[type=\"text\"]::placeholder {\n  color: #8190a5;\n}\n\n.appearance-page input[type=\"text\"]:hover:not(:disabled) {\n  border-color: #68758e;\n}\n\n.appearance-page input[type=\"text\"]:focus {\n  border-color: #fa476e;\n  box-shadow: 0 0 0 3px rgba(250, 71, 110, 0.13);\n}\n\n.appearance-page input[type=\"text\"]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   IMAGE FILE UPLOAD\n   ========================================== */\n\n.appearance-file-label {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  min-width: 0;\n}\n\n.appearance-page input[type=\"file\"] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  padding: 10px;\n  border: 1px dashed #58657b;\n  border-radius: 10px;\n  background: #0c1423;\n  color: #cbd4e3;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.appearance-page input[type=\"file\"]::file-selector-button {\n  margin-right: 12px;\n  padding: 9px 13px;\n  border: none;\n  border-radius: 7px;\n  background: #d70f3c;\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.appearance-page input[type=\"file\"]:hover:not(:disabled) {\n  border-color: #fa476e;\n}\n\n.appearance-page input[type=\"file\"]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   IMAGE UPLOAD STATUS\n   ========================================== */\n\n.appearance-upload-status {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #aab9ce;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.appearance-upload-status i {\n  color: #fb4b74;\n}\n\n/* ==========================================\n   HEADER AND FOOTER IMAGE PREVIEW\n   ========================================== */\n\n.appearance-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n  padding: 14px;\n  border: 1px solid #3d4860;\n  border-radius: 11px;\n  background: #0b1321;\n}\n\n.appearance-preview h4 {\n  margin: 0;\n  color: #dce4f2;\n  font-size: 13px;\n  font-weight: 750;\n}\n\n.appearance-preview .upload-preview {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 190px;\n  max-height: 260px;\n  object-fit: contain;\n  object-position: center;\n  border: 1px solid #39465b;\n  border-radius: 9px;\n  background: #080e19;\n}\n\n.appearance-preview .btn {\n  align-self: flex-start;\n}\n\n/* ==========================================\n   EMPTY IMAGE PREVIEW\n   ========================================== */\n\n.appearance-empty-preview {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 110px;\n  margin: 0;\n  padding: 18px;\n  border: 1px dashed #3e4b63;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.13);\n  color: #99a8be;\n  font-size: 12px;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.appearance-empty-preview i {\n  color: #f15376;\n  font-size: 22px;\n}\n\n/* ==========================================\n   BREAKING NEWS HEADLINES SECTION\n   ========================================== */\n\n.appearance-headlines-section {\n  width: 100%;\n  min-width: 0;\n  margin-top: 28px;\n  padding-top: 25px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.appearance-section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n\n.appearance-section-heading > div {\n  flex: 1;\n  min-width: 0;\n}\n\n.appearance-section-heading h3 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 9px;\n  color: #ffffff;\n  font-size: 19px;\n  font-weight: 750;\n  line-height: 1.5;\n}\n\n.appearance-section-heading h3 i {\n  color: #ff4c73;\n}\n\n.appearance-section-heading p {\n  margin: 0;\n  color: #acb9cc;\n  font-size: 13px;\n  line-height: 1.65;\n}\n\n.appearance-headline-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  padding: 7px 12px;\n  border: 1px solid #4b3953;\n  border-radius: 8px;\n  background: rgba(228, 25, 69, 0.1);\n  color: #ff9cb3;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n/* ==========================================\n   NO HEADLINES STATE\n   ========================================== */\n\n.appearance-empty-headlines {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 145px;\n  padding: 25px 15px;\n  border: 1px dashed #48546c;\n  border-radius: 11px;\n  background: #111927;\n  text-align: center;\n}\n\n.appearance-empty-headlines i {\n  color: #ff557c;\n  font-size: 27px;\n}\n\n.appearance-empty-headlines p {\n  margin: 0;\n  color: #a7b5c8;\n  font-size: 13px;\n}\n\n/* ==========================================\n   HEADLINES LIST\n   ========================================== */\n\n.appearance-headlines-list {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 15px;\n  width: 100%;\n}\n\n.appearance-headline-card {\n  width: 100%;\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #3b465c;\n  border-radius: 12px;\n  background: linear-gradient(\n    145deg,\n    #161f30,\n    #101827\n  );\n}\n\n.appearance-headline-card-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.appearance-headline-card-heading h4 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 750;\n}\n\n.appearance-headline-card-heading .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n/* ==========================================\n   TAMIL AND ENGLISH HEADLINE FIELDS\n   ========================================== */\n\n.appearance-headline-card .form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n  width: 100%;\n}\n\n.appearance-headline-card .form-grid > * {\n  min-width: 0;\n}\n\n/* ==========================================\n   ADD HEADLINE BUTTON\n   ========================================== */\n\n.appearance-add-headline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 45px;\n  margin-top: 17px;\n  padding: 11px 16px;\n  border: 1px dashed #546178;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.025);\n  color: #f1f3f7;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.appearance-add-headline:hover:not(:disabled) {\n  border-color: #ff527b;\n  background: rgba(221, 24, 66, 0.09);\n}\n\n/* ==========================================\n   ADVERTISEMENT POPUP SETTINGS\n   ========================================== */\n\n.appearance-popup-section {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-top: 28px;\n  padding: 21px;\n  border: 1px solid #3c465d;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.appearance-popup-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 750;\n}\n\n.appearance-popup-section h3 i {\n  color: #fb4c73;\n}\n\n.appearance-popup-section .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #e8edf5;\n  font-size: 14px;\n  font-weight: 650;\n  line-height: 1.6;\n  cursor: pointer;\n}\n\n.appearance-popup-section input[type=\"checkbox\"] {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  margin: 0;\n  accent-color: #ec1748;\n  cursor: pointer;\n}\n\n.appearance-popup-section p {\n  margin: 0;\n  color: #a7b5c9;\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n/* ==========================================\n   ERROR MESSAGE\n   ========================================== */\n\n.appearance-error {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 20px;\n  padding: 13px 15px;\n  border: 1px solid rgba(247, 57, 98, 0.4);\n  border-radius: 10px;\n  background: rgba(247, 57, 98, 0.1);\n  color: #ffa3b6;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.appearance-error i {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n/* ==========================================\n   SUCCESS MESSAGE\n   ========================================== */\n\n.appearance-success {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 20px;\n  padding: 13px 15px;\n  border: 1px solid rgba(41, 196, 132, 0.35);\n  border-radius: 10px;\n  background: rgba(41, 196, 132, 0.09);\n  color: #86eab8;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.appearance-success i {\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\n/* ==========================================\n   SAVE AND RELOAD ACTIONS\n   ========================================== */\n\n.appearance-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 13px;\n  margin-top: 25px;\n}\n\n.appearance-actions .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 44px;\n  padding: 11px 18px;\n  font-size: 13px;\n}\n\n.appearance-actions .btn:disabled,\n.appearance-page button:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n/* ==========================================\n   SAVED INDICATOR\n   ========================================== */\n\n.appearance-saved-indicator {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #7cebb4;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.appearance-saved-indicator i {\n  font-size: 15px;\n}\n\n/* ==========================================\n   TABLET RESPONSIVE\n   ========================================== */\n\n\n\n/* ==========================================\n   MOBILE RESPONSIVE\n   ========================================== */\n\n\n\n/* ==========================================\n   SMALL MOBILE\n   ========================================== */\n\n\n\n/* ==========================================\n   REDUCED MOTION\n   ========================================== */\n", "/* Responsive rules for appearance; isolated from common/desktop CSS. */\n@media (max-width: 1000px) {\n\n  .appearance-image-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n\n  .appearance-preview .upload-preview {\n    height: 225px;\n  }\n\n}@media (max-width: 700px) {\n\n  .appearance-heading {\n    margin-bottom: 19px;\n  }\n\n  .appearance-heading h2 {\n    font-size: 21px;\n  }\n\n  .appearance-heading p {\n    font-size: 12px;\n  }\n\n  .appearance-image-card {\n    padding: 15px;\n    gap: 13px;\n  }\n\n  .appearance-card-heading h3 {\n    font-size: 16px;\n  }\n\n  .appearance-headlines-section {\n    margin-top: 23px;\n    padding-top: 20px;\n  }\n\n  .appearance-section-heading h3 {\n    font-size: 17px;\n  }\n\n  .appearance-headline-card {\n    padding: 14px;\n  }\n\n  .appearance-headline-card .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 14px;\n  }\n\n  .appearance-popup-section {\n    padding: 15px;\n  }\n\n  .appearance-actions {\n    align-items: stretch;\n  }\n\n  .appearance-actions .btn {\n    flex: 1;\n  }\n\n}@media (max-width: 420px) {\n\n  .appearance-card-heading h3 {\n    font-size: 15px;\n  }\n\n  .appearance-page input[type=\"file\"] {\n    font-size: 11px;\n  }\n\n  .appearance-page input[type=\"file\"]::file-selector-button {\n    padding: 8px;\n    margin-right: 6px;\n  }\n\n  .appearance-preview .upload-preview {\n    height: 165px;\n  }\n\n  .appearance-headline-card-heading {\n    align-items: flex-start;\n  }\n\n  .appearance-popup-section .checkbox-label {\n    align-items: flex-start;\n  }\n\n  .appearance-actions {\n    flex-direction: column;\n  }\n\n  .appearance-actions .btn {\n    width: 100%;\n  }\n\n  .appearance-saved-indicator {\n    justify-content: center;\n  }\n\n}@media (prefers-reduced-motion: reduce) {\n\n  .appearance-page input[type=\"text\"] {\n    transition: none;\n  }\n\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.NewsApiService }, { type: i4.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppearanceComponent, { className: "AppearanceComponent", filePath: "src/app/admin/appearance/appearance.component.ts", lineNumber: 34 }); })();
//# sourceMappingURL=appearance.component.js.map