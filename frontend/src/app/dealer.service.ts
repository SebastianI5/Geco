import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private net: NetService) { }

  list (params: any) {
    return this.net.list('dealers', params);
  }

  get(id: string) {
    return this.net.get('dealers', id);
  }
}
