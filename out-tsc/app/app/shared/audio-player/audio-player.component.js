// audio-player — standalone component (HTML and CSS kept in adjacent files).
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/media.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
function AudioPlayerComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1)(1, "div", 2);
    i0.ɵɵelement(2, "i", 3);
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "audio", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const track_r1 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0B95\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "Listen to audio"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Audio \u2022 ", ctx_r1.prefs.language() === "ta" ? "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD" : "English");
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", track_r1);
} }
export class AudioPlayerComponent {
    media;
    prefs;
    src = '';
    constructor(media, prefs) {
        this.media = media;
        this.prefs = prefs;
    }
    static ɵfac = function AudioPlayerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AudioPlayerComponent)(i0.ɵɵdirectiveInject(i1.MediaService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AudioPlayerComponent, selectors: [["app-audio-player"]], inputs: { src: "src" }, decls: 1, vars: 1, consts: [["class", "audio-player glass", "aria-label", "Article audio", 4, "ngIf"], ["aria-label", "Article audio", 1, "audio-player", "glass"], [1, "audio-label"], [1, "fa-solid", "fa-headphones"], ["controls", "", "preload", "none", "aria-label", "Play audio narration", 3, "src"]], template: function AudioPlayerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AudioPlayerComponent_section_0_Template, 8, 3, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.media.url(ctx.src));
        } }, dependencies: [CommonModule, i3.NgIf], styles: ["\n\n.audio-player[_ngcontent-%COMP%] {\n  padding:.9rem;margin:.75rem 0;border-color:#ed2b493a\n}\n\n.audio-label[_ngcontent-%COMP%] {\n  display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem;flex-wrap:wrap\n}\n\n.audio-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color:#ff405b\n}\n\n.audio-label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n\n.audio-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color:#d8aeb8;margin-left:auto\n}\n\n.audio-player[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display:block;width:100%;height:40px;accent-color:var(--red)\n}", "\n\n@media(max-width:650px){\n  [_nghost-%COMP%]{display:block;min-width:0;width:100%}\n  .audio-player[_ngcontent-%COMP%]{padding:.7rem;margin:.6rem 0}\n  .audio-label[_ngcontent-%COMP%]{gap:.4rem}\n  .audio-label[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:.75rem}\n  .audio-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.63rem}\n  .audio-player[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]{width:100%;max-width:100%;height:42px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioPlayerComponent, [{
        type: Component,
        args: [{ selector: 'app-audio-player', standalone: true, imports: [CommonModule], template: "<section *ngIf=\"media.url(src) as track\" class=\"audio-player glass\" aria-label=\"Article audio\">\n<div class=\"audio-label\">\n<i class=\"fa-solid fa-headphones\">\n</i>\n<b>{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0BAF\u0BC8\u0B95\u0BCD \u0B95\u0BC7\u0BB3\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD','Listen to audio')}}</b>\n<small>Audio \u2022 {{prefs.language()==='ta'?'\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD':'English'}}</small>\n</div>\n<audio controls preload=\"none\" [src]=\"track\" aria-label=\"Play audio narration\">\n</audio>\n</section>\n", styles: ["/* audio-player \u2014 section layout and responsive styles */\n.audio-player {\n  padding:.9rem;margin:.75rem 0;border-color:#ed2b493a\n}\n\n.audio-label {\n  display:flex;align-items:center;gap:.5rem;margin-bottom:.6rem;flex-wrap:wrap\n}\n\n.audio-label i {\n  color:#ff405b\n}\n\n.audio-label b {\n  font-size:.8rem\n}\n\n.audio-label small {\n  color:#d8aeb8;margin-left:auto\n}\n\n.audio-player audio {\n  display:block;width:100%;height:40px;accent-color:var(--red)\n}\n", "/* Mobile audio control can never overflow the news card. */\n@media(max-width:650px){\n  :host{display:block;min-width:0;width:100%}\n  .audio-player{padding:.7rem;margin:.6rem 0}\n  .audio-label{gap:.4rem}\n  .audio-label b{font-size:.75rem}\n  .audio-label small{font-size:.63rem}\n  .audio-player audio{width:100%;max-width:100%;height:42px}\n}\n"] }]
    }], () => [{ type: i1.MediaService }, { type: i2.PreferencesService }], { src: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AudioPlayerComponent, { className: "AudioPlayerComponent", filePath: "src/app/shared/audio-player/audio-player.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=audio-player.component.js.map