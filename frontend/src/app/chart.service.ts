import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private netService : NetService
  ) { }


  async getChart(section : string ) {
    return this.netService.get("dashboard", section );
  }

}
