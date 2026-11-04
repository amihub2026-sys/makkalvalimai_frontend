// public-alerts — standalone component (HTML and CSS kept in adjacent files).
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ContentService} from '../../services/content.service';
import {PreferencesService} from '../../services/preferences.service';
import {AudioPlayerComponent} from '../../shared/audio-player/audio-player.component';
import {StoryCardComponent} from '../../shared/story-card/story-card.component';
import {PollComponent} from '../../shared/poll/poll.component';
@Component({selector:'app-alerts',standalone:true,imports:[CommonModule,AudioPlayerComponent],templateUrl:'./public-alerts.component.html',styleUrls: ['./public-alerts.component.css', './public-alerts.component.responsive.css']})
export class AlertsComponent {constructor(public s:ContentService,public p:PreferencesService){}}
