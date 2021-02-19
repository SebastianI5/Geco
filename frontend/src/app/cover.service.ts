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
    console.log(box_id + " - "+ cover_id);
    console.log(JSON.stringify("box_id: " + box_id));
     let headers = new HttpHeaders({'x-authorizaxtion': localStorage.getItem("access_token"), 
                         'Content-Type':  'application/json', 
                         'responseType': 'application/json'});
     
     console.log(base_url + '/covers/' + box_id,JSON.stringify("box_id: " + box_id));
     return this.http.put<any>(base_url + '/covers/' + box_id,JSON.stringify("box_id: " + box_id), { headers: headers}).toPromise();
  }
}
