import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ContentService} from '../../services/content.service';
import {PreferencesService} from '../../services/preferences.service';
@Component({selector:'app-breaking-ticker',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./breaking-ticker.component.html',styleUrls:['./breaking-ticker.component.css','./breaking-ticker.component.responsive.css']})
export class BreakingTickerComponent {
  constructor(public store:ContentService,public prefs:PreferencesService){}
}
