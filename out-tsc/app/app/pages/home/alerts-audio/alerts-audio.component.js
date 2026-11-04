import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AudioPlayerComponent } from '../../../shared/audio-player/audio-player.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
function HomeAlertsAudioComponent_article_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 10)(1, "div", 11);
    i0.ɵɵelement(2, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.prefs.txt(alert_r1.title), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", alert_r1.area, " \u00B7 ", i0.ɵɵpipeBind2(8, 3, alert_r1.effectiveDate, "dd MMM yyyy"), " ");
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeAlertsAudioComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    static ɵfac = function HomeAlertsAudioComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeAlertsAudioComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeAlertsAudioComponent, selectors: [["app-home-alerts-audio"]], decls: 19, vars: 7, consts: [[1, "home-mid"], [1, "panel", "glass"], [1, "section-title"], [1, "fa-solid", "fa-bell"], ["routerLink", "/public-alerts"], ["class", "alert-row", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-headphones"], [1, "muted"], [3, "src"], ["routerLink", "/madurai-news", 1, "tiny-link"], [1, "alert-row"], [1, "alert-symbol"], [1, "fa-solid", "fa-circle-exclamation"]], template: function HomeAlertsAudioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵelement(4, "i", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(8, HomeAlertsAudioComponent_article_8_Template, 9, 6, "article", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 1)(10, "div", 2)(11, "h2");
            i0.ɵɵelement(12, "i", 6);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "p", 7);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "app-audio-player", 8);
            i0.ɵɵelementStart(17, "a", 9);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Madurai Public Alerts"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD", "View all"), " \u2192 ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.store.alerts().slice(0, 3));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B92\u0BB2\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Audio News"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD / \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2 \u0B92\u0BB2\u0BBF \u0BB5\u0B9F\u0BBF\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.", "Listen to news in Tamil or English."), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.prefs.language() === "ta" ? ((tmp_5_0 = ctx.store.settings().sectionAudio.home) == null ? null : tmp_5_0.ta) || "" : ((tmp_5_0 = ctx.store.settings().sectionAudio.home) == null ? null : tmp_5_0.en) || "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Browse stories"), " \u2192 ");
        } }, dependencies: [CommonModule, i4.NgForOf, RouterLink, AudioPlayerComponent, i4.DatePipe], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.home[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-hero-grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-categories[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.home-two[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-mid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n}\n\n.home-mid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.home-mid[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%], .home-polls[_ngcontent-%COMP%], .home-section[_ngcontent-%COMP%]{min-width:0}", "\n\n@media (max-width: 850px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid[_ngcontent-%COMP%], \n   .home-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeAlertsAudioComponent, [{
        type: Component,
        args: [{ selector: 'app-home-alerts-audio', standalone: true, imports: [CommonModule, RouterLink, AudioPlayerComponent], template: "<!-- ==========================================\n       PUBLIC ALERTS AND AUDIO NEWS\n       ========================================== -->\n\n  <div class=\"home-mid\">\n\n    <!-- PUBLIC ALERTS -->\n\n    <section class=\"panel glass\">\n\n      <div class=\"section-title\">\n\n        <h2>\n          <i class=\"fa-solid fa-bell\"></i>\n          {{ prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD', 'Madurai Public Alerts') }}\n        </h2>\n\n        <a routerLink=\"/public-alerts\">\n          {{ prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD', 'View all') }} \u2192\n        </a>\n\n      </div>\n\n      <article\n        class=\"alert-row\"\n        *ngFor=\"let alert of store.alerts().slice(0,3)\"\n      >\n\n        <div class=\"alert-symbol\">\n          <i class=\"fa-solid fa-circle-exclamation\"></i>\n        </div>\n\n        <div>\n\n          <b>\n            {{ prefs.txt(alert.title) }}\n          </b>\n\n          <small>\n            {{ alert.area }} \u00B7\n            {{ alert.effectiveDate | date:'dd MMM yyyy' }}\n          </small>\n\n        </div>\n\n      </article>\n\n    </section>\n\n    <!-- AUDIO NEWS -->\n\n    <section class=\"panel glass\">\n\n      <div class=\"section-title\">\n        <h2>\n          <i class=\"fa-solid fa-headphones\"></i>\n          {{ prefs.label('\u0B92\u0BB2\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD', 'Audio News') }}\n        </h2>\n      </div>\n\n      <p class=\"muted\">\n        {{\n          prefs.label(\n            '\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD / \u0B86\u0B99\u0BCD\u0B95\u0BBF\u0BB2 \u0B92\u0BB2\u0BBF \u0BB5\u0B9F\u0BBF\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.',\n            'Listen to news in Tamil or English.'\n          )\n        }}\n      </p>\n\n      <app-audio-player\n        [src]=\"prefs.language() === 'ta'\n          ? (store.settings().sectionAudio.home?.ta || '')\n          : (store.settings().sectionAudio.home?.en || '')\"\n      />\n\n      <a\n        routerLink=\"/madurai-news\"\n        class=\"tiny-link\"\n      >\n        {{ prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD', 'Browse stories') }} \u2192\n      </a>\n\n    </section>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.home,\n.home > *,\n.home-hero-grid > *,\n.home-categories > *,\n.home-mid > *,\n.home-two > * {\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.home-mid {\n  display: grid;\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n  align-items: start;\n  gap: 1rem;\n  width: 100%;\n}\n\n.home-mid > * {\n  min-width: 0;\n}\n\n.home-mid .panel,.home-polls,.home-section{min-width:0}\n", "/* Responsive overrides specific to alerts-audio */\n@media (max-width: 850px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media (max-width: 600px) {\n.home-mid,\n  .home-two {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0.85rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeAlertsAudioComponent, { className: "HomeAlertsAudioComponent", filePath: "src/app/pages/home/alerts-audio/alerts-audio.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=alerts-audio.component.js.map