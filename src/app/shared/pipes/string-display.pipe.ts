import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stringDisplay'
})
export class StringDisplayPipe implements PipeTransform {
  transform(value: string): string {
    if (value === undefined || value === null || value === '') {
      return '-----';
    } else {
      return value;
    }
  }
}
