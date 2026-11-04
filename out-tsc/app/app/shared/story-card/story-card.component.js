// story-card — standalone component (HTML and CSS kept in adjacent files).
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/media.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "@angular/common";
const _c0 = a0 => ["/news", a0];
function StoryCardComponent_article_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r0.media.url(ctx_r0.article.image), i0.ɵɵsanitizeUrl)("alt", ctx_r0.prefs.txt(ctx_r0.article.title));
} }
function StoryCardComponent_article_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵelementEnd();
} }
function StoryCardComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 2)(1, "a", 3);
    i0.ɵɵtemplate(2, StoryCardComponent_article_0_img_2_Template, 1, 2, "img", 4)(3, StoryCardComponent_article_0_ng_template_3_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5)(6, "span", 6);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 7);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small", 8);
    i0.ɵɵelement(12, "i", 9);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 10)(16, "a", 11);
    i0.ɵɵtext(17);
    i0.ɵɵelement(18, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 13);
    i0.ɵɵelement(20, "i", 14);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const noPhoto_r2 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(18, _c0, ctx_r0.article.slug));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.article.image)("ngIfElse", noPhoto_r2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(8, 12, ctx_r0.article.kind), " \u00B7 ", ctx_r0.article.area);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(20, _c0, ctx_r0.article.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.txt(ctx_r0.article.title));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(14, 14, ctx_r0.article.publishedAt, "dd MMM yyyy", "+0530"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(22, _c0, ctx_r0.article.slug));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95", "Read story"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r0.shareUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", ctx_r0.prefs.label("\u0BB5\u0BBE\u0B9F\u0BCD\u0BB8\u0BCD\u0B85\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD", "Share on WhatsApp"));
} }
export class StoryCardComponent {
    media;
    prefs;
    article;
    constructor(media, prefs) {
        this.media = media;
        this.prefs = prefs;
    }
    get shareUrl() { const url = typeof window === 'undefined' ? `/news/${this.article.slug}` : new URL(`/news/${this.article.slug}`, window.location.origin).href; return 'https://wa.me/?text=' + encodeURIComponent(this.prefs.txt(this.article.title) + '\n' + url); }
    static ɵfac = function StoryCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StoryCardComponent)(i0.ɵɵdirectiveInject(i1.MediaService), i0.ɵɵdirectiveInject(i2.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StoryCardComponent, selectors: [["app-story-card"]], inputs: { article: "article" }, decls: 1, vars: 1, consts: [["noPhoto", ""], ["class", "story-card glass", 4, "ngIf"], [1, "story-card", "glass"], [1, "story-photo", 3, "routerLink"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [1, "story-info"], [1, "eyebrow"], [1, "story-heading", 3, "routerLink"], [1, "date"], [1, "fa-regular", "fa-calendar"], [1, "card-actions"], [1, "tiny-link", 3, "routerLink"], [1, "fa-solid", "fa-arrow-right"], ["target", "_blank", "rel", "noopener noreferrer", 1, "share", 3, "href"], [1, "fa-brands", "fa-whatsapp"], ["loading", "lazy", 3, "src", "alt"], [1, "story-no-photo"], ["aria-hidden", "true", 1, "fa-regular", "fa-newspaper"]], template: function StoryCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StoryCardComponent_article_0_Template, 21, 24, "article", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.article);
        } }, dependencies: [RouterLink, CommonModule, i3.NgIf, i3.UpperCasePipe, i3.DatePipe], styles: ["\n\n.story-card[_ngcontent-%COMP%] {\n  overflow:hidden;min-width:0\n}\n\n.story-photo[_ngcontent-%COMP%] {\n  display:block;overflow:hidden;aspect-ratio:16/9\n}\n\n.story-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:100%;height:100%;object-fit:cover;transition:transform .3s\n}\n\n.story-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform:scale(1.04)\n}\n\n.story-info[_ngcontent-%COMP%] {\n  padding:.85rem 1rem;display:grid;gap:.55rem\n}\n\n.story-heading[_ngcontent-%COMP%] {\n  font-weight:850;line-height:1.45;font-size:.94rem\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display:flex;align-items:center;justify-content:space-between;gap:.65rem\n}\n\n.share[_ngcontent-%COMP%] {\n  border:1px solid #14bb75;border-radius:9px;padding:.38rem .55rem;color:#63e5a1;font-size:1.08rem\n}\n\n.story-no-photo[_ngcontent-%COMP%] {display:flex;width:100%;height:100%;align-items:center;justify-content:center;background:linear-gradient(135deg,#0d4778,#032a52);color:#bed9ee;font-size:2rem;}", "\n\n@media (max-width:600px) {\n.story-card[_ngcontent-%COMP%]   .story-info[_ngcontent-%COMP%] {\n  padding:.6rem\n}\n.story-heading[_ngcontent-%COMP%] {\n  font-size:.8rem\n}\n.card-actions[_ngcontent-%COMP%]   .tiny-link[_ngcontent-%COMP%] {\n  font-size:.7rem\n}\n.story-info[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size:.58rem\n}\n.story-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size:.61rem\n}\n}@media (max-width:380px) {\n.story-info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display:none\n}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoryCardComponent, [{
        type: Component,
        args: [{ selector: 'app-story-card', standalone: true, imports: [RouterLink, CommonModule], template: "<article class=\"story-card glass\" *ngIf=\"article\">\n<a [routerLink]=\"['/news',article.slug]\" class=\"story-photo\">\n<img *ngIf=\"article.image; else noPhoto\" [src]=\"media.url(article.image)\" [alt]=\"prefs.txt(article.title)\" loading=\"lazy\" />\n<ng-template #noPhoto><span class=\"story-no-photo\"><i class=\"fa-regular fa-newspaper\" aria-hidden=\"true\"></i></span></ng-template>\n</a>\n<div class=\"story-info\">\n<span class=\"eyebrow\">{{article.kind | uppercase}} \u00B7 {{article.area}}</span>\n<a class=\"story-heading\" [routerLink]=\"['/news',article.slug]\">{{prefs.txt(article.title)}}</a>\n<small class=\"date\">\n<i class=\"fa-regular fa-calendar\">\n</i> {{article.publishedAt | date:'dd MMM yyyy':'+0530'}}</small>\n<div class=\"card-actions\">\n<a [routerLink]=\"['/news',article.slug]\" class=\"tiny-link\">{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0B95\u0BCD\u0B95','Read story')}} <i class=\"fa-solid fa-arrow-right\">\n</i>\n</a>\n<a class=\"share\" [href]=\"shareUrl\" target=\"_blank\" rel=\"noopener noreferrer\" [attr.aria-label]=\"prefs.label('\u0BB5\u0BBE\u0B9F\u0BCD\u0BB8\u0BCD\u0B85\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD','Share on WhatsApp')\">\n<i class=\"fa-brands fa-whatsapp\">\n</i>\n</a>\n</div>\n</div>\n</article>\n", styles: ["/* story-card \u2014 section layout and responsive styles */\n.story-card {\n  overflow:hidden;min-width:0\n}\n\n.story-photo {\n  display:block;overflow:hidden;aspect-ratio:16/9\n}\n\n.story-photo img {\n  width:100%;height:100%;object-fit:cover;transition:transform .3s\n}\n\n.story-card:hover img {\n  transform:scale(1.04)\n}\n\n.story-info {\n  padding:.85rem 1rem;display:grid;gap:.55rem\n}\n\n.story-heading {\n  font-weight:850;line-height:1.45;font-size:.94rem\n}\n\n.card-actions {\n  display:flex;align-items:center;justify-content:space-between;gap:.65rem\n}\n\n.share {\n  border:1px solid #14bb75;border-radius:9px;padding:.38rem .55rem;color:#63e5a1;font-size:1.08rem\n}\n\n.story-no-photo {display:flex;width:100%;height:100%;align-items:center;justify-content:center;background:linear-gradient(135deg,#0d4778,#032a52);color:#bed9ee;font-size:2rem;}\n", "/* Responsive rules for story-card; isolated from common/desktop CSS. */\n@media (max-width:600px) {\n.story-card .story-info {\n  padding:.6rem\n}\n.story-heading {\n  font-size:.8rem\n}\n.card-actions .tiny-link {\n  font-size:.7rem\n}\n.story-info .eyebrow {\n  font-size:.58rem\n}\n.story-info .date {\n  font-size:.61rem\n}\n}@media (max-width:380px) {\n.story-info .date {\n  display:none\n}\n}\n"] }]
    }], () => [{ type: i1.MediaService }, { type: i2.PreferencesService }], { article: [{
            type: Input,
            args: [{ required: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StoryCardComponent, { className: "StoryCardComponent", filePath: "src/app/shared/story-card/story-card.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=story-card.component.js.map