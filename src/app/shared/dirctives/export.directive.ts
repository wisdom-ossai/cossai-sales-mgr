import { Directive, Input, HostListener } from '@angular/core';
import { ExcelService } from '../services/excel.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[excelExport]'
})
export class ExportDirective {

  constructor(private excelService: ExcelService) { }

  @Input('excelExport') jsonData: any[];
  @Input() fileName: string;

  @HostListener('click', ['$event']) onClick($event) {
    console.log('clicked: ' + $event);
    this.excelService.exportAsExcelFile(this.jsonData, this.fileName);
  }
}
