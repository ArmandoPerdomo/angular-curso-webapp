import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], page_size: number = 3, page_number: number = 1): any[] {

    if (!array.length) return [];

    --page_number;
    return array.slice(page_number * page_size, (page_number +1)* page_size);
  }

}
