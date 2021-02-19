import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetService } from './net.service';
import { base_url } from './util';

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
    let body = {​​ "box_id": box_id }​​;
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.put<any>(base_url + '/covers/' + cover_id, body, { headers: headers}).toPromise();
  }
}
