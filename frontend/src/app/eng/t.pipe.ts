  import { Pipe, PipeTransform } from '@angular/core';


export function get_browser_language() {
  let localFormats = [
    'en-US',
    'en',
    'it-IT'
  ]
  return localFormats.filter( k => k == navigator.language )[0] || 'it-IT'
}



@Pipe( {
  name: 't'
} )
export class TPipe implements PipeTransform {


  public static dictionary = {}



  transform( value: string , params = {} ): string {
    return Object.keys(params).reduce((r,e) => r.replace(e,params[e]), TPipe.dictionary[value] || "***" + value + "***" )
  }


}
