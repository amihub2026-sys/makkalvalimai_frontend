import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/news-api.service";
import * as i3 from "../../services/content.service";
import * as i4 from "../../services/preferences.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function SearchComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("Searched ", ctx_r0.searchedCount, " published articles", ctx_r0.hasMore ? " so far" : "", ". The current backend does not provide server-side full-text search.");
} }
function SearchComponent_app_story_card_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 16);
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r2);
} }
function SearchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8", "No matching published news articles"));
} }
function SearchComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1, "Searching published news\u2026");
    i0.ɵɵelementEnd();
} }
function SearchComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 20);
    i0.ɵɵlistener("click", function SearchComponent_div_22_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadMore()); });
    i0.ɵɵtext(3, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.error, " ");
} }
function SearchComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "button", 22);
    i0.ɵɵlistener("click", function SearchComponent_div_23_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadMore()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.loading ? "Loading\u2026" : "Search older published articles");
} }
/** Frontend progressive search: the unchanged backend has no full-text search API. */
export class SearchComponent {
    route;
    router;
    api;
    store;
    prefs;
    q = '';
    query = '';
    fetched = [];
    results = [];
    loading = false;
    error = '';
    hasMore = false;
    searchedCount = 0;
    page = 0;
    generation = 0;
    sub;
    constructor(route, router, api, store, prefs) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.store = store;
        this.prefs = prefs;
    }
    ngOnInit() {
        this.sub = this.route.queryParamMap.subscribe(params => {
            this.generation++;
            this.loading = false;
            this.q = params.get('q') || '';
            this.query = this.q.trim().toLocaleLowerCase();
            this.fetched = [];
            this.results = [];
            this.page = 0;
            this.hasMore = Boolean(this.query);
            if (this.query)
                void this.loadMore();
        });
    }
    async loadMore() {
        if (this.loading || !this.query || !this.hasMore)
            return;
        const request = ++this.generation;
        this.loading = true;
        this.error = '';
        try {
            const next = await this.api.articlesPage(this.page + 1, 100);
            if (request !== this.generation)
                return;
            if (!Array.isArray(next))
                throw new Error('Invalid news search response');
            this.fetched = [...this.fetched, ...next.filter(item => !this.fetched.some(old => old.id === item.id))];
            this.searchedCount = this.fetched.length;
            this.results = this.fetched.filter(article => [article.title?.ta, article.title?.en, article.body?.ta, article.body?.en, article.area]
                .some(value => (value || '').toLocaleLowerCase().includes(this.query)));
            this.page++;
            this.hasMore = next.length === 100;
        }
        catch {
            if (request === this.generation)
                this.error = 'Unable to search the news server. Please try again.';
        }
        finally {
            if (request === this.generation)
                this.loading = false;
        }
    }
    search() { void this.router.navigate(['/search'], { queryParams: { q: this.q.trim() } }); }
    ngOnDestroy() { this.generation++; this.sub?.unsubscribe(); }
    static ɵfac = function SearchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.NewsApiService), i0.ɵɵdirectiveInject(i3.ContentService), i0.ɵɵdirectiveInject(i4.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchComponent, selectors: [["app-search"]], decls: 24, vars: 11, consts: [[1, "container", "page-section", "search-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-magnifying-glass", "giant-icon"], [1, "filter-panel", "glass", 3, "ngSubmit"], ["name", "query", "placeholder", "Road, Madurai, \u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-red"], [1, "section-title"], ["class", "muted", 4, "ngIf"], [1, "card-grid"], [3, "article", 4, "ngFor", "ngForOf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "empty-state glass", "role", "status", 4, "ngIf"], ["class", "empty-state glass", "role", "alert", 4, "ngIf"], ["class", "load-more-row", 4, "ngIf"], [1, "muted"], [3, "article"], [1, "empty-state", "glass"], ["role", "status", 1, "empty-state", "glass"], ["role", "alert", 1, "empty-state", "glass"], ["type", "button", 1, "btn", "outline", 3, "click"], [1, "load-more-row"], ["type", "button", 1, "btn", "btn-red", 3, "click", "disabled"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "MADURAI DISTRICT NEWS SEARCH");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(7, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "form", 4);
            i0.ɵɵlistener("ngSubmit", function SearchComponent_Template_form_ngSubmit_8_listener() { return ctx.search(); });
            i0.ɵɵelementStart(9, "label");
            i0.ɵɵtext(10);
            i0.ɵɵelementStart(11, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function SearchComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.q, $event) || (ctx.q = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "button", 6);
            i0.ɵɵtext(13, "Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 7)(15, "h2");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, SearchComponent_small_17_Template, 2, 2, "small", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 9);
            i0.ɵɵtemplate(19, SearchComponent_app_story_card_19_Template, 1, 1, "app-story-card", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, SearchComponent_div_20_Template, 2, 1, "div", 11)(21, SearchComponent_div_21_Template, 2, 0, "div", 12)(22, SearchComponent_div_22_Template, 4, 1, "div", 13)(23, SearchComponent_div_23_Template, 3, 2, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Search Makkal Valimai"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BA4\u0BC7\u0B9F\u0BC1\u0BAE\u0BCD \u0B9A\u0BCA\u0BB2\u0BCD", "Search words"));
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.q);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.results.length, " ", ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Stories"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.query);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.results);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.results.length && !ctx.loading && !ctx.hasMore && ctx.query);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hasMore && !ctx.error);
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, FormsModule, i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.NgModel, i6.NgForm, StoryCardComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.search-page[_ngcontent-%COMP%] { min-width: 0; }\n.search-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .search-page[_ngcontent-%COMP%] { width: 100%; }\n  .search-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}\n\n.load-more-row[_ngcontent-%COMP%] {display:flex;justify-content:center;margin:22px 0;}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchComponent, [{
        type: Component,
        args: [{ selector: 'app-search', standalone: true, imports: [CommonModule, FormsModule, StoryCardComponent], template: "<div class=\"container page-section search-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">MADURAI DISTRICT NEWS SEARCH</span>\n<h1>{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD','Search Makkal Valimai')}}</h1>\n</div>\n<i class=\"fa-solid fa-magnifying-glass giant-icon\">\n</i>\n</div>\n<form class=\"filter-panel glass\" (ngSubmit)=\"search()\">\n<label>{{prefs.label('\u0BA4\u0BC7\u0B9F\u0BC1\u0BAE\u0BCD \u0B9A\u0BCA\u0BB2\u0BCD','Search words')}}<input [(ngModel)]=\"q\" name=\"query\" placeholder=\"Road, Madurai, \u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD...\"/>\n</label>\n<button type=\"submit\" class=\"btn btn-red\">Search</button>\n</form>\n<div class=\"section-title\">\n<h2>{{results.length}} {{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD','Stories')}}</h2>\n<small class=\"muted\" *ngIf=\"query\">Searched {{searchedCount}} published articles{{hasMore ? ' so far' : ''}}. The current backend does not provide server-side full-text search.</small>\n</div>\n<div class=\"card-grid\">\n<app-story-card *ngFor=\"let a of results\" [article]=\"a\"/>\n</div>\n<div class=\"empty-state glass\" *ngIf=\"!results.length && !loading && !hasMore && query\">{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8','No matching published news articles')}}</div>\n<div class=\"empty-state glass\" role=\"status\" *ngIf=\"loading\">Searching published news\u2026</div>\n<div class=\"empty-state glass\" role=\"alert\" *ngIf=\"error\">{{error}} <button type=\"button\" class=\"btn outline\" (click)=\"loadMore()\">Retry</button></div>\n<div class=\"load-more-row\" *ngIf=\"hasMore && !error\"><button type=\"button\" class=\"btn btn-red\" (click)=\"loadMore()\" [disabled]=\"loading\">{{loading ? 'Loading\u2026' : 'Search older published articles'}}</button></div>\n</div>\n", styles: ["/* search: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.search-page { min-width: 0; }\n.search-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for search; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .search-page { width: 100%; }\n  .search-page .page-intro { margin-bottom: 1rem; }\n}\n\n.load-more-row {display:flex;justify-content:center;margin:22px 0;}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.NewsApiService }, { type: i3.ContentService }, { type: i4.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src/app/pages/search/search.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=search.component.js.map