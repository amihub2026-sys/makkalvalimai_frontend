import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NewsApiService } from './news-api.service';
import * as i0 from "@angular/core";
/**
 * The public website is server-owned. No fabricated articles, ads, polls, counts,
 * alerts or browser-local content writes are permitted here.
 */
const EMPTY_SETTINGS = {
    headerImage: '', footerImage: '', headlines: [], sectionAudio: {}, showPopup: false
};
function emptySnapshot() {
    return { articles: [], issues: [], alerts: [], polls: [], ads: [], settings: { ...EMPTY_SETTINGS } };
}
function array(value) { return Array.isArray(value) ? value : []; }
export class ContentService {
    api = inject(NewsApiService);
    browser = isPlatformBrowser(inject(PLATFORM_ID));
    state = signal(emptySnapshot(), ...(ngDevMode ? [{ debugName: "state" }] : []));
    inFlight;
    refreshTimer;
    snapshot = this.state.asReadonly();
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
    loadError = signal('', ...(ngDevMode ? [{ debugName: "loadError" }] : []));
    lastUpdated = signal(null, ...(ngDevMode ? [{ debugName: "lastUpdated" }] : []));
    articles = computed(() => this.state().articles, ...(ngDevMode ? [{ debugName: "articles" }] : []));
    published = computed(() => this.state().articles
        .filter(article => article.published === true &&
        Number.isFinite(Date.parse(article.publishedAt)) &&
        Date.parse(article.publishedAt) <= Date.now())
        .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)), ...(ngDevMode ? [{ debugName: "published" }] : []));
    issues = computed(() => this.state().issues, ...(ngDevMode ? [{ debugName: "issues" }] : []));
    approvedIssues = computed(() => this.state().issues.filter(item => item.status === 'approved'), ...(ngDevMode ? [{ debugName: "approvedIssues" }] : []));
    solvedIssues = computed(() => this.state().issues.filter(item => item.status === 'solved'), ...(ngDevMode ? [{ debugName: "solvedIssues" }] : []));
    pendingIssues = computed(() => this.state().issues.filter(item => item.status === 'pending'), ...(ngDevMode ? [{ debugName: "pendingIssues" }] : []));
    alerts = computed(() => this.state().alerts.filter(item => item.published &&
        Date.parse(item.expiresAt) > Date.now() && Date.parse(item.effectiveDate) <= Date.now()), ...(ngDevMode ? [{ debugName: "alerts" }] : []));
    polls = computed(() => this.state().polls.filter(item => item.active &&
        (!item.expiresAt || Date.parse(item.expiresAt) > Date.now())), ...(ngDevMode ? [{ debugName: "polls" }] : []));
    ads = computed(() => this.state().ads.filter(item => item.enabled), ...(ngDevMode ? [{ debugName: "ads" }] : []));
    settings = computed(() => this.state().settings, ...(ngDevMode ? [{ debugName: "settings" }] : []));
    constructor() {
        if (this.browser) {
            void this.refreshFromBackend();
            // Periodic refresh: published news and alerts update without a page reload.
            this.refreshTimer = setInterval(() => {
                if (document.visibilityState === 'visible' && navigator.onLine) {
                    void this.refreshFromBackend();
                }
            }, 120_000);
            window.addEventListener('online', () => void this.refreshFromBackend());
        }
    }
    refreshFromBackend() {
        if (this.inFlight)
            return this.inFlight;
        this.loading.set(this.lastUpdated() === null);
        this.loadError.set('');
        this.inFlight = (async () => {
            try {
                const response = await this.api.snapshot();
                if (!response || typeof response !== 'object' || Array.isArray(response)) {
                    throw new Error('The server returned invalid news data.');
                }
                // The public bootstrap endpoint decides what may be published. Do not
                // read private admin records or substitute sample records on errors.
                this.state.set({
                    articles: array(response.articles),
                    issues: array(response.issues).filter(item => item.status === 'approved' || item.status === 'solved'),
                    alerts: array(response.alerts),
                    polls: array(response.polls),
                    ads: array(response.ads),
                    settings: { ...EMPTY_SETTINGS, ...response.settings,
                        sectionAudio: { ...EMPTY_SETTINGS.sectionAudio, ...(response.settings?.sectionAudio || {}) },
                        headlines: array(response.settings?.headlines) }
                });
                this.lastUpdated.set(new Date());
            }
            catch (error) {
                console.error('Makkal Valimai public API:', error);
                this.loadError.set('Unable to connect to the news server. Please try again.');
            }
            finally {
                this.loading.set(false);
            }
        })().finally(() => { this.inFlight = undefined; });
        return this.inFlight;
    }
    static ɵfac = function ContentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
//# sourceMappingURL=content.service.js.map