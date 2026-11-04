import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
function HomeTopAdComponent_div_0_a_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtext(1, " Visit advertiser \u2197 ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("href", ad_r1.link, i0.ɵɵsanitizeUrl);
} }
function HomeTopAdComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div")(2, "span", 2);
    i0.ɵɵtext(3, " ADVERTISEMENT / \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, HomeTopAdComponent_div_0_a_8_Template, 2, 1, "a", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r1 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "linear-gradient(90deg,rgba(7,9,16,.9),rgba(7,9,16,.5)),url(" + ctx_r1.media.url(ad_r1.image) + ")");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ad_r1.brand);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ad_r1.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ad_r1.link);
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeTopAdComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    topAd = computed(() => this.store.ads().find(a => a.position === 'banner' && a.enabled), ...(ngDevMode ? [{ debugName: "topAd" }] : []));
    static ɵfac = function HomeTopAdComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeTopAdComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeTopAdComponent, selectors: [["app-home-top-ad"]], decls: 1, vars: 1, consts: [["class", "ad-banner glass", 3, "background-image", 4, "ngIf"], [1, "ad-banner", "glass"], [1, "ad-tag"], ["rel", "noopener noreferrer sponsored", "target", "_blank", "class", "btn btn-red", 3, "href", 4, "ngIf"], ["rel", "noopener noreferrer sponsored", "target", "_blank", 1, "btn", "btn-red", 3, "href"]], template: function HomeTopAdComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HomeTopAdComponent_div_0_Template, 9, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.topAd());
        } }, dependencies: [CommonModule, i4.NgIf], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.ad-banner[_ngcontent-%COMP%] {\n  min-height: 105px;\n  padding: 1rem 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.2rem;\n  background-size: cover;\n  background-position: center;\n  border-color: #ab172d;\n}\n\n.ad-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.ad-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.55rem;\n  margin: 0.2rem 0;\n  overflow-wrap: anywhere;\n}\n\n.ad-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.76rem;\n  line-height: 1.6;\n}\n\n.ad-banner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.ad-banner[_ngcontent-%COMP%]{border-radius:9px;overflow:hidden}", "\n\n@media (max-width: 600px) {\n.ad-banner[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 92px;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n.ad-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n.ad-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeTopAdComponent, [{
        type: Component,
        args: [{ selector: 'app-home-top-ad', standalone: true, imports: [CommonModule], template: "<!-- ==========================================\n       TOP ADVERTISEMENT\n       ========================================== -->\n\n  <div\n    class=\"ad-banner glass\"\n    *ngIf=\"topAd() as ad\"\n    [style.background-image]=\"'linear-gradient(90deg,rgba(7,9,16,.9),rgba(7,9,16,.5)),url('+media.url(ad.image)+')'\"\n  >\n\n    <div>\n      <span class=\"ad-tag\">\n        ADVERTISEMENT / \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD\n      </span>\n\n      <h3>{{ ad.brand }}</h3>\n      <p>{{ ad.caption }}</p>\n    </div>\n\n    <a\n      *ngIf=\"ad.link\"\n      [href]=\"ad.link\"\n      rel=\"noopener noreferrer sponsored\"\n      target=\"_blank\"\n      class=\"btn btn-red\"\n    >\n      Visit advertiser \u2197\n    </a>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.ad-banner {\n  min-height: 105px;\n  padding: 1rem 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.2rem;\n  background-size: cover;\n  background-position: center;\n  border-color: #ab172d;\n}\n\n.ad-banner > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.ad-banner h3 {\n  font-size: 1.55rem;\n  margin: 0.2rem 0;\n  overflow-wrap: anywhere;\n}\n\n.ad-banner p {\n  margin: 0;\n  font-size: 0.76rem;\n  line-height: 1.6;\n}\n\n.ad-banner .btn {\n  flex-shrink: 0;\n}\n\n.ad-banner{border-radius:9px;overflow:hidden}\n", "/* Responsive overrides specific to top-ad */\n@media (max-width: 600px) {\n.ad-banner {\n    padding: 1rem;\n    min-height: 92px;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n.ad-banner h3 {\n    font-size: 1.1rem;\n  }\n.ad-banner p {\n    font-size: 0.67rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeTopAdComponent, { className: "HomeTopAdComponent", filePath: "src/app/pages/home/top-ad/top-ad.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=top-ad.component.js.map