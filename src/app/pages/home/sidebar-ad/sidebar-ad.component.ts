import {Component, computed, signal, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-sidebar-ad',standalone:true,imports:[CommonModule],templateUrl:'./sidebar-ad.component.html',styleUrls:['./sidebar-ad.component.css','./sidebar-ad.component.responsive.css']})
export class HomeSidebarAdComponent implements OnInit, OnDestroy {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  adIndex = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  readonly sidebarAds = computed(() => this.store.ads().filter(a => a.position === 'sidebar' && a.enabled));
  readonly sideAd = computed(() => this.sidebarAds()[this.adIndex() % Math.max(this.sidebarAds().length, 1)] || null);
  ngOnInit(): void { this.timer=setInterval(()=>this.nextAd(),7500); }
  ngOnDestroy(): void { if(this.timer) clearInterval(this.timer); }
  nextAd(): void { const len=this.sidebarAds().length; if(len) this.adIndex.update(i=>(i+1)%len); }
}
