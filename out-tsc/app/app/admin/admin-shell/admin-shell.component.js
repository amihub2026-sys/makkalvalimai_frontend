// admin-shell — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/admin-auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../services/content.service";
import * as i4 from "@angular/common";
function AdminShellComponent_ng_container_9_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵtext(2, " News Categories ");
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 15);
    i0.ɵɵelement(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AdminShellComponent_ng_container_9_a_4_Template, 3, 0, "a", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", n_r1.url);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(n_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", n_r1.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", n_r1.url === "/admin/articles");
} }
export class AdminShellComponent {
    auth;
    router;
    store;
    nav = [
        { url: '/admin/dashboard', icon: 'fa-solid fa-chart-line', label: 'Dashboard' },
        { url: '/admin/articles', icon: 'fa-solid fa-newspaper', label: 'News, Crime & Achievements' },
        { url: '/admin/reports', icon: 'fa-solid fa-clipboard-check', label: 'Approve Public Issues' },
        { url: '/admin/audio', icon: 'fa-solid fa-headphones', label: 'Section MP3 Audio' },
        { url: '/admin/alerts', icon: 'fa-solid fa-bell', label: 'Public Alerts' },
        { url: '/admin/polls', icon: 'fa-solid fa-square-poll-vertical', label: 'Opinion Polls' },
        { url: '/admin/ads', icon: 'fa-solid fa-rectangle-ad', label: 'Advertisements' },
        { url: '/admin/appearance', icon: 'fa-solid fa-palette', label: 'Header, Footer & Headlines' }
    ];
    constructor(auth, router, store) {
        this.auth = auth;
        this.router = router;
        this.store = store;
    }
    get currentTitle() { return this.nav.find(x => this.router.url.startsWith(x.url))?.label || 'Dashboard'; }
    logout() { this.auth.logout(); void this.router.navigateByUrl('/admin/login'); }
    static ɵfac = function AdminShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminShellComponent)(i0.ɵɵdirectiveInject(i1.AdminAuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.ContentService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminShellComponent, selectors: [["app-admin-shell"]], decls: 30, vars: 2, consts: [[1, "admin-layout"], [1, "admin-sidebar"], ["routerLink", "/admin/dashboard", 1, "admin-brand"], ["src", "assets/images/makkal-valimai-logo.png", "alt", "Makkal Valimai Logo"], [4, "ngFor", "ngForOf"], [1, "sidebar-foot"], ["routerLink", "/", "target", "_blank"], [1, "fa-solid", "fa-arrow-up-right-from-square"], ["type", "button", 3, "click"], [1, "fa-solid", "fa-right-from-bracket"], [1, "admin-main"], [1, "admin-topbar"], [1, "eyebrow"], [1, "chip", "warning"], ["routerLink", "/", 1, "btn", "outline"], ["routerLinkActive", "active", 3, "routerLink"], ["routerLink", "/admin/categories", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/admin/categories", "routerLinkActive", "active"], [1, "fa-solid", "fa-layer-group"]], template: function AdminShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "b");
            i0.ɵɵtext(5, "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "small");
            i0.ɵɵtext(7, "NEWSROOM \u00B7 ADMIN");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "nav");
            i0.ɵɵtemplate(9, AdminShellComponent_ng_container_9_Template, 5, 5, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5)(11, "a", 6);
            i0.ɵɵelement(12, "i", 7);
            i0.ɵɵtext(13, " View Public Site ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 8);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_14_listener() { return ctx.logout(); });
            i0.ɵɵelement(15, "i", 9);
            i0.ɵɵtext(16, " Logout ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "main", 10)(18, "header", 11)(19, "div")(20, "span", 12);
            i0.ɵɵtext(21, " MAKKAL VALIMAI NEWSROOM ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "h2");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div")(25, "span", 13);
            i0.ɵɵtext(26, " ADMIN PANEL ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "a", 14);
            i0.ɵɵtext(28, " Public Site \u2197 ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(29, "router-outlet");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.nav);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.currentTitle);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.admin-layout[_ngcontent-%COMP%] {\n  min-height:100vh;display:grid;grid-template-columns:255px minmax(0,1fr);background:radial-gradient(ellipse at 90% 2%,#33101f,#0a0e17 55%)\n}\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  background:#070d17;border-right:1px solid #b41b3869;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;overflow:auto\n}\n\n.admin-brand[_ngcontent-%COMP%] {\n  padding:1.3rem;display:flex;flex-direction:column;align-items:center;gap:.45rem;border-bottom:1px solid #ffffff26\n}\n\n.admin-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:84px;height:84px;object-fit:contain;background:white;border-radius:50%\n}\n\n.admin-brand[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size:1.05rem\n}\n\n.admin-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size:.55rem;letter-spacing:.15em;color:#ff8094\n}\n\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display:grid;padding:1rem .6rem;gap:.3rem\n}\n\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size:.77rem;color:#d9dce7;padding:.8rem .7rem;border-radius:8px;display:flex;gap:.7rem;align-items:center;border:0;background:transparent;text-align:left\n}\n\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color:#fff;background:linear-gradient(90deg,#bd0d28,#451323)\n}\n\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width:20px;text-align:center\n}\n\n.sidebar-foot[_ngcontent-%COMP%] {\n  margin-top:auto;border-top:1px solid #ffffff2b;padding:.7rem\n}\n\n.sidebar-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width:100%\n}\n\n.admin-main[_ngcontent-%COMP%] {\n  padding:1.1rem 1.5rem;min-width:0\n}\n\n.admin-topbar[_ngcontent-%COMP%] {\n  display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.3rem\n}\n\n.admin-topbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin:.3rem 0\n}\n\n.admin-topbar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child {\n  display:flex;align-items:center;gap:.75rem\n}", "\n\n@media (max-width:850px) {\n.admin-layout[_ngcontent-%COMP%] {\n  grid-template-columns:190px minmax(0,1fr)\n}\n.admin-main[_ngcontent-%COMP%] {\n  padding:.8rem\n}\n.admin-topbar[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display:none\n}\n}@media (max-width:600px) {\n.admin-layout[_ngcontent-%COMP%] {\n  grid-template-columns:1fr\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  position:relative;top:auto;height:auto;display:block\n}\n.admin-brand[_ngcontent-%COMP%] {\n  flex-direction:row;padding:.6rem\n}\n.admin-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:42px;height:42px\n}\n.admin-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display:none\n}\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display:flex;overflow-x:auto;padding:.4rem;white-space:nowrap;gap:.25rem\n}\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size:.7rem;padding:.55rem .6rem\n}\n.admin-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width:auto\n}\n.sidebar-foot[_ngcontent-%COMP%] {\n  display:none\n}\n.admin-main[_ngcontent-%COMP%] {\n  padding:.75rem\n}\n.admin-topbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size:1rem\n}\n.admin-topbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size:.7rem;padding:.4rem\n}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminShellComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-shell', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: "\n<div class=\"admin-layout\">\n\n  <!-- ADMIN SIDEBAR -->\n  <aside class=\"admin-sidebar\">\n\n    <!-- LOGO AND BRAND -->\n    <a\n      routerLink=\"/admin/dashboard\"\n      class=\"admin-brand\"\n    >\n      <img\n        src=\"assets/images/makkal-valimai-logo.png\"\n        alt=\"Makkal Valimai Logo\"\n      />\n\n      <b>\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8</b>\n\n      <small>NEWSROOM \u00B7 ADMIN</small>\n    </a>\n\n    <!-- SIDEBAR NAVIGATION -->\n    <nav>\n\n      <ng-container *ngFor=\"let n of nav\">\n\n        <!-- EXISTING MENU ITEMS -->\n        <a\n          [routerLink]=\"n.url\"\n          routerLinkActive=\"active\"\n        >\n          <i [class]=\"n.icon\"></i>\n          {{ n.label }}\n        </a>\n\n        <!-- NEW: NEWS CATEGORY MANAGEMENT -->\n        <a\n          *ngIf=\"n.url === '/admin/articles'\"\n          routerLink=\"/admin/categories\"\n          routerLinkActive=\"active\"\n        >\n          <i class=\"fa-solid fa-layer-group\"></i>\n          News Categories\n        </a>\n\n      </ng-container>\n\n    </nav>\n\n    <!-- SIDEBAR FOOTER -->\n    <div class=\"sidebar-foot\">\n\n      <a\n        routerLink=\"/\"\n        target=\"_blank\"\n      >\n        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n        View Public Site\n      </a>\n\n      <button\n        type=\"button\"\n        (click)=\"logout()\"\n      >\n        <i class=\"fa-solid fa-right-from-bracket\"></i>\n        Logout\n      </button>\n\n    </div>\n\n  </aside>\n\n  <!-- ADMIN MAIN CONTENT -->\n  <main class=\"admin-main\">\n\n    <!-- HEADER -->\n    <header class=\"admin-topbar\">\n\n      <div>\n        <span class=\"eyebrow\">\n          MAKKAL VALIMAI NEWSROOM\n        </span>\n\n        <h2>{{ currentTitle }}</h2>\n      </div>\n\n      <div>\n        <span class=\"chip warning\">\n          ADMIN PANEL\n        </span>\n\n        <a\n          routerLink=\"/\"\n          class=\"btn outline\"\n        >\n          Public Site \u2197\n        </a>\n      </div>\n\n    </header>\n\n    <!-- ADMIN PAGE CONTENT -->\n    <router-outlet></router-outlet>\n\n  </main>\n\n</div>\n", styles: ["/* admin-shell \u2014 section layout and responsive styles */\n.admin-layout {\n  min-height:100vh;display:grid;grid-template-columns:255px minmax(0,1fr);background:radial-gradient(ellipse at 90% 2%,#33101f,#0a0e17 55%)\n}\n\n.admin-sidebar {\n  background:#070d17;border-right:1px solid #b41b3869;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;overflow:auto\n}\n\n.admin-brand {\n  padding:1.3rem;display:flex;flex-direction:column;align-items:center;gap:.45rem;border-bottom:1px solid #ffffff26\n}\n\n.admin-brand img {\n  width:84px;height:84px;object-fit:contain;background:white;border-radius:50%\n}\n\n.admin-brand b {\n  font-size:1.05rem\n}\n\n.admin-brand small {\n  font-size:.55rem;letter-spacing:.15em;color:#ff8094\n}\n\n.admin-sidebar nav {\n  display:grid;padding:1rem .6rem;gap:.3rem\n}\n\n.admin-sidebar nav a,.sidebar-foot a,.sidebar-foot button {\n  font-size:.77rem;color:#d9dce7;padding:.8rem .7rem;border-radius:8px;display:flex;gap:.7rem;align-items:center;border:0;background:transparent;text-align:left\n}\n\n.admin-sidebar nav a:hover,.admin-sidebar nav a.active {\n  color:#fff;background:linear-gradient(90deg,#bd0d28,#451323)\n}\n\n.admin-sidebar nav i {\n  width:20px;text-align:center\n}\n\n.sidebar-foot {\n  margin-top:auto;border-top:1px solid #ffffff2b;padding:.7rem\n}\n\n.sidebar-foot button {\n  width:100%\n}\n\n.admin-main {\n  padding:1.1rem 1.5rem;min-width:0\n}\n\n.admin-topbar {\n  display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.3rem\n}\n\n.admin-topbar h2 {\n  margin:.3rem 0\n}\n\n.admin-topbar>div:last-child {\n  display:flex;align-items:center;gap:.75rem\n}\n", "/* Responsive rules for admin-shell; isolated from common/desktop CSS. */\n@media (max-width:850px) {\n.admin-layout {\n  grid-template-columns:190px minmax(0,1fr)\n}\n.admin-main {\n  padding:.8rem\n}\n.admin-topbar .chip {\n  display:none\n}\n}@media (max-width:600px) {\n.admin-layout {\n  grid-template-columns:1fr\n}\n.admin-sidebar {\n  position:relative;top:auto;height:auto;display:block\n}\n.admin-brand {\n  flex-direction:row;padding:.6rem\n}\n.admin-brand img {\n  width:42px;height:42px\n}\n.admin-brand small {\n  display:none\n}\n.admin-sidebar nav {\n  display:flex;overflow-x:auto;padding:.4rem;white-space:nowrap;gap:.25rem\n}\n.admin-sidebar nav a {\n  font-size:.7rem;padding:.55rem .6rem\n}\n.admin-sidebar nav i {\n  width:auto\n}\n.sidebar-foot {\n  display:none\n}\n.admin-main {\n  padding:.75rem\n}\n.admin-topbar h2 {\n  font-size:1rem\n}\n.admin-topbar .btn {\n  font-size:.7rem;padding:.4rem\n}\n}\n"] }]
    }], () => [{ type: i1.AdminAuthService }, { type: i2.Router }, { type: i3.ContentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/admin/admin-shell/admin-shell.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=admin-shell.component.js.map