import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDataService } from '../order-data.service';
import { ExcelService } from '@shared/services/excel.service';

@Component({
  selector: 'cossai-sls-order-import',
  templateUrl: './order-import.component.html',
  styleUrls: ['./order-import.component.scss']
})
export class OrderImportComponent implements OnInit {

  excel = [];
  fileName = 'orderTemplate';

  constructor(private router: Router, private service: OrderDataService, public excelService: ExcelService) {
    this.service.getTemplate().subscribe(data => {
      this.excel.push(data);
    });
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['f/orders']);
  }

  onUpload() {

  }

}
