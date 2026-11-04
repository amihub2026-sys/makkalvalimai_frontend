// audio-player — standalone component (HTML and CSS kept in adjacent files).
import {Component,Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaService} from '../../services/media.service';
import {PreferencesService} from '../../services/preferences.service';
@Component({selector:'app-audio-player',standalone:true,imports:[CommonModule],templateUrl:'./audio-player.component.html',styleUrls: ['./audio-player.component.css', './audio-player.component.responsive.css']})
export class AudioPlayerComponent { @Input() src='';constructor(public media:MediaService,public prefs:PreferencesService){} }
