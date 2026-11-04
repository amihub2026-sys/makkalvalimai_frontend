import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {StoryCardComponent} from '../../../shared/story-card/story-card.component';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-category-news',standalone:true,imports:[CommonModule,RouterLink,StoryCardComponent],templateUrl:'./category-news.component.html',styleUrls:['./category-news.component.css','./category-news.component.responsive.css']})
export class HomeCategoryNewsComponent {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  readonly madurai = computed(() => this.store.published().filter(a => a.kind === 'madurai').slice(0,4));
  readonly crime = computed(() => this.store.published().filter(a => a.kind === 'crime').slice(0,3));
  readonly achievements = computed(() => this.store.published().filter(a => a.kind === 'achievement').slice(0,3));
}
