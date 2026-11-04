// app — standalone component (HTML and CSS kept in adjacent files).
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet],templateUrl:'./app.component.html',styleUrls: ['./app.component.css', './app.component.responsive.css']})export class AppComponent{}
