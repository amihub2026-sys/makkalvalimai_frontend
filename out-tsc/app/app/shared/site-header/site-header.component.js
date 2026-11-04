import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NAV, MORE, SECTIONS } from '../../core/models';
import { BreakingTickerComponent } from '../breaking-ticker/breaking-ticker.component';
import { MobileBottomNavComponent } from '../mobile-bottom-nav/mobile-bottom-nav.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/content.service";
import * as i2 from "../../services/preferences.service";
import * as i3 from "../../services/media.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
const _c0 = () => ({ exact: true });
function SiteHeaderComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.unreadCount() > 99 ? "99+" : ctx_r0.unreadCount());
} }
function SiteHeaderComponent_section_41_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 48);
    i0.ɵɵlistener("click", function SiteHeaderComponent_section_41_a_14_Template_a_click_0_listener() { const alert_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.markRead(alert_r4.id); return i0.ɵɵresetView(ctx_r0.notificationOpen = false); });
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵelementStart(2, "span")(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const alert_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("unread", !ctx_r0.readIds().includes(alert_r4.id));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.txt(alert_r4.title));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", alert_r4.area, " \u00B7 ", i0.ɵɵpipeBind2(7, 5, alert_r4.effectiveDate, "dd MMM yyyy"));
} }
function SiteHeaderComponent_section_41_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8", "No public alerts yet"));
} }
function SiteHeaderComponent_section_41_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 38)(1, "div", 39)(2, "strong");
    i0.ɵɵelement(3, "i", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 41);
    i0.ɵɵlistener("click", function SiteHeaderComponent_section_41_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.notificationOpen = false); });
    i0.ɵɵelement(6, "i", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 43)(8, "button", 15);
    i0.ɵɵlistener("click", function SiteHeaderComponent_section_41_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleSound()); });
    i0.ɵɵelement(9, "i", 26);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 15);
    i0.ɵɵlistener("click", function SiteHeaderComponent_section_41_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.markAllRead()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 44);
    i0.ɵɵtemplate(14, SiteHeaderComponent_section_41_a_14_Template, 8, 8, "a", 45)(15, SiteHeaderComponent_section_41_p_15_Template, 2, 1, "p", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 47);
    i0.ɵɵlistener("click", function SiteHeaderComponent_section_41_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.notificationOpen = false); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.prefs.label("\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Notifications"));
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("fa-volume-high", ctx_r0.soundEnabled())("fa-volume-xmark", !ctx_r0.soundEnabled());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.soundEnabled() ? ctx_r0.prefs.label("\u0B92\u0BB2\u0BBF \u0B87\u0BAF\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD", "Sound on") : ctx_r0.prefs.label("\u0B92\u0BB2\u0BBF \u0B85\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1", "Enable sound"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0BA4\u0BCD\u0BA4\u0BC7\u0BA9\u0BCD", "Mark all read"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.recentAlerts());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.recentAlerts().length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.prefs.label("\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC1\u0BAE\u0BCD", "View all alerts"), " \u2192");
} }
function SiteHeaderComponent_form_44_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 51);
    i0.ɵɵlistener("ngSubmit", function SiteHeaderComponent_form_44_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.search()); });
    i0.ɵɵelementStart(1, "input", 52);
    i0.ɵɵtwoWayListener("ngModelChange", function SiteHeaderComponent_form_44_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 53);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.searchTerm);
    i0.ɵɵproperty("placeholder", ctx_r0.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...", "Search Madurai news..."));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0BA4\u0BC7\u0B9F\u0BC1", "Search"));
} }
function SiteHeaderComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r6.path)("routerLinkActiveOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.txt(item_r6.name));
} }
function SiteHeaderComponent_div_52_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_52_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.moreOpen = false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r9.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.txt(item_r9.name));
} }
function SiteHeaderComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵtemplate(1, SiteHeaderComponent_div_52_a_1_Template, 2, 2, "a", 56);
    i0.ɵɵelementStart(2, "a", 57);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_52_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.moreOpen = false); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.more);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Opinion Polls"));
} }
function SiteHeaderComponent_div_53_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_53_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.mobileOpen = false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r12.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefs.txt(item_r12.name));
} }
function SiteHeaderComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵtemplate(1, SiteHeaderComponent_div_53_a_1_Template, 2, 2, "a", 56);
    i0.ɵɵelementStart(2, "a", 57);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_53_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.mobileOpen = false); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 60);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_53_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.mobileOpen = false); });
    i0.ɵɵtext(5, "Admin");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.allNav);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", "Opinion Polls"));
} }
function SiteHeaderComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 63);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_55_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.dismissWelcome()); });
    i0.ɵɵelement(5, "i", 42);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.prefs.label("\u0BAA\u0BC1\u0BA4\u0BBF\u0BAF\u0BB5\u0BB0\u0BBE? \u0BAE\u0BC7\u0BB2\u0BC7 \u0B89\u0BB3\u0BCD\u0BB3 \u0BAE\u0BA3\u0BBF \u0B90\u0B95\u0BBE\u0BA9\u0BBF\u0BB2\u0BCD \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0BA3\u0BB2\u0BBE\u0BAE\u0BCD. \u0B95\u0BC0\u0BB4\u0BC1\u0BB3\u0BCD\u0BB3 \u0BB5\u0BB4\u0BBF\u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.", "New here? Tap the bell for alerts and use the bottom navigation on mobile."));
} }
const READ_KEY = 'mv-read-alerts-v2';
const SOUND_KEY = 'mv-alert-sound-enabled-v2';
const WELCOME_KEY = 'mv-onboarding-hint-seen-v2';
export class SiteHeaderComponent {
    store;
    prefs;
    media;
    router;
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
    readIds = signal(this.readStoredIds(), ...(ngDevMode ? [{ debugName: "readIds" }] : []));
    soundEnabled = signal(this.readSoundPreference(), ...(ngDevMode ? [{ debugName: "soundEnabled" }] : []));
    showWelcome = signal(this.shouldShowWelcome(), ...(ngDevMode ? [{ debugName: "showWelcome" }] : []));
    clockTimer;
    refreshTimer;
    soundContext;
    constructor(store, prefs, media, router) {
        this.store = store;
        this.prefs = prefs;
        this.media = media;
        this.router = router;
    }
    ngOnInit() {
        this.tick();
        this.clockTimer = setInterval(() => this.tick(), 30000);
        // Periodically update public alerts. The first load never makes a sound.
        this.refreshTimer = setInterval(() => { void this.checkNewAlerts(); }, 60000);
    }
    ngOnDestroy() {
        if (this.clockTimer)
            clearInterval(this.clockTimer);
        if (this.refreshTimer)
            clearInterval(this.refreshTimer);
        if (this.soundContext)
            void this.soundContext.close();
    }
    unreadCount() {
        return this.store.alerts().filter(alert => !this.readIds().includes(alert.id)).length;
    }
    recentAlerts() {
        return [...this.store.alerts()].sort((a, b) => new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime()).slice(0, 6);
    }
    toggleNotifications() {
        this.notificationOpen = !this.notificationOpen;
        this.mobileOpen = false;
        this.moreOpen = false;
        this.dismissWelcome();
    }
    markRead(id) {
        if (this.readIds().includes(id))
            return;
        const updated = [...this.readIds(), id];
        this.readIds.set(updated);
        try {
            localStorage.setItem(READ_KEY, JSON.stringify(updated));
        }
        catch { /* optional */ }
    }
    markAllRead() {
        const updated = Array.from(new Set([...this.readIds(), ...this.store.alerts().map(a => a.id)]));
        this.readIds.set(updated);
        try {
            localStorage.setItem(READ_KEY, JSON.stringify(updated));
        }
        catch { /* optional */ }
    }
    toggleSound() {
        const next = !this.soundEnabled();
        this.soundEnabled.set(next);
        try {
            localStorage.setItem(SOUND_KEY, String(next));
        }
        catch { /* optional */ }
        // AudioContext is only activated on a visitor's explicit tap.
        if (next) {
            try {
                this.soundContext ??= new AudioContext();
                void this.soundContext.resume();
            }
            catch {
                this.soundEnabled.set(false);
            }
        }
    }
    async checkNewAlerts() {
        const before = new Set(this.store.alerts().map(a => a.id));
        try {
            await this.store.refreshFromBackend();
            const newlyPublished = this.store.alerts().some(a => !before.has(a.id));
            if (newlyPublished && this.soundEnabled())
                this.playSound();
        }
        catch { /* Leave the current page usable if the network is offline. */ }
    }
    playSound() {
        // Browsers require a previous user gesture to resume audio.
        const ctx = this.soundContext;
        if (!ctx || ctx.state !== 'running')
            return;
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
        }
        catch { /* Sound is optional. */ }
    }
    readStoredIds() {
        try {
            const parsed = JSON.parse(localStorage.getItem(READ_KEY) || '[]');
            return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];
        }
        catch {
            return [];
        }
    }
    readSoundPreference() {
        // Opt-in: do not surprise visitors with unsolicited sound.
        try {
            return localStorage.getItem(SOUND_KEY) === 'true';
        }
        catch {
            return false;
        }
    }
    shouldShowWelcome() {
        try {
            return !localStorage.getItem(WELCOME_KEY);
        }
        catch {
            return false;
        }
    }
    dismissWelcome() {
        this.showWelcome.set(false);
        try {
            localStorage.setItem(WELCOME_KEY, '1');
        }
        catch { /* optional */ }
    }
    search() {
        void this.router.navigate(['/search'], { queryParams: { q: this.searchTerm.trim() } });
        this.mobileOpen = false;
        this.searchMobileOpen = false;
    }
    tick() {
        const now = new Date();
        this.clock = new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true
        }).format(now);
        this.dateLine = new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata', day: '2-digit', month: 'short', year: 'numeric'
        }).format(now);
    }
    static ɵfac = function SiteHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SiteHeaderComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.PreferencesService), i0.ɵɵdirectiveInject(i3.MediaService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteHeaderComponent, selectors: [["app-site-header"]], decls: 57, vars: 26, consts: [[1, "masthead"], [1, "mast-inner"], ["routerLink", "/", "aria-label", "Makkal Valimai Home", 1, "brand", 3, "click"], ["src", "assets/images/makkal-valimai-logo.png", "alt", "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8"], [1, "brand-copy"], ["role", "search", 1, "top-search", 3, "ngSubmit"], ["name", "search", "aria-label", "Search news", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", "aria-label", "Search"], [1, "fa-solid", "fa-magnifying-glass"], [1, "mast-right"], [1, "live-clock"], [1, "live-pill"], [1, "fa-solid", "fa-circle"], [1, "reader-controls"], ["aria-label", "Language", 1, "lang-group"], ["type", "button", 3, "click"], [1, "font-group"], ["type", "button", "aria-label", "Reduce text size", 3, "click"], ["type", "button", "aria-label", "Increase text size", 3, "click"], ["type", "button", "aria-label", "Search news", 1, "mobile-search-button", 3, "click"], [1, "notification-anchor"], ["type", "button", "aria-label", "Public notifications", 1, "notification-bell", 3, "click"], [1, "fa-regular", "fa-bell"], ["class", "notification-count", 4, "ngIf"], ["class", "notification-popover", "aria-label", "Latest public alerts", 4, "ngIf"], ["type", "button", "aria-label", "Open navigation", 1, "mobile-header-menu", 3, "click"], [1, "fa-solid"], ["class", "mobile-search-form", 3, "ngSubmit", 4, "ngIf"], ["aria-label", "Main navigation", 1, "main-nav"], [1, "nav-inner"], ["routerLinkActive", "is-active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "more-wrap"], [1, "fa-solid", "fa-angle-down"], ["class", "more-menu", 4, "ngIf"], ["class", "mobile-menu", 4, "ngIf"], ["class", "welcome-hint", 4, "ngIf"], [3, "toggleMore", "unread"], [1, "notification-count"], ["aria-label", "Latest public alerts", 1, "notification-popover"], [1, "notification-top"], [1, "fa-solid", "fa-bell"], ["type", "button", "aria-label", "Close notifications", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "notification-actions"], [1, "notification-list"], ["routerLink", "/public-alerts", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notification-empty", 4, "ngIf"], ["routerLink", "/public-alerts", 1, "all-alerts-link", 3, "click"], ["routerLink", "/public-alerts", 3, "click"], [1, "fa-solid", "fa-circle-exclamation"], [1, "notification-empty"], [1, "mobile-search-form", 3, "ngSubmit"], ["name", "mobileSearch", "aria-label", "Search news", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "btn", "btn-red"], ["routerLinkActive", "is-active", 3, "routerLink", "routerLinkActiveOptions"], [1, "more-menu"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLink", "/opinion-polls", 3, "click"], [3, "click", "routerLink"], [1, "mobile-menu"], ["routerLink", "/admin/login", 3, "click"], [1, "welcome-hint"], [1, "fa-solid", "fa-circle-info"], ["type", "button", "aria-label", "Dismiss tip", 3, "click"]], template: function SiteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_a_click_2_listener() { return ctx.mobileOpen = false; });
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span", 4)(5, "b");
            i0.ɵɵtext(6, "\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD ");
            i0.ɵɵelementStart(7, "em");
            i0.ɵɵtext(8, "\u0BB5\u0BB2\u0BBF\u0BAE\u0BC8");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "small");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "form", 5);
            i0.ɵɵlistener("ngSubmit", function SiteHeaderComponent_Template_form_ngSubmit_11_listener() { return ctx.search(); });
            i0.ɵɵelementStart(12, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function SiteHeaderComponent_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 7);
            i0.ɵɵelement(14, "i", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "div", 10)(17, "span", 11);
            i0.ɵɵelement(18, "i", 12);
            i0.ɵɵtext(19, " MADURAI \u2022 IST");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "b");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "small");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 13)(25, "div", 14)(26, "button", 15);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_26_listener() { return ctx.prefs.language.set("ta"); });
            i0.ɵɵtext(27, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 15);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_28_listener() { return ctx.prefs.language.set("en"); });
            i0.ɵɵtext(29, "English");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 16)(31, "button", 17);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_31_listener() { return ctx.prefs.changeFont(-0.125); });
            i0.ɵɵtext(32, "A\u2212");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 18);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_33_listener() { return ctx.prefs.changeFont(0.125); });
            i0.ɵɵtext(34, "A+");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "button", 19);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_35_listener() { return ctx.searchMobileOpen = !ctx.searchMobileOpen; });
            i0.ɵɵelement(36, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 20)(38, "button", 21);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_38_listener() { return ctx.toggleNotifications(); });
            i0.ɵɵelement(39, "i", 22);
            i0.ɵɵtemplate(40, SiteHeaderComponent_span_40_Template, 2, 1, "span", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(41, SiteHeaderComponent_section_41_Template, 18, 10, "section", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "button", 25);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_42_listener() { return ctx.mobileOpen = !ctx.mobileOpen; });
            i0.ɵɵelement(43, "i", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(44, SiteHeaderComponent_form_44_Template, 4, 3, "form", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "nav", 28)(46, "div", 29);
            i0.ɵɵtemplate(47, SiteHeaderComponent_a_47_Template, 2, 4, "a", 30);
            i0.ɵɵelementStart(48, "div", 31)(49, "button", 15);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_49_listener() { return ctx.moreOpen = !ctx.moreOpen; });
            i0.ɵɵtext(50);
            i0.ɵɵelement(51, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(52, SiteHeaderComponent_div_52_Template, 4, 2, "div", 33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(53, SiteHeaderComponent_div_53_Template, 6, 2, "div", 34);
            i0.ɵɵelement(54, "app-breaking-ticker");
            i0.ɵɵtemplate(55, SiteHeaderComponent_div_55_Template, 6, 1, "div", 35);
            i0.ɵɵelementStart(56, "app-mobile-bottom-nav", 36);
            i0.ɵɵlistener("toggleMore", function SiteHeaderComponent_Template_app_mobile_bottom_nav_toggleMore_56_listener() { return ctx.mobileOpen = !ctx.mobileOpen; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-image", ctx.store.settings().headerImage ? "linear-gradient(105deg,rgba(2,32,68,.96),rgba(6,72,133,.82)),url(" + ctx.media.url(ctx.store.settings().headerImage) + ")" : null);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.prefs.label("\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BC1\u0BB0\u0BB2\u0BCD", "Madurai district people\u2019s voice"));
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchTerm);
            i0.ɵɵproperty("placeholder", ctx.prefs.label("\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...", "Search Madurai news..."));
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.clock);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dateLine);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.prefs.language() === "ta");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.prefs.language() === "en");
            i0.ɵɵadvance(10);
            i0.ɵɵattribute("aria-expanded", ctx.notificationOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.unreadCount());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.notificationOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("fa-bars", !ctx.mobileOpen)("fa-xmark", ctx.mobileOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.searchMobileOpen);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.nav);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.moreOpen);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.prefs.label("\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD", "More"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.moreOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mobileOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showWelcome());
            i0.ɵɵadvance();
            i0.ɵɵproperty("unread", ctx.unreadCount());
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, RouterLink, RouterLinkActive, FormsModule, i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.NgModel, i6.NgForm, BreakingTickerComponent, MobileBottomNavComponent, i5.DatePipe], styles: ["[_nghost-%COMP%]{display:block;min-width:0}\n.masthead[_ngcontent-%COMP%]{position:relative;z-index:90;background:linear-gradient(113deg,#053065 0%,#075393 57%,#053a72 100%);background-position:center;background-size:cover;border-bottom:1px solid #398bc5;box-shadow:0 5px 20px #00182b4a}\n\n.mast-inner[_ngcontent-%COMP%]{max-width:1460px;margin:auto;padding:12px 22px;min-height:87px;display:flex;align-items:center;gap:18px}\n\n.brand[_ngcontent-%COMP%]{display:flex;align-items:center;flex-shrink:0;gap:11px;max-width:42%;color:#fff!important}\n\n.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:66px;height:66px;object-fit:contain;flex-shrink:0;border-radius:50%;background:#fff;box-shadow:0 2px 12px #00163355}\n\n.brand-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;min-width:0}\n\n.brand-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:clamp(1.35rem,2.5vw,2.35rem);font-weight:900;line-height:1.1;color:#fff;letter-spacing:-.04em;text-shadow:0 2px 7px #001b3577}\n\n.brand-copy[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:normal;color:#ff2a40}\n\n.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.65rem;color:#c9e6ff;font-weight:700;white-space:nowrap}\n\n.top-search[_ngcontent-%COMP%]{display:flex;flex:1;max-width:410px;margin-left:auto;height:41px;border:1px solid #79b5e578;background:#ffffff15;border-radius:10px;overflow:hidden}\n\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;min-width:0;padding:0 13px;border:0;background:transparent;color:#fff;font-size:.82rem;outline:0}\n\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#c3dbf1}\n\n.top-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:#d90628;color:white;width:45px;flex-shrink:0}\n\n.mast-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:13px}\n\n.live-clock[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;white-space:nowrap;gap:2px}\n\n.live-clock[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:.89rem;color:#fff}\n\n.live-clock[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.6rem;color:#c5e6ff}\n\n.live-pill[_ngcontent-%COMP%]{font-size:.51rem;font-weight:800;color:#c5e8ff;letter-spacing:.06em}\n\n.live-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.4rem;color:#ff3456}\n\n.reader-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}\n\n.lang-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;border:1px solid #7db5e555;border-radius:30px;background:#00305c77;padding:3px}\n\n.lang-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:7px 10px;font-size:.7rem;color:#ddecff;border:0;background:transparent;border-radius:22px}\n\n.lang-group[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:linear-gradient(110deg,#fc2a3d,#b30020);color:#fff;box-shadow:0 2px 10px #ff103a4d}\n\n.font-group[_ngcontent-%COMP%]{display:flex;gap:4px}\n\n.font-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #7baadb88;border-radius:7px;background:#0e5088;color:white;font-size:.68rem;padding:6px}\n\n.notification-anchor[_ngcontent-%COMP%]{position:relative;flex-shrink:0}\n\n.notification-bell[_ngcontent-%COMP%]{width:43px;height:43px;border:1px solid #7cb1e06b;border-radius:13px;background:#03447d;color:#fff;position:relative;font-size:1.13rem}\n\n.notification-count[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;display:grid;place-items:center;min-width:20px;height:20px;padding:0 4px;background:#ed1233;color:#fff;border:2px solid #064475;border-radius:50%;font-size:.6rem;font-weight:900}\n\n.notification-popover[_ngcontent-%COMP%]{position:absolute;right:0;top:calc(100% + 11px);width:min(395px,calc(100vw - 22px));z-index:350;background:#072f5c;border:1px solid #408cce;border-radius:13px;box-shadow:0 24px 70px #001329be;overflow:hidden;color:#fff}\n\n.notification-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;background:#064578;border-bottom:1px solid #ffffff21}\n\n.notification-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.96rem}\n\n.notification-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ff5265;margin-right:5px}\n\n.notification-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:none;color:#fff;padding:5px;font-size:1rem}\n\n.notification-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:7px;padding:9px 12px;border-bottom:1px solid #ffffff20}\n\n.notification-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.69rem;background:#0b528d;border:1px solid #5390bc5c;color:#e6f4ff;border-radius:8px;padding:7px 9px}\n\n.notification-list[_ngcontent-%COMP%]{max-height:350px;overflow-y:auto}\n\n.notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;gap:12px;padding:13px 14px;border-bottom:1px solid #ffffff17;color:#e8f5ff}\n\n.notification-list[_ngcontent-%COMP%]   a.unread[_ngcontent-%COMP%]{background:#165d963d;border-left:3px solid #ff3547}\n\n.notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#ff4c63;margin-top:5px}\n\n.notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:grid;gap:5px;min-width:0}\n\n.notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:.79rem;line-height:1.6}\n\n.notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.66rem;color:#b9d4ed}\n\n.notification-empty[_ngcontent-%COMP%]{padding:18px;font-size:.8rem;color:#b9d4ed}\n\n.all-alerts-link[_ngcontent-%COMP%]{display:block;padding:13px;background:#075c9c;color:#fff;text-align:center;font-size:.77rem;font-weight:800}\n\n.mobile-header-menu[_ngcontent-%COMP%]{display:none;border:1px solid #75b2e081;background:#08467c;color:#fff;border-radius:10px;width:39px;height:40px;font-size:1rem}\n\n.main-nav[_ngcontent-%COMP%]{background:#04264f;border-bottom:2px solid #d41336;position:relative;z-index:60}\n\n.nav-inner[_ngcontent-%COMP%]{max-width:1460px;margin:auto;display:flex;align-items:center;min-height:43px;padding:0 13px;overflow:visible}\n\n.nav-inner[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .more-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-height:43px;padding:10px 13px;border:0;border-right:1px solid #4688bf55;background:transparent;color:#f1f6ff;font-weight:800;font-size:.72rem;white-space:nowrap;line-height:1.2}\n\n.nav-inner[_ngcontent-%COMP%] > a.is-active[_ngcontent-%COMP%], .nav-inner[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .more-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{background:linear-gradient(115deg,#f5243e,#bd062b);color:#fff}\n\n.more-wrap[_ngcontent-%COMP%]{position:relative;margin-left:auto}\n\n.more-menu[_ngcontent-%COMP%]{position:absolute;top:100%;right:0;min-width:210px;display:grid;padding:7px;background:#073d70;border:1px solid #5396cb;border-radius:0 0 10px 10px;box-shadow:0 14px 25px #00162d93;z-index:95}\n\n.more-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 12px;color:#fff;font-size:.78rem;border-radius:6px}\n\n.more-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#d21232}\n\n.mobile-menu[_ngcontent-%COMP%]{position:fixed;z-index:130;right:10px;top:81px;display:grid;min-width:min(335px,calc(100vw - 20px));max-height:70vh;overflow-y:auto;padding:9px;background:#073a70;border:1px solid #5b99ca;border-radius:13px;box-shadow:0 24px 55px #001b3add}\n\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px;color:#edf7ff;font-size:.85rem;border-bottom:1px solid #ffffff22}\n\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#115e9e}\n\n.welcome-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;max-width:1360px;margin:8px auto;padding:8px 12px;color:#d8f2ff;border:1px solid #4c8fc64d;background:#104d7daa;border-radius:9px;font-size:.72rem}\n\n.welcome-hint[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#ff6d7a}\n\n.welcome-hint[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:none;color:#fff;margin-left:auto}\n\n.mobile-search-button[_ngcontent-%COMP%]{display:none;background:#07467f;color:#fff;border:1px solid #76b2e075;border-radius:9px;width:36px;height:37px}\n\n.mobile-search-form[_ngcontent-%COMP%]{display:flex;gap:8px;padding:7px 11px 11px;background:#063d72}\n\n.mobile-search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;min-width:0;background:#04345e;color:#fff;border:1px solid #6aa9da;border-radius:8px;padding:8px 11px;font-size:.79rem}\n\n.mobile-search-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:.71rem}", "\n\n@media(max-width:1220px){\n.nav-inner[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .more-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{padding:10px 9px;font-size:.67rem}\n.brand-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:1.75rem}\n.live-clock[_ngcontent-%COMP%]{display:none}\n}\n\n@media(max-width:950px){\n.mast-inner[_ngcontent-%COMP%]{gap:9px;padding:10px 14px}\n.brand[_ngcontent-%COMP%]{max-width:none}\n.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;height:55px}\n.brand-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:1.4rem}\n.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.55rem}\n.font-group[_ngcontent-%COMP%]{display:none}\n.top-search[_ngcontent-%COMP%]{max-width:320px}\n.nav-inner[_ngcontent-%COMP%]{overflow-x:auto;scrollbar-width:none}\n.nav-inner[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:none}\n.more-wrap[_ngcontent-%COMP%]{display:none}\n.main-nav[_ngcontent-%COMP%]{min-height:4px}\n.mobile-header-menu[_ngcontent-%COMP%]{display:block}\n}\n\n@media(max-width:650px){\n.masthead[_ngcontent-%COMP%]{position:sticky;top:0;z-index:200}\n.mast-inner[_ngcontent-%COMP%]{min-height:61px;padding:7px 11px;gap:8px}\n.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px;height:42px}\n.brand-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:1.02rem}\n.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.46rem}\n.top-search[_ngcontent-%COMP%]{display:none}\n.mast-right[_ngcontent-%COMP%]{margin-left:auto}\n.reader-controls[_ngcontent-%COMP%]{gap:0}\n.lang-group[_ngcontent-%COMP%]{padding:2px}\n.lang-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.57rem;padding:5px 7px}\n.notification-bell[_ngcontent-%COMP%]{width:36px;height:37px;font-size:1rem}\n.mobile-header-menu[_ngcontent-%COMP%]{width:35px;height:37px}\n.notification-popover[_ngcontent-%COMP%]{position:fixed;top:61px;right:8px;width:min(395px,calc(100vw - 16px))}\n.mobile-menu[_ngcontent-%COMP%]{top:65px;right:8px;bottom:77px;max-height:none;height:auto}\n.welcome-hint[_ngcontent-%COMP%]{font-size:.63rem;margin:5px 9px;padding:7px 8px}\n}\n\n@media(max-width:380px){\n.brand-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:.87rem}\n.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:none}\n.lang-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px}\n.mast-inner[_ngcontent-%COMP%]{gap:5px}\n.brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px;height:38px}\n.notification-bell[_ngcontent-%COMP%], .mobile-header-menu[_ngcontent-%COMP%]{width:33px;height:35px}\n}\n\n@media(max-width:650px){\n.mobile-search-button[_ngcontent-%COMP%]{display:grid;place-items:center}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteHeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-site-header', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule, BreakingTickerComponent, MobileBottomNavComponent], template: "<header class=\"masthead\" [style.background-image]=\"store.settings().headerImage ? 'linear-gradient(105deg,rgba(2,32,68,.96),rgba(6,72,133,.82)),url('+media.url(store.settings().headerImage)+')' : null\">\n    <div class=\"mast-inner\">\n      <a routerLink=\"/\" class=\"brand\" aria-label=\"Makkal Valimai Home\" (click)=\"mobileOpen=false\">\n        <img src=\"assets/images/makkal-valimai-logo.png\" alt=\"\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BBF\u0BAE\u0BC8\" />\n        <span class=\"brand-copy\"><b>\u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BCD <em>\u0BB5\u0BB2\u0BBF\u0BAE\u0BC8</em></b><small>{{prefs.label('\u0BAE\u0BA4\u0BC1\u0BB0\u0BC8 \u0BAE\u0BBE\u0BB5\u0B9F\u0BCD\u0B9F \u0BAE\u0B95\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B95\u0BC1\u0BB0\u0BB2\u0BCD','Madurai district people\u2019s voice')}}</small></span>\n      </a>\n      <form class=\"top-search\" (ngSubmit)=\"search()\" role=\"search\">\n        <input name=\"search\" [(ngModel)]=\"searchTerm\" [placeholder]=\"prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...','Search Madurai news...')\" aria-label=\"Search news\" />\n        <button type=\"submit\" aria-label=\"Search\"><i class=\"fa-solid fa-magnifying-glass\"></i></button>\n      </form>\n      <div class=\"mast-right\">\n        <div class=\"live-clock\"><span class=\"live-pill\"><i class=\"fa-solid fa-circle\"></i> MADURAI \u2022 IST</span><b>{{clock}}</b><small>{{dateLine}}</small></div>\n        <div class=\"reader-controls\">\n          <div class=\"lang-group\" aria-label=\"Language\">\n            <button type=\"button\" [class.active]=\"prefs.language()==='ta'\" (click)=\"prefs.language.set('ta')\">\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD</button>\n            <button type=\"button\" [class.active]=\"prefs.language()==='en'\" (click)=\"prefs.language.set('en')\">English</button>\n          </div>\n          <div class=\"font-group\"><button type=\"button\" (click)=\"prefs.changeFont(-.125)\" aria-label=\"Reduce text size\">A\u2212</button><button type=\"button\" (click)=\"prefs.changeFont(.125)\" aria-label=\"Increase text size\">A+</button></div>\n        </div>\n      </div>\n      <button class=\"mobile-search-button\" type=\"button\" aria-label=\"Search news\" (click)=\"searchMobileOpen=!searchMobileOpen\"><i class=\"fa-solid fa-magnifying-glass\"></i></button>\n      <div class=\"notification-anchor\">\n        <button class=\"notification-bell\" type=\"button\" aria-label=\"Public notifications\" [attr.aria-expanded]=\"notificationOpen\" (click)=\"toggleNotifications()\">\n          <i class=\"fa-regular fa-bell\"></i><span class=\"notification-count\" *ngIf=\"unreadCount()\">{{unreadCount() > 99 ? '99+' : unreadCount()}}</span>\n        </button>\n        <section class=\"notification-popover\" *ngIf=\"notificationOpen\" aria-label=\"Latest public alerts\">\n          <div class=\"notification-top\"><strong><i class=\"fa-solid fa-bell\"></i> {{prefs.label('\u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Notifications')}}</strong><button type=\"button\" (click)=\"notificationOpen=false\" aria-label=\"Close notifications\"><i class=\"fa-solid fa-xmark\"></i></button></div>\n          <div class=\"notification-actions\"><button type=\"button\" (click)=\"toggleSound()\"><i class=\"fa-solid\" [class.fa-volume-high]=\"soundEnabled()\" [class.fa-volume-xmark]=\"!soundEnabled()\"></i> {{soundEnabled() ? prefs.label('\u0B92\u0BB2\u0BBF \u0B87\u0BAF\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD','Sound on') : prefs.label('\u0B92\u0BB2\u0BBF \u0B85\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1','Enable sound')}}</button><button type=\"button\" (click)=\"markAllRead()\">{{prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BAA\u0B9F\u0BBF\u0BA4\u0BCD\u0BA4\u0BC7\u0BA9\u0BCD','Mark all read')}}</button></div>\n          <div class=\"notification-list\">\n            <a *ngFor=\"let alert of recentAlerts()\" routerLink=\"/public-alerts\" (click)=\"markRead(alert.id);notificationOpen=false\" [class.unread]=\"!readIds().includes(alert.id)\">\n              <i class=\"fa-solid fa-circle-exclamation\"></i><span><b>{{prefs.txt(alert.title)}}</b><small>{{alert.area}} \u00B7 {{alert.effectiveDate | date:'dd MMM yyyy'}}</small></span>\n            </a>\n            <p *ngIf=\"!recentAlerts().length\" class=\"notification-empty\">{{prefs.label('\u0B87\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8','No public alerts yet')}}</p>\n          </div>\n          <a class=\"all-alerts-link\" routerLink=\"/public-alerts\" (click)=\"notificationOpen=false\">{{prefs.label('\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC1\u0BAE\u0BCD','View all alerts')}} \u2192</a>\n        </section>\n      </div>\n      <button class=\"mobile-header-menu\" type=\"button\" aria-label=\"Open navigation\" (click)=\"mobileOpen=!mobileOpen\"><i class=\"fa-solid\" [class.fa-bars]=\"!mobileOpen\" [class.fa-xmark]=\"mobileOpen\"></i></button>\n    </div>\n    <form class=\"mobile-search-form\" *ngIf=\"searchMobileOpen\" (ngSubmit)=\"search()\"><input name=\"mobileSearch\" [(ngModel)]=\"searchTerm\" [placeholder]=\"prefs.label('\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\u0B95\u0BB3\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD...','Search Madurai news...')\" aria-label=\"Search news\"/><button class=\"btn btn-red\" type=\"submit\">{{prefs.label('\u0BA4\u0BC7\u0B9F\u0BC1','Search')}}</button></form>\n  </header>\n<nav class=\"main-nav\" aria-label=\"Main navigation\"><div class=\"nav-inner\">\n    <a *ngFor=\"let item of nav\" [routerLink]=\"item.path\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact:true}\">{{prefs.txt(item.name)}}</a>\n    <div class=\"more-wrap\"><button type=\"button\" (click)=\"moreOpen=!moreOpen\" [attr.aria-expanded]=\"moreOpen\">{{prefs.label('\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD','More')}} <i class=\"fa-solid fa-angle-down\"></i></button>\n      <div class=\"more-menu\" *ngIf=\"moreOpen\"><a *ngFor=\"let item of more\" [routerLink]=\"item.path\" (click)=\"moreOpen=false\">{{prefs.txt(item.name)}}</a><a routerLink=\"/opinion-polls\" (click)=\"moreOpen=false\">{{prefs.label('\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Opinion Polls')}}</a></div>\n    </div>\n  </div></nav>\n  <div class=\"mobile-menu\" *ngIf=\"mobileOpen\"><a *ngFor=\"let item of allNav\" [routerLink]=\"item.path\" (click)=\"mobileOpen=false\">{{prefs.txt(item.name)}}</a><a routerLink=\"/opinion-polls\" (click)=\"mobileOpen=false\">{{prefs.label('\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD','Opinion Polls')}}</a><a routerLink=\"/admin/login\" (click)=\"mobileOpen=false\">Admin</a></div>\n<app-breaking-ticker />\n<div class=\"welcome-hint\" *ngIf=\"showWelcome()\"><i class=\"fa-solid fa-circle-info\"></i><span>{{prefs.label('\u0BAA\u0BC1\u0BA4\u0BBF\u0BAF\u0BB5\u0BB0\u0BBE? \u0BAE\u0BC7\u0BB2\u0BC7 \u0B89\u0BB3\u0BCD\u0BB3 \u0BAE\u0BA3\u0BBF \u0B90\u0B95\u0BBE\u0BA9\u0BBF\u0BB2\u0BCD \u0BAA\u0BCA\u0BA4\u0BC1 \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0BA3\u0BB2\u0BBE\u0BAE\u0BCD. \u0B95\u0BC0\u0BB4\u0BC1\u0BB3\u0BCD\u0BB3 \u0BB5\u0BB4\u0BBF\u0B9A\u0BC6\u0BB2\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BC8\u0BAA\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.','New here? Tap the bell for alerts and use the bottom navigation on mobile.')}}</span><button type=\"button\" aria-label=\"Dismiss tip\" (click)=\"dismissWelcome()\"><i class=\"fa-solid fa-xmark\"></i></button></div>\n<app-mobile-bottom-nav [unread]=\"unreadCount()\" (toggleMore)=\"mobileOpen=!mobileOpen\" />\n", styles: [":host{display:block;min-width:0}\n.masthead{position:relative;z-index:90;background:linear-gradient(113deg,#053065 0%,#075393 57%,#053a72 100%);background-position:center;background-size:cover;border-bottom:1px solid #398bc5;box-shadow:0 5px 20px #00182b4a}\n\n.mast-inner{max-width:1460px;margin:auto;padding:12px 22px;min-height:87px;display:flex;align-items:center;gap:18px}\n\n.brand{display:flex;align-items:center;flex-shrink:0;gap:11px;max-width:42%;color:#fff!important}\n\n.brand img{width:66px;height:66px;object-fit:contain;flex-shrink:0;border-radius:50%;background:#fff;box-shadow:0 2px 12px #00163355}\n\n.brand-copy{display:flex;flex-direction:column;gap:3px;min-width:0}\n\n.brand-copy b{font-size:clamp(1.35rem,2.5vw,2.35rem);font-weight:900;line-height:1.1;color:#fff;letter-spacing:-.04em;text-shadow:0 2px 7px #001b3577}\n\n.brand-copy em{font-style:normal;color:#ff2a40}\n\n.brand-copy small{font-size:.65rem;color:#c9e6ff;font-weight:700;white-space:nowrap}\n\n.top-search{display:flex;flex:1;max-width:410px;margin-left:auto;height:41px;border:1px solid #79b5e578;background:#ffffff15;border-radius:10px;overflow:hidden}\n\n.top-search input{width:100%;min-width:0;padding:0 13px;border:0;background:transparent;color:#fff;font-size:.82rem;outline:0}\n\n.top-search input::placeholder{color:#c3dbf1}\n\n.top-search button{border:0;background:#d90628;color:white;width:45px;flex-shrink:0}\n\n.mast-right{display:flex;align-items:center;gap:13px}\n\n.live-clock{display:flex;flex-direction:column;align-items:center;white-space:nowrap;gap:2px}\n\n.live-clock b{font-size:.89rem;color:#fff}\n\n.live-clock small{font-size:.6rem;color:#c5e6ff}\n\n.live-pill{font-size:.51rem;font-weight:800;color:#c5e8ff;letter-spacing:.06em}\n\n.live-pill i{font-size:.4rem;color:#ff3456}\n\n.reader-controls{display:flex;align-items:center;gap:9px}\n\n.lang-group{display:flex;align-items:center;gap:2px;border:1px solid #7db5e555;border-radius:30px;background:#00305c77;padding:3px}\n\n.lang-group button{padding:7px 10px;font-size:.7rem;color:#ddecff;border:0;background:transparent;border-radius:22px}\n\n.lang-group button.active{background:linear-gradient(110deg,#fc2a3d,#b30020);color:#fff;box-shadow:0 2px 10px #ff103a4d}\n\n.font-group{display:flex;gap:4px}\n\n.font-group button{border:1px solid #7baadb88;border-radius:7px;background:#0e5088;color:white;font-size:.68rem;padding:6px}\n\n.notification-anchor{position:relative;flex-shrink:0}\n\n.notification-bell{width:43px;height:43px;border:1px solid #7cb1e06b;border-radius:13px;background:#03447d;color:#fff;position:relative;font-size:1.13rem}\n\n.notification-count{position:absolute;top:-8px;right:-7px;display:grid;place-items:center;min-width:20px;height:20px;padding:0 4px;background:#ed1233;color:#fff;border:2px solid #064475;border-radius:50%;font-size:.6rem;font-weight:900}\n\n.notification-popover{position:absolute;right:0;top:calc(100% + 11px);width:min(395px,calc(100vw - 22px));z-index:350;background:#072f5c;border:1px solid #408cce;border-radius:13px;box-shadow:0 24px 70px #001329be;overflow:hidden;color:#fff}\n\n.notification-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;background:#064578;border-bottom:1px solid #ffffff21}\n\n.notification-top strong{font-size:.96rem}\n\n.notification-top i{color:#ff5265;margin-right:5px}\n\n.notification-top button{border:0;background:none;color:#fff;padding:5px;font-size:1rem}\n\n.notification-actions{display:flex;align-items:center;justify-content:space-between;gap:7px;padding:9px 12px;border-bottom:1px solid #ffffff20}\n\n.notification-actions button{font-size:.69rem;background:#0b528d;border:1px solid #5390bc5c;color:#e6f4ff;border-radius:8px;padding:7px 9px}\n\n.notification-list{max-height:350px;overflow-y:auto}\n\n.notification-list a{display:flex;gap:12px;padding:13px 14px;border-bottom:1px solid #ffffff17;color:#e8f5ff}\n\n.notification-list a.unread{background:#165d963d;border-left:3px solid #ff3547}\n\n.notification-list a>i{color:#ff4c63;margin-top:5px}\n\n.notification-list a span{display:grid;gap:5px;min-width:0}\n\n.notification-list a b{font-size:.79rem;line-height:1.6}\n\n.notification-list a small{font-size:.66rem;color:#b9d4ed}\n\n.notification-empty{padding:18px;font-size:.8rem;color:#b9d4ed}\n\n.all-alerts-link{display:block;padding:13px;background:#075c9c;color:#fff;text-align:center;font-size:.77rem;font-weight:800}\n\n.mobile-header-menu{display:none;border:1px solid #75b2e081;background:#08467c;color:#fff;border-radius:10px;width:39px;height:40px;font-size:1rem}\n\n.main-nav{background:#04264f;border-bottom:2px solid #d41336;position:relative;z-index:60}\n\n.nav-inner{max-width:1460px;margin:auto;display:flex;align-items:center;min-height:43px;padding:0 13px;overflow:visible}\n\n.nav-inner>a,.more-wrap>button{display:inline-flex;align-items:center;justify-content:center;min-height:43px;padding:10px 13px;border:0;border-right:1px solid #4688bf55;background:transparent;color:#f1f6ff;font-weight:800;font-size:.72rem;white-space:nowrap;line-height:1.2}\n\n.nav-inner>a.is-active,.nav-inner>a:hover,.more-wrap>button:hover{background:linear-gradient(115deg,#f5243e,#bd062b);color:#fff}\n\n.more-wrap{position:relative;margin-left:auto}\n\n.more-menu{position:absolute;top:100%;right:0;min-width:210px;display:grid;padding:7px;background:#073d70;border:1px solid #5396cb;border-radius:0 0 10px 10px;box-shadow:0 14px 25px #00162d93;z-index:95}\n\n.more-menu a{padding:10px 12px;color:#fff;font-size:.78rem;border-radius:6px}\n\n.more-menu a:hover{background:#d21232}\n\n.mobile-menu{position:fixed;z-index:130;right:10px;top:81px;display:grid;min-width:min(335px,calc(100vw - 20px));max-height:70vh;overflow-y:auto;padding:9px;background:#073a70;border:1px solid #5b99ca;border-radius:13px;box-shadow:0 24px 55px #001b3add}\n\n.mobile-menu a{padding:12px;color:#edf7ff;font-size:.85rem;border-bottom:1px solid #ffffff22}\n\n.mobile-menu a:hover{background:#115e9e}\n\n.welcome-hint{display:flex;align-items:center;gap:10px;max-width:1360px;margin:8px auto;padding:8px 12px;color:#d8f2ff;border:1px solid #4c8fc64d;background:#104d7daa;border-radius:9px;font-size:.72rem}\n\n.welcome-hint>i{color:#ff6d7a}\n\n.welcome-hint button{border:0;background:none;color:#fff;margin-left:auto}\n\n.mobile-search-button{display:none;background:#07467f;color:#fff;border:1px solid #76b2e075;border-radius:9px;width:36px;height:37px}\n\n.mobile-search-form{display:flex;gap:8px;padding:7px 11px 11px;background:#063d72}\n\n.mobile-search-form input{flex:1;min-width:0;background:#04345e;color:#fff;border:1px solid #6aa9da;border-radius:8px;padding:8px 11px;font-size:.79rem}\n\n.mobile-search-form .btn{font-size:.71rem}\n", "/* Mobile/tablet for site-header */\n@media(max-width:1220px){\n.nav-inner>a,.more-wrap>button{padding:10px 9px;font-size:.67rem}\n.brand-copy b{font-size:1.75rem}\n.live-clock{display:none}\n}\n\n@media(max-width:950px){\n.mast-inner{gap:9px;padding:10px 14px}\n.brand{max-width:none}\n.brand img{width:55px;height:55px}\n.brand-copy b{font-size:1.4rem}\n.brand-copy small{font-size:.55rem}\n.font-group{display:none}\n.top-search{max-width:320px}\n.nav-inner{overflow-x:auto;scrollbar-width:none}\n.nav-inner>a{display:none}\n.more-wrap{display:none}\n.main-nav{min-height:4px}\n.mobile-header-menu{display:block}\n}\n\n@media(max-width:650px){\n.masthead{position:sticky;top:0;z-index:200}\n.mast-inner{min-height:61px;padding:7px 11px;gap:8px}\n.brand img{width:42px;height:42px}\n.brand-copy b{font-size:1.02rem}\n.brand-copy small{font-size:.46rem}\n.top-search{display:none}\n.mast-right{margin-left:auto}\n.reader-controls{gap:0}\n.lang-group{padding:2px}\n.lang-group button{font-size:.57rem;padding:5px 7px}\n.notification-bell{width:36px;height:37px;font-size:1rem}\n.mobile-header-menu{width:35px;height:37px}\n.notification-popover{position:fixed;top:61px;right:8px;width:min(395px,calc(100vw - 16px))}\n.mobile-menu{top:65px;right:8px;bottom:77px;max-height:none;height:auto}\n.welcome-hint{font-size:.63rem;margin:5px 9px;padding:7px 8px}\n}\n\n@media(max-width:380px){\n.brand-copy b{font-size:.87rem}\n.brand-copy small{display:none}\n.lang-group button{padding:5px}\n.mast-inner{gap:5px}\n.brand img{width:38px;height:38px}\n.notification-bell,.mobile-header-menu{width:33px;height:35px}\n}\n\n@media(max-width:650px){\n.mobile-search-button{display:grid;place-items:center}\n}\n"] }]
    }], () => [{ type: i1.ContentService }, { type: i2.PreferencesService }, { type: i3.MediaService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SiteHeaderComponent, { className: "SiteHeaderComponent", filePath: "src/app/shared/site-header/site-header.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=site-header.component.js.map