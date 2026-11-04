import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
function DashboardComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Loading dashboard statistics... ");
    i0.ɵɵelementEnd();
} }
function DashboardComponent_p_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error, " ");
} }
export class DashboardComponent {
    http;
    totalArticles = null;
    pendingCount = null;
    solvedCount = null;
    alertsCount = null;
    loading = true;
    error = '';
    base = environment.apiBaseUrl;
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        void this.loadDashboard();
    }
    async loadDashboard() {
        this.loading = true;
        this.error = '';
        try {
            const [articles, issues, alerts] = await Promise.all([
                firstValueFrom(this.http.get(`${this.base}/admin/articles`, { withCredentials: true })),
                firstValueFrom(this.http.get(`${this.base}/admin/issues`, { withCredentials: true })),
                firstValueFrom(this.http.get(`${this.base}/admin/alerts`, { withCredentials: true }))
            ]);
            if (!Array.isArray(articles) ||
                !Array.isArray(issues) ||
                !Array.isArray(alerts)) {
                throw new Error('Unexpected dashboard API response');
            }
            this.totalArticles = articles.length;
            this.pendingCount = issues.filter(issue => issue.status === 'pending').length;
            this.solvedCount = issues.filter(issue => issue.status === 'solved').length;
            this.alertsCount = alerts.filter(alert => alert.published).length;
        }
        catch (error) {
            console.error('Dashboard API error:', error);
            this.error = 'Unable to load dashboard data.';
        }
        finally {
            this.loading = false;
        }
    }
    static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-admin-dashboard"]], decls: 38, vars: 6, consts: [[1, "stat-grid"], ["routerLink", "/admin/articles", 1, "stat", "glass"], [1, "fa-solid", "fa-newspaper"], ["routerLink", "/admin/reports", 1, "stat", "glass"], [1, "fa-solid", "fa-clock"], [1, "fa-solid", "fa-circle-check"], ["routerLink", "/admin/alerts", 1, "stat", "glass"], [1, "fa-solid", "fa-bell"], [1, "panel", "glass"], [4, "ngIf"], ["role", "alert", 4, "ngIf"], ["role", "alert"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementStart(3, "b");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "News Articles");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 3);
            i0.ɵɵelement(8, "i", 4);
            i0.ɵɵelementStart(9, "b");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Awaiting Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "a", 3);
            i0.ɵɵelement(14, "i", 5);
            i0.ɵɵelementStart(15, "b");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18, "Resolved Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "a", 6);
            i0.ɵɵelement(20, "i", 7);
            i0.ɵɵelementStart(21, "b");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Public Alerts");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 8)(26, "h2");
            i0.ɵɵtext(27, "Newsroom workflow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29, " Public issue \u2192 Pending \u2192 Admin verification \u2192 Approved \u2192 Public Issues. Verified resolution \u2192 Problems Solved. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p");
            i0.ɵɵtext(31, " Articles have unique URLs, separate Tamil and English content, optional MP3 files and timestamps for archive filtering. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "p")(33, "b");
            i0.ɵɵtext(34, "Dashboard data:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(35, " Connected to the authenticated Node.js and MongoDB APIs. Other admin features are being integrated. ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, DashboardComponent_p_36_Template, 2, 0, "p", 9)(37, DashboardComponent_p_37_Template, 2, 1, "p", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.totalArticles ?? "\u2014");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.pendingCount ?? "\u2014");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.solvedCount ?? "\u2014");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.alertsCount ?? "\u2014");
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [CommonModule, i2.NgIf, RouterLink], styles: ["\n\n.stat-grid[_ngcontent-%COMP%] {\n  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.9rem;margin-bottom:1rem\n}\n\n.stat[_ngcontent-%COMP%] {\n  padding:1.25rem;display:grid;gap:.5rem\n}\n\n.stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size:1.3rem;color:#ff4e65\n}\n\n.stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size:1.8rem\n}\n\n.stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size:.77rem;color:#ccd2dd\n}", "\n\n@media (max-width:850px) {\n.stat-grid[_ngcontent-%COMP%] {\n  grid-template-columns:repeat(2,minmax(0,1fr))\n}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', standalone: true, imports: [CommonModule, RouterLink], template: "\n<div class=\"stat-grid\">\n\n  <a routerLink=\"/admin/articles\" class=\"stat glass\">\n    <i class=\"fa-solid fa-newspaper\"></i>\n    <b>{{ totalArticles ?? '\u2014' }}</b>\n    <span>News Articles</span>\n  </a>\n\n  <a routerLink=\"/admin/reports\" class=\"stat glass\">\n    <i class=\"fa-solid fa-clock\"></i>\n    <b>{{ pendingCount ?? '\u2014' }}</b>\n    <span>Awaiting Approval</span>\n  </a>\n\n  <a routerLink=\"/admin/reports\" class=\"stat glass\">\n    <i class=\"fa-solid fa-circle-check\"></i>\n    <b>{{ solvedCount ?? '\u2014' }}</b>\n    <span>Resolved Reports</span>\n  </a>\n\n  <a routerLink=\"/admin/alerts\" class=\"stat glass\">\n    <i class=\"fa-solid fa-bell\"></i>\n    <b>{{ alertsCount ?? '\u2014' }}</b>\n    <span>Public Alerts</span>\n  </a>\n\n</div>\n\n<div class=\"panel glass\">\n\n  <h2>Newsroom workflow</h2>\n\n  <p>\n    Public issue \u2192 Pending \u2192 Admin verification \u2192\n    Approved \u2192 Public Issues.\n    Verified resolution \u2192 Problems Solved.\n  </p>\n\n  <p>\n    Articles have unique URLs, separate Tamil and\n    English content, optional MP3 files and\n    timestamps for archive filtering.\n  </p>\n\n  <p>\n    <b>Dashboard data:</b>\n    Connected to the authenticated Node.js and\n    MongoDB APIs. Other admin features are\n    being integrated.\n  </p>\n\n  <p *ngIf=\"loading\">\n    Loading dashboard statistics...\n  </p>\n\n  <p *ngIf=\"error\" role=\"alert\">\n    {{ error }}\n  </p>\n\n</div>\n", styles: ["/* dashboard \u2014 section layout and responsive styles */\n.stat-grid {\n  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.9rem;margin-bottom:1rem\n}\n\n.stat {\n  padding:1.25rem;display:grid;gap:.5rem\n}\n\n.stat i {\n  font-size:1.3rem;color:#ff4e65\n}\n\n.stat b {\n  font-size:1.8rem\n}\n\n.stat span {\n  font-size:.77rem;color:#ccd2dd\n}\n", "/* Responsive rules for dashboard; isolated from common/desktop CSS. */\n@media (max-width:850px) {\n.stat-grid {\n  grid-template-columns:repeat(2,minmax(0,1fr))\n}\n}\n"] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/admin/dashboard/dashboard.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=dashboard.component.js.map