import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(list: any[], x: number): any[] {
    if (!list){
      return list;
    }
    return list.slice(0, x);
  }

}
