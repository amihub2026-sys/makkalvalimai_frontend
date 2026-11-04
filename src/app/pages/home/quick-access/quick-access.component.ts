import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-quick-access',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./quick-access.component.html',styleUrls:['./quick-access.component.css','./quick-access.component.responsive.css']})
export class HomeQuickAccessComponent {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  
}
