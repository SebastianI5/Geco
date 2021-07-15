import { Component, Input, OnInit } from '@angular/core';
import { ChartService } from '../../chart.service';

@Component({
  selector: 'app-basechart',
  templateUrl: './basechart.component.html',
  styleUrls: ['./basechart.component.css']
})
export class BasechartComponent implements OnInit {


  chart : any ;

  //type is in : bar , doughnut , line , pie , radar , polarArea , bubble
  @Input() type : string ;
  @Input() section : string ;

  constructor(
    private chartService: ChartService
  ) { }

    ngOnInit() {
      this.load();
  }


  base_options =  {"legend": {"display": true}, "responsive": true, "scaleShowVerticalLines": false}


  async load(){
    this.chart = await this.chartService.getChart(this.section);
    this.chart["options"] = Object.assign(this.base_options, this.chart.options);
   }

}
