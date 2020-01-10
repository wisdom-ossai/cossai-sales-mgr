import { Directive, Input, HostListener } from '@angular/core';
import { ExcelService } from '@shared/services/excel.service';
import { MatSnackBar } from '@angular/material';

@Directive({
  selector: '[cossaiSlsExcelExport]'
})
export class ExcelExportDirective {

  constructor(private excelService: ExcelService, private snackBar: MatSnackBar) { }

  @Input('cossaiSlsExcelExport') jsonData: any[];
  @Input() fileName: string;

  @HostListener('click', ['$event']) onClick($event) {

    if (this.jsonData && this.jsonData.length > 0) {
      this.excelService.exportAsExcelFile(this.jsonData, this.fileName);
    } else {
      this.openSnackBar('No Data to Export', 'Dismiss');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
