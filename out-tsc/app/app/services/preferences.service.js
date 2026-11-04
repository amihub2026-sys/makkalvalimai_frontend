import { Injectable, signal, effect } from '@angular/core';
import * as i0 from "@angular/core";
export class PreferencesService {
    language = signal(localStorage.getItem('mv-reader-lang') === 'en' ? 'en' : 'ta', ...(ngDevMode ? [{ debugName: "language" }] : []));
    fontScale = signal(Math.min(1.25, Math.max(.875, Number(localStorage.getItem('mv-font-scale')) || 1)), ...(ngDevMode ? [{ debugName: "fontScale" }] : []));
    constructor() { effect(() => { localStorage.setItem('mv-reader-lang', this.language()); localStorage.setItem('mv-font-scale', String(this.fontScale())); document.documentElement.style.setProperty('--reader-scale', String(this.fontScale())); document.documentElement.lang = this.language(); }); }
    txt(x) { return x?.[this.language()] || ''; }
    label(ta, en) { return this.language() === 'ta' ? ta : en; }
    changeFont(delta) { this.fontScale.set(Math.max(.875, Math.min(1.25, Math.round((this.fontScale() + delta) * 100) / 100))); }
    static ɵfac = function PreferencesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PreferencesService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PreferencesService, factory: PreferencesService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreferencesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
//# sourceMappingURL=preferences.service.js.map