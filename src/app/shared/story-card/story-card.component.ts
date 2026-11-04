// story-card — standalone component (HTML and CSS kept in adjacent files).
import {Component,Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Article} from '../../core/models';
import {MediaService} from '../../services/media.service';
import {PreferencesService} from '../../services/preferences.service';
@Component({selector:'app-story-card',standalone:true,imports:[RouterLink,CommonModule],templateUrl:'./story-card.component.html',styleUrls: ['./story-card.component.css', './story-card.component.responsive.css']})
export class StoryCardComponent {
 @Input({required:true}) article!:Article;
 constructor(public media:MediaService,public prefs:PreferencesService){}
 get shareUrl():string{const url=typeof window==='undefined'?`/news/${this.article.slug}`:new URL(`/news/${this.article.slug}`,window.location.origin).href;return 'https://wa.me/?text='+encodeURIComponent(this.prefs.txt(this.article.title)+'\n'+url);}
}
