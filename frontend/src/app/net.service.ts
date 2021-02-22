import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from './util';

function is_set(x){
  if(x == null){
    return false;
  }

  if(x == undefined){
    return false;
  }

  if(x.toString().trim().length == 0){
    return false;
  }

  return true;
}

function clean(o){
  let result = {};
  Object.keys(o).forEach(e => {if(is_set(o[e])) result[e]=o[e]});
  return result;
}

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient) { }

  list (url: string, params: any) {
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.get<any[]>(base_url + '/' + url, {params: clean(params), headers: headers}).toPromise();
  }

  get(url: string, id: string) {
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.get<any>(base_url + '/' + url + '/' + id, { headers: headers}).toPromise();
  }

  put(url: string, id: string, body: any) {
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.put<any>(base_url + '/' + url + '/' + id, body,  { headers: headers}).toPromise();
  }


  post(url : string , body: any){
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.post<any>(base_url + '/' + url, body,  { headers: headers}).toPromise();
  }

}
