// about-contact — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
export class AboutComponent {
    s;
    p;
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
    static ɵfac = function AboutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AboutComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], decls: 22, vars: 6, consts: [[1, "container", "page-section", "about-contact-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-circle-info", "giant-icon"], [1, "panel", "glass"], ["routerLink", "/report-problem"], [1, "muted"], [3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "ABOUT MAKKAL VALIMAI");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Madurai District Civic News");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(9, "i", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4)(11, "h2");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16);
            i0.ɵɵelementStart(17, "a", 5);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "p", 6);
            i0.ɵɵtext(20, "Contact information will be added after the publisher confirms official details.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(21, "app-audio-player", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BB1\u0BCD\u0BB1\u0BBF / \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1", "About & Contact"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA8\u0BCB\u0B95\u0BCD\u0B95\u0BAE\u0BCD", "Our Mission"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BC8 \u0BAA\u0BCA\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1, \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BC8 \u0BAA\u0B95\u0BBF\u0BB0\u0BCD\u0BB5\u0BA4\u0BC7 \u0BA8\u0BCB\u0B95\u0BCD\u0B95\u0BAE\u0BCD.", "Our mission is to document Madurai district issues responsibly and share verified local information and solutions."));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.p.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0B85\u0BB3\u0BBF\u0B95\u0BCD\u0B95", "To report an issue:"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0B9F\u0BBF\u0BB5\u0BAE\u0BCD", "Report a Problem"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", ctx.p.language() === "ta" ? ((tmp_5_0 = ctx.s.settings().sectionAudio.about) == null ? null : tmp_5_0.ta) || "" : ((tmp_5_0 = ctx.s.settings().sectionAudio.about) == null ? null : tmp_5_0.en) || "");
        } }, dependencies: [CommonModule, AudioPlayerComponent, RouterLink], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.about-contact-page[_ngcontent-%COMP%] { min-width: 0; }\n.about-contact-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .about-contact-page[_ngcontent-%COMP%] { width: 100%; }\n  .about-contact-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{ selector: 'app-about', standalone: true, imports: [CommonModule, AudioPlayerComponent, RouterLink], template: "<div class=\"container page-section about-contact-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">ABOUT MAKKAL VALIMAI</span>\n<h1>{{p.label('\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BB1\u0BCD\u0BB1\u0BBF / \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1','About & Contact')}}</h1>\n<p>\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Madurai District Civic News</p>\n</div>\n<i class=\"fa-solid fa-circle-info giant-icon\">\n</i>\n</div>\n<div class=\"panel glass\">\n<h2>{{p.label('\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA8\u0BCB\u0B95\u0BCD\u0B95\u0BAE\u0BCD','Our Mission')}}</h2>\n<p>{{p.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BC8 \u0BAA\u0BCA\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1, \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BC8 \u0BAA\u0B95\u0BBF\u0BB0\u0BCD\u0BB5\u0BA4\u0BC7 \u0BA8\u0BCB\u0B95\u0BCD\u0B95\u0BAE\u0BCD.','Our mission is to document Madurai district issues responsibly and share verified local information and solutions.')}}</p>\n<p>{{p.label('\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0B85\u0BB3\u0BBF\u0B95\u0BCD\u0B95','To report an issue:')}} <a routerLink=\"/report-problem\">{{p.label('\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD \u0BAA\u0B9F\u0BBF\u0BB5\u0BAE\u0BCD','Report a Problem')}}</a>\n</p>\n<p class=\"muted\">Contact information will be added after the publisher confirms official details.</p>\n</div>\n<app-audio-player [src]=\"p.language()==='ta'?(s.settings().sectionAudio.about?.ta||''):(s.settings().sectionAudio.about?.en||'')\"/>\n</div>\n", styles: ["/* about-contact: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.about-contact-page { min-width: 0; }\n.about-contact-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for about-contact; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .about-contact-page { width: 100%; }\n  .about-contact-page .page-intro { margin-bottom: 1rem; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about-contact/about-contact.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=about-contact.component.js.map