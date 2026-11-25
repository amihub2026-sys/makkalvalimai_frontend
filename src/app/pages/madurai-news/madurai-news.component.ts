
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import {
  combineLatest,
  firstValueFrom,
  Subscription
} from 'rxjs';

import {
  Article,
  ArticleKind,
  NewsCategory,
  Section,
  SECTIONS,
  istDay
} from '../../core/models';

import { environment } from '../../../environments/environment';

import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { PreferencesService } from '../../services/preferences.service';
import { MediaService } from '../../services/media.service';

import { StoryCardComponent } from '../../shared/story-card/story-card.component';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';

import { SUGGESTED_AREAS } from '../../core/areas';

/**
 * Reusable news listing component.
 *
 * Existing pages:
 * /madurai-news
 * /crime-news
 * /health-awareness
 *
 * Dynamic category pages:
 * /category/local-news
 * /category/state-news
 * /category/national-news
 * /category/world-news
 *
 * Category articles are filtered by MongoDB.
 */

@Component({
  selector: 'app-madurai-news',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    StoryCardComponent,
    AudioPlayerComponent
  ],

  templateUrl: './madurai-news.component.html',

  styleUrls: [
    './madurai-news.component.css',
    './madurai-news.component.responsive.css'
  ]
})
export class MaduraiNewsComponent implements OnInit, OnDestroy {

  section: Section = 'madurai';

  kind: ArticleKind = 'madurai';

  title = {
    ta: 'மதுரை செய்திகள்',
    en: 'Madurai News'
  };

  selectedDate = '';
  area = '';

  readonly today = istDay();
  readonly areas = SUGGESTED_AREAS;

  filtered: Article[] = [];

  loading = false;
  error = '';
  hasMore = false;

  private page = 0;
  private generation = 0;
  private titleGeneration = 0;

  private refreshTimeout?: ReturnType<typeof setTimeout>;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private api: NewsApiService,
    private http: HttpClient,

    public store: ContentService,
    public prefs: PreferencesService,
    public media: MediaService
  ) {}

  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {

    // Listen for route changes, including switching
    // between two dynamic category pages.

    this.routeSub = combineLatest([
      this.route.paramMap,
      this.route.data,
      this.route.queryParamMap
    ]).subscribe(([params, data, query]) => {

      const dynamicSlug = params.get('slug');

      this.section =
        (data['section'] as Section) || 'madurai';

      // Dynamic route gets its slug from the URL.
      // Existing pages continue using route.data.kind.

      this.kind = dynamicSlug ||
        (data['kind'] as ArticleKind) ||
        'madurai';

      if (dynamicSlug) {

        // Show a readable title while the MongoDB
        // category name is being retrieved.

        const fallbackName = dynamicSlug
          .replace(/-/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());

        this.title = {
          ta: fallbackName,
          en: fallbackName
        };

        void this.loadDynamicCategoryTitle(dynamicSlug);

      } else {

        // Preserve existing page titles.

        this.title =
          SECTIONS.find(
            item => item.section === this.section
          )?.name || {
            ta: 'மதுரை செய்திகள்',
            en: 'Madurai News'
          };
      }

      // Preserve existing URL filters.

      this.selectedDate =
        query.get('date') || '';

      this.area =
        query.get('area') || '';

      // Fetch news for the selected category.

      this.refresh();

    });
  }

  // ==========================================
  // LOAD DYNAMIC CATEGORY NAME
  // FROM MONGODB
  // ==========================================

  private async loadDynamicCategoryTitle(
    slug: string
  ): Promise<void> {

    const requestId = ++this.titleGeneration;

    try {

      const categories = await firstValueFrom(
        this.http.get<NewsCategory[]>(
          `${environment.apiBaseUrl}/public/categories`
        )
      );

      // Ignore outdated responses when visitors
      // quickly navigate to another category.

      if (
        requestId !== this.titleGeneration ||
        this.kind !== slug
      ) {
        return;
      }

      if (!Array.isArray(categories)) {
        return;
      }

      const category = categories.find(
        item => item.slug === slug
      );

      if (category) {
        this.title = {
          ta: category.name.ta,
          en: category.name.en
        };
      }

    } catch {
      // Keep the readable fallback title.
      // News articles can still load independently.
    }
  }

  // ==========================================
  // REFRESH NEWS
  // ==========================================

  refresh(): void {

    // Invalidate earlier requests before
    // their responses can update the page.

    this.generation++;

    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
    }

    this.refreshTimeout = setTimeout(
      () => void this.fetchPage(1),
      250
    );
  }

  // ==========================================
  // LOAD MORE NEWS
  // ==========================================

  async loadMore(): Promise<void> {

    if (!this.loading && this.hasMore) {
      await this.fetchPage(this.page + 1);
    }
  }

  // ==========================================
  // FETCH ARTICLES FROM MONGODB
  // ==========================================

  private async fetchPage(
    page: number
  ): Promise<void> {

    const requestId = ++this.generation;

    if (page === 1) {
      this.filtered = [];
      this.page = 0;
      this.hasMore = false;
    }

    this.loading = true;
    this.error = '';

    try {

      const response =
        await this.api.articlesByCategory(
          this.kind,
          {
            date:
              this.selectedDate || undefined,

            area:
              this.area.trim() || undefined,

            page,
            limit: 30
          }
        );

      // Prevent outdated API responses from
      // overwriting the current category.

      if (requestId !== this.generation) {
        return;
      }

      if (!Array.isArray(response)) {
        throw new Error(
          'Invalid server article list'
        );
      }

      // Preserve existing pagination and
      // duplicate-article protection.

      this.filtered = page === 1
        ? response
        : [
            ...this.filtered,

            ...response.filter(
              item =>
                !this.filtered.some(
                  old => old.id === item.id
                )
            )
          ];

      this.page = page;

      this.hasMore = response.length === 30;

    } catch {

      if (requestId === this.generation) {
        this.error =
          'Unable to load this news section from the server.';
      }

    } finally {

      if (requestId === this.generation) {
        this.loading = false;
      }
    }
  }

  // ==========================================
  // CLEANUP
  // ==========================================

  ngOnDestroy(): void {

    this.generation++;
    this.titleGeneration++;

    this.routeSub?.unsubscribe();

    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
    }
  }
}
