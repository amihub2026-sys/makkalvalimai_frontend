import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
function BreakingTickerComponent_ng_container_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const headline_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2726 ", ctx_r1.prefs.txt(headline_r1), " \u00A0 \u00A0");
} }
function BreakingTickerComponent_ng_container_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const headline_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2726 ", ctx_r1.prefs.txt(headline_r3), " \u00A0 \u00A0");
} }
function BreakingTickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BreakingTickerComponent_ng_container_6_span_1_Template, 2, 1, "span", 7)(2, BreakingTickerComponent_ng_container_6_span_2_Template, 2, 1, "span", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.store.settings().headlines);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.store.settings().headlines);
} }
function BreakingTickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Madurai news, public issues and alerts"));
} }
export class BreakingTickerComponent {
    store;
    prefs;
    constructor(store, prefs) {
        this.store = store;
        this.prefs = prefs;
    }
    static ɵfac = function BreakingTickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreakingTickerComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreakingTickerComponent, selectors: [["app-breaking-ticker"]], decls: 11, vars: 4, consts: [["noHeadlines", ""], [1, "ticker"], [1, "fa-solid", "fa-bolt"], [1, "ticker-window"], [1, "ticker-roll"], [4, "ngIf", "ngIfElse"], ["routerLink", "/madurai-news", 1, "ticker-action"], [4, "ngFor", "ngForOf"]], template: function BreakingTickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "b");
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
            i0.ɵɵtemplate(6, BreakingTickerComponent_ng_container_6_Template, 3, 2, "ng-container", 5)(7, BreakingTickerComponent_ng_template_7_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const noHeadlines_r4 = i0.ɵɵreference(8);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.prefs.label("\u0BA4\u0BB1\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1", "BREAKING"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.store.settings().headlines.length)("ngIfElse", noHeadlines_r4);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "All news"), " \u2192");
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, RouterLink], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.ticker[_ngcontent-%COMP%]{display:flex;align-items:stretch;min-height:37px;background:#eaf4ff;color:#1b3857;max-width:1460px;margin:0 auto 5px;overflow:hidden;border:1px solid #88c0e8;border-top:0;border-radius:0 0 8px 8px}\n\n.ticker[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;flex-shrink:0;padding:8px 15px;background:#e71535;color:#fff;font-size:.69rem;white-space:nowrap}\n\n.ticker-window[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;flex:1;min-width:0}\n\n.ticker-roll[_ngcontent-%COMP%]{display:flex;align-items:center;width:max-content;white-space:nowrap;animation:news-ticker 44s linear infinite;font-size:.73rem;font-weight:700}\n\n.ticker-roll[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:1rem}\n\n.ticker-action[_ngcontent-%COMP%]{align-self:center;flex-shrink:0;padding:9px;color:#085c96;font-weight:800;font-size:.7rem}", "\n\n@media(max-width:650px){\n.ticker[_ngcontent-%COMP%]{min-height:34px;margin-bottom:0;border-radius:0}\n.ticker[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{padding:8px;font-size:.58rem}\n.ticker-roll[_ngcontent-%COMP%]{font-size:.63rem}\n.ticker-action[_ngcontent-%COMP%]{display:none}\n}\n\n@media(prefers-reduced-motion:reduce){\n.ticker-roll[_ngcontent-%COMP%]{animation:none}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreakingTickerComponent, [{
        type: Component,
        args: [{ selector: 'app-breaking-ticker', standalone: true, imports: [CommonModule, RouterLink], template: "<div class=\"ticker\"><b><i class=\"fa-solid fa-bolt\"></i> {{prefs.label('\u0BA4\u0BB1\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1','BREAKING')}}</b><div class=\"ticker-window\"><div class=\"ticker-roll\"><ng-container *ngIf=\"store.settings().headlines.length; else noHeadlines\"><span *ngFor=\"let headline of store.settings().headlines\">\u2726 {{prefs.txt(headline)}} &nbsp; &nbsp;</span><span *ngFor=\"let headline of store.settings().headlines\">\u2726 {{prefs.txt(headline)}} &nbsp; &nbsp;</span></ng-container><ng-template #noHeadlines><span>{{prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Madurai news, public issues and alerts')}}</span></ng-template></div></div><a routerLink=\"/madurai-news\" class=\"ticker-action\">{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD','All news')}} \u2192</a></div>\n", styles: [":host{display:block;min-width:0}\n.ticker{display:flex;align-items:stretch;min-height:37px;background:#eaf4ff;color:#1b3857;max-width:1460px;margin:0 auto 5px;overflow:hidden;border:1px solid #88c0e8;border-top:0;border-radius:0 0 8px 8px}\n\n.ticker>b{display:inline-flex;align-items:center;gap:8px;flex-shrink:0;padding:8px 15px;background:#e71535;color:#fff;font-size:.69rem;white-space:nowrap}\n\n.ticker-window{overflow:hidden;display:flex;align-items:center;flex:1;min-width:0}\n\n.ticker-roll{display:flex;align-items:center;width:max-content;white-space:nowrap;animation:news-ticker 44s linear infinite;font-size:.73rem;font-weight:700}\n\n.ticker-roll span{margin-right:1rem}\n\n.ticker-action{align-self:center;flex-shrink:0;padding:9px;color:#085c96;font-weight:800;font-size:.7rem}\n", "/* Mobile/tablet for breaking-ticker */\n@media(max-width:650px){\n.ticker{min-height:34px;margin-bottom:0;border-radius:0}\n.ticker>b{padding:8px;font-size:.58rem}\n.ticker-roll{font-size:.63rem}\n.ticker-action{display:none}\n}\n\n@media(prefers-reduced-motion:reduce){\n.ticker-roll{animation:none}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreakingTickerComponent, { className: "BreakingTickerComponent", filePath: "src/app/shared/breaking-ticker/breaking-ticker.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=breaking-ticker.component.js.map