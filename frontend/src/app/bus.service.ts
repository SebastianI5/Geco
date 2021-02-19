import { Injectable } from "@angular/core";

export const RELOAD_EVENT = "reloadEvent";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor() { }

  // evento: lista callback
  map = new Map<string, ((event: string, params?: any) => void)[] >();

  async publish( event: string, params?: any  ){
    let list = this.map.get(event) || [];
    list.forEach(async callback => {
      await callback(event, params);
    });
  }

  subscribe(event: string , callback: (event: string, params?: any) => void ){
    let list = this.map.get(event) || [];
    list.push(callback);
    this.map.set(event, list);
  }

}