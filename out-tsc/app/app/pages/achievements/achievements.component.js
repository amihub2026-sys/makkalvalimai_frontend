// achievements — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
function AchievementsComponent_app_story_card_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-story-card", 7);
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵproperty("article", a_r1);
} }
export class AchievementsComponent {
    s;
    p;
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
    get items() { return this.s.published().filter(a => a.kind === 'achievement'); }
    static ɵfac = function AchievementsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AchievementsComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AchievementsComponent, selectors: [["app-achievements"]], decls: 13, vars: 4, consts: [[1, "container", "page-section", "achievements-page"], [1, "page-intro", "glass"], [1, "eyebrow"], [1, "fa-solid", "fa-award", "giant-icon"], [3, "src"], [1, "card-grid"], [3, "article", 4, "ngFor", "ngForOf"], [3, "article"]], template: function AchievementsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "PEOPLE \u00B7 COMMUNITY \u00B7 MADURAI");
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
            i0.ɵɵtemplate(12, AchievementsComponent_app_story_card_12_Template, 1, 1, "app-story-card", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD", "Madurai People\u2019s Achievements"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.p.label("\u0BAE\u0BBE\u0BA3\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BCD, \u0B86\u0B9A\u0BBF\u0BB0\u0BBF\u0BAF\u0BB0\u0BCD\u0B95\u0BB3\u0BCD, \u0B9A\u0BAE\u0BC2\u0B95 \u0B9A\u0BC7\u0BB5\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BC2\u0BB0\u0BCD \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0B95\u0BB3\u0BCD", "Students, teachers, community volunteers and local achievements"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.p.language() === "ta" ? ((tmp_2_0 = ctx.s.settings().sectionAudio.achievements) == null ? null : tmp_2_0.ta) || "" : ((tmp_2_0 = ctx.s.settings().sectionAudio.achievements) == null ? null : tmp_2_0.en) || "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, dependencies: [CommonModule, i3.NgForOf, StoryCardComponent, AudioPlayerComponent], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }\n.achievements-page[_ngcontent-%COMP%] { min-width: 0; }\n.achievements-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { border-inline-start: 3px solid var(--red); }", "\n\n@media (max-width: 600px) {\n  .achievements-page[_ngcontent-%COMP%] { width: 100%; }\n  .achievements-page[_ngcontent-%COMP%]   .page-intro[_ngcontent-%COMP%] { margin-bottom: 1rem; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AchievementsComponent, [{
        type: Component,
        args: [{ selector: 'app-achievements', standalone: true, imports: [CommonModule, StoryCardComponent, AudioPlayerComponent], template: "<div class=\"container page-section achievements-page\">\n<div class=\"page-intro glass\">\n<div>\n<span class=\"eyebrow\">PEOPLE \u00B7 COMMUNITY \u00B7 MADURAI</span>\n<h1>{{p.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BCD','Madurai People\u2019s Achievements')}}</h1>\n<p>{{p.label('\u0BAE\u0BBE\u0BA3\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BCD, \u0B86\u0B9A\u0BBF\u0BB0\u0BBF\u0BAF\u0BB0\u0BCD\u0B95\u0BB3\u0BCD, \u0B9A\u0BAE\u0BC2\u0B95 \u0B9A\u0BC7\u0BB5\u0B95\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BC2\u0BB0\u0BCD \u0B9A\u0BBE\u0BA4\u0BA9\u0BC8\u0B95\u0BB3\u0BCD','Students, teachers, community volunteers and local achievements')}}</p>\n</div>\n<i class=\"fa-solid fa-award giant-icon\">\n</i>\n</div>\n<app-audio-player [src]=\"p.language()==='ta'?(s.settings().sectionAudio.achievements?.ta||''):(s.settings().sectionAudio.achievements?.en||'')\"/>\n<div class=\"card-grid\">\n<app-story-card *ngFor=\"let a of items\" [article]=\"a\"/>\n</div>\n</div>\n", styles: ["/* achievements: customize only this page here.\n   Shared site-wide typography, cards, and forms are in src/styles.css. */\n:host { display: block; min-width: 0; }\n.achievements-page { min-width: 0; }\n.achievements-page .page-intro { border-inline-start: 3px solid var(--red); }\n", "/* Responsive rules for achievements; isolated from common/desktop CSS. */\n@media (max-width: 600px) {\n  .achievements-page { width: 100%; }\n  .achievements-page .page-intro { margin-bottom: 1rem; }\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AchievementsComponent, { className: "AchievementsComponent", filePath: "src/app/pages/achievements/achievements.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=achievements.component.js.map