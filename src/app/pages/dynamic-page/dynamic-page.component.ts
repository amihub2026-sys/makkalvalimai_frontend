
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import {
  Subscription,
  of,
  catchError,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs';

import { environment } from '../../../environments/environment';

// ==========================================
// TYPES
// ==========================================

type PageLanguage = 'ta' | 'en';

type RendererType =
  | 'heading'
  | 'text'
  | 'image'
  | 'video'
  | 'audio'
  | 'gallery'
  | 'cards';

export interface PublicBilingualText {
  ta: string;
  en: string;
}

export interface PublicContentItem {
  url?: string;
  imageUrl?: string;
  linkUrl?: string;

  title?: PublicBilingualText;
  description?: PublicBilingualText;

  alt?: PublicBilingualText;
  caption?: PublicBilingualText;
}

export interface PublicBlockContent {
  text?: PublicBilingualText;
  level?: number;

  url?: string;
  alt?: PublicBilingualText;
  caption?: PublicBilingualText;

  items?: PublicContentItem[];
}

export interface PublicDynamicBlock {
  id: string;
  toolKey: string;
  rendererType: RendererType;
  sortOrder: number;
  content: PublicBlockContent;
}

export interface PublicDynamicPage {
  slug: string;
  title: PublicBilingualText;
  version: number;
  publishedAt: string;
  blocks: PublicDynamicBlock[];
}

interface PublicPageApiResponse {
  success: boolean;
  item: PublicDynamicPage;
}

// ==========================================
// PUBLIC DYNAMIC PAGE COMPONENT
// ==========================================

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrls: [
    './dynamic-page.component.css',
    './dynamic-page.component.responsive.css'
  ]
})
export class DynamicPageComponent
  implements OnInit, OnDestroy {

  // ==========================================
  // API CONFIGURATION
  // ==========================================

  private readonly apiBase =
    environment.apiBaseUrl.replace(/\/+$/, '');

  private readonly backendOrigin =
    this.apiBase.replace(/\/api$/, '');

  private readonly subscriptions =
    new Subscription();

  // ==========================================
  // PAGE STATE
  // ==========================================

  page: PublicDynamicPage | null = null;

  blocks: PublicDynamicBlock[] = [];

  loading = true;

  errorMessage = '';


  // Tamil is the default display language.
  language: PageLanguage = 'ta';

  // ==========================================
  // TEAM MEMBER FULL PHOTO POPUP
  // ==========================================

  selectedTeamPhotoUrl: string | null = null;
  selectedTeamPhotoAlt = '';

  openTeamPhoto(
    imageUrl?: string | null,
    name: string = ''
  ): void {

    const fullUrl = this.mediaUrl(imageUrl);

    if (!fullUrl) {
      return;
    }

    this.selectedTeamPhotoUrl = fullUrl;
    this.selectedTeamPhotoAlt = name;
  }

  closeTeamPhoto(): void {
    this.selectedTeamPhotoUrl = null;
    this.selectedTeamPhotoAlt = '';
  }

  // ==========================================
  // CONSTRUCTOR
  // ==========================================

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}


  // ==========================================
  // COMPONENT INITIALIZATION
  // ==========================================

  ngOnInit(): void {

    const pageSubscription = this.route.paramMap
      .pipe(

        map(params => params.get('slug') || ''),

        distinctUntilChanged(),

        switchMap(slug => {

          this.loading = true;
          this.errorMessage = '';

          this.page = null;
          this.blocks = [];

          // Validate the requested page slug.
          if (
            !slug ||
            !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
          ) {
            this.errorMessage = 'Invalid page URL.';
            return of(null);
          }

          return this.http.get<PublicPageApiResponse>(
            `${this.apiBase}/public/pages/${encodeURIComponent(slug)}`
          ).pipe(

            catchError((error: unknown) => {

              console.error(
                'Public dynamic page loading failed:',
                error
              );

              if (
                error instanceof HttpErrorResponse &&
                error.status === 404
              ) {
                this.errorMessage =
                  'This page is unavailable or has not been published.';

              } else {
                this.errorMessage =
                  'Unable to load this page. Please try again later.';
              }

              return of(null);
            })

          );
        })

      )
      .subscribe(response => {

        this.loading = false;

        if (!response) {
          return;
        }

        if (!response.success || !response.item) {
          this.errorMessage =
            'Unable to load this page.';
          return;
        }

        this.page = response.item;

        // Render published content in saved order.
        this.blocks = [
          ...(response.item.blocks || [])
        ].sort(
          (a, b) => a.sortOrder - b.sortOrder
        );

      });

    this.subscriptions.add(pageSubscription);
  }

  // ==========================================
  // COMPONENT CLEANUP
  // ==========================================

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // ==========================================
  // LANGUAGE MANAGEMENT
  // ==========================================

  setLanguage(language: PageLanguage): void {
    this.language = language;
  }

  // ==========================================
  // BILINGUAL TEXT DISPLAY
  // ==========================================

  localize(
    value?: PublicBilingualText | null
  ): string {

    if (!value) return '';

    const selected = value[this.language]?.trim();

    if (selected) {
      return selected;
    }

    // Fall back to another available language.
    return value.en?.trim() ||
      value.ta?.trim() ||
      '';
  }

  // ==========================================
  // PAGE TITLE
  // ==========================================

  get pageTitle(): string {
    return this.localize(
      this.page?.title
    );
  }

  // ==========================================
  // BLOCK TEXT
  // ==========================================

  blockText(block: PublicDynamicBlock): string {
    return this.localize(
      block.content?.text
    );
  }

  // ==========================================
  // BLOCK CAPTION
  // ==========================================

  blockCaption(
    block: PublicDynamicBlock
  ): string {
    return this.localize(
      block.content?.caption
    );
  }

  // ==========================================
  // IMAGE ALTERNATIVE TEXT
  // ==========================================

  blockAlt(
    block: PublicDynamicBlock
  ): string {
    return this.localize(
      block.content?.alt
    );
  }

  // ==========================================
  // HEADING LEVEL
  // ==========================================

  headingLevel(
    block: PublicDynamicBlock
  ): number {

    const level = Number(
      block.content?.level
    );

    if (
      Number.isInteger(level) &&
      level >= 1 &&
      level <= 6
    ) {
      return level;
    }

    return 2;
  }

  // ==========================================
  // GALLERY / CARD ITEMS
  // ==========================================

  blockItems(
    block: PublicDynamicBlock
  ): PublicContentItem[] {

    const items = block.content?.items;

    return Array.isArray(items)
      ? items
      : [];
  }

  // ==========================================
  // MEDIA URL RESOLVER
  // ==========================================

  mediaUrl(
    value?: string | null
  ): string {

    const url = (value || '').trim();

    if (!url) return '';

    // Full HTTPS / HTTP URL
    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    // Local backend media URL
    if (
      url.startsWith('/') &&
      !url.startsWith('//')
    ) {
      return this.backendOrigin + url;
    }

    return '';
  }

  // ==========================================
  // CARD LINK RESOLVER
  // ==========================================

  cardLink(
    value?: string | null
  ): string {

    const url = (value || '').trim();

    if (!url) return '';

    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    if (
      url.startsWith('/') &&
      !url.startsWith('//')
    ) {
      return url;
    }

    return '';
  }

  // ==========================================
  // TRACK CONTENT BLOCKS
  // ==========================================

  trackByBlock(
    index: number,
    block: PublicDynamicBlock
  ): string {
    return block.id || String(index);
  }

  // ==========================================
  // TRACK GALLERY / CARD ITEMS
  // ==========================================

  trackByItem(
    index: number,
    item: PublicContentItem
  ): string {
    return item.url ||
      item.imageUrl ||
      item.linkUrl ||
      String(index);
  }

}
