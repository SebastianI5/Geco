import { Component, Input, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-basechart',
  templateUrl: './basechart.component.html',
  styleUrls: ['./basechart.component.css']
})
export class BasechartComponent implements OnInit {


  chart : any ;

  @Input() type : string ;


  constructor(
    private chartService: ChartService
  ) { }

    ngOnInit() {
      this.load();
  }



  async load(){
    this.chart = await this.chartService.getChart();

  }

}
