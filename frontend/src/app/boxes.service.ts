import { Injectable } from '@angular/core';
import { NetService } from './net.service';

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
}
