import { Injectable } from "@angular/core";

export const RELOAD_EVENT = "reloadEvent";
export const PAGE_CHANGE = "pageChange";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const ERROR_504 = "ERROR_504";
export const SERVER_ERROR = "SERVER_ERROR";


@Injectable({
  providedIn: 'root'
})
export class BusService {

  // evento: lista callback
  //map -> eventString , list[callback1, callback2, ... callbackN]
  map = new Map<string, ((event: string, params?: any) => void)[] >();

  async publish( event: string, params?: any  ){
    let list = this.map.get(event) || [];
    //console.log("evento pubblicato", event , " da applicare a ", list.length , " elementi " )
    list.forEach(async callback => {
      setTimeout(async () => await callback(event, params), 100);
    });
  }

  subscribe(event: string , callback: (event: string, params?: any) => void ){
    //console.log("evento sottoscritto ", event, " callback name ", callback.name  )
    let list = this.map.get(event) || [];
    list.push(callback);
    this.map.set(event, list);
  }

}
