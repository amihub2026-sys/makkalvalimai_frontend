import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../services/news-api.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function AdminLoginComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
export class AdminLoginComponent {
    auth;
    router;
    email = '';
    password = '';
    error = '';
    submitting = false;
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    async login() {
        if (this.submitting) {
            return;
        }
        this.error = '';
        this.submitting = true;
        try {
            await this.auth.login(this.email.trim(), this.password);
            this.password = '';
            await this.router.navigateByUrl('/admin/dashboard');
        }
        catch (error) {
            console.error('Admin login failed:', error);
            this.error = 'Login failed. Check your credentials or server connection.';
        }
        finally {
            this.submitting = false;
        }
    }
    static ɵfac = function AdminLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminLoginComponent)(i0.ɵɵdirectiveInject(i1.NewsApiService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 22, vars: 5, consts: [[1, "login-bg"], [1, "login-card", "glass"], ["src", "assets/images/makkal-valimai-logo.png", "alt", "Makkal Valimai"], [1, "eyebrow"], [3, "ngSubmit"], ["type", "email", "name", "email", "required", "", "autocomplete", "username", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-red", "wide", 3, "disabled"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/"], [1, "form-error"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵtext(4, "SECURE ADMIN ACCESS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Admin Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Editor Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "form", 4);
            i0.ɵɵlistener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_9_listener() { return ctx.login(); });
            i0.ɵɵelementStart(10, "label");
            i0.ɵɵtext(11, "Email");
            i0.ɵɵelementStart(12, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "label");
            i0.ɵɵtext(14, "Password");
            i0.ɵɵelementStart(15, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, AdminLoginComponent_p_16_Template, 2, 1, "p", 7);
            i0.ɵɵelementStart(17, "button", 8);
            i0.ɵɵtext(18);
            i0.ɵɵelement(19, "i", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "a", 10);
            i0.ɵɵtext(21, "\u2190 Back to public website");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.submitting);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.submitting ? "Signing in\u2026" : "Login", " ");
        } }, dependencies: [CommonModule, i3.NgIf, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, RouterLink], styles: ["\n\n.login-bg[_ngcontent-%COMP%] {\n  min-height:100vh;display:grid;place-items:center;padding:2rem;background:radial-gradient(circle at 24% 15%,rgba(52,138,203,.45),transparent 43%),linear-gradient(140deg,#07477b,#002c5b)\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width:min(480px,100%);padding:2rem;display:grid;gap:.8rem\n}\n\n.login-card[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  width:108px;height:108px;border-radius:50%;background:#fff;margin:0 auto\n}\n\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .login-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align:center;margin:0\n}\n\n.login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display:grid;gap:1rem\n}\n\n.login-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top:.35rem\n}\n\n\n\n.login-card[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  font-size:.75rem;text-align:center;color:#ffa5b5\n}", "\n\n@media(max-width:650px){\n  .login-bg[_ngcontent-%COMP%]{padding:12px;min-height:100dvh}\n  .login-card[_ngcontent-%COMP%]{width:100%;padding:1.25rem;gap:.7rem;border-radius:13px}\n  .login-card[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:80px;width:80px}\n  .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.35rem}\n  .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{gap:.8rem}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminLoginComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-login', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    RouterLink
                ], template: "<div class=\"login-bg\">\n<div class=\"login-card glass\">\n<img src=\"assets/images/makkal-valimai-logo.png\" alt=\"Makkal Valimai\"/>\n<span class=\"eyebrow\">SECURE ADMIN ACCESS</span>\n<h1>Admin Login</h1>\n<p>\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8 \u00B7 Editor Dashboard</p>\n<form (ngSubmit)=\"login()\">\n<label>Email<input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required autocomplete=\"username\"/>\n</label>\n<label>Password<input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required autocomplete=\"current-password\"/>\n</label>\n<p class=\"form-error\" *ngIf=\"error\">{{error}}</p>\n<button class=\"btn btn-red wide\" type=\"submit\" [disabled]=\"submitting\">{{submitting ? \"Signing in\u2026\" : \"Login\"}} <i class=\"fa-solid fa-arrow-right\">\n</i>\n</button>\n</form>\n\n<a routerLink=\"/\">\u2190 Back to public website</a>\n</div>\n</div>\n", styles: ["/* login \u2014 section layout and responsive styles */\n.login-bg {\n  min-height:100vh;display:grid;place-items:center;padding:2rem;background:radial-gradient(circle at 24% 15%,rgba(52,138,203,.45),transparent 43%),linear-gradient(140deg,#07477b,#002c5b)\n}\n\n.login-card {\n  width:min(480px,100%);padding:2rem;display:grid;gap:.8rem\n}\n\n.login-card>img {\n  width:108px;height:108px;border-radius:50%;background:#fff;margin:0 auto\n}\n\n.login-card h1,.login-card p {\n  text-align:center;margin:0\n}\n\n.login-card form {\n  display:grid;gap:1rem\n}\n\n.login-card label input {\n  margin-top:.35rem\n}\n\n\n\n.login-card>a {\n  font-size:.75rem;text-align:center;color:#ffa5b5\n}\n", "/* Admin login is a single readable app-style card on mobile. */\n@media(max-width:650px){\n  .login-bg{padding:12px;min-height:100dvh}\n  .login-card{width:100%;padding:1.25rem;gap:.7rem;border-radius:13px}\n  .login-card>img{height:80px;width:80px}\n  .login-card h1{font-size:1.35rem}\n  .login-card form{gap:.8rem}\n}\n"] }]
    }], () => [{ type: i1.NewsApiService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/admin/login/login.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=login.component.js.map