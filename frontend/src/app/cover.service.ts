import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  constructor(private net: NetService,
    private http: HttpClient) { }

  list (params: any) {
    return this.net.list('covers', params);
  }

  get(id: string) {
    return this.net.get('covers', id);
  }

  put(cover_id: string, box_id: string){
     return this.net.put('covers', cover_id, {'box_id': box_id} );
  }

  post(body : any){
    return this.net.post('covers', body);
  }
}
