import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/preferences.service";
import * as i2 from "@angular/common";
const _c0 = () => ({ exact: true });
function MobileBottomNavComponent_b_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.unread);
} }
export class MobileBottomNavComponent {
    prefs;
    unread = 0;
    toggleMore = new EventEmitter();
    constructor(prefs) {
        this.prefs = prefs;
    }
    static ɵfac = function MobileBottomNavComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MobileBottomNavComponent)(i0.ɵɵdirectiveInject(i1.PreferencesService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MobileBottomNavComponent, selectors: [["app-mobile-bottom-nav"]], inputs: { unread: "unread" }, outputs: { toggleMore: "toggleMore" }, decls: 22, vars: 8, consts: [["aria-label", "Mobile navigation", 1, "mobile-bottom-nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "fa-solid", "fa-house"], ["routerLink", "/madurai-news", "routerLinkActive", "active"], [1, "fa-solid", "fa-newspaper"], ["routerLink", "/report-problem", 1, "mobile-report"], [1, "fa-solid", "fa-plus"], ["routerLink", "/public-alerts", "routerLinkActive", "active"], [1, "fa-regular", "fa-bell"], [4, "ngIf"], ["type", "button", 3, "click"], [1, "fa-solid", "fa-bars"]], template: function MobileBottomNavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "a", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "a", 3);
            i0.ɵɵelement(6, "i", 4);
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 5);
            i0.ɵɵelement(10, "i", 6);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "a", 7);
            i0.ɵɵelement(14, "i", 8);
            i0.ɵɵelementStart(15, "span");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, MobileBottomNavComponent_b_17_Template, 2, 1, "b", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 10);
            i0.ɵɵlistener("click", function MobileBottomNavComponent_Template_button_click_18_listener() { return ctx.toggleMore.emit(); });
            i0.ɵɵelement(19, "i", 11);
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1", "Home"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD", "News"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD", "Report"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1", "Alerts"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.unread);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD", "More"));
        } }, dependencies: [CommonModule, i2.NgIf, RouterLink, RouterLinkActive], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.mobile-bottom-nav[_ngcontent-%COMP%]{display:none}", "\n\n@media(max-width:650px){\n.mobile-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:250;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:stretch;min-height:65px;padding:5px max(5px,env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) max(5px,env(safe-area-inset-left));border-top:1px solid #4287bc;background:linear-gradient(180deg,#09487f,#022e5d);box-shadow:0 -10px 32px #0018337a}\n.mobile-bottom-nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .mobile-bottom-nav[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border:0;background:transparent;color:#c2dbf0;font-size:.58rem;font-weight:700;position:relative;min-width:0}\n.mobile-bottom-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.15rem}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#ff5872}\n.mobile-bottom-nav[_ngcontent-%COMP%]   .mobile-report[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:grid;place-items:center;font-size:1.27rem;background:linear-gradient(145deg,#ff2844,#bb0628);width:43px;height:43px;box-shadow:0 3px 15px #ff1e4259;color:#fff;border-radius:50%;margin-top:-24px}\n.mobile-bottom-nav[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{position:absolute;top:0;left:57%;display:grid;place-items:center;font-size:.5rem;background:#dc1737;color:#fff;border-radius:50%;width:16px;height:16px}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileBottomNavComponent, [{
        type: Component,
        args: [{ selector: 'app-mobile-bottom-nav', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: "<nav class=\"mobile-bottom-nav\" aria-label=\"Mobile navigation\"><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fa-solid fa-house\"></i><span>{{prefs.label('\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1','Home')}}</span></a><a routerLink=\"/madurai-news\" routerLinkActive=\"active\"><i class=\"fa-solid fa-newspaper\"></i><span>{{prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BCD','News')}}</span></a><a routerLink=\"/report-problem\" class=\"mobile-report\"><i class=\"fa-solid fa-plus\"></i><span>{{prefs.label('\u0BAA\u0BC1\u0B95\u0BBE\u0BB0\u0BCD','Report')}}</span></a><a routerLink=\"/public-alerts\" routerLinkActive=\"active\"><i class=\"fa-regular fa-bell\"></i><span>{{prefs.label('\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1','Alerts')}}</span><b *ngIf=\"unread\">{{unread}}</b></a><button type=\"button\" (click)=\"toggleMore.emit()\"><i class=\"fa-solid fa-bars\"></i><span>{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD','More')}}</span></button></nav>\n", styles: [":host{display:block;min-width:0}\n.mobile-bottom-nav{display:none}\n", "/* Mobile/tablet for mobile-bottom-nav */\n@media(max-width:650px){\n.mobile-bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:250;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:stretch;min-height:65px;padding:5px max(5px,env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) max(5px,env(safe-area-inset-left));border-top:1px solid #4287bc;background:linear-gradient(180deg,#09487f,#022e5d);box-shadow:0 -10px 32px #0018337a}\n.mobile-bottom-nav>a,.mobile-bottom-nav>button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border:0;background:transparent;color:#c2dbf0;font-size:.58rem;font-weight:700;position:relative;min-width:0}\n.mobile-bottom-nav i{font-size:1.15rem}\n.mobile-bottom-nav .active{color:#ff5872}\n.mobile-bottom-nav .mobile-report i{display:grid;place-items:center;font-size:1.27rem;background:linear-gradient(145deg,#ff2844,#bb0628);width:43px;height:43px;box-shadow:0 3px 15px #ff1e4259;color:#fff;border-radius:50%;margin-top:-24px}\n.mobile-bottom-nav b{position:absolute;top:0;left:57%;display:grid;place-items:center;font-size:.5rem;background:#dc1737;color:#fff;border-radius:50%;width:16px;height:16px}\n}\n"] }]
    }], () => [{ type: i1.PreferencesService }], { unread: [{
            type: Input
        }], toggleMore: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MobileBottomNavComponent, { className: "MobileBottomNavComponent", filePath: "src/app/shared/mobile-bottom-nav/mobile-bottom-nav.component.ts", lineNumber: 6 }); })();
//# sourceMappingURL=mobile-bottom-nav.component.js.map