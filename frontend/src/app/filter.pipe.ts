import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], x: string, fields: string[]): any[] {
    if(x == null || x.length == 0){
      return list;
    }
    return list.filter(e => this.match(e, x, fields));
  }

  match(e, x, fields){
    return fields.filter(f => e[f].toLowerCase().indexOf(x.toLowerCase()) != -1).length > 0;
  }

}
