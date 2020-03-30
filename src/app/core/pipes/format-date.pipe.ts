import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

export type momentFormats = 'LT' | 'LTS' | 'LLLL';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, format: momentFormats = 'LLLL'): string {
    /*const dateFormatted = new Date(value).toLocaleString("eu-ES");
    return dateFormatted;*/
    moment.locale('es');
    //format = 'LLLL';
    return moment(value).format(format);
  }

}
