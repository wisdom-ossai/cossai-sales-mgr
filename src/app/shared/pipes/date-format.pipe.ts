import { Pipe, PipeTransform, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment';

const APP_DATE_DISPLAY_FORMAT = `DD.MMM.YYYY`;
const DEFAULT_DATE_DISPLAY_FORMAT = ``;
const APP_DATE_FORMAT = `YYYY/M/D`;
const APP_DATE_FORMAT_2 = `YYYY-M-D`;

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date, ...args: any[]): string {
    if (value) {
      return moment(value).format(APP_DATE_DISPLAY_FORMAT);
    } else {
      return DEFAULT_DATE_DISPLAY_FORMAT;
    }
    return null;
  }

}

function isDateValid(value: string | Date): boolean {
  if (
    moment(value, APP_DATE_FORMAT, true).isValid() ||
    moment(value, APP_DATE_FORMAT_2, true).isValid()
  ) {
    return true;
  } else {
    return false;
  }
}
