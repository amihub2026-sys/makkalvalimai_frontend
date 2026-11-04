// opinion-polls — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { PollComponent } from '../../shared/poll/poll.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
function PollsPageComponent_app_poll_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-poll", 7);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("poll", item_r1);
} }
export class PollsPageComponent {
    s;
    p;
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
    static ɵfac = function PollsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PollsPageComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PollsPageComponent, selectors: [["app-polls-page"]], decls: 13, vars: 4, consts: [[1, "container", "page-section", "opinion-polls-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-square-poll-vertical", "giant-icon"], [3, "src"], [1, "card-grid"], [3, "poll", 4, "ngFor", "ngForOf"], [3, "poll"]], template: function PollsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "PEOPLE'S VOICE");
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
            i0.ɵɵelementStart(11, "div", 5);
            i0.ɵɵtemplate(12, PollsPageComponent_app_poll_12_Template, 1, 1, "app-poll", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", "People\u2019s Opinion Polls"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0B89\u0BB3\u0BCD\u0BB3\u0BC2\u0BB0\u0BCD \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BC8 \u0B95\u0BC7\u0B9F\u0BCD\u0BAA\u0BCB\u0BAE\u0BCD", "Voluntary community opinion polls"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.p.language() === "ta" ? ((tmp_2_0 = ctx.s.settings().sectionAudio.polls) == null ? null : tmp_2_0.ta) || "" : ((tmp_2_0 = ctx.s.settings().sectionAudio.polls) == null ? null : tmp_2_0.en) || "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.s.polls());
        } }, dependencies: [CommonModule, i3.NgForOf, PollComponent, AudioPlayerComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.opinion-polls-page[_ngcontent-%COMP%] { min-width: 0; }\n.opinion-polls-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .opinion-polls-page[_ngcontent-%COMP%] { width: 100%; }\n  .opinion-polls-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PollsPageComponent, [{
        type: Component,
        args: [{ selector: 'app-polls-page', standalone: true, imports: [CommonModule, PollComponent, AudioPlayerComponent], template: "<div class=\"container page-section opinion-polls-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">PEOPLE'S VOICE</span>\n<h1>{{p.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1','People\u2019s Opinion Polls')}}</h1>\n<p>{{p.label('\u0B89\u0BB3\u0BCD\u0BB3\u0BC2\u0BB0\u0BCD \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BC8 \u0B95\u0BC7\u0B9F\u0BCD\u0BAA\u0BCB\u0BAE\u0BCD','Voluntary community opinion polls')}}</p>\n</div>\n<i class=\"fa-solid fa-square-poll-vertical giant-icon\">\n</i>\n</div>\n<app-audio-player [src]=\"p.language()==='ta'?(s.settings().sectionAudio.polls?.ta||''):(s.settings().sectionAudio.polls?.en||'')\"/>\n<div class=\"card-grid\">\n<app-poll *ngFor=\"let item of s.polls()\" [poll]=\"item\"/>\n</div>\n</div>\n", styles: ["/* opinion-polls: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.opinion-polls-page { min-width: 0; }\n.opinion-polls-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for opinion-polls; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .opinion-polls-page { width: 100%; }\n  .opinion-polls-page .page-intro { margin-bottom: 1rem; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PollsPageComponent, { className: "PollsPageComponent", filePath: "src/app/pages/opinion-polls/opinion-polls.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=opinion-polls.component.js.map