// public-issues — standalone component (HTML and CSS kept in adjacent files).
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ContentService} from '../../services/content.service';
import {PreferencesService} from '../../services/preferences.service';
import {MediaService} from '../../services/media.service';
import {ISSUE_CATEGORIES,Issue} from '../../core/models';
import {AudioPlayerComponent} from '../../shared/audio-player/audio-player.component';
import {SUGGESTED_AREAS} from '../../core/areas';
@Component({selector:'app-public-issues',standalone:true,imports:[CommonModule,FormsModule,RouterLink,AudioPlayerComponent],templateUrl:'./public-issues.component.html',styleUrls: ['./public-issues.component.css', './public-issues.component.responsive.css']})
export class PublicIssuesComponent { solved=false;category='';area='';categories=ISSUE_CATEGORIES;areas=SUGGESTED_AREAS;
 constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
 get filtered():Issue[]{return (this.solved?this.store.solvedIssues():this.store.approvedIssues()).filter(x=>(!this.category||x.category===this.category)&&(!this.area||x.area.toLowerCase().includes(this.area.toLowerCase())));}
 share(item:Issue):string{const url=new URL(`/public-issues?area=${encodeURIComponent(item.area)}`,window.location.origin).href;return 'https://wa.me/?text='+encodeURIComponent(item.title+'\n'+url);}
}
