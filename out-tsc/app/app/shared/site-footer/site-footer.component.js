import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAV, MORE } from '../../core/models';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "../../services/media.service";
import * as i4 from "@angular/common";
function SiteFooterComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", n_r1.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prefs.txt(n_r1.name));
} }
function SiteFooterComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", n_r3.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prefs.txt(n_r3.name));
} }
function SiteFooterComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13)(1, "span");
    i0.ɵɵtext(2, "ADVERTISEMENT / \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 14);
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ad_r4 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ad_r4.link || null, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("target", ad_r4.link ? "_blank" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.media.url(ad_r4.image), i0.ɵɵsanitizeUrl)("alt", ad_r4.brand);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ad_r4.brand);
} }
export class SiteFooterComponent {
    store;
    prefs;
    media;
    nav = NAV;
    more = MORE;
    year = new Date().getFullYear();
    constructor(store, prefs, media) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
    }
    // Reuse a second backend-supported banner when available. No fictional footer ad position.
    footerAd() { return this.store.ads().filter(ad => ad.position === 'banner' && !!ad.image)[1] || null; }
    static ɵfac = function SiteFooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SiteFooterComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteFooterComponent, selectors: [["app-site-footer"]], decls: 37, vars: 15, consts: [[1, "site-footer"], [1, "footer-content"], [1, "footer-brand"], ["src", "assets/images/makkal-valimai-logo.png", "alt", "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/public-alerts"], ["routerLink", "/opinion-polls"], ["routerLink", "/about-contact"], ["routerLink", "/admin/login", 1, "footer-admin"], [1, "fa-solid", "fa-lock"], ["class", "footer-sponsored", "rel", "noopener noreferrer sponsored", 3, "href", 4, "ngIf"], [1, "footer-bottom"], [3, "routerLink"], ["rel", "noopener noreferrer sponsored", 1, "footer-sponsored", 3, "href"], [3, "src", "alt"]], template: function SiteFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div")(9, "h4");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, SiteFooterComponent_a_11_Template, 2, 2, "a", 4);
            i0.ɵɵelementStart(12, "a", 5);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 6);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div")(17, "h4");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, SiteFooterComponent_a_19_Template, 2, 2, "a", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div")(21, "h4");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p");
            i0.ɵɵtext(24, "Madurai District, Tamil Nadu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "p");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "a", 7);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "a", 8);
            i0.ɵɵtext(30, "Admin Login ");
            i0.ɵɵelement(31, "i", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(32, SiteFooterComponent_a_32_Template, 6, 5, "a", 10);
            i0.ɵɵelementStart(33, "div", 11);
            i0.ɵɵtext(34);
            i0.ɵɵelementStart(35, "span");
            i0.ɵɵtext(36, "Designed by AMI HUB");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-image", ctx.store.settings().footerImage ? "linear-gradient(90deg,rgba(3,29,61,.97),rgba(1,41,87,.90)),url(" + ctx.media.url(ctx.store.settings().footerImage) + ")" : null);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8\u0BAF\u0BBF\u0BA9\u0BCD \u0B95\u0BC1\u0BB0\u0BB2\u0BCD, \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0B95!", "Madurai\u2019s voice, for the people"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD, \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD, \u0BB5\u0BBF\u0BB4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0BA3\u0BB0\u0BCD\u0BB5\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD.", "Madurai issues, local news, awareness and verified solutions."));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "Explore"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.nav);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Public Alerts"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Polls"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD", "More"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.more);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1", "Contact"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95 \u0B86\u0BAF\u0BCD\u0BB5\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAA\u0BCD \u0BAA\u0BBF\u0BB1\u0B95\u0BC7 \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.", "Reports undergo editorial review before publication."));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.prefs.label("\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1\u0B95\u0BCA\u0BB3\u0BCD\u0BB3", "Contact us"), " \u2192");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.footerAd());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u00A9 ", ctx.year, " \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Madurai District ");
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, RouterLink], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.site-footer[_ngcontent-%COMP%]{background:linear-gradient(125deg,#032c58,#06447c);border-top:2px solid #397fba;background-position:center;background-size:cover;position:relative}\n\n.footer-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.1fr;gap:32px;max-width:1390px;margin:auto;padding:35px 20px}\n\n.footer-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;object-fit:contain;background:#fff;border-radius:50%;margin-bottom:12px}\n\n.footer-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:1.05rem}\n\n.footer-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.87rem;color:#fff;border-left:3px solid #fa2645;padding-left:9px;margin-bottom:14px}\n\n.footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;line-height:1.8;color:#bbd8ef}\n\n.footer-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#c6e6ff;font-size:.74rem;margin:8px 0}\n\n.footer-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}\n\n.footer-admin[_ngcontent-%COMP%]{color:#ff8c99!important}\n\n.footer-sponsored[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:9px;max-width:1000px;margin:0 auto 20px;padding:9px;border:1px solid #5fa0d5;border-radius:10px;color:#fff;background:#10548a}\n\n.footer-sponsored[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{grid-column:1/-1;font-size:.55rem;letter-spacing:.15em;color:#b4d7f0}\n\n.footer-sponsored[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:min(270px,40vw);max-height:100px;object-fit:contain}\n\n.footer-sponsored[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:.9rem}\n\n.footer-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10px;padding:13px max(20px,calc((100vw - 1360px)/2));border-top:1px solid #78a7ce37;font-size:.68rem;color:#b0d3ec;background:#01244b}\n\n.footer-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e5eff9}", "\n\n@media(max-width:650px){\n.site-footer[_ngcontent-%COMP%]{margin-bottom:65px}\n.footer-content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;padding:27px 16px}\n.footer-brand[_ngcontent-%COMP%]{grid-column:1/-1}\n.footer-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.78rem}\n.footer-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.71rem}\n.footer-bottom[_ngcontent-%COMP%]{padding:13px 15px;flex-wrap:wrap}\n.footer-sponsored[_ngcontent-%COMP%]{margin:0 12px 20px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteFooterComponent, [{
        type: Component,
        args: [{ selector: 'app-site-footer', standalone: true, imports: [CommonModule, RouterLink], template: "<footer class=\"site-footer\" [style.background-image]=\"store.settings().footerImage ? 'linear-gradient(90deg,rgba(3,29,61,.97),rgba(1,41,87,.90)),url('+media.url(store.settings().footerImage)+')' : null\">\n    <div class=\"footer-content\"><div class=\"footer-brand\"><img src=\"assets/images/makkal-valimai-logo.png\" alt=\"\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8\"/><h3>{{prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8\u0BAF\u0BBF\u0BA9\u0BCD \u0B95\u0BC1\u0BB0\u0BB2\u0BCD, \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0B95!','Madurai\u2019s voice, for the people')}}</h3><p>{{prefs.label('\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BBF\u0BB0\u0B9A\u0BCD\u0B9A\u0BBF\u0BA9\u0BC8\u0B95\u0BB3\u0BCD, \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD, \u0BB5\u0BBF\u0BB4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0BA3\u0BB0\u0BCD\u0BB5\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BA4\u0BC0\u0BB0\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD.','Madurai issues, local news, awareness and verified solutions.')}}</p></div>\n    <div><h4>{{prefs.label('\u0BAE\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BAF \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0B95\u0BB3\u0BCD','Explore')}}</h4><a *ngFor=\"let n of nav\" [routerLink]=\"n.path\">{{prefs.txt(n.name)}}</a><a routerLink=\"/public-alerts\">{{prefs.label('\u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Public Alerts')}}</a><a routerLink=\"/opinion-polls\">{{prefs.label('\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Polls')}}</a></div>\n    <div><h4>{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD','More')}}</h4><a *ngFor=\"let n of more\" [routerLink]=\"n.path\">{{prefs.txt(n.name)}}</a></div>\n    <div><h4>{{prefs.label('\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1','Contact')}}</h4><p>Madurai District, Tamil Nadu</p><p>{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0BA8\u0BBF\u0BB0\u0BCD\u0BB5\u0BBE\u0B95 \u0B86\u0BAF\u0BCD\u0BB5\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAA\u0BCD \u0BAA\u0BBF\u0BB1\u0B95\u0BC7 \u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD.','Reports undergo editorial review before publication.')}}</p><a routerLink=\"/about-contact\">{{prefs.label('\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1\u0B95\u0BCA\u0BB3\u0BCD\u0BB3','Contact us')}} \u2192</a><a routerLink=\"/admin/login\" class=\"footer-admin\">Admin Login <i class=\"fa-solid fa-lock\"></i></a></div></div>\n    <a *ngIf=\"footerAd() as ad\" class=\"footer-sponsored\" [href]=\"ad.link || null\" [attr.target]=\"ad.link ? '_blank' : null\" rel=\"noopener noreferrer sponsored\"><span>ADVERTISEMENT / \u0BB5\u0BBF\u0BB3\u0BAE\u0BCD\u0BAA\u0BB0\u0BAE\u0BCD</span><img [src]=\"media.url(ad.image)\" [alt]=\"ad.brand\"/><b>{{ad.brand}}</b></a>\n    <div class=\"footer-bottom\">\u00A9 {{year}} \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Madurai District <span>Designed by AMI HUB</span></div>\n  </footer>\n", styles: [":host{display:block;min-width:0}\n.site-footer{background:linear-gradient(125deg,#032c58,#06447c);border-top:2px solid #397fba;background-position:center;background-size:cover;position:relative}\n\n.footer-content{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.1fr;gap:32px;max-width:1390px;margin:auto;padding:35px 20px}\n\n.footer-brand img{width:60px;height:60px;object-fit:contain;background:#fff;border-radius:50%;margin-bottom:12px}\n\n.footer-brand h3{color:#fff;font-size:1.05rem}\n\n.footer-content h4{font-size:.87rem;color:#fff;border-left:3px solid #fa2645;padding-left:9px;margin-bottom:14px}\n\n.footer-content p{font-size:.75rem;line-height:1.8;color:#bbd8ef}\n\n.footer-content a{display:block;color:#c6e6ff;font-size:.74rem;margin:8px 0}\n\n.footer-content a:hover{color:#fff}\n\n.footer-admin{color:#ff8c99!important}\n\n.footer-sponsored{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:9px;max-width:1000px;margin:0 auto 20px;padding:9px;border:1px solid #5fa0d5;border-radius:10px;color:#fff;background:#10548a}\n\n.footer-sponsored>span{grid-column:1/-1;font-size:.55rem;letter-spacing:.15em;color:#b4d7f0}\n\n.footer-sponsored img{width:min(270px,40vw);max-height:100px;object-fit:contain}\n\n.footer-sponsored b{font-size:.9rem}\n\n.footer-bottom{display:flex;justify-content:space-between;gap:10px;padding:13px max(20px,calc((100vw - 1360px)/2));border-top:1px solid #78a7ce37;font-size:.68rem;color:#b0d3ec;background:#01244b}\n\n.footer-bottom span{color:#e5eff9}\n", "/* Mobile/tablet for site-footer */\n@media(max-width:650px){\n.site-footer{margin-bottom:65px}\n.footer-content{grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;padding:27px 16px}\n.footer-brand{grid-column:1/-1}\n.footer-content h4{font-size:.78rem}\n.footer-content a{font-size:.71rem}\n.footer-bottom{padding:13px 15px;flex-wrap:wrap}\n.footer-sponsored{margin:0 12px 20px}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SiteFooterComponent, { className: "SiteFooterComponent", filePath: "src/app/shared/site-footer/site-footer.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=site-footer.component.js.map