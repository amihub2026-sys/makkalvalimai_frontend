import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StoryCardComponent } from '../../../shared/story-card/story-card.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
function HomeCategoryNewsComponent_app_story_card_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 11);
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r1);
} }
function HomeCategoryNewsComponent_app_story_card_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 11);
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r2);
} }
function HomeCategoryNewsComponent_app_story_card_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 11);
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r3);
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeCategoryNewsComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    madurai = computed(() => this.store.published().filter(a => a.kind === 'madurai').slice(0, 4), ...(ngDevMode ? [{ debugName: "madurai" }] : []));
    crime = computed(() => this.store.published().filter(a => a.kind === 'crime').slice(0, 3), ...(ngDevMode ? [{ debugName: "crime" }] : []));
    achievements = computed(() => this.store.published().filter(a => a.kind === 'achievement').slice(0, 3), ...(ngDevMode ? [{ debugName: "achievements" }] : []));
    static ɵfac = function HomeCategoryNewsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeCategoryNewsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeCategoryNewsComponent, selectors: [["app-home-category-news"]], decls: 28, vars: 9, consts: [[1, "home-section"], [1, "section-title"], [1, "fa-solid", "fa-newspaper"], ["routerLink", "/madurai-news"], [1, "card-grid"], [3, "article", 4, "ngFor", "ngForOf"], [1, "home-two"], [1, "fa-solid", "fa-shield-halved"], ["routerLink", "/crime-news"], [1, "fa-solid", "fa-award"], ["routerLink", "/achievements"], [3, "article"]], template: function HomeCategoryNewsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵelement(3, "i", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵtemplate(8, HomeCategoryNewsComponent_app_story_card_8_Template, 1, 1, "app-story-card", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "section", 0)(11, "div", 1)(12, "h2");
            i0.ɵɵelement(13, "i", 7);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 8);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 4);
            i0.ɵɵtemplate(18, HomeCategoryNewsComponent_app_story_card_18_Template, 1, 1, "app-story-card", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "section", 0)(20, "div", 1)(21, "h2");
            i0.ɵɵelement(22, "i", 9);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "a", 10);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 4);
            i0.ɵɵtemplate(27, HomeCategoryNewsComponent_app_story_card_27_Template, 1, 1, "app-story-card", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Madurai News"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192 ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.madurai());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B95\u0BC1\u0BB1\u0BCD\u0BB1\u0B9A\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Crime News"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192 ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.crime());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD", "Madurai Achievements"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192 ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.achievements());
        } }, dependencies: [CommonModule, i4.NgForOf, RouterLink, StoryCardComponent], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.home[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-hero-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-two[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-section[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n.home-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n\n.home-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.home-section[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n\n.home-two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-two[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.home-two[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.home-mid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%], .home-polls[_ngcontent-%COMP%], .home-section[_ngcontent-%COMP%]{min-width:0}\n\n.home-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin-top:.2rem}", "\n\n@media (max-width: 1180px) {\n.home-two[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 850px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n.home-two[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n.home-two[_ngcontent-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeCategoryNewsComponent, [{
        type: Component,
        args: [{ selector: 'app-home-category-news', standalone: true, imports: [CommonModule, RouterLink, StoryCardComponent], template: "<!-- ==========================================\n       MADURAI NEWS\n       ========================================== -->\n\n  <section class=\"home-section\">\n\n    <div class=\"section-title\">\n\n      <h2>\n        <i class=\"fa-solid fa-newspaper\"></i>\n        {{ prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD', 'Madurai News') }}\n      </h2>\n\n      <a routerLink=\"/madurai-news\">\n        {{ prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD', 'View all') }} \u2192\n      </a>\n\n    </div>\n\n    <div class=\"card-grid\">\n\n      <app-story-card\n        *ngFor=\"let a of madurai()\"\n        [article]=\"a\"\n      />\n\n    </div>\n\n  </section>\n\n<!-- ==========================================\n       CRIME NEWS AND ACHIEVEMENTS\n       ========================================== -->\n\n  <div class=\"home-two\">\n\n    <!-- CRIME NEWS -->\n\n    <section class=\"home-section\">\n\n      <div class=\"section-title\">\n\n        <h2>\n          <i class=\"fa-solid fa-shield-halved\"></i>\n          {{ prefs.label('\u0B95\u0BC1\u0BB1\u0BCD\u0BB1\u0B9A\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD', 'Crime News') }}\n        </h2>\n\n        <a routerLink=\"/crime-news\">\n          {{ prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD', 'View all') }} \u2192\n        </a>\n\n      </div>\n\n      <div class=\"card-grid\">\n\n        <app-story-card\n          *ngFor=\"let a of crime()\"\n          [article]=\"a\"\n        />\n\n      </div>\n\n    </section>\n\n    <!-- ACHIEVEMENTS -->\n\n    <section class=\"home-section\">\n\n      <div class=\"section-title\">\n\n        <h2>\n          <i class=\"fa-solid fa-award\"></i>\n          {{\n            prefs.label(\n              '\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD',\n              'Madurai Achievements'\n            )\n          }}\n        </h2>\n\n        <a routerLink=\"/achievements\">\n          {{ prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD', 'View all') }} \u2192\n        </a>\n\n      </div>\n\n      <div class=\"card-grid\">\n\n        <app-story-card\n          *ngFor=\"let a of achievements()\"\n          [article]=\"a\"\n        />\n\n      </div>\n\n    </section>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.home,\n.home > *,\n.home-hero-grid > *,\n.home-categories > *,\n.home-mid > *,\n.home-two > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-section {\n  width: 100%;\n  min-width: 0;\n}\n\n.home-section .section-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n\n.home-section .section-title h2 {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.home-section .card-grid {\n  min-width: 0;\n  width: 100%;\n}\n\n.home-two {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-two .card-grid {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.home-two .card-grid > * {\n  min-width: 0;\n}\n\n.home-mid .panel,.home-polls,.home-section{min-width:0}\n\n.home-section .section-title{margin-top:.2rem}\n", "/* Responsive overrides specific to category-news */\n@media (max-width: 1180px) {\n.home-two .card-grid {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 850px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n  }\n.home-two .card-grid {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n.home-two .card-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeCategoryNewsComponent, { className: "HomeCategoryNewsComponent", filePath: "src/app/pages/home/category-news/category-news.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=category-news.component.js.map