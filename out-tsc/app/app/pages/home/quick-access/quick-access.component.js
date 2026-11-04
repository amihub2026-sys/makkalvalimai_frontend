import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeQuickAccessComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    static ɵfac = function HomeQuickAccessComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeQuickAccessComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeQuickAccessComponent, selectors: [["app-home-quick-access"]], decls: 31, vars: 13, consts: [[1, "home-categories"], ["routerLink", "/public-issues", 1, "category-spot", "glass"], [1, "fa-solid", "fa-road"], ["routerLink", "/report-problem", 1, "category-spot", "glass"], [1, "fa-solid", "fa-bullhorn"], ["routerLink", "/problems-solved", 1, "category-spot", "glass"], [1, "fa-solid", "fa-circle-check"], ["routerLink", "/public-alerts", 1, "category-spot", "glass"], [1, "fa-solid", "fa-bell"], ["routerLink", "/achievements", 1, "category-spot", "glass"], [1, "fa-solid", "fa-award"]], template: function HomeQuickAccessComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementStart(3, "b");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 3);
            i0.ɵɵelement(8, "i", 4);
            i0.ɵɵelementStart(9, "b");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "a", 5);
            i0.ɵɵelement(14, "i", 6);
            i0.ɵɵelementStart(15, "b");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "a", 7);
            i0.ɵɵelement(20, "i", 8);
            i0.ɵɵelementStart(21, "b");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "a", 9);
            i0.ɵɵelement(26, "i", 10);
            i0.ɵɵelementStart(27, "b");
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD", "Public Issues"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.store.approvedIssues().length, " ", ctx.prefs.label("\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD", "reports"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95", "Report a Problem"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC1\u0B9F\u0BA9\u0BCD", "With photo"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1 \u0B95\u0BA3\u0BCD\u0B9F\u0BB5\u0BC8", "Problems Solved"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.store.solvedIssues().length, " ", ctx.prefs.label("\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD", "cases"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Public Alerts"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.store.alerts().length, " ", ctx.prefs.label("\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "notices"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD", "Achievements"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD", "Madurai people"), " ");
        } }, dependencies: [CommonModule, RouterLink], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.home[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-hero-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-two[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-categories[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(5, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.category-spot[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.55rem;\n  padding: 1rem;\n  background-size: cover;\n  background-position: center;\n  border-bottom: 3px solid #c41331;\n  transition:\n    transform 0.2s,\n    border-color 0.2s,\n    background 0.2s;\n}\n\n.category-spot[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  color: white;\n  border-bottom-color: #ff526e;\n}\n\n.category-spot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  color: #ff526e;\n}\n\n.category-spot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  line-height: 1.55;\n  overflow-wrap: anywhere;\n}\n\n.category-spot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  line-height: 1.5;\n  color: #ccd2d9;\n  overflow-wrap: anywhere;\n}\n\n.home-categories[_ngcontent-%COMP%]{gap:.7rem}\n\n.category-spot[_ngcontent-%COMP%]{border-radius:12px}", "\n\n@media (max-width: 1180px) {\n.home-categories[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 600px) {\n.home-categories[_ngcontent-%COMP%] {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n    gap: 0.55rem;\n  }\n.category-spot[_ngcontent-%COMP%] {\n    min-height: 108px;\n    padding: 0.85rem;\n  }\n.category-spot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n.category-spot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 0.77rem;\n    line-height: 1.45;\n  }\n.category-spot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.63rem;\n  }\n.home-categories[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child:nth-child(odd) {\n    grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 380px) {\n.category-spot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n}\n\n@media(max-width:650px){\n.home-categories[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}\n.home-categories[_ngcontent-%COMP%]   .category-spot[_ngcontent-%COMP%]{min-height:96px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeQuickAccessComponent, [{
        type: Component,
        args: [{ selector: 'app-home-quick-access', standalone: true, imports: [CommonModule, RouterLink], template: "<!-- ==========================================\n       HOME QUICK ACCESS CATEGORIES\n       ========================================== -->\n\n  <div class=\"home-categories\">\n\n    <a\n      routerLink=\"/public-issues\"\n      class=\"category-spot glass\"\n    >\n      <i class=\"fa-solid fa-road\"></i>\n\n      <b>\n        {{ prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD', 'Public Issues') }}\n      </b>\n\n      <span>\n        {{ store.approvedIssues().length }}\n        {{ prefs.label('\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD', 'reports') }}\n      </span>\n    </a>\n\n    <a\n      routerLink=\"/report-problem\"\n      class=\"category-spot glass\"\n    >\n      <i class=\"fa-solid fa-bullhorn\"></i>\n\n      <b>\n        {{ prefs.label('\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95', 'Report a Problem') }}\n      </b>\n\n      <span>\n        {{ prefs.label('\u0BAA\u0BC1\u0B95\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC1\u0B9F\u0BA9\u0BCD', 'With photo') }}\n      </span>\n    </a>\n\n    <a\n      routerLink=\"/problems-solved\"\n      class=\"category-spot glass\"\n    >\n      <i class=\"fa-solid fa-circle-check\"></i>\n\n      <b>\n        {{ prefs.label('\u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1 \u0B95\u0BA3\u0BCD\u0B9F\u0BB5\u0BC8', 'Problems Solved') }}\n      </b>\n\n      <span>\n        {{ store.solvedIssues().length }}\n        {{ prefs.label('\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD', 'cases') }}\n      </span>\n    </a>\n\n    <a\n      routerLink=\"/public-alerts\"\n      class=\"category-spot glass\"\n    >\n      <i class=\"fa-solid fa-bell\"></i>\n\n      <b>\n        {{ prefs.label('\u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD', 'Public Alerts') }}\n      </b>\n\n      <span>\n        {{ store.alerts().length }}\n        {{ prefs.label('\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD', 'notices') }}\n      </span>\n    </a>\n\n    <a\n      routerLink=\"/achievements\"\n      class=\"category-spot glass\"\n    >\n      <i class=\"fa-solid fa-award\"></i>\n\n      <b>\n        {{ prefs.label('\u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD', 'Achievements') }}\n      </b>\n\n      <span>\n        {{ prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD', 'Madurai people') }}\n      </span>\n    </a>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.home,\n.home > *,\n.home-hero-grid > *,\n.home-categories > *,\n.home-mid > *,\n.home-two > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-categories {\n  display: grid;\n  grid-template-columns:\n    repeat(5, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n}\n\n.category-spot {\n  min-width: 0;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 0.55rem;\n  padding: 1rem;\n  background-size: cover;\n  background-position: center;\n  border-bottom: 3px solid #c41331;\n  transition:\n    transform 0.2s,\n    border-color 0.2s,\n    background 0.2s;\n}\n\n.category-spot:hover {\n  transform: translateY(-4px);\n  color: white;\n  border-bottom-color: #ff526e;\n}\n\n.category-spot i {\n  font-size: 1.45rem;\n  color: #ff526e;\n}\n\n.category-spot b {\n  font-size: 0.88rem;\n  line-height: 1.55;\n  overflow-wrap: anywhere;\n}\n\n.category-spot span {\n  font-size: 0.7rem;\n  line-height: 1.5;\n  color: #ccd2d9;\n  overflow-wrap: anywhere;\n}\n\n.home-categories{gap:.7rem}\n\n.category-spot{border-radius:12px}\n", "/* Responsive overrides specific to quick-access */\n@media (max-width: 1180px) {\n.home-categories {\n    grid-template-columns:\n      repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 600px) {\n.home-categories {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n    gap: 0.55rem;\n  }\n.category-spot {\n    min-height: 108px;\n    padding: 0.85rem;\n  }\n.category-spot i {\n    font-size: 1.2rem;\n  }\n.category-spot b {\n    font-size: 0.77rem;\n    line-height: 1.45;\n  }\n.category-spot span {\n    font-size: 0.63rem;\n  }\n.home-categories > :last-child:nth-child(odd) {\n    grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 380px) {\n.category-spot b {\n    font-size: 0.72rem;\n  }\n}\n\n@media(max-width:650px){\n.home-categories{grid-template-columns:repeat(2,minmax(0,1fr))}\n.home-categories .category-spot{min-height:96px}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeQuickAccessComponent, { className: "HomeQuickAccessComponent", filePath: "src/app/pages/home/quick-access/quick-access.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=quick-access.component.js.map