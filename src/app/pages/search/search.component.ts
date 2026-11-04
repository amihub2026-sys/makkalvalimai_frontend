import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../../core/models';
import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { PreferencesService } from '../../services/preferences.service';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';

/** Frontend progressive search: the unchanged backend has no full-text search API. */
@Component({selector:'app-search',standalone:true,imports:[CommonModule,FormsModule,StoryCardComponent],
  templateUrl:'./search.component.html',styleUrls:['./search.component.css','./search.component.responsive.css']})
export class SearchComponent implements OnInit, OnDestroy {
  q = '';
  query = '';
  fetched: Article[] = [];
  results: Article[] = [];
  loading = false;
  error = '';
  hasMore = false;
  searchedCount = 0;
  private page = 0;
  private generation = 0;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
    private api: NewsApiService, public store: ContentService, public prefs: PreferencesService) {}
  ngOnInit(): void {
    this.sub = this.route.queryParamMap.subscribe(params => {
      this.generation++;
      this.loading = false;
      this.q = params.get('q') || '';
      this.query = this.q.trim().toLocaleLowerCase();
      this.fetched = [];
      this.results = [];
      this.page = 0;
      this.hasMore = Boolean(this.query);
      if (this.query) void this.loadMore();
    });
  }
  async loadMore(): Promise<void> {
    if (this.loading || !this.query || !this.hasMore) return;
    const request = ++this.generation;
    this.loading = true;
    this.error = '';
    try {
      const next = await this.api.articlesPage(this.page + 1, 100);
      if (request !== this.generation) return;
      if (!Array.isArray(next)) throw new Error('Invalid news search response');
      this.fetched = [...this.fetched, ...next.filter(item => !this.fetched.some(old => old.id === item.id))];
      this.searchedCount = this.fetched.length;
      this.results = this.fetched.filter(article =>
        [article.title?.ta, article.title?.en, article.body?.ta, article.body?.en, article.area]
          .some(value => (value || '').toLocaleLowerCase().includes(this.query)));
      this.page++;
      this.hasMore = next.length === 100;
    } catch {
      if (request === this.generation) this.error = 'Unable to search the news server. Please try again.';
    } finally { if (request === this.generation) this.loading = false; }
  }
  search(): void { void this.router.navigate(['/search'], { queryParams: { q: this.q.trim() } }); }
  ngOnDestroy(): void { this.generation++; this.sub?.unsubscribe(); }
}
