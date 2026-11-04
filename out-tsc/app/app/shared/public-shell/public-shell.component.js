import { Component, effect, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/media.service";
import * as i3 from "../../services/preferences.service";
import * as i4 from "@angular/common";
function PublicShellComponent_div_4_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ad_r3.caption);
} }
function PublicShellComponent_div_4_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ad_r3 = i0.ɵɵnextContext().ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ad_r3.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BAF", "Visit advertiser"), " \u2197");
} }
function PublicShellComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    i0.ɵɵlistener("click", function PublicShellComponent_div_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePopup()); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "SPONSORED \u00B7 \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "img", 7);
    i0.ɵɵelementStart(7, "div")(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PublicShellComponent_div_4_p_10_Template, 2, 1, "p", 8)(11, PublicShellComponent_div_4_a_11_Template, 2, 2, "a", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ad_r3 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r1.media.url(ad_r3.image), i0.ɵɵsanitizeUrl)("alt", ad_r3.brand);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ad_r3.brand);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ad_r3.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ad_r3.link);
} }
/** Public layout controls popup advertising only; header/footer are reusable. */
export class PublicShellComponent {
    store;
    media;
    prefs;
    popupOpen = false;
    popupScheduled = false;
    popupTimer;
    constructor(store, media, prefs) {
        this.store = store;
        this.media = media;
        this.prefs = prefs;
        effect(() => {
            const ad = this.activePopup();
            if (!this.store.settings().showPopup || !ad || this.popupScheduled || this.wasAdShown())
                return;
            this.popupScheduled = true;
            this.popupTimer = setTimeout(() => {
                if (this.store.settings().showPopup && this.activePopup()?.id === ad.id) {
                    this.popupOpen = true;
                    try {
                        sessionStorage.setItem('mv-ad-shown', ad.id);
                    }
                    catch { }
                }
            }, 6500);
        });
    }
    activePopup() { return this.store.ads().find(ad => ad.position === 'popup' && ad.enabled && !!ad.image) || null; }
    wasAdShown() { try {
        return !!sessionStorage.getItem('mv-ad-shown');
    }
    catch {
        return false;
    } }
    closePopup() { this.popupOpen = false; }
    closeOnEscape() { if (this.popupOpen)
        this.closePopup(); }
    ngOnDestroy() { if (this.popupTimer)
        clearTimeout(this.popupTimer); }
    static ɵfac = function PublicShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PublicShellComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.MediaService), i0.ɵɵdirectiveInject(i3.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicShellComponent, selectors: [["app-public-shell"]], hostBindings: function PublicShellComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function PublicShellComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 6, vars: 1, consts: [[1, "site-shell"], ["id", "main-content", 1, "public-main"], ["class", "popup-overlay", "role", "dialog", "aria-modal", "true", "aria-label", "Advertisement", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-label", "Advertisement", 1, "popup-overlay"], [1, "ad-popup", "glass"], ["type", "button", "aria-label", "Close advertisement", 1, "close-popup", 3, "click"], [1, "ad-tag"], [3, "src", "alt"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer sponsored", "class", "btn btn-red", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer sponsored", 1, "btn", "btn-red", 3, "href"]], template: function PublicShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "app-site-header");
            i0.ɵɵelementStart(2, "main", 1);
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PublicShellComponent_div_4_Template, 12, 5, "div", 2);
            i0.ɵɵelement(5, "app-site-footer");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.popupOpen && ctx.activePopup());
        } }, dependencies: [CommonModule, i4.NgIf, RouterOutlet, SiteHeaderComponent, SiteFooterComponent], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.site-shell[_ngcontent-%COMP%]{min-height:100vh;min-width:0;overflow-x:clip}\n\n.public-main[_ngcontent-%COMP%]{min-height:60vh}\n\n.popup-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;display:grid;place-items:center;background:#001528d8;z-index:400;padding:15px}\n\n.ad-popup[_ngcontent-%COMP%]{position:relative;width:min(460px,95vw);max-height:88vh;overflow-y:auto;border:1px solid #62a6e3;border-radius:16px;background:#064073!important;box-shadow:0 25px 75px #000a22bf}\n\n.ad-popup[_ngcontent-%COMP%] > .ad-tag[_ngcontent-%COMP%]{display:block;padding:10px 15px;color:#f4c6cf;font-size:.61rem}\n\n.ad-popup[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:block;width:100%;max-height:min(55vh,340px);object-fit:contain;background:#052c55}\n\n.ad-popup[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:15px}\n\n.ad-popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 9px;font-size:1.1rem}\n\n.ad-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.81rem;color:#d6edff}\n\n.close-popup[_ngcontent-%COMP%]{position:absolute;z-index:2;top:9px;right:9px;display:grid;place-items:center;background:#001b35d9;color:#fff;border:1px solid #d2f0ff99;border-radius:50%;width:36px;height:36px;font-size:1.4rem}", "\n\n@media(max-width:650px){\n.public-main[_ngcontent-%COMP%]{padding-bottom:74px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicShellComponent, [{
        type: Component,
        args: [{ selector: 'app-public-shell', standalone: true, imports: [CommonModule, RouterOutlet, SiteHeaderComponent, SiteFooterComponent], template: "<div class=\"site-shell\">\n  <app-site-header />\n  <main id=\"main-content\" class=\"public-main\"><router-outlet /></main>\n  <div class=\"popup-overlay\" *ngIf=\"popupOpen && activePopup() as ad\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Advertisement\"><div class=\"ad-popup glass\"><button type=\"button\" class=\"close-popup\" (click)=\"closePopup()\" aria-label=\"Close advertisement\">\u00D7</button><span class=\"ad-tag\">SPONSORED \u00B7 \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD</span><img [src]=\"media.url(ad.image)\" [alt]=\"ad.brand\"/><div><h2>{{ad.brand}}</h2><p *ngIf=\"ad.caption\">{{ad.caption}}</p><a *ngIf=\"ad.link\" [href]=\"ad.link\" target=\"_blank\" rel=\"noopener noreferrer sponsored\" class=\"btn btn-red\">{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BAF','Visit advertiser')}} \u2197</a></div></div></div>\n  <app-site-footer />\n</div>\n", styles: [":host{display:block;min-width:0}\n.site-shell{min-height:100vh;min-width:0;overflow-x:clip}\n\n.public-main{min-height:60vh}\n\n.popup-overlay{position:fixed;inset:0;display:grid;place-items:center;background:#001528d8;z-index:400;padding:15px}\n\n.ad-popup{position:relative;width:min(460px,95vw);max-height:88vh;overflow-y:auto;border:1px solid #62a6e3;border-radius:16px;background:#064073!important;box-shadow:0 25px 75px #000a22bf}\n\n.ad-popup>.ad-tag{display:block;padding:10px 15px;color:#f4c6cf;font-size:.61rem}\n\n.ad-popup>img{display:block;width:100%;max-height:min(55vh,340px);object-fit:contain;background:#052c55}\n\n.ad-popup>div{padding:15px}\n\n.ad-popup h2{margin:0 0 9px;font-size:1.1rem}\n\n.ad-popup p{font-size:.81rem;color:#d6edff}\n\n.close-popup{position:absolute;z-index:2;top:9px;right:9px;display:grid;place-items:center;background:#001b35d9;color:#fff;border:1px solid #d2f0ff99;border-radius:50%;width:36px;height:36px;font-size:1.4rem}\n", "/* Public layout responsive only. */\n@media(max-width:650px){\n.public-main{padding-bottom:74px}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.MediaService }, { type: i3.PreferencesService }], { closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicShellComponent, { className: "PublicShellComponent", filePath: "src/app/shared/public-shell/public-shell.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=public-shell.component.js.map