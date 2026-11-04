import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {NAV,MORE} from '../../core/models';
import {ContentService} from '../../services/content.service';
import {PreferencesService} from '../../services/preferences.service';
import {MediaService} from '../../services/media.service';
@Component({selector:'app-site-footer',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./site-footer.component.html',styleUrls:['./site-footer.component.css','./site-footer.component.responsive.css']})
export class SiteFooterComponent {
  nav=NAV;
  more=MORE;
  year=new Date().getFullYear();
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  // Reuse a second backend-supported banner when available. No fictional footer ad position.
  footerAd(){return this.store.ads().filter(ad=>ad.position==='banner'&&!!ad.image)[1] || null;}
}
