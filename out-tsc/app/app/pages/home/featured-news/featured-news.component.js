import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StoryCardComponent } from '../../../shared/story-card/story-card.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
const _c0 = a0 => ["/news", a0];
function HomeFeaturedNewsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4);
    i0.ɵɵelement(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "span", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h1");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 8)(14, "a", 9);
    i0.ɵɵtext(15);
    i0.ɵɵelement(16, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 11)(18, "button", 12);
    i0.ɵɵlistener("click", function HomeFeaturedNewsComponent_section_1_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.move(-1)); });
    i0.ɵɵtext(19, " \u2039 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 13);
    i0.ɵɵlistener("click", function HomeFeaturedNewsComponent_section_1_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.move(1)); });
    i0.ɵɵtext(21, " \u203A ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const a_r3 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "linear-gradient(0deg,#050609 2%,transparent 90%),url(" + ctx_r1.media.url(a_r3.image) + ")");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "MADURAI HEADLINES"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", a_r3.area, " \u2022 ", i0.ɵɵpipeBind2(7, 9, a_r3.publishedAt, "dd MMM yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.txt(a_r3.title), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(12, 12, ctx_r1.prefs.txt(a_r3.body), 0, 130), "... ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(16, _c0, a_r3.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95", "Read story"), " ");
} }
function HomeFeaturedNewsComponent_aside_2_app_story_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 16);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("article", item_r4);
} }
function HomeFeaturedNewsComponent_aside_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 14);
    i0.ɵɵtemplate(1, HomeFeaturedNewsComponent_aside_2_app_story_card_1_Template, 1, 1, "app-story-card", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sideStories());
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeFeaturedNewsComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    index = signal(0, ...(ngDevMode ? [{ debugName: "index" }] : []));
    timer;
    featured = computed(() => this.store.published().filter(a => a.featured).slice(0, 5), ...(ngDevMode ? [{ debugName: "featured" }] : []));
    hero = computed(() => this.featured()[this.index() % this.featured().length] || this.store.published()[0], ...(ngDevMode ? [{ debugName: "hero" }] : []));
    sideStories = computed(() => this.store.published().filter(a => a.id !== this.hero()?.id).slice(0, 4), ...(ngDevMode ? [{ debugName: "sideStories" }] : []));
    ngOnInit() { this.timer = setInterval(() => this.move(1), 7500); }
    ngOnDestroy() { if (this.timer)
        clearInterval(this.timer); }
    move(n) { const len = this.featured().length; if (len)
        this.index.update(i => (i + n + len) % len); }
    static ɵfac = function HomeFeaturedNewsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeFeaturedNewsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeFeaturedNewsComponent, selectors: [["app-home-featured-news"]], decls: 3, vars: 4, consts: [[1, "home-hero-grid"], ["class", "lead-story glass", 3, "background-image", 4, "ngIf"], ["class", "right-stories", 4, "ngIf"], [1, "lead-story", "glass"], [1, "hero-tag"], [1, "red-dot"], [1, "hero-text"], [1, "eyebrow"], [1, "hero-actions"], [1, "btn", "btn-red", 3, "routerLink"], [1, "fa-solid", "fa-arrow-right"], [1, "carousel-control"], ["type", "button", "aria-label", "Previous story", 3, "click"], ["type", "button", "aria-label", "Next story", 3, "click"], [1, "right-stories"], [3, "article", 4, "ngFor", "ngForOf"], [3, "article"]], template: function HomeFeaturedNewsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, HomeFeaturedNewsComponent_section_1_Template, 22, 18, "section", 1)(2, HomeFeaturedNewsComponent_aside_2_Template, 2, 1, "aside", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("grid-template-columns", ctx.sideStories().length ? null : "minmax(0, 1fr)");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hero());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sideStories().length > 0);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, RouterLink, StoryCardComponent, i4.SlicePipe, i4.DatePipe], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.home[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-hero-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-two[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 2fr)\n    minmax(290px, 1fr);\n  align-items: stretch;\n  gap: 1rem;\n  min-height: 430px;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-hero-grid[_ngcontent-%COMP%]:not(:has(> .right-stories)) {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.lead-story[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  min-height: 430px;\n  display: flex;\n  align-items: flex-end;\n  padding: 1.65rem;\n  overflow: hidden;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-color: #dd3347;\n  border-radius: 20px;\n}\n\n.hero-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  max-width: calc(100% - 2rem);\n  background: #9c001c;\n  padding: 0.45rem 0.8rem;\n  border-radius: 9px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n\n.red-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  flex-shrink: 0;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 10px red;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 750px;\n  min-width: 0;\n  text-shadow: 0 3px 12px #000b;\n}\n\n.hero-text[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 2.4vw, 2.15rem);\n  line-height: 1.4;\n  margin: 0.65rem 0;\n  overflow-wrap: anywhere;\n}\n\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #e5e5ea;\n  line-height: 1.75;\n  margin-bottom: 1rem;\n  overflow-wrap: anywhere;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: center;\n}\n\n.carousel-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.carousel-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #0008;\n  color: #fff;\n  border: 1px solid #ffffff66;\n  border-radius: 8px;\n  padding: 0.4rem 0.9rem;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    transform 0.2s;\n}\n\n.carousel-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #c41331;\n  border-color: #ff526e;\n  transform: translateY(-2px);\n}\n\n.right-stories[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-content: start;\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.right-stories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n}\n\n.home-hero-grid[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1.75fr) minmax(300px,.95fr);min-height:360px;gap:.85rem}\n\n.lead-story[_ngcontent-%COMP%]{min-height:410px;border:1px solid #70b9ee72;border-radius:12px;padding:1.45rem}\n\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.25rem,2vw,2.15rem);text-wrap:balance}\n\n.hero-tag[_ngcontent-%COMP%]{background:#ed1234;border-radius:7px}\n\n.hero-text[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{color:#f0f8ff}\n\n.hero-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n\n.right-stories[_ngcontent-%COMP%]{gap:.7rem}\n\n.right-stories[_ngcontent-%COMP%]   .story-card[_ngcontent-%COMP%]{border-radius:9px}", "\n\n@media (max-width: 1180px) {\n.home-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns:\n      minmax(0, 1.6fr)\n      minmax(270px, 1fr);\n  }\n}\n\n@media (max-width: 850px) {\n.home-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    min-height: 0;\n  }\n.lead-story[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n.right-stories[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(3, minmax(0, 1fr));\n    gap: 0.7rem;\n  }\n}\n\n@media (max-width: 600px) {\n.home-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n.lead-story[_ngcontent-%COMP%] {\n    min-height: 365px;\n    padding: 1rem;\n    background-position: center;\n    border-radius: 15px;\n  }\n.hero-tag[_ngcontent-%COMP%] {\n    top: 0.65rem;\n    left: 0.65rem;\n    max-width: calc(100% - 1.3rem);\n    font-size: 0.57rem;\n    padding: 0.4rem 0.6rem;\n  }\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n    line-height: 1.45;\n  }\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    line-height: 1.6;\n  }\n.hero-text[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n    font-size: 0.66rem;\n  }\n.hero-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    gap: 0.6rem;\n  }\n.hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n    padding: 0.7rem;\n  }\n.carousel-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.7rem;\n    font-size: 1.2rem;\n  }\n.right-stories[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n.right-stories[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 380px) {\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n.hero-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n.lead-story[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n}\n\n@media(max-width:900px){\n.home-hero-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}\n.lead-story[_ngcontent-%COMP%]{min-height:380px}\n}\n\n@media(max-width:650px){\n.home-hero-grid[_ngcontent-%COMP%]{gap:.65rem}\n.lead-story[_ngcontent-%COMP%]{min-height:355px;padding:1rem;border-radius:11px}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.25rem}\n.right-stories[_ngcontent-%COMP%]   .story-card[_ngcontent-%COMP%]{min-height:95px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeFeaturedNewsComponent, [{
        type: Component,
        args: [{ selector: 'app-home-featured-news', standalone: true, imports: [CommonModule, RouterLink, StoryCardComponent], template: "<!-- ==========================================\n       FEATURED NEWS\n       ========================================== -->\n\n  <div\n    class=\"home-hero-grid\"\n    [style.grid-template-columns]=\"sideStories().length ? null : 'minmax(0, 1fr)'\"\n  >\n\n    <section\n      class=\"lead-story glass\"\n      *ngIf=\"hero() as a\"\n      [style.background-image]=\"'linear-gradient(0deg,#050609 2%,transparent 90%),url('+media.url(a.image)+')'\"\n    >\n\n      <div class=\"hero-tag\">\n        <span class=\"red-dot\"></span>\n        {{ prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD', 'MADURAI HEADLINES') }}\n      </div>\n\n      <div class=\"hero-text\">\n\n        <span class=\"eyebrow\">\n          {{ a.area }} \u2022 {{ a.publishedAt | date:'dd MMM yyyy' }}\n        </span>\n\n        <h1>\n          {{ prefs.txt(a.title) }}\n        </h1>\n\n        <p>\n          {{ prefs.txt(a.body) | slice:0:130 }}...\n        </p>\n\n        <div class=\"hero-actions\">\n\n          <a\n            class=\"btn btn-red\"\n            [routerLink]=\"['/news', a.slug]\"\n          >\n            {{ prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0BAA\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95', 'Read story') }}\n            <i class=\"fa-solid fa-arrow-right\"></i>\n          </a>\n\n          <div class=\"carousel-control\">\n\n            <button\n              type=\"button\"\n              (click)=\"move(-1)\"\n              aria-label=\"Previous story\"\n            >\n              \u2039\n            </button>\n\n            <button\n              type=\"button\"\n              (click)=\"move(1)\"\n              aria-label=\"Next story\"\n            >\n              \u203A\n            </button>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </section>\n\n    <!-- SIDE NEWS CARDS -->\n\n    <aside\n      class=\"right-stories\"\n      *ngIf=\"sideStories().length > 0\"\n    >\n\n      <app-story-card\n        *ngFor=\"let item of sideStories()\"\n        [article]=\"item\"\n      />\n\n    </aside>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.home,\n.home > *,\n.home-hero-grid > *,\n.home-categories > *,\n.home-mid > *,\n.home-two > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-hero-grid {\n  display: grid;\n  grid-template-columns:\n    minmax(0, 2fr)\n    minmax(290px, 1fr);\n  align-items: stretch;\n  gap: 1rem;\n  min-height: 430px;\n  width: 100%;\n  min-width: 0;\n}\n\n.home-hero-grid:not(:has(> .right-stories)) {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.lead-story {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  min-height: 430px;\n  display: flex;\n  align-items: flex-end;\n  padding: 1.65rem;\n  overflow: hidden;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-color: #dd3347;\n  border-radius: 20px;\n}\n\n.hero-tag {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  max-width: calc(100% - 2rem);\n  background: #9c001c;\n  padding: 0.45rem 0.8rem;\n  border-radius: 9px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n\n.red-dot {\n  width: 8px;\n  height: 8px;\n  flex-shrink: 0;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 10px red;\n}\n\n.hero-text {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 750px;\n  min-width: 0;\n  text-shadow: 0 3px 12px #000b;\n}\n\n.hero-text .eyebrow {\n  display: block;\n  font-size: 0.75rem;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n\n.hero-text h1 {\n  font-size: clamp(1.5rem, 2.4vw, 2.15rem);\n  line-height: 1.4;\n  margin: 0.65rem 0;\n  overflow-wrap: anywhere;\n}\n\n.hero-text p {\n  font-size: 0.82rem;\n  color: #e5e5ea;\n  line-height: 1.75;\n  margin-bottom: 1rem;\n  overflow-wrap: anywhere;\n}\n\n.hero-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.hero-actions .btn {\n  max-width: 100%;\n  text-align: center;\n}\n\n.carousel-control {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.carousel-control button {\n  background: #0008;\n  color: #fff;\n  border: 1px solid #ffffff66;\n  border-radius: 8px;\n  padding: 0.4rem 0.9rem;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    transform 0.2s;\n}\n\n.carousel-control button:hover {\n  background: #c41331;\n  border-color: #ff526e;\n  transform: translateY(-2px);\n}\n\n.right-stories {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-content: start;\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.right-stories > * {\n  min-width: 0;\n  width: 100%;\n}\n\n.home-hero-grid{grid-template-columns:minmax(0,1.75fr) minmax(300px,.95fr);min-height:360px;gap:.85rem}\n\n.lead-story{min-height:410px;border:1px solid #70b9ee72;border-radius:12px;padding:1.45rem}\n\n.hero-text h1{font-size:clamp(1.25rem,2vw,2.15rem);text-wrap:balance}\n\n.hero-tag{background:#ed1234;border-radius:7px}\n\n.hero-text .eyebrow{color:#f0f8ff}\n\n.hero-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}\n\n.right-stories{gap:.7rem}\n\n.right-stories .story-card{border-radius:9px}\n", "/* Responsive overrides specific to featured-news */\n@media (max-width: 1180px) {\n.home-hero-grid {\n    grid-template-columns:\n      minmax(0, 1.6fr)\n      minmax(270px, 1fr);\n  }\n}\n\n@media (max-width: 850px) {\n.home-hero-grid {\n    grid-template-columns: minmax(0, 1fr);\n    min-height: 0;\n  }\n.lead-story {\n    min-height: 400px;\n  }\n.right-stories {\n    grid-template-columns:\n      repeat(3, minmax(0, 1fr));\n    gap: 0.7rem;\n  }\n}\n\n@media (max-width: 600px) {\n.home-hero-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.7rem;\n  }\n.lead-story {\n    min-height: 365px;\n    padding: 1rem;\n    background-position: center;\n    border-radius: 15px;\n  }\n.hero-tag {\n    top: 0.65rem;\n    left: 0.65rem;\n    max-width: calc(100% - 1.3rem);\n    font-size: 0.57rem;\n    padding: 0.4rem 0.6rem;\n  }\n.hero-text h1 {\n    font-size: 1.35rem;\n    line-height: 1.45;\n  }\n.hero-text p {\n    font-size: 0.72rem;\n    line-height: 1.6;\n  }\n.hero-text .eyebrow {\n    font-size: 0.66rem;\n  }\n.hero-actions {\n    justify-content: flex-start;\n    gap: 0.6rem;\n  }\n.hero-actions .btn {\n    font-size: 0.74rem;\n    padding: 0.7rem;\n  }\n.carousel-control button {\n    padding: 0.35rem 0.7rem;\n    font-size: 1.2rem;\n  }\n.right-stories {\n    grid-template-columns: minmax(0, 1fr);\n  }\n.right-stories .card-actions {\n    display: none;\n  }\n}\n\n@media (max-width: 380px) {\n.hero-text h1 {\n    font-size: 1.2rem;\n  }\n.hero-actions {\n    align-items: flex-start;\n  }\n.lead-story {\n    min-height: 340px;\n  }\n}\n\n@media(max-width:900px){\n.home-hero-grid{grid-template-columns:1fr}\n.lead-story{min-height:380px}\n}\n\n@media(max-width:650px){\n.home-hero-grid{gap:.65rem}\n.lead-story{min-height:355px;padding:1rem;border-radius:11px}\n.hero-text h1{font-size:1.25rem}\n.right-stories .story-card{min-height:95px}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeFeaturedNewsComponent, { className: "HomeFeaturedNewsComponent", filePath: "src/app/pages/home/featured-news/featured-news.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=featured-news.component.js.map