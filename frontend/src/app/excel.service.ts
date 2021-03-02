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
    worksheet["!cols"] = [{ wch: 10 }, { wch: 50 }]
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet( wb, worksheet, worksheetName )
    XLSX.writeFile( wb, excelFileName + "." + this.timestamp() + EXCEL_EXTENSION )
  }



}
