import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDataService } from '../customer-data.service';
import { ExcelService } from '@shared/services/excel.service';

@Component({
  selector: 'cossai-sls-customer-import',
  templateUrl: './customer-import.component.html',
  styleUrls: ['./customer-import.component.scss']
})
export class CustomerImportComponent implements OnInit {

  excel = [];
  constructor(private router: Router, private service: CustomerDataService, public excelService: ExcelService) {
    this.service.getTemplate().subscribe(data => {
      this.excel.push(data);
    });
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['/customers']);
  }

  onUpload() {

  }

}
