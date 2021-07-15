import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetService } from '@eng';

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


  put(cover_id: string, payload: any){
     return this.net.put('covers', cover_id, payload );
  }

  post(body : any){
    return this.net.post('covers', body);
  }

}
