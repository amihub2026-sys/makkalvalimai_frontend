import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/content.service";
import * as i2 from "../../../services/preferences.service";
import * as i3 from "../../../services/media.service";
import * as i4 from "@angular/common";
function HomeSidebarAdComponent_div_0_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtext(1, " Learn More \u2197 ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("href", ad_r1.link, i0.ɵɵsanitizeUrl);
} }
function HomeSidebarAdComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function HomeSidebarAdComponent_div_0_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.nextAd()); });
    i0.ɵɵtext(1, " \u203A ");
    i0.ɵɵelementEnd();
} }
function HomeSidebarAdComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementStart(2, "div")(3, "span", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, HomeSidebarAdComponent_div_0_a_9_Template, 2, 1, "a", 4)(10, HomeSidebarAdComponent_div_0_button_10_Template, 2, 0, "button", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r1 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.media.url(ad_r1.image), i0.ɵɵsanitizeUrl)("alt", ad_r1.brand);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" SPONSORED \u2022 ", ctx_r2.prefs.label("\u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD", "ADVERTISEMENT"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ad_r1.brand);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ad_r1.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ad_r1.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.sidebarAds().length > 1);
} }
/** Isolated homepage section; styles and mobile rules live alongside this file. */
export class HomeSidebarAdComponent {
    store;
    prefs;
    media;
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    adIndex = signal(0, ...(ngDevMode ? [{ debugName: "adIndex" }] : []));
    timer;
    sidebarAds = computed(() => this.store.ads().filter(a => a.position === 'sidebar' && a.enabled), ...(ngDevMode ? [{ debugName: "sidebarAds" }] : []));
    sideAd = computed(() => this.sidebarAds()[this.adIndex() % Math.max(this.sidebarAds().length, 1)] || null, ...(ngDevMode ? [{ debugName: "sideAd" }] : []));
    ngOnInit() { this.timer = setInterval(() => this.nextAd(), 7500); }
    ngOnDestroy() { if (this.timer)
        clearInterval(this.timer); }
    nextAd() { const len = this.sidebarAds().length; if (len)
        this.adIndex.update(i => (i + 1) % len); }
    static ɵfac = function HomeSidebarAdComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeSidebarAdComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeSidebarAdComponent, selectors: [["app-home-sidebar-ad"]], decls: 1, vars: 1, consts: [["class", "side-ad-slider glass", 4, "ngIf"], [1, "side-ad-slider", "glass"], ["loading", "lazy", 3, "src", "alt"], [1, "ad-tag"], ["class", "btn outline", "rel", "sponsored noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], ["type", "button", "class", "btn outline small", "aria-label", "Next advertisement", 3, "click", 4, "ngIf"], ["rel", "sponsored noopener noreferrer", "target", "_blank", 1, "btn", "outline", 3, "href"], ["type", "button", "aria-label", "Next advertisement", 1, "btn", "outline", "small", 3, "click"]], template: function HomeSidebarAdComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, HomeSidebarAdComponent_div_0_Template, 11, 7, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.sideAd());
        } }, dependencies: [CommonModule, i4.NgIf], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.side-ad-slider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n  min-height: 115px;\n  padding: 0.65rem 1rem;\n  border-color: #d0a14c;\n  overflow: hidden;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 99px;\n  max-width: 100%;\n  flex-shrink: 0;\n  object-fit: cover;\n  border-radius: 9px;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n  font-size: 1.2rem;\n  overflow-wrap: anywhere;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  color: #cbd4e2;\n  margin: 0;\n  line-height: 1.6;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.side-ad-slider[_ngcontent-%COMP%]{background:linear-gradient(120deg,#0b5d9c,#07417a);border-radius:10px}", "\n\n@media (max-width: 850px) {\n.side-ad-slider[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 600px) {\n.side-ad-slider[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n    padding: 0.65rem;\n    flex-wrap: wrap;\n  }\n.side-ad-slider[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 105px;\n    height: 105px;\n  }\n.side-ad-slider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.87rem;\n  }\n.side-ad-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n.side-ad-slider[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.66rem;\n    padding: 0.5rem;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeSidebarAdComponent, [{
        type: Component,
        args: [{ selector: 'app-home-sidebar-ad', standalone: true, imports: [CommonModule], template: "<!-- ==========================================\n       SIDEBAR ADVERTISEMENT\n       ========================================== -->\n\n  <div\n    class=\"side-ad-slider glass\"\n    *ngIf=\"sideAd() as ad\"\n  >\n\n    <img\n      [src]=\"media.url(ad.image)\"\n      [alt]=\"ad.brand\"\n      loading=\"lazy\"\n    />\n\n    <div>\n      <span class=\"ad-tag\">\n        SPONSORED \u2022\n        {{ prefs.label('\u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD', 'ADVERTISEMENT') }}\n      </span>\n\n      <h3>{{ ad.brand }}</h3>\n      <p>{{ ad.caption }}</p>\n    </div>\n\n    <a\n      *ngIf=\"ad.link\"\n      class=\"btn outline\"\n      [href]=\"ad.link\"\n      rel=\"sponsored noopener noreferrer\"\n      target=\"_blank\"\n    >\n      Learn More \u2197\n    </a>\n\n    <button\n      *ngIf=\"sidebarAds().length > 1\"\n      type=\"button\"\n      class=\"btn outline small\"\n      (click)=\"nextAd()\"\n      aria-label=\"Next advertisement\"\n    >\n      \u203A\n    </button>\n\n  </div>\n", styles: [":host{display:block;min-width:0}\n.side-ad-slider {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  min-width: 0;\n  min-height: 115px;\n  padding: 0.65rem 1rem;\n  border-color: #d0a14c;\n  overflow: hidden;\n}\n\n.side-ad-slider > img {\n  width: 180px;\n  height: 99px;\n  max-width: 100%;\n  flex-shrink: 0;\n  object-fit: cover;\n  border-radius: 9px;\n}\n\n.side-ad-slider > div {\n  flex: 1;\n  min-width: 0;\n}\n\n.side-ad-slider h3 {\n  margin: 0.2rem 0;\n  font-size: 1.2rem;\n  overflow-wrap: anywhere;\n}\n\n.side-ad-slider p {\n  font-size: 0.77rem;\n  color: #cbd4e2;\n  margin: 0;\n  line-height: 1.6;\n}\n\n.side-ad-slider .btn {\n  flex-shrink: 0;\n}\n\n.side-ad-slider{background:linear-gradient(120deg,#0b5d9c,#07417a);border-radius:10px}\n", "/* Responsive overrides specific to sidebar-ad */\n@media (max-width: 850px) {\n.side-ad-slider {\n    flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 600px) {\n.side-ad-slider {\n    gap: 0.65rem;\n    padding: 0.65rem;\n    flex-wrap: wrap;\n  }\n.side-ad-slider > img {\n    width: 105px;\n    height: 105px;\n  }\n.side-ad-slider h3 {\n    font-size: 0.87rem;\n  }\n.side-ad-slider p {\n    font-size: 0.65rem;\n  }\n.side-ad-slider .btn {\n    font-size: 0.66rem;\n    padding: 0.5rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeSidebarAdComponent, { className: "HomeSidebarAdComponent", filePath: "src/app/pages/home/sidebar-ad/sidebar-ad.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=sidebar-ad.component.js.map