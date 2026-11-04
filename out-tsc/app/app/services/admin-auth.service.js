import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "./news-api.service";
export class AdminAuthService {
    api;
    active = signal(false, ...(ngDevMode ? [{ debugName: "active" }] : []));
    loggedIn = this.active.asReadonly();
    constructor(api) {
        this.api = api;
    }
    // Check the real backend session
    async checkSession() {
        try {
            const response = await this.api.restoreSession();
            const valid = Boolean(response?.user);
            this.active.set(valid);
            return valid;
        }
        catch {
            this.active.set(false);
            return false;
        }
    }
    // Real admin login
    async login(email, password) {
        try {
            const response = await this.api.login(email.trim(), password);
            const valid = Boolean(response?.user);
            this.active.set(valid);
            return valid;
        }
        catch {
            this.active.set(false);
            return false;
        }
    }
    // End the real backend session
    async logout() {
        await this.api.logout();
        this.active.set(false);
    }
    static ɵfac = function AdminAuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminAuthService)(i0.ɵɵinject(i1.NewsApiService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminAuthService, factory: AdminAuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.NewsApiService }], null); })();
// Protect admin pages with the real backend session
export const adminGuard = async () => {
    const auth = inject(AdminAuthService);
    const router = inject(Router);
    const authenticated = await auth.checkSession();
    if (authenticated) {
        return true;
    }
    return router.parseUrl('/admin/login');
};
//# sourceMappingURL=admin-auth.service.js.map