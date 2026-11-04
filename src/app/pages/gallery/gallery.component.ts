import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article, ArticleKind, Section, SECTIONS, istDay } from '../../core/models';
import { ContentService } from '../../services/content.service';
import { NewsApiService } from '../../services/news-api.service';
import { PreferencesService } from '../../services/preferences.service';
import { MediaService } from '../../services/media.service';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { SUGGESTED_AREAS } from '../../core/areas';

/** Server-side article filtering and pagination; no static article examples. */
@Component({
  selector: 'app-gallery', standalone: true,
  imports: [CommonModule, FormsModule, StoryCardComponent, AudioPlayerComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', './gallery.component.responsive.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  section: Section = 'madurai';
  kind: ArticleKind = 'madurai';
  title = { ta: 'மதுரை செய்திகள்', en: 'Madurai News' };
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
  private refreshTimeout?: ReturnType<typeof setTimeout>;
  private routeSub?: Subscription;
  constructor(private route: ActivatedRoute, private api: NewsApiService,
    public store: ContentService, public prefs: PreferencesService, public media: MediaService) {}
  ngOnInit(): void {
    this.routeSub = this.route.data.subscribe(data => {
      this.section = data['section'] || 'madurai';
      this.kind = data['kind'] || 'madurai';
      this.title = SECTIONS.find(item => item.section === this.section)?.name || this.title;
      this.selectedDate = this.route.snapshot.queryParamMap.get('date') || '';
      this.area = this.route.snapshot.queryParamMap.get('area') || '';
      this.refresh();
    });
  }
  refresh(): void {
    // Invalidate any earlier in-flight query before its response can update the UI.
    this.generation++;
    if (this.refreshTimeout) clearTimeout(this.refreshTimeout);
    this.refreshTimeout = setTimeout(() => void this.fetchPage(1), 250);
  }
  async loadMore(): Promise<void> {
    if (!this.loading && this.hasMore) await this.fetchPage(this.page + 1);
  }
  private async fetchPage(page: number): Promise<void> {
    const requestId = ++this.generation;
    if (page === 1) { this.filtered = []; this.page = 0; this.hasMore = false; }
    this.loading = true;
    this.error = '';
    try {
      const response = await this.api.articlesByCategory(this.kind, {
        date: this.selectedDate || undefined,
        area: this.area.trim() || undefined,
        page, limit: 30
      });
      if (requestId !== this.generation) return;
      if (!Array.isArray(response)) throw new Error('Invalid server article list');
      this.filtered = page === 1 ? response : [...this.filtered, ...response.filter(item => !this.filtered.some(old => old.id === item.id))];
      this.page = page;
      this.hasMore = response.length === 30;
    } catch (error) {
      if (requestId === this.generation) this.error = 'Unable to load this news section from the server.';
    } finally { if (requestId === this.generation) this.loading = false; }
  }
  ngOnDestroy(): void {
    this.generation++;
    this.routeSub?.unsubscribe();
    if (this.refreshTimeout) clearTimeout(this.refreshTimeout);
  }
}
