import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
export class ContractService {

  constructor(private http: HttpClient) { }

  list (params: any) {
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.get<any[]>('http://localhost:8080/contracts', {params: clean(params), headers: headers}).toPromise();
  }

  get(id: string) {
    let headers = new HttpHeaders().set("x-authorization", localStorage.getItem("access_token"));
    return this.http.get<any>('http://localhost:8080/contracts/' + id, { headers: headers}).toPromise();
  }
}
