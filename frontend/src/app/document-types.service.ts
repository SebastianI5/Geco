import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  constructor(private net: NetService) { }

  list (params: any) {
    return this.net.list('doctypes', params);
  }

  get(id: string) {
    return this.net.get('doctypes', id);
  }

  put(cover_id: string, box_id: string){
     return this.net.put('covers', cover_id, {'box_id': box_id} );
  }

  post(body : any){
    return this.net.post('covers', body);
  }
}
