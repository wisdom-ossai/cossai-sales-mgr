import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { ExcelService } from '@shared/services/excel.service';

@Component({
  selector: 'cossai-sls-product-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.scss']
})
export class ProductImportComponent implements OnInit {

  excel = [];
  fileName = 'productTemplate';

  constructor(private router: Router, private service: ProductDataService, public excelService: ExcelService) {
    this.service.getTemplate().subscribe(data => {
      this.excel.push(data);
    });
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['/products']);
  }

  onUpload() {

  }

}
