import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
/** Backend-issued media URLs only: no IndexedDB or browser-local publish path. */
export class MediaService {
    apiOrigin = new URL(environment.apiBaseUrl, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200').origin;
    url(reference) {
        const path = reference?.trim() || '';
        if (!path)
            return '';
        // Do not display javascript:, data:, blob:, unknown protocols or fake demo media.
        if (/^https:\/\//i.test(path))
            return path;
        if (/^http:\/\/localhost(?::\d+)?\//i.test(path))
            return path; // local development only
        if (path.startsWith('/api/public/media/'))
            return new URL(path, this.apiOrigin).href;
        if (path.startsWith('/api/admin/media/private/'))
            return new URL(path, this.apiOrigin).href;
        if (path.startsWith('assets/'))
            return path; // permanent identity assets, e.g., logo
        return '';
    }
    static ɵfac = function MediaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MediaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=media.service.js.map