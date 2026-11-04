// admin-shell — standalone component (HTML and CSS kept in adjacent files).
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink,RouterLinkActive,RouterOutlet,Router} from '@angular/router';
import {AdminAuthService} from '../../services/admin-auth.service';
import {ContentService} from '../../services/content.service';
@Component({selector:'app-admin-shell',standalone:true,imports:[CommonModule,RouterLink,RouterLinkActive,RouterOutlet],templateUrl:'./admin-shell.component.html',styleUrls: ['./admin-shell.component.css', './admin-shell.component.responsive.css']})
export class AdminShellComponent {nav=[
 {url:'/admin/dashboard',icon:'fa-solid fa-chart-line',label:'Dashboard'},
 {url:'/admin/articles',icon:'fa-solid fa-newspaper',label:'News, Crime & Achievements'},
 {url:'/admin/reports',icon:'fa-solid fa-clipboard-check',label:'Approve Public Issues'},
 {url:'/admin/audio',icon:'fa-solid fa-headphones',label:'Section MP3 Audio'},
 {url:'/admin/alerts',icon:'fa-solid fa-bell',label:'Public Alerts'},
 {url:'/admin/polls',icon:'fa-solid fa-square-poll-vertical',label:'Opinion Polls'},
 {url:'/admin/ads',icon:'fa-solid fa-rectangle-ad',label:'Advertisements'},
 {url:'/admin/appearance',icon:'fa-solid fa-palette',label:'Header, Footer & Headlines'}];
 constructor(public auth:AdminAuthService,private router:Router,public store:ContentService){}
 get currentTitle():string{return this.nav.find(x=>this.router.url.startsWith(x.url))?.label||'Dashboard';}
 logout():void{this.auth.logout();void this.router.navigateByUrl('/admin/login');}
}
