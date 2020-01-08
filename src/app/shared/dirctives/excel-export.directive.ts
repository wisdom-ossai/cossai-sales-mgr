import { Directive, Input, HostListener } from '@angular/core';
import { ExcelService } from '@shared/services/excel.service';

@Directive({
  selector: '[cossaiSlsExcelExport]'
})
export class ExcelExportDirective {

  constructor(private excelService: ExcelService) { }

  @Input('cossaiSlsExcelExport') jsonData: any[];
  @Input() fileName: string;

  @HostListener('click', ['$event']) onClick($event) {
    console.log('clicked: ' + $event);
    this.excelService.exportAsExcelFile(this.jsonData, this.fileName);
  }
}
