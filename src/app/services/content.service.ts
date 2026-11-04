import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Ad, Article, Issue, OpinionPoll, PublicAlert, Settings, Snapshot } from '../core/models';
import { NewsApiService } from './news-api.service';

/**
 * The public website is server-owned. No fabricated articles, ads, polls, counts,
 * alerts or browser-local content writes are permitted here.
 */
const EMPTY_SETTINGS: Settings = {
  headerImage: '', footerImage: '', headlines: [], sectionAudio: {}, showPopup: false
};
function emptySnapshot(): Snapshot {
  return { articles: [], issues: [], alerts: [], polls: [], ads: [], settings: { ...EMPTY_SETTINGS } };
}
function array<T>(value: unknown): T[] { return Array.isArray(value) ? value as T[] : []; }

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly api = inject(NewsApiService);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly state = signal<Snapshot>(emptySnapshot());
  private inFlight?: Promise<void>;
  private refreshTimer?: ReturnType<typeof setInterval>;

  readonly snapshot = this.state.asReadonly();
  readonly loading = signal(true);
  readonly loadError = signal('');
  readonly lastUpdated = signal<Date | null>(null);

  readonly articles = computed(() => this.state().articles);
  readonly published = computed(() => this.state().articles
    .filter(article => article.published === true &&
      Number.isFinite(Date.parse(article.publishedAt)) &&
      Date.parse(article.publishedAt) <= Date.now())
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)));
  readonly issues = computed(() => this.state().issues);
  readonly approvedIssues = computed(() => this.state().issues.filter(item => item.status === 'approved'));
  readonly solvedIssues = computed(() => this.state().issues.filter(item => item.status === 'solved'));
  readonly pendingIssues = computed(() => this.state().issues.filter(item => item.status === 'pending'));
  readonly alerts = computed(() => this.state().alerts.filter(item => item.published &&
    Date.parse(item.expiresAt) > Date.now() && Date.parse(item.effectiveDate) <= Date.now()));
  readonly polls = computed(() => this.state().polls.filter(item => item.active &&
    (!item.expiresAt || Date.parse(item.expiresAt) > Date.now())));
  readonly ads = computed(() => this.state().ads.filter(item => item.enabled));
  readonly settings = computed(() => this.state().settings);

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

  refreshFromBackend(): Promise<void> {
    if (this.inFlight) return this.inFlight;
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
          articles: array<Article>(response.articles),
          issues: array<Issue>(response.issues).filter(item => item.status === 'approved' || item.status === 'solved'),
          alerts: array<PublicAlert>(response.alerts),
          polls: array<OpinionPoll>(response.polls),
          ads: array<Ad>(response.ads),
          settings: { ...EMPTY_SETTINGS, ...response.settings,
            sectionAudio: { ...EMPTY_SETTINGS.sectionAudio, ...(response.settings?.sectionAudio || {}) },
            headlines: array(response.settings?.headlines) }
        });
        this.lastUpdated.set(new Date());
      } catch (error) {
        console.error('Makkal Valimai public API:', error);
        this.loadError.set('Unable to connect to the news server. Please try again.');
      } finally {
        this.loading.set(false);
      }
    })().finally(() => { this.inFlight = undefined; });
    return this.inFlight;
  }
}
