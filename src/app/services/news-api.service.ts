
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  Article,
  Issue,
  PublicAlert,
  OpinionPoll,
  Ad,
  Snapshot
} from '../core/models';

import { environment } from '../../environments/environment';

interface AdminSession {
  user: {
    email: string;
    role: string;
  };
  csrfToken: string;
}

export interface MediaUploadResponse {
  id: string;
  url: string;
  kind: string;
}

export interface IssueModerationDetails {
  resolution?: string;
  afterPhoto?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private base = environment.apiBaseUrl;
  private csrfToken = '';

  constructor(private http: HttpClient) {}

  // ==========================================
  // ADMIN REQUEST OPTIONS
  // ==========================================

  private adminOptions() {
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

  snapshot(): Promise<Snapshot> {
    return firstValueFrom(
      this.http.get<Snapshot>(
        `${this.base}/public/bootstrap`
      )
    );
  }

  articles(): Promise<Article[]> {
    return firstValueFrom(
      this.http.get<Article[]>(
        `${this.base}/public/articles`
      )
    );
  }

  article(slug: string): Promise<Article> {
    return firstValueFrom(
      this.http.get<Article>(
        `${this.base}/public/articles/${encodeURIComponent(slug)}`
      )
    );
  }

  /** Existing backend: GET /public/articles?kind=&date=&area=&page=&limit= */
  articlesByCategory(kind: string, options: {date?: string; area?: string; page?: number; limit?: number} = {}): Promise<Article[]> {
    const params: Record<string, string> = {
      kind: kind.trim().toLowerCase(),
      page: String(options.page || 1),
      limit: String(options.limit || 30)
    };
    if (options.date) params['date'] = options.date;
    if (options.area) params['area'] = options.area.trim();
    return firstValueFrom(this.http.get<Article[]>(`${this.base}/public/articles`, {params}));
  }

  /** No full-text search route is available. Used for progressive client filtering. */
  articlesPage(page = 1, limit = 100): Promise<Article[]> {
    return firstValueFrom(this.http.get<Article[]>(`${this.base}/public/articles`, {
      params: {page: String(page), limit: String(limit)}
    }));
  }

  // ==========================================
  // PUBLIC ISSUES
  // ==========================================

  submitIssue(data: FormData): Promise<Issue> {
    return firstValueFrom(
      this.http.post<Issue>(
        `${this.base}/public/issues`,
        data,
        { withCredentials: true }
      )
    );
  }

  publicIssues(
    status?: 'approved' | 'solved'
  ): Promise<Issue[]> {

    return firstValueFrom(
      this.http.get<Issue[]>(
        `${this.base}/public/issues`,
        status
          ? { params: { status } }
          : {}
      )
    );
  }

  // ==========================================
  // PUBLIC POLL VOTING
  // ==========================================

  vote(
    pollId: string,
    option: number
  ): Promise<OpinionPoll> {
    return firstValueFrom(
      this.http.post<OpinionPoll>(
        `${this.base}/public/polls/${encodeURIComponent(pollId)}/votes`,
        { option },
        { withCredentials: true }
      )
    );
  }

  // ==========================================
  // ADMIN AUTHENTICATION
  // ==========================================

  async login(
    email: string,
    password: string
  ): Promise<AdminSession> {

    const response = await firstValueFrom(
      this.http.post<AdminSession>(
        `${this.base}/admin/auth/login`,
        { email, password },
        { withCredentials: true }
      )
    );

    this.csrfToken = response.csrfToken;

    return response;
  }

  async restoreSession(): Promise<AdminSession> {

    const response = await firstValueFrom(
      this.http.get<AdminSession>(
        `${this.base}/admin/auth/me`,
        { withCredentials: true }
      )
    );

    this.csrfToken = response.csrfToken;

    return response;
  }

  async logout(): Promise<void> {
    await this.restoreSession();
    await firstValueFrom(this.http.post(
      `${this.base}/admin/auth/logout`, {}, this.adminOptions()
    ));
    this.csrfToken = '';
  }

  // The unchanged backend has no category CRUD routes. Its article-kind
  // values are defined in core/article-categories.ts instead.

  // ==========================================
  // ADMIN NEWS ARTICLES
  // ==========================================

  adminArticles(): Promise<Article[]> {
    return firstValueFrom(
      this.http.get<Article[]>(
        `${this.base}/admin/articles`,
        { withCredentials: true }
      )
    );
  }

  async upsertArticle(a: Article): Promise<Article> {
    await this.restoreSession();
    return firstValueFrom(
      this.http.put<Article>(
        `${this.base}/admin/articles/${encodeURIComponent(a.id)}`,
        a,
        this.adminOptions()
      )
    );
  }

  async deleteArticle(id: string): Promise<void> {
    await this.restoreSession();
    return firstValueFrom(
      this.http.delete<void>(
        `${this.base}/admin/articles/${encodeURIComponent(id)}`,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN PUBLIC ISSUES
  // ==========================================

  // Load pending, approved, rejected and solved
  // issues from MongoDB.

  async adminIssues(): Promise<Issue[]> {

    await this.restoreSession();

    return firstValueFrom(
      this.http.get<Issue[]>(
        `${this.base}/admin/issues`,
        { withCredentials: true }
      )
    );
  }

  // Approve, reject or mark an issue as solved.
  // Solving requires resolution and afterPhoto.

  async moderateIssue(
    id: string,
    status: string,
    details: IssueModerationDetails = {}
  ): Promise<Issue> {

    await this.restoreSession();

    return firstValueFrom(
      this.http.patch<Issue>(
        `${this.base}/admin/issues/${encodeURIComponent(id)}`,
        {
          status,
          ...details
        },
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN ALERTS
  // ==========================================

  async upsertAlert(
    a: PublicAlert
  ): Promise<PublicAlert> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<PublicAlert>(
        `${this.base}/admin/alerts/${encodeURIComponent(a.id)}`,
        a,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN POLLS
  // ==========================================

  async upsertPoll(
    p: OpinionPoll
  ): Promise<OpinionPoll> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<OpinionPoll>(
        `${this.base}/admin/polls/${encodeURIComponent(p.id)}`,
        p,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // ADMIN ADVERTISEMENTS
  // ==========================================

  async upsertAd(ad: Ad): Promise<Ad> {

    await this.restoreSession();
    return firstValueFrom(
      this.http.put<Ad>(
        `${this.base}/admin/ads/${encodeURIComponent(ad.id)}`,
        ad,
        this.adminOptions()
      )
    );
  }

  // ==========================================
  // DIRECT MEDIA FILE UPLOAD
  // ==========================================

  async uploadMedia(
    file: File
  ): Promise<MediaUploadResponse> {

    await this.restoreSession();

    const data = new FormData();
    data.append('file', file, file.name);

    const response = await firstValueFrom(
      this.http.post<MediaUploadResponse>(
        `${this.base}/admin/media`,
        data,
        this.adminOptions()
      )
    );

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

}
