import {Injectable,signal,effect} from '@angular/core';
import {Lang,Bilingual} from '../core/models';
@Injectable({providedIn:'root'})
export class PreferencesService {
 readonly language=signal<Lang>(localStorage.getItem('mv-reader-lang')==='en'?'en':'ta');
 readonly fontScale=signal<number>(Math.min(1.25,Math.max(.875,Number(localStorage.getItem('mv-font-scale'))||1)));
 constructor(){effect(()=>{localStorage.setItem('mv-reader-lang',this.language());localStorage.setItem('mv-font-scale',String(this.fontScale()));document.documentElement.style.setProperty('--reader-scale',String(this.fontScale()));document.documentElement.lang=this.language();});}
 txt(x:Bilingual|undefined|null):string{return x?.[this.language()]||'';}
 label(ta:string,en:string):string{return this.language()==='ta'?ta:en;}
 changeFont(delta:number):void{this.fontScale.set(Math.max(.875,Math.min(1.25,Math.round((this.fontScale()+delta)*100)/100)));}
}
