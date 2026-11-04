import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTopAdComponent } from './top-ad/top-ad.component';
import { HomeFeaturedNewsComponent } from './featured-news/featured-news.component';
import { HomeSidebarAdComponent } from './sidebar-ad/sidebar-ad.component';
import { HomeQuickAccessComponent } from './quick-access/quick-access.component';
import { HomeAlertsAudioComponent } from './alerts-audio/alerts-audio.component';
import { HomeIssuesPollsComponent } from './issues-polls/issues-polls.component';
import { HomeCategoryNewsComponent } from './category-news/category-news.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "@angular/common";
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, "Loading the latest news from Makkal Valimai\u2026");
    i0.ɵɵelementEnd();
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.store.loadError(), " Please check the API connection and refresh.");
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, "No published news is available yet. Please check back soon.");
    i0.ɵɵelementEnd();
} }
export class HomeComponent {
    store;
    constructor(store) {
        this.store = store;
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(i0.ɵɵdirectiveInject(i1.ContentService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 3, consts: [[1, "container", "home"], ["class", "home-status", "role", "status", 4, "ngIf"], ["class", "home-status error", "role", "alert", 4, "ngIf"], ["class", "home-status", 4, "ngIf"], ["role", "status", 1, "home-status"], ["role", "alert", 1, "home-status", "error"], [1, "home-status"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, HomeComponent_div_1_Template, 2, 0, "div", 1)(2, HomeComponent_div_2_Template, 2, 1, "div", 2)(3, HomeComponent_div_3_Template, 2, 0, "div", 3);
            i0.ɵɵelement(4, "app-home-top-ad")(5, "app-home-featured-news")(6, "app-home-sidebar-ad")(7, "app-home-quick-access")(8, "app-home-alerts-audio")(9, "app-home-issues-polls")(10, "app-home-category-news");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.store.loading());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.store.loadError());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.store.loading() && !ctx.store.loadError() && !ctx.store.published().length);
        } }, dependencies: [CommonModule, i2.NgIf, HomeTopAdComponent, HomeFeaturedNewsComponent, HomeSidebarAdComponent, HomeQuickAccessComponent, HomeAlertsAudioComponent, HomeIssuesPollsComponent, HomeCategoryNewsComponent], styles: ["\n\n[_nghost-%COMP%] { display:block; min-width:0 }\n.home[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr);gap:1rem;width:min(1390px,calc(100% - 28px));margin-inline:auto;min-width:0}\n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {display:block;min-width:0}\n\n.home-status[_ngcontent-%COMP%]{padding:15px 19px;background:#0b5189;border:1px solid #75b6e580;border-radius:11px;color:#e5f5ff;font-weight:600;font-size:.82rem}\n.home-status.error[_ngcontent-%COMP%]{border-color:#e14c63;color:#ffb8c0}", "@media(max-width:650px){.home[_ngcontent-%COMP%]{width:calc(100% - 18px);gap:.75rem}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [CommonModule, HomeTopAdComponent, HomeFeaturedNewsComponent, HomeSidebarAdComponent, HomeQuickAccessComponent, HomeAlertsAudioComponent, HomeIssuesPollsComponent, HomeCategoryNewsComponent], template: "<div class=\"container home\">\n  <div class=\"home-status\" *ngIf=\"store.loading()\" role=\"status\">Loading the latest news from Makkal Valimai\u2026</div>\n  <div class=\"home-status error\" *ngIf=\"store.loadError()\" role=\"alert\">{{store.loadError()}} Please check the API connection and refresh.</div>\n  <div class=\"home-status\" *ngIf=\"!store.loading() && !store.loadError() && !store.published().length\">No published news is available yet. Please check back soon.</div>\n  <app-home-top-ad />\n  <app-home-featured-news />\n  <app-home-sidebar-ad />\n  <app-home-quick-access />\n  <app-home-alerts-audio />\n  <app-home-issues-polls />\n  <app-home-category-news />\n</div>\n", styles: ["/* Home page composition only. Individual sections are self-contained. */\n:host { display:block; min-width:0 }\n.home{display:grid;grid-template-columns:minmax(0,1fr);gap:1rem;width:min(1390px,calc(100% - 28px));margin-inline:auto;min-width:0}\n.home > * {display:block;min-width:0}\n\n.home-status{padding:15px 19px;background:#0b5189;border:1px solid #75b6e580;border-radius:11px;color:#e5f5ff;font-weight:600;font-size:.82rem}\n.home-status.error{border-color:#e14c63;color:#ffb8c0}\n", "@media(max-width:650px){.home{width:calc(100% - 18px);gap:.75rem}}\n"] }]
    }], () => [{ type: i1.ContentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=home.component.js.map