import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SECTIONS, istDay } from '../../core/models';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { SUGGESTED_AREAS } from '../../core/areas';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/news-api.service";
import * as i3 from "../../services/content.service";
import * as i4 from "../../services/preferences.service";
import * as i5 from "../../services/media.service";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
function CrimeNewsComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 19);
} if (rf & 2) {
    const locality_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", locality_r1);
} }
function CrimeNewsComponent_app_story_card_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 20);
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r2);
} }
function CrimeNewsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1, "Loading published articles\u2026");
    i0.ɵɵelementEnd();
} }
function CrimeNewsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 23);
    i0.ɵɵlistener("click", function CrimeNewsComponent_div_30_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.refresh()); });
    i0.ɵɵtext(3, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r3.error, " ");
} }
function CrimeNewsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.prefs.label("\u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC7\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8", "No news found for this date or area"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.prefs.label("\u0BB5\u0BC7\u0BB1\u0BC1 \u0BA4\u0BC7\u0BA4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.", "Please choose another date or reset the filters."));
} }
function CrimeNewsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "button", 27);
    i0.ɵɵlistener("click", function CrimeNewsComponent_div_32_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.loadMore()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.loading ? "Loading\u2026" : ctx_r3.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Load more stories"));
} }
/** Server-side article filtering and pagination; no static article examples. */
export class CrimeNewsComponent {
    route;
    api;
    store;
    prefs;
    media;
    section = 'madurai';
    kind = 'madurai';
    title = { ta: 'மதுரை செய்திகள்', en: 'Madurai News' };
    selectedDate = '';
    area = '';
    today = istDay();
    areas = SUGGESTED_AREAS;
    filtered = [];
    loading = false;
    error = '';
    hasMore = false;
    page = 0;
    generation = 0;
    refreshTimeout;
    routeSub;
    constructor(route, api, store, prefs, media) {
        this.route = route;
        this.api = api;
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    ngOnInit() {
        this.routeSub = this.route.data.subscribe(data => {
            this.section = data['section'] || 'madurai';
            this.kind = data['kind'] || 'madurai';
            this.title = SECTIONS.find(item => item.section === this.section)?.name || this.title;
            this.selectedDate = this.route.snapshot.queryParamMap.get('date') || '';
            this.area = this.route.snapshot.queryParamMap.get('area') || '';
            this.refresh();
        });
    }
    refresh() {
        // Invalidate any earlier in-flight query before its response can update the UI.
        this.generation++;
        if (this.refreshTimeout)
            clearTimeout(this.refreshTimeout);
        this.refreshTimeout = setTimeout(() => void this.fetchPage(1), 250);
    }
    async loadMore() {
        if (!this.loading && this.hasMore)
            await this.fetchPage(this.page + 1);
    }
    async fetchPage(page) {
        const requestId = ++this.generation;
        if (page === 1) {
            this.filtered = [];
            this.page = 0;
            this.hasMore = false;
        }
        this.loading = true;
        this.error = '';
        try {
            const response = await this.api.articlesByCategory(this.kind, {
                date: this.selectedDate || undefined,
                area: this.area.trim() || undefined,
                page, limit: 30
            });
            if (requestId !== this.generation)
                return;
            if (!Array.isArray(response))
                throw new Error('Invalid server article list');
            this.filtered = page === 1 ? response : [...this.filtered, ...response.filter(item => !this.filtered.some(old => old.id === item.id))];
            this.page = page;
            this.hasMore = response.length === 30;
        }
        catch (error) {
            if (requestId === this.generation)
                this.error = 'Unable to load this news section from the server.';
        }
        finally {
            if (requestId === this.generation)
                this.loading = false;
        }
    }
    ngOnDestroy() {
        this.generation++;
        this.routeSub?.unsubscribe();
        if (this.refreshTimeout)
            clearTimeout(this.refreshTimeout);
    }
    static ɵfac = function CrimeNewsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrimeNewsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.NewsApiService), i0.ɵɵdirectiveInject(i3.ContentService), i0.ɵɵdirectiveInject(i4.PreferencesService), i0.ɵɵdirectiveInject(i5.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrimeNewsComponent, selectors: [["app-crime-news"]], decls: 33, vars: 19, consts: [[1, "container", "page-section", "crime-news-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-newspaper", "giant-icon"], [1, "filter-panel", "glass"], ["type", "date", 3, "ngModelChange", "ngModel", "max"], ["list", "mv-areas", 3, "ngModelChange", "ngModel", "placeholder"], [1, "btn", "outline", 3, "click"], ["id", "mv-areas"], [3, "value", 4, "ngFor", "ngForOf"], [3, "src"], [1, "section-title"], [1, "muted"], [1, "card-grid"], [3, "article", 4, "ngFor", "ngForOf"], ["class", "empty-state glass", "role", "status", 4, "ngIf"], ["class", "empty-state glass", "role", "alert", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "load-more-row", 4, "ngIf"], [3, "value"], [3, "article"], ["role", "status", 1, "empty-state", "glass"], ["role", "alert", 1, "empty-state", "glass"], ["type", "button", 1, "btn", "outline", 3, "click"], [1, "empty-state", "glass"], [1, "fa-regular", "fa-calendar-xmark"], [1, "load-more-row"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"]], template: function CrimeNewsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "MAKKAL VALIMAI \u00B7 MADURAI");
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
            i0.ɵɵelementStart(13, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function CrimeNewsComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function CrimeNewsComponent_Template_input_ngModelChange_13_listener() { return ctx.refresh(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15);
            i0.ɵɵelementStart(16, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function CrimeNewsComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.area, $event) || (ctx.area = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function CrimeNewsComponent_Template_input_ngModelChange_16_listener() { return ctx.refresh(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 7);
            i0.ɵɵlistener("click", function CrimeNewsComponent_Template_button_click_17_listener() { ctx.selectedDate = ""; ctx.area = ""; return ctx.refresh(); });
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "datalist", 8);
            i0.ɵɵtemplate(20, CrimeNewsComponent_option_20_Template, 1, 1, "option", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "app-audio-player", 10);
            i0.ɵɵelementStart(22, "div", 11)(23, "h2");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span", 12);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 13);
            i0.ɵɵtemplate(28, CrimeNewsComponent_app_story_card_28_Template, 1, 1, "app-story-card", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, CrimeNewsComponent_div_29_Template, 2, 0, "div", 15)(30, CrimeNewsComponent_div_30_Template, 4, 1, "div", 16)(31, CrimeNewsComponent_div_31_Template, 6, 2, "div", 17)(32, CrimeNewsComponent_div_32_Template, 3, 2, "div", 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_10_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.prefs.txt(ctx.title));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BA4\u0BC7\u0BA4\u0BBF, \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD", "Madurai district news filtered by publication date and area"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBE\u0BA9 \u0BA4\u0BC7\u0BA4\u0BBF", "Published date"));
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedDate);
            i0.ɵɵproperty("max", ctx.today);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAA\u0B95\u0BC1\u0BA4\u0BBF / \u0BB5\u0B9F\u0BCD\u0B9F\u0BBE\u0BB0\u0BAE\u0BCD", "Area or locality"));
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.area);
            i0.ɵɵproperty("placeholder", ctx.prefs.label("\u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B95", "Enter locality"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B85\u0BB4\u0BBF\u0B95\u0BCD\u0B95", "Reset"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.areas);
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.prefs.language() === "ta" ? ((tmp_10_0 = ctx.store.settings().sectionAudio[ctx.section]) == null ? null : tmp_10_0.ta) || "" : ((tmp_10_0 = ctx.store.settings().sectionAudio[ctx.section]) == null ? null : tmp_10_0.en) || "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.prefs.txt(ctx.title));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.filtered.length, " ", ctx.prefs.label("\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD", "stories"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.filtered);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.error && !ctx.filtered.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hasMore);
        } }, dependencies: [CommonModule, i6.NgForOf, i6.NgIf, FormsModule, i7.NgSelectOption, i7.ɵNgSelectMultipleOption, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, StoryCardComponent, AudioPlayerComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.crime-news-page[_ngcontent-%COMP%] { min-width: 0; }\n.crime-news-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .crime-news-page[_ngcontent-%COMP%] { width: 100%; }\n  .crime-news-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}\n\n.load-more-row[_ngcontent-%COMP%] {display:flex;justify-content:center;margin:22px 0;}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrimeNewsComponent, [{
        type: Component,
        args: [{ selector: 'app-crime-news', standalone: true, imports: [CommonModule, FormsModule, StoryCardComponent, AudioPlayerComponent], template: "<div class=\"container page-section crime-news-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">MAKKAL VALIMAI \u00B7 MADURAI</span>\n<h1>{{prefs.txt(title)}}</h1>\n<p>{{prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 \u0BA4\u0BC7\u0BA4\u0BBF, \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD','Madurai district news filtered by publication date and area')}}</p>\n</div>\n<i class=\"fa-solid fa-newspaper giant-icon\">\n</i>\n</div>\n<div class=\"filter-panel glass\">\n<label>{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBE\u0BA9 \u0BA4\u0BC7\u0BA4\u0BBF','Published date')}}<input type=\"date\" [(ngModel)]=\"selectedDate\" [max]=\"today\" (ngModelChange)=\"refresh()\"/>\n</label>\n<label>{{prefs.label('\u0BAA\u0B95\u0BC1\u0BA4\u0BBF / \u0BB5\u0B9F\u0BCD\u0B9F\u0BBE\u0BB0\u0BAE\u0BCD','Area or locality')}}<input [(ngModel)]=\"area\" list=\"mv-areas\" (ngModelChange)=\"refresh()\" [placeholder]=\"prefs.label('\u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BC8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BC1\u0B95','Enter locality')\"/>\n</label>\n<button class=\"btn outline\" (click)=\"selectedDate='';area='';refresh()\">{{prefs.label('\u0B85\u0BB4\u0BBF\u0B95\u0BCD\u0B95','Reset')}}</button>\n</div>\n<datalist id=\"mv-areas\">\n<option *ngFor=\"let locality of areas\" [value]=\"locality\">\n</option>\n</datalist>\n<app-audio-player [src]=\"prefs.language()==='ta'?(store.settings().sectionAudio[section]?.ta||''):(store.settings().sectionAudio[section]?.en||'')\"/>\n<div class=\"section-title\">\n<h2>{{prefs.txt(title)}}</h2>\n<span class=\"muted\">{{filtered.length}} {{prefs.label('\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD','stories')}}</span>\n</div>\n<div class=\"card-grid\">\n<app-story-card *ngFor=\"let a of filtered\" [article]=\"a\"/>\n</div>\n<div *ngIf=\"loading\" class=\"empty-state glass\" role=\"status\">Loading published articles\u2026</div>\n<div *ngIf=\"error\" class=\"empty-state glass\" role=\"alert\">{{error}} <button type=\"button\" class=\"btn outline\" (click)=\"refresh()\">Retry</button></div>\n<div *ngIf=\"!loading && !error && !filtered.length\" class=\"empty-state glass\">\n<i class=\"fa-regular fa-calendar-xmark\">\n</i>\n<h3>{{prefs.label('\u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC7\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8','No news found for this date or area')}}</h3>\n<p>{{prefs.label('\u0BB5\u0BC7\u0BB1\u0BC1 \u0BA4\u0BC7\u0BA4\u0BBF\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.','Please choose another date or reset the filters.')}}</p>\n</div>\n<div class=\"load-more-row\" *ngIf=\"hasMore\"><button class=\"btn btn-red\" type=\"button\" (click)=\"loadMore()\" [disabled]=\"loading\">{{loading ? 'Loading\u2026' : prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD','Load more stories')}}</button></div>\n</div>\n", styles: ["/* crime-news: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.crime-news-page { min-width: 0; }\n.crime-news-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for crime-news; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .crime-news-page { width: 100%; }\n  .crime-news-page .page-intro { margin-bottom: 1rem; }\n}\n\n.load-more-row {display:flex;justify-content:center;margin:22px 0;}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.NewsApiService }, { type: i3.ContentService }, { type: i4.PreferencesService }, { type: i5.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrimeNewsComponent, { className: "CrimeNewsComponent", filePath: "src/app/pages/crime-news/crime-news.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=crime-news.component.js.map