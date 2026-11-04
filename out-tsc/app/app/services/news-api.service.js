import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NewsApiService {
    http;
    base = environment.apiBaseUrl;
    csrfToken = '';
    constructor(http) {
        this.http = http;
    }
    // ==========================================
    // ADMIN REQUEST OPTIONS
    // ==========================================
    adminOptions() {
        return {
            withCredentials: true,
            headers: {
                'X-CSRF-Token': this.csrfToken
            }
        };
    }
    // ==========================================
    // PUBLIC WEBSITE
    // ==========================================
    snapshot() {
        return firstValueFrom(this.http.get(`${this.base}/public/bootstrap`));
    }
    articles() {
        return firstValueFrom(this.http.get(`${this.base}/public/articles`));
    }
    article(slug) {
        return firstValueFrom(this.http.get(`${this.base}/public/articles/${encodeURIComponent(slug)}`));
    }
    /** Existing backend: GET /public/articles?kind=&date=&area=&page=&limit= */
    articlesByCategory(kind, options = {}) {
        const params = {
            kind: kind.trim().toLowerCase(),
            page: String(options.page || 1),
            limit: String(options.limit || 30)
        };
        if (options.date)
            params['date'] = options.date;
        if (options.area)
            params['area'] = options.area.trim();
        return firstValueFrom(this.http.get(`${this.base}/public/articles`, { params }));
    }
    /** No full-text search route is available. Used for progressive client filtering. */
    articlesPage(page = 1, limit = 100) {
        return firstValueFrom(this.http.get(`${this.base}/public/articles`, {
            params: { page: String(page), limit: String(limit) }
        }));
    }
    // ==========================================
    // PUBLIC ISSUES
    // ==========================================
    submitIssue(data) {
        return firstValueFrom(this.http.post(`${this.base}/public/issues`, data, { withCredentials: true }));
    }
    publicIssues(status) {
        return firstValueFrom(this.http.get(`${this.base}/public/issues`, status
            ? { params: { status } }
            : {}));
    }
    // ==========================================
    // PUBLIC POLL VOTING
    // ==========================================
    vote(pollId, option) {
        return firstValueFrom(this.http.post(`${this.base}/public/polls/${encodeURIComponent(pollId)}/votes`, { option }, { withCredentials: true }));
    }
    // ==========================================
    // ADMIN AUTHENTICATION
    // ==========================================
    async login(email, password) {
        const response = await firstValueFrom(this.http.post(`${this.base}/admin/auth/login`, { email, password }, { withCredentials: true }));
        this.csrfToken = response.csrfToken;
        return response;
    }
    async restoreSession() {
        const response = await firstValueFrom(this.http.get(`${this.base}/admin/auth/me`, { withCredentials: true }));
        this.csrfToken = response.csrfToken;
        return response;
    }
    async logout() {
        await this.restoreSession();
        await firstValueFrom(this.http.post(`${this.base}/admin/auth/logout`, {}, this.adminOptions()));
        this.csrfToken = '';
    }
    // The unchanged backend has no category CRUD routes. Its article-kind
    // values are defined in core/article-categories.ts instead.
    // ==========================================
    // ADMIN NEWS ARTICLES
    // ==========================================
    adminArticles() {
        return firstValueFrom(this.http.get(`${this.base}/admin/articles`, { withCredentials: true }));
    }
    async upsertArticle(a) {
        await this.restoreSession();
        return firstValueFrom(this.http.put(`${this.base}/admin/articles/${encodeURIComponent(a.id)}`, a, this.adminOptions()));
    }
    async deleteArticle(id) {
        await this.restoreSession();
        return firstValueFrom(this.http.delete(`${this.base}/admin/articles/${encodeURIComponent(id)}`, this.adminOptions()));
    }
    // ==========================================
    // ADMIN PUBLIC ISSUES
    // ==========================================
    // Load pending, approved, rejected and solved
    // issues from MongoDB.
    async adminIssues() {
        await this.restoreSession();
        return firstValueFrom(this.http.get(`${this.base}/admin/issues`, { withCredentials: true }));
    }
    // Approve, reject or mark an issue as solved.
    // Solving requires resolution and afterPhoto.
    async moderateIssue(id, status, details = {}) {
        await this.restoreSession();
        return firstValueFrom(this.http.patch(`${this.base}/admin/issues/${encodeURIComponent(id)}`, {
            status,
            ...details
        }, this.adminOptions()));
    }
    // ==========================================
    // ADMIN ALERTS
    // ==========================================
    async upsertAlert(a) {
        await this.restoreSession();
        return firstValueFrom(this.http.put(`${this.base}/admin/alerts/${encodeURIComponent(a.id)}`, a, this.adminOptions()));
    }
    // ==========================================
    // ADMIN POLLS
    // ==========================================
    async upsertPoll(p) {
        await this.restoreSession();
        return firstValueFrom(this.http.put(`${this.base}/admin/polls/${encodeURIComponent(p.id)}`, p, this.adminOptions()));
    }
    // ==========================================
    // ADMIN ADVERTISEMENTS
    // ==========================================
    async upsertAd(ad) {
        await this.restoreSession();
        return firstValueFrom(this.http.put(`${this.base}/admin/ads/${encodeURIComponent(ad.id)}`, ad, this.adminOptions()));
    }
    // ==========================================
    // DIRECT MEDIA FILE UPLOAD
    // ==========================================
    async uploadMedia(file) {
        await this.restoreSession();
        const data = new FormData();
        data.append('file', file, file.name);
        const response = await firstValueFrom(this.http.post(`${this.base}/admin/media`, data, this.adminOptions()));
        if (!response || typeof response.url !== 'string') {
            throw new Error('The media API returned an invalid response.');
        }
        // Persist the backend-issued URL as-is. /api/public/media/:id is the
        // exact value accepted by its safeUrl validator; localhost:5000 is NOT.
        if (!response.url.startsWith('/api/public/media/') && !/^https:\/\//.test(response.url)) {
            throw new Error('The media API returned an unsupported file location.');
        }
        return { id: response.id, kind: response.kind, url: response.url };
    }
    static ɵfac = function NewsApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NewsApiService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NewsApiService, factory: NewsApiService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=news-api.service.js.map