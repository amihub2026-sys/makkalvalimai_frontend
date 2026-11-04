import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink,RouterLinkActive} from '@angular/router';
import {PreferencesService} from '../../services/preferences.service';
@Component({selector:'app-mobile-bottom-nav',standalone:true,imports:[CommonModule,RouterLink,RouterLinkActive],templateUrl:'./mobile-bottom-nav.component.html',styleUrls:['./mobile-bottom-nav.component.css','./mobile-bottom-nav.component.responsive.css']})
export class MobileBottomNavComponent {
  @Input() unread = 0;
  @Output() toggleMore = new EventEmitter<void>();
  constructor(public prefs:PreferencesService){}
}
