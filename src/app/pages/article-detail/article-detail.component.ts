import { Component, OnInit, OnDestroy, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Article } from '../../core/models';
import { ContentService } from '../../services/content.service';
import { MediaService } from '../../services/media.service';
import { PreferencesService } from '../../services/preferences.service';
import { AudioPlayerComponent } from '../../shared/audio-player/audio-player.component';
import { NewsApiService } from '../../services/news-api.service';

interface TextPart { text: string; bold: boolean; }
interface EditorialBlock {
  kind: 'paragraph' | 'heading' | 'image-left' | 'image-right' | 'image-full';
  text: string;
  image?: string;
  caption?: string;
  parts: TextPart[];
}

function inlineBold(text: string): TextPart[] {
  const output: TextPart[] = [];
  const exp = /\*\*(.+?)\*\*/g;
  let last = 0;
  for (const match of text.matchAll(exp)) {
    const index = match.index ?? 0;
    if (index > last) output.push({ text: text.slice(last, index), bold: false });
    output.push({ text: match[1], bold: true });
    last = index + match[0].length;
  }
  if (last < text.length) output.push({ text: text.slice(last), bold: false });
  return output.length ? output : [{ text, bold: false }];
}

// Uses plain bilingual body strings already supported by MongoDB.
// Image directives require an already-uploaded HTTPS or local development media URL.
function parseArticle(text: string): EditorialBlock[] {
  const chunks = text.replace(/\r\n/g, '\n').split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
  const blocks: EditorialBlock[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const heading = chunk.match(/^#{2,3}\s+([\s\S]+)$/) || chunk.match(/^\*\*([^*]+)\*\*$/);
    if (heading) {
      blocks.push({ kind: 'heading', text: heading[1], parts: [{ text: heading[1], bold: true }] });
      continue;
    }
    const image = chunk.match(/^\[\[image-(left|right|full):([^\]|]+)(?:\|([^\]]+))?\]\]$/i);
    if (image) {
      const url = image[2].trim();
      const safe = /^https:\/\//i.test(url) || /^\/api\/public\/media\//.test(url) || /^http:\/\/localhost:5000\/api\/public\/media\//i.test(url);
      if (safe) {
        const kind = `image-${image[1].toLowerCase()}` as EditorialBlock['kind'];
        const paragraph = kind === 'image-full' ? '' : (chunks[++i] || '');
        blocks.push({ kind, image: url, caption: image[3]?.trim() || '', text: paragraph, parts: inlineBold(paragraph) });
        continue;
      }
    }
    blocks.push({ kind: 'paragraph', text: chunk, parts: inlineBold(chunk) });
  }
  return blocks;
}

@Component({
  selector: 'app-article-detail', standalone: true,
  imports: [CommonModule, RouterLink, AudioPlayerComponent],
  templateUrl: './article-detail.component.html', styleUrls: ['./article-detail.component.css', './article-detail.component.responsive.css']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  readonly slug = signal('');
  readonly remoteArticle = signal<Article | null>(null);
  readonly articleLoading = signal(true);
  readonly articleError = signal('');
  readonly article = computed(() => this.remoteArticle() || this.store.published().find(a => a.slug === this.slug()));
  readonly otherStories = computed(() => this.store.published().filter(a => a.id !== this.article()?.id).slice(0, 4));
  readonly blocks = computed(() => parseArticle(this.prefs.txt(this.article()?.body)));
  copied = false;
  private routeSub?: Subscription;
  constructor(private route: ActivatedRoute, public store: ContentService, public media: MediaService, public prefs: PreferencesService, private api: NewsApiService) {}
  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.slug.set(slug);
      this.remoteArticle.set(null);
      this.articleError.set('');
      this.copied = false;
      void this.loadArticle(slug);
    });
  }
  private async loadArticle(slug: string): Promise<void> {
    this.articleLoading.set(true);
    if (!slug) { this.articleError.set('Invalid article URL.'); this.articleLoading.set(false); return; }
    try {
      const value = await this.api.article(slug);
      if (this.slug() !== slug) return; // route changed during request
      if (!value || value.published !== true) throw new Error('This story is not available.');
      this.remoteArticle.set(value);
    } catch (error) {
      if (this.slug() === slug) this.articleError.set('The article could not be loaded. It may have been removed or the server may be unavailable.');
    } finally {
      if (this.slug() === slug) this.articleLoading.set(false);
    }
  }
  ngOnDestroy(): void { this.routeSub?.unsubscribe(); }
  get whatsapp(): string {
    const url = typeof window === 'undefined' ? '' : window.location.href;
    return 'https://wa.me/?text=' + encodeURIComponent(this.prefs.txt(this.article()?.title) + '\n' + url);
  }
  async copyLink(): Promise<void> {
    try { await navigator.clipboard.writeText(window.location.href); this.copied = true; }
    catch { this.copied = false; }
  }
}
