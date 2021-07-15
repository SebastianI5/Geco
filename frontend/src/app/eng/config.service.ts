import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { get_browser_language } from './t.pipe';
import { BusService, ERROR } from './bus.service';
import { TPipe } from './t.pipe';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = {}

  constructor(private http: HttpClient,
            @Inject(APP_BASE_HREF) public baseHref: string,
            private bus : BusService) { }


  async setup(){
     try {
      this.config = await this.http.get( this.baseHref + "api/config").toPromise();
      TPipe.dictionary =  await this.http.get<any>(  this.baseHref + "api/translation/" +  get_browser_language() ).toPromise()
     } catch (error) {
      console.log(error);
      this.bus.publish(ERROR, error)
    }
  }


  get( param ){
    try {
      return this.config[param]
    } catch (error) {
      console.log(error);
      this.bus.publish(ERROR, error);
    }
  }


}
