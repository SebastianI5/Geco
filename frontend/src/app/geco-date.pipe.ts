import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { get_browser_language } from '@eng';


@Pipe( {
  name: 'date'
} )
export class GecoDatePipe implements PipeTransform {

  constructor( private  date : DatePipe){}


  transform( value: any, format?: string ) {
     return this.date.transform(value , format, undefined , get_browser_language() )
  }






}
