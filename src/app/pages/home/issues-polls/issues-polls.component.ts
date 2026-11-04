import {Component, computed, signal, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {PollComponent} from '../../../shared/poll/poll.component';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-issues-polls',standalone:true,imports:[CommonModule,RouterLink,PollComponent],templateUrl:'./issues-polls.component.html',styleUrls:['./issues-polls.component.css','./issues-polls.component.responsive.css']})
export class HomeIssuesPollsComponent {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  pollIndex = signal(0);
  pollPopupOpen = signal(false);
  readonly currentPoll = computed(() => this.store.polls()[this.pollIndex() % Math.max(this.store.polls().length, 1)] || null);
  openPoll(i=0): void { this.pollIndex.set(i); this.pollPopupOpen.set(true); }
  closePoll(): void { this.pollPopupOpen.set(false); }
  @HostListener('document:keydown.escape') closeOnEscape(): void { if(this.pollPopupOpen()) this.closePoll(); }
}
