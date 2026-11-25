
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import {
  NAV,
  MORE,
  SECTIONS,
  PublicAlert,
  NewsCategory
} from '../../core/models';

import { environment } from '../../../environments/environment';

import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { MediaService } from '../../services/media.service';
import { NewsApiService, NavigationItem } from '../../services/news-api.service';

import { BreakingTickerComponent } from '../breaking-ticker/breaking-ticker.component';
import { MobileBottomNavComponent } from '../mobile-bottom-nav/mobile-bottom-nav.component';

const READ_KEY = 'mv-read-alerts-v2';
const SOUND_KEY = 'mv-alert-sound-enabled-v2';
const SOUND_PROMPT_KEY = 'mv-sound-choice-v1';
const WELCOME_KEY = 'mv-onboarding-hint-seen-v2';

interface HeaderNavItem {
  path: string;
  name: {
    ta: string;
    en: string;
  };
}

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    BreakingTickerComponent,
    MobileBottomNavComponent
  ],
  templateUrl: './site-header.component.html',
  styleUrls: [
    './site-header.component.css',
    './site-header.component.responsive.css'
  ]
})
export class SiteHeaderComponent implements OnInit, OnDestroy {

  // Keep the working navigation until the new
  // HTML and category routes are connected.
  nav = NAV;
  more = MORE;
  allNav = SECTIONS;
showSoundPrompt = false;
soundPromptError = '';
soundEnabling = false;
  // ==========================================
  // DYNAMIC NEWS NAVIGATION
  // ==========================================

  mainNewsNav: HeaderNavItem[] = [];
  moreNewsNav: HeaderNavItem[] = [];
  aboutNewsNav: HeaderNavItem[] = [];

  categoryNavLoading = false;
  categoryNavError = '';

  // Navigation saved in Admin Header Menu Management.
  navigationItems: NavigationItem[] = [];
  navigationError = '';
  navigationLoading = false;

  readonly homeNav: HeaderNavItem = {
    path: '/',
    name: {
      ta: 'முகப்பு',
      en: 'Home'
    }
  };

  readonly peopleProblemsNav: HeaderNavItem = {
    path: '/public-issues',
    name: {
      ta: 'மக்கள் பிரச்சினைகள்',
      en: "People's Problems"
    }
  };

  // About Us dropdown links.
  // Contact Us and Our Team routes will be
  // connected in a separate step.
  readonly aboutNav: HeaderNavItem[] = [
    {
      path: '/about-contact',
      name: {
        ta: 'எங்களைப் பற்றி',
        en: 'About Us'
      }
    },
    {
      path: '/contact-us',
      name: {
        ta: 'தொடர்புக்கு',
        en: 'Contact Us'
      }
    },
    {
      path: '/our-team',
      name: {
        ta: 'எங்கள் குழு',
        en: 'Our Team'
      }
    }
  ];

  // ==========================================
  // EXISTING HEADER STATES
  // ==========================================

  moreOpen = false;
  aboutOpen = false;
  mobileOpen = false;
  notificationOpen = false;

  searchTerm = '';
  searchMobileOpen = false;

  clock = '';
  dateLine = '';

  readonly readIds = signal<string[]>(this.readStoredIds());
  readonly soundEnabled = signal(this.readSoundPreference());
  readonly showWelcome = signal(this.shouldShowWelcome());

  private clockTimer?: ReturnType<typeof setInterval>;
  private refreshTimer?: ReturnType<typeof setInterval>;
  private soundContext?: AudioContext;

  constructor(
    public store: ContentService,
    public prefs: PreferencesService,
    public media: MediaService,
    private router: Router,
    private http: HttpClient,
    private newsApi: NewsApiService
  ) {}

  // ==========================================
  // INITIALIZATION
  // ==========================================

  ngOnInit(): void {
    this.tick();
this.initializeSoundChoice();
    this.clockTimer = setInterval(
      () => this.tick(),
      30000
    );

    // Periodically update public alerts.
    // The first load never makes a sound.
    this.refreshTimer = setInterval(
      () => {
        void this.checkNewAlerts();
      },
      60000
    );

    // Load dynamic public news navigation.
    void this.loadPublicNewsCategories();

    // Also load navigation menus saved by Admin.
    void this.loadNavigation();
  }

  ngOnDestroy(): void {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }

    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }

    if (this.soundContext) {
      void this.soundContext.close();
    }
  }

  // ==========================================
  // PUBLIC NAVIGATION API
  // ==========================================

  async loadNavigation(): Promise<void> {
    this.navigationLoading = true;
    this.navigationError = '';

    try {
      this.navigationItems = await this.newsApi.publicNavigation();
    } catch (error) {
      this.navigationError = 'Unable to load navigation menus.';
      console.error(error);
    } finally {
      this.navigationLoading = false;
    }
  }

  // ==========================================
  // PUBLIC CATEGORY API
  // ==========================================

  async loadPublicNewsCategories(): Promise<void> {
    this.categoryNavLoading = true;
    this.categoryNavError = '';

    try {
      const response = await firstValueFrom(
        this.http.get<unknown>(
          `${environment.apiBaseUrl}/public/categories`
        )
      );

      const categories = this.extractCategories(response);

      // Only categories enabled by Admin
      // should be available in public navigation.
      const visibleCategories = categories
        .filter(category =>
          category.active &&
          category.showInMenu &&
          category.headerType !== 'hidden'
        )
        .sort((a, b) =>
          a.sortOrder - b.sortOrder ||
          a.slug.localeCompare(b.slug)
        );

      // ======================================
      // MAIN HEADER - ADMIN CONTROLLED
      // ======================================

      this.mainNewsNav = visibleCategories
        .filter(category =>
          category.headerType === 'main'
        )
        .map(category =>
          this.categoryToNavItem(category)
        );

      // ======================================
      // MORE DROPDOWN - ADMIN CONTROLLED
      // ======================================

      // Categories without headerType are
      // treated as More for compatibility.
      this.moreNewsNav = visibleCategories
        .filter(category =>
          !category.headerType ||
          category.headerType === 'more'
        )
        .map(category =>
          this.categoryToNavItem(category)
        );

      // ======================================
      // ABOUT US DROPDOWN - ADMIN CONTROLLED
      // ======================================

      this.aboutNewsNav = visibleCategories
        .filter(category =>
          category.headerType === 'about'
        )
        .map(category =>
          this.categoryToNavItem(category)
        );

    } catch (error) {
      this.categoryNavError =
        error instanceof Error
          ? error.message
          : 'Unable to load news categories.';

      this.mainNewsNav = [];
      this.moreNewsNav = [];
      this.aboutNewsNav = [];

      // Existing navigation remains available
      // if the category API is unavailable.

    } finally {
      this.categoryNavLoading = false;
    }
  }

  // ==========================================
  // EXTRACT CATEGORIES FROM API RESPONSE
  // ==========================================

  // Supports:
  // 1. Direct array
  // 2. { categories: [...] }
  // 3. { data: [...] }

  private extractCategories(response: unknown): NewsCategory[] {

    if (Array.isArray(response)) {
      return response as NewsCategory[];
    }

    if (response && typeof response === 'object') {
      const payload = response as Record<string, unknown>;

      if (Array.isArray(payload['categories'])) {
        return payload['categories'] as NewsCategory[];
      }

      if (Array.isArray(payload['data'])) {
        return payload['data'] as NewsCategory[];
      }
    }

    throw new Error(
      'Invalid public categories API response.'
    );
  }

  // ==========================================
  // CONVERT DATABASE CATEGORY TO NAV ITEM
  // ==========================================

  private categoryToNavItem(
    category: NewsCategory
  ): HeaderNavItem {

    return {
      path: `/category/${encodeURIComponent(category.slug)}`,
      name: {
        ta: category.name.ta,
        en: category.name.en
      }
    };
  }

  // ==========================================
  // NOTIFICATIONS
  // ==========================================

  unreadCount(): number {
    return this.store.alerts().filter(
      alert => !this.readIds().includes(alert.id)
    ).length;
  }

  recentAlerts(): PublicAlert[] {
    return [...this.store.alerts()]
      .sort(
        (a, b) =>
          new Date(b.effectiveDate).getTime() -
          new Date(a.effectiveDate).getTime()
      )
      .slice(0, 6);
  }


toggleNotifications(): void {

  this.notificationOpen = !this.notificationOpen;

  this.mobileOpen = false;
  this.moreOpen = false;
  this.aboutOpen = false;

  this.dismissWelcome();

  // A direct bell click can help reactivate
  // audio after a browser refresh.
  if (this.soundEnabled()) {

    try {

      this.soundContext ??= new AudioContext();

      void this.soundContext.resume().catch(
        () => {}
      );

    } catch {}

  }
}

  markRead(id: string): void {
    if (this.readIds().includes(id)) {
      return;
    }

    const updated = [...this.readIds(), id];

    this.readIds.set(updated);

    try {
      localStorage.setItem(
        READ_KEY,
        JSON.stringify(updated)
      );
    } catch {
      /* optional */
    }
  }

  markAllRead(): void {
    const updated = Array.from(
      new Set([
        ...this.readIds(),
        ...this.store.alerts().map(a => a.id)
      ])
    );

    this.readIds.set(updated);

    try {
      localStorage.setItem(
        READ_KEY,
        JSON.stringify(updated)
      );
    } catch {
      /* optional */
    }
  }



  // ==========================================
  // FIRST VISIT SOUND CHOICE
  // ==========================================

  private initializeSoundChoice(): void {
    try {
      const previousChoice =
        localStorage.getItem(SOUND_PROMPT_KEY);

      // Ask only if this browser has not answered.
      this.showSoundPrompt = previousChoice === null;

      if (this.showSoundPrompt) {
        this.soundEnabled.set(false);
      }
    } catch {
      this.showSoundPrompt = false;
      this.soundEnabled.set(false);
    }
  }

  // ==========================================
  // ALLOW NOTIFICATION SOUND
  // ==========================================

  async allowNotificationSound(): Promise<void> {
    if (this.soundEnabling) return;

    this.soundEnabling = true;
    this.soundPromptError = '';

    try {
      // The visitor's click allows us to start audio.
      this.soundContext ??= new AudioContext();

      await this.soundContext.resume();

      if (this.soundContext.state !== 'running') {
        throw new Error('Browser audio could not start.');
      }

      this.soundEnabled.set(true);
      this.showSoundPrompt = false;

      try {
        localStorage.setItem(SOUND_KEY, 'true');
        localStorage.setItem(SOUND_PROMPT_KEY, 'allowed');
      } catch {}

      // Reuse the EXISTING bell sound.
      this.playSound();

    } catch (error) {
      this.soundEnabled.set(false);

      this.soundPromptError =
        'Unable to play sound. Please check browser and device audio settings.';

      console.warn('Notification audio:', error);
    } finally {
      this.soundEnabling = false;
    }
  }

  // ==========================================
  // NOT NOW
  // ==========================================

  declineNotificationSound(): void {
    this.soundEnabled.set(false);
    this.showSoundPrompt = false;
    this.soundPromptError = '';

    try {
      localStorage.setItem(SOUND_KEY, 'false');
      localStorage.setItem(SOUND_PROMPT_KEY, 'declined');
    } catch {}
  }

  // ==========================================
  // EXISTING BELL SOUND CONTROL
  // ==========================================

  async toggleSound(): Promise<void> {
    if (this.soundEnabled()) {
      this.soundEnabled.set(false);

      try {
        localStorage.setItem(SOUND_KEY, 'false');
      } catch {}

      return;
    }

    await this.allowNotificationSound();
  }

  // ==========================================
  // RESTORE AUDIO AFTER RELOAD AND USER CLICK
  // ==========================================

  @HostListener('document:pointerdown')
  onVisitorInteraction(): void {
    if (!this.soundEnabled()) return;

    try {
      this.soundContext ??= new AudioContext();

      if (this.soundContext.state !== 'running') {
        void this.soundContext.resume().catch(() => {});
      }
    } catch {}
  }


async checkNewAlerts(): Promise<void> {

  const previousIds = new Set(
    this.store.alerts().map(alert => alert.id)
  );

  try {

    // Fetch latest public alerts.
    await this.store.refreshFromBackend();

    // Detect newly added alerts.
    const newAlertFound = this.store.alerts().some(
      alert => !previousIds.has(alert.id)
    );

    if (!newAlertFound || !this.soundEnabled()) {
      return;
    }

    // Resume audio if browser has suspended it.
    if (this.soundContext?.state === 'suspended') {

      try {
        await this.soundContext.resume();
      } catch {}

    }

    // Play sound only if new alert is detected.
    this.playSound();

  } catch (error) {

    console.warn(
      'Public alerts refresh failed:',
      error
    );
  }
}


  private playSound(): void {
    // Browsers require a previous user gesture
    // to resume audio.
    const ctx = this.soundContext;

    if (!ctx || ctx.state !== 'running') {
      return;
    }

    try {
      [0, .16].forEach((delay, index) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value =
          index ? 880 : 660;

        gain.gain.setValueAtTime(
          .001,
          ctx.currentTime + delay
        );

        gain.gain.exponentialRampToValueAtTime(
          .12,
          ctx.currentTime + delay + .02
        );

        gain.gain.exponentialRampToValueAtTime(
          .001,
          ctx.currentTime + delay + .20
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start(
          ctx.currentTime + delay
        );

        oscillator.stop(
          ctx.currentTime + delay + .22
        );
      });

    } catch {
      /* Sound is optional. */
    }
  }

  // ==========================================
  // LOCAL STORAGE PREFERENCES
  // ==========================================

  private readStoredIds(): string[] {
    try {
      const parsed: unknown = JSON.parse(
        localStorage.getItem(READ_KEY) || '[]'
      );

      return Array.isArray(parsed)
        ? parsed.filter(
            (id): id is string =>
              typeof id === 'string'
          )
        : [];

    } catch {
      return [];
    }
  }

  private readSoundPreference(): boolean {
    // Opt-in: do not surprise visitors
    // with unsolicited sound.
    try {
      return localStorage.getItem(SOUND_KEY) === 'true';
    } catch {
      return false;
    }
  }

  private shouldShowWelcome(): boolean {
    try {
      return !localStorage.getItem(WELCOME_KEY);
    } catch {
      return false;
    }
  }

  dismissWelcome(): void {
    this.showWelcome.set(false);

    try {
      localStorage.setItem(WELCOME_KEY, '1');
    } catch {
      /* optional */
    }
  }

  // ==========================================
  // SEARCH
  // ==========================================

  search(): void {
    void this.router.navigate(
      ['/search'],
      {
        queryParams: {
          q: this.searchTerm.trim()
        }
      }
    );

    this.mobileOpen = false;
    this.searchMobileOpen = false;
  }

  // ==========================================
  // INDIA TIME
  // ==========================================

  private tick(): void {
    const now = new Date();

    this.clock = new Intl.DateTimeFormat(
      'en-IN',
      {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
    ).format(now);

    this.dateLine = new Intl.DateTimeFormat(
      'en-IN',
      {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }
    ).format(now);
  }
}
