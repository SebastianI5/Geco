import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  chartMock = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    data: [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ],
    options: {
      scaleShowVerticalLines: false,
      responsive: true
    },
    legend:true
  }



  async getChart(type: string) {
    return this.chartMock
  }

}
