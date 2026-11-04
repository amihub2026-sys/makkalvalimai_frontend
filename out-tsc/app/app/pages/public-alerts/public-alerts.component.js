// public-alerts — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
function AlertsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "span", 2);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "app-audio-player", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3("", i0.ɵɵpipeBind1(6, 8, a_r1.type), " \u00B7 ", a_r1.area, " \u00B7 ", a_r1.effectiveDate);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.p.txt(a_r1.title));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.p.txt(a_r1.body));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Source: ", a_r1.source, " \u00B7 Expires: ", a_r1.expiresAt);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.p.language() === "ta" ? a_r1.audio.ta : a_r1.audio.en);
} }
function AlertsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No active notices.");
    i0.ɵɵelementEnd();
} }
export class AlertsComponent {
    s;
    p;
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
    static ɵfac = function AlertsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 13, vars: 5, consts: [[1, "container", "page-section", "public-alerts-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-bell", "giant-icon"], [3, "src"], ["class", "alert-full glass", 4, "ngFor", "ngForOf"], ["class", "empty-state glass", 4, "ngIf"], [1, "alert-full", "glass"], [1, "alert-symbol"], [1, "fa-solid", "fa-bell"], [1, "empty-state", "glass"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "PUBLIC INFORMATION");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(9, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "app-audio-player", 4);
            i0.ɵɵtemplate(11, AlertsComponent_div_11_Template, 14, 10, "div", 5)(12, AlertsComponent_div_12_Template, 2, 0, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Madurai Public Alerts"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD, \u0BAE\u0BBF\u0BA9\u0BCD\u0BA4\u0B9F\u0BC8, \u0BAE\u0BB4\u0BC8, \u0B9A\u0BBE\u0BB2\u0BC8 \u0BAE\u0BC2\u0B9F\u0BB2\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB1 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Water, electricity, rain, traffic and other public notices"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.p.language() === "ta" ? ((tmp_2_0 = ctx.s.settings().sectionAudio.alerts) == null ? null : tmp_2_0.ta) || "" : ((tmp_2_0 = ctx.s.settings().sectionAudio.alerts) == null ? null : tmp_2_0.en) || "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.s.alerts());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.s.alerts().length);
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, AudioPlayerComponent, i3.UpperCasePipe], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.public-alerts-page[_ngcontent-%COMP%] { min-width: 0; }\n.public-alerts-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .public-alerts-page[_ngcontent-%COMP%] { width: 100%; }\n  .public-alerts-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertsComponent, [{
        type: Component,
        args: [{ selector: 'app-alerts', standalone: true, imports: [CommonModule, AudioPlayerComponent], template: "<div class=\"container page-section public-alerts-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">PUBLIC INFORMATION</span>\n<h1>{{p.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Madurai Public Alerts')}}</h1>\n<p>{{p.label('\u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD, \u0BAE\u0BBF\u0BA9\u0BCD\u0BA4\u0B9F\u0BC8, \u0BAE\u0BB4\u0BC8, \u0B9A\u0BBE\u0BB2\u0BC8 \u0BAE\u0BC2\u0B9F\u0BB2\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB1 \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Water, electricity, rain, traffic and other public notices')}}</p>\n</div>\n<i class=\"fa-solid fa-bell giant-icon\">\n</i>\n</div>\n<app-audio-player [src]=\"p.language()==='ta'?(s.settings().sectionAudio.alerts?.ta||''):(s.settings().sectionAudio.alerts?.en||'')\"/>\n<div class=\"alert-full glass\" *ngFor=\"let a of s.alerts()\">\n<div class=\"alert-symbol\">\n<i class=\"fa-solid fa-bell\">\n</i>\n</div>\n<div>\n<span class=\"eyebrow\">{{a.type|uppercase}} \u00B7 {{a.area}} \u00B7 {{a.effectiveDate}}</span>\n<h2>{{p.txt(a.title)}}</h2>\n<p>{{p.txt(a.body)}}</p>\n<small>Source: {{a.source}} \u00B7 Expires: {{a.expiresAt}}</small>\n<app-audio-player [src]=\"p.language()==='ta'?a.audio.ta:a.audio.en\"/>\n</div>\n</div>\n<div *ngIf=\"!s.alerts().length\" class=\"empty-state glass\">No active notices.</div>\n</div>\n", styles: ["/* public-alerts: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.public-alerts-page { min-width: 0; }\n.public-alerts-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for public-alerts; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .public-alerts-page { width: 100%; }\n  .public-alerts-page .page-intro { margin-bottom: 1rem; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertsComponent, { className: "AlertsComponent", filePath: "src/app/pages/public-alerts/public-alerts.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=public-alerts.component.js.map