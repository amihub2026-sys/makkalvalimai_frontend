// achievements — standalone component (HTML and CSS kept in adjacent files).
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ContentService} from '../../services/content.service';
import {PreferencesService} from '../../services/preferences.service';
import {AudioPlayerComponent} from '../../shared/audio-player/audio-player.component';
import {StoryCardComponent} from '../../shared/story-card/story-card.component';
import {PollComponent} from '../../shared/poll/poll.component';
@Component({selector:'app-achievements',standalone:true,imports:[CommonModule,StoryCardComponent,AudioPlayerComponent],templateUrl:'./achievements.component.html',styleUrls: ['./achievements.component.css', './achievements.component.responsive.css']})
export class AchievementsComponent {constructor(public s:ContentService,public p:PreferencesService){} get items(){return this.s.published().filter(a=>a.kind==='achievement');}}
