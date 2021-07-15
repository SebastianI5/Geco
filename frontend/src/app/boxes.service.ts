import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  constructor(private net: NetService) { }

  list (params: any) {
    return this.net.list('boxes', params);
  }

  get(id: string) {
    return this.net.get('boxes', id);
  }

  put(id: string, body: any){
    return this.net.put("boxes", id, body);
  }

  post(body: any){
    return this.net.post("boxes", body);
  }
}
