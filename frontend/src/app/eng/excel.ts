import * as XLSX from 'xlsx';
import * as STYLE from 'xlsx-style';


const EXCEL_EXTENSION = '.xlsx';


export function excel( json: any[], excelFileName: string, worksheetName: string, headers?: string[] ) {
  const worksheet: XLSX.WorkSheet = headers ? XLSX.utils.json_to_sheet( json, { header: headers } ) : XLSX.utils.json_to_sheet( json );
  worksheet["!cols"] = calcColWidth( json );
  var bold = { font : {bold : true }};
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet( wb, worksheet, worksheetName   )

  XLSX.writeFile( wb, excelFileName + "." + timestamp() + EXCEL_EXTENSION   )
}



function timestamp() {
  return new Date().toISOString()
}

function bold(){

}

function calcColWidth( json: any[] ) {
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
  Object.keys( maxWidthPerKey ).forEach( k => width.push( { wch: maxWidthPerKey[k] } ) )
  return width;
}
