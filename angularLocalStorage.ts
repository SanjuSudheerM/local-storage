/**
 * Class Name : AngularLocalStorage
 * Description: 
 */

import { CookieService } from 'ng2-cookies';
import { Injectable } from '@angular/core';

@Injectable()

export class AngularLocalStorage {

      public isLocalStorageAvailable: boolean;
      constructor( private cookie_ : CookieService ){
            try{
                  localStorage.setItem('T0093999922','90398489JUNKJ83');
                  this.isLocalStorageAvailable = true;
                  localStorage.removeItem('T0093999922');
            }
            catch(e){
                  this.isLocalStorageAvailable = false;
            }

      }

      public get( key: any ): any {
            if(this.isLocalStorageAvailable){
                  return localStorage.getItem(key);
            }
            else{
                  return this.cookie_.get(key);
            }
      }

      public set( key: any, value: any): any {
            if(this.isLocalStorageAvailable){
                  return localStorage.setItem(key,value);
            }
            else{
                  return this.cookie_.set(key,value);
            }
      }

      public remove(key: any): any {
            if(this.isLocalStorageAvailable){
                  return localStorage.removeItem(key);
            }
            else{
                  return this.cookie_.delete(key);
            }
      }
}

