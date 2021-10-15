import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    let mill = (24 * 60 *60 * 1000);
    var timeDiff = (new Date().getTime()- new Date(value).getTime()) / mill

    return `${Math.floor (Number(timeDiff))} days`;
  }
}
