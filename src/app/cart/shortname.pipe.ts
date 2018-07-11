import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortname'
})
export class ShortnamePipe implements PipeTransform {

  transform(value: string): any {
    if (value.length > 8) {
      const resultedValue = value.substring(0, 8);
      return resultedValue + ' [shortened]';
    }
    return value;
  }

}
