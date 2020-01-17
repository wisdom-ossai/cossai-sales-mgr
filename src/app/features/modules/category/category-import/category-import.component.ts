import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDataService } from '../category-data.service';
import { ExcelService } from '@shared/services/excel.service';

@Component({
  selector: 'cossai-sls-category-import',
  templateUrl: './category-import.component.html',
  styleUrls: ['./category-import.component.scss']
})
export class CategoryImportComponent implements OnInit {

  excel = [];
  fileName = 'categoryTemplate';

  constructor(private router: Router, private service: CategoryDataService, public excelService: ExcelService) {
    this.service.getTemplate().subscribe(data => {
      this.excel.push(data);
    });
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['f/customers']);
  }

  onUpload() {

  }

}
