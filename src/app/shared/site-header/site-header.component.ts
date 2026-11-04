import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NAV, MORE, SECTIONS, PublicAlert } from '../../core/models';
import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { MediaService } from '../../services/media.service';
import {BreakingTickerComponent} from '../breaking-ticker/breaking-ticker.component';
import {MobileBottomNavComponent} from '../mobile-bottom-nav/mobile-bottom-nav.component';

const READ_KEY = 'mv-read-alerts-v2';
const SOUND_KEY = 'mv-alert-sound-enabled-v2';
const WELCOME_KEY = 'mv-onboarding-hint-seen-v2';

@Component({selector:'app-site-header',standalone:true,imports:[CommonModule,RouterLink,RouterLinkActive,FormsModule,BreakingTickerComponent,MobileBottomNavComponent],templateUrl:'./site-header.component.html',styleUrls:['./site-header.component.css','./site-header.component.responsive.css']})
export class SiteHeaderComponent implements OnInit, OnDestroy {
  nav = NAV;
  more = MORE;
  allNav = SECTIONS;
  moreOpen = false;
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
    private router: Router
  ) {}


  ngOnInit(): void {
    this.tick();
    this.clockTimer = setInterval(() => this.tick(), 30000);
    // Periodically update public alerts. The first load never makes a sound.
    this.refreshTimer = setInterval(() => { void this.checkNewAlerts(); }, 60000);
  }

  ngOnDestroy(): void {
    if (this.clockTimer) clearInterval(this.clockTimer);
    if (this.refreshTimer) clearInterval(this.refreshTimer);
    if (this.soundContext) void this.soundContext.close();
  }

  unreadCount(): number {
    return this.store.alerts().filter(alert => !this.readIds().includes(alert.id)).length;
  }

  recentAlerts(): PublicAlert[] {
    return [...this.store.alerts()].sort((a, b) =>
      new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime()
    ).slice(0, 6);
  }

  toggleNotifications(): void {
    this.notificationOpen = !this.notificationOpen;
    this.mobileOpen = false;
    this.moreOpen = false;
    this.dismissWelcome();
  }

  markRead(id: string): void {
    if (this.readIds().includes(id)) return;
    const updated = [...this.readIds(), id];
    this.readIds.set(updated);
    try { localStorage.setItem(READ_KEY, JSON.stringify(updated)); } catch { /* optional */ }
  }

  markAllRead(): void {
    const updated = Array.from(new Set([...this.readIds(), ...this.store.alerts().map(a => a.id)]));
    this.readIds.set(updated);
    try { localStorage.setItem(READ_KEY, JSON.stringify(updated)); } catch { /* optional */ }
  }

  toggleSound(): void {
    const next = !this.soundEnabled();
    this.soundEnabled.set(next);
    try { localStorage.setItem(SOUND_KEY, String(next)); } catch { /* optional */ }
    // AudioContext is only activated on a visitor's explicit tap.
    if (next) {
      try {
        this.soundContext ??= new AudioContext();
        void this.soundContext.resume();
      } catch { this.soundEnabled.set(false); }
    }
  }

  async checkNewAlerts(): Promise<void> {
    const before = new Set(this.store.alerts().map(a => a.id));
    try {
      await this.store.refreshFromBackend();
      const newlyPublished = this.store.alerts().some(a => !before.has(a.id));
      if (newlyPublished && this.soundEnabled()) this.playSound();
    } catch { /* Leave the current page usable if the network is offline. */ }
  }

  private playSound(): void {
    // Browsers require a previous user gesture to resume audio.
    const ctx = this.soundContext;
    if (!ctx || ctx.state !== 'running') return;
    try {
      [0, .16].forEach((delay, index) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = index ? 880 : 660;
        gain.gain.setValueAtTime(.001, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + delay + .02);
        gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + delay + .20);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(ctx.currentTime + delay);
        oscillator.stop(ctx.currentTime + delay + .22);
      });
    } catch { /* Sound is optional. */ }
  }

  private readStoredIds(): string[] {
    try { const parsed: unknown = JSON.parse(localStorage.getItem(READ_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
    } catch { return []; }
  }

  private readSoundPreference(): boolean {
    // Opt-in: do not surprise visitors with unsolicited sound.
    try { return localStorage.getItem(SOUND_KEY) === 'true'; } catch { return false; }
  }

  private shouldShowWelcome(): boolean {
    try { return !localStorage.getItem(WELCOME_KEY); } catch { return false; }
  }

  dismissWelcome(): void {
    this.showWelcome.set(false);
    try { localStorage.setItem(WELCOME_KEY, '1'); } catch { /* optional */ }
  }

  search(): void {
    void this.router.navigate(['/search'], { queryParams: { q: this.searchTerm.trim() } });
    this.mobileOpen = false;
    this.searchMobileOpen = false;
  }

  private tick(): void {
    const now = new Date();
    this.clock = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true
    }).format(now);
    this.dateLine = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', day: '2-digit', month: 'short', year: 'numeric'
    }).format(now);
  }
}
