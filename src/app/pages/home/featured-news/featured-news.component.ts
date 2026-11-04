import {Component, computed, signal, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {StoryCardComponent} from '../../../shared/story-card/story-card.component';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-featured-news',standalone:true,imports:[CommonModule,RouterLink,StoryCardComponent],templateUrl:'./featured-news.component.html',styleUrls:['./featured-news.component.css','./featured-news.component.responsive.css']})
export class HomeFeaturedNewsComponent implements OnInit, OnDestroy {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  index = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  readonly featured = computed(() => this.store.published().filter(a => a.featured).slice(0,5));
  readonly hero = computed(() => this.featured()[this.index() % this.featured().length] || this.store.published()[0]);
  readonly sideStories = computed(() => this.store.published().filter(a => a.id !== this.hero()?.id).slice(0,4));
  ngOnInit(): void { this.timer = setInterval(() => this.move(1), 7500); }
  ngOnDestroy(): void { if (this.timer) clearInterval(this.timer); }
  move(n: number): void { const len=this.featured().length; if(len) this.index.update(i=>(i+n+len)%len); }
}
