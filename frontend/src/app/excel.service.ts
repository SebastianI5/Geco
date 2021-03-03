import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
// import FileSaver from 'file-saver';

// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable( {
  providedIn: 'root'
} )
export class ExcelService {

  constructor() { }

  private timestamp() {
    return new Date().toISOString()
  }


  public exportAsExcelFile( json: any[], excelFileName: string, worksheetName: string ): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet( json );
    worksheet["!cols"] = this.calcColWidth( json );
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet( wb, worksheet, worksheetName )
    XLSX.writeFile( wb, excelFileName + "." + this.timestamp() + EXCEL_EXTENSION )
  }


  private calcColWidth( json: any[] ) {
    let width = []
    let maxWidthPerKey = {}
    Object.keys( json[0] ).forEach(
      k => maxWidthPerKey[k] = k.length
    )
    json.forEach( entry => {
      Object.keys( entry ).forEach(
        k => {
          if ( entry[k] ) {
            entry[k].length > maxWidthPerKey[k] ? maxWidthPerKey[k] = entry[k].length : null
          }
        }
      )
    } )
    Object.keys( maxWidthPerKey ).forEach( k => width.push({ wch: maxWidthPerKey[k] }) )
    return width;
  }


}
