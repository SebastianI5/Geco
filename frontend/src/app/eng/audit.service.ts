import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('audits', params);
  }

  async get(id : string ){
    return await this.net.get("audits", id )
  }


}
