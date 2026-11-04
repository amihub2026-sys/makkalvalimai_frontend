import {Component,OnDestroy,effect,HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ContentService} from '../../services/content.service';
import {MediaService} from '../../services/media.service';
import {PreferencesService} from '../../services/preferences.service';
import {SiteHeaderComponent} from '../site-header/site-header.component';
import {SiteFooterComponent} from '../site-footer/site-footer.component';
/** Public layout controls popup advertising only; header/footer are reusable. */
@Component({selector:'app-public-shell',standalone:true,imports:[CommonModule,RouterOutlet,SiteHeaderComponent,SiteFooterComponent],templateUrl:'./public-shell.component.html',styleUrls:['./public-shell.component.css','./public-shell.component.responsive.css']})
export class PublicShellComponent implements OnDestroy {
  popupOpen=false;
  private popupScheduled=false;
  private popupTimer?:ReturnType<typeof setTimeout>;
  constructor(public store:ContentService,public media:MediaService,public prefs:PreferencesService) {
    effect(()=>{
      const ad=this.activePopup();
      if(!this.store.settings().showPopup||!ad||this.popupScheduled||this.wasAdShown())return;
      this.popupScheduled=true;
      this.popupTimer=setTimeout(()=>{
        if(this.store.settings().showPopup&&this.activePopup()?.id===ad.id){
          this.popupOpen=true;
          try{sessionStorage.setItem('mv-ad-shown',ad.id)}catch{}
        }
      },6500);
    });
  }
  activePopup(){return this.store.ads().find(ad=>ad.position==='popup'&&ad.enabled&&!!ad.image)||null;}
  private wasAdShown():boolean {try{return !!sessionStorage.getItem('mv-ad-shown')}catch{return false}}
  closePopup():void{this.popupOpen=false;}
  @HostListener('document:keydown.escape') closeOnEscape():void{if(this.popupOpen)this.closePopup();}
  ngOnDestroy():void{if(this.popupTimer)clearTimeout(this.popupTimer)}
}
