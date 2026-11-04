import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentService} from '../../services/content.service';
import {HomeTopAdComponent} from './top-ad/top-ad.component';
import {HomeFeaturedNewsComponent} from './featured-news/featured-news.component';
import {HomeSidebarAdComponent} from './sidebar-ad/sidebar-ad.component';
import {HomeQuickAccessComponent} from './quick-access/quick-access.component';
import {HomeAlertsAudioComponent} from './alerts-audio/alerts-audio.component';
import {HomeIssuesPollsComponent} from './issues-polls/issues-polls.component';
import {HomeCategoryNewsComponent} from './category-news/category-news.component';
@Component({
 selector:'app-home', standalone:true,
 imports:[CommonModule,HomeTopAdComponent,HomeFeaturedNewsComponent,HomeSidebarAdComponent,HomeQuickAccessComponent,HomeAlertsAudioComponent,HomeIssuesPollsComponent,HomeCategoryNewsComponent],
 templateUrl:'./home.component.html',
 styleUrls:['./home.component.css','./home.component.responsive.css']
})
export class HomeComponent {constructor(public store:ContentService){}}
