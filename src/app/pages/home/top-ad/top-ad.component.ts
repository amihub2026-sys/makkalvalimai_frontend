import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-top-ad',standalone:true,imports:[CommonModule],templateUrl:'./top-ad.component.html',styleUrls:['./top-ad.component.css','./top-ad.component.responsive.css']})
export class HomeTopAdComponent {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  readonly topAd = computed(() => this.store.ads().find(a => a.position === 'banner' && a.enabled));
}
