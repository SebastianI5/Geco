import { Injectable } from '@angular/core';
import { NetService } from '../net.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private netService : NetService
  ) { }





  async getChart() {
    return this.netService.get("dashboard", "");
  }

}
