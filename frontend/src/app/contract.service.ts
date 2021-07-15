import { Injectable } from '@angular/core';
import { NetService } from '@eng';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private net: NetService) { }

  list (params: any) {
    return this.net.list('contracts', params);
  }

  get(id: string) {
    return this.net.get('contracts', id);
  }
}
