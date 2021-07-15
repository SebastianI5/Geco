import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { accessToken } from './authentication';
import { ConfigService } from './config.service';
import { clean } from './util';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient, private configService : ConfigService) { }

  base_url = this.configService.get("base_url")

  async list (url: string, params: any, handle_error = 'false'){
    let headers = new HttpHeaders()
      .set("x-handle-error", handle_error)
      .set("x-authorization", accessToken())
      ;
    return await this.http.get<any[]>(this.base_url + '/' + url, {params: clean(params), headers: headers}).toPromise();
  }

  async get(url: string, id: string, handle_error = 'false'){
    let headers = new HttpHeaders()
      .set("x-handle-error", handle_error)
      .set("x-authorization", accessToken())
      ;
    return await this.http.get<any>(this.base_url + '/' + url + '/' + id, { headers: headers}).toPromise();
  }

  async put(url: string, id: string, body: any, handle_error = 'false'){
    let headers = new HttpHeaders()
      .set("x-handle-error", handle_error)
      .set("x-authorization", accessToken())
      ;
    return await this.http.put<any>(this.base_url + '/' + url + '/' + id, body,  { headers: headers}).toPromise();
  }

  async post(url : string , body: any, handle_error = 'false'){
    let headers = new HttpHeaders()
      .set("x-handle-error", handle_error)
      .set("x-authorization", accessToken())
      ;
    return await this.http.post<any>(this.base_url + '/' + url, body,  { headers: headers}).toPromise();
  }

}
