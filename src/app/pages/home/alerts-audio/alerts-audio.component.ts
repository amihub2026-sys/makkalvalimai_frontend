import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AudioPlayerComponent} from '../../../shared/audio-player/audio-player.component';
import {ContentService} from '../../../services/content.service';
import {MediaService} from '../../../services/media.service';
import {PreferencesService} from '../../../services/preferences.service';

/** Isolated homepage section; styles and mobile rules live alongside this file. */
@Component({selector:'app-home-alerts-audio',standalone:true,imports:[CommonModule,RouterLink,AudioPlayerComponent],templateUrl:'./alerts-audio.component.html',styleUrls:['./alerts-audio.component.css','./alerts-audio.component.responsive.css']})
export class HomeAlertsAudioComponent {
  constructor(public store:ContentService,public prefs:PreferencesService,public media:MediaService){}
  
}
