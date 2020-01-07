import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { ExcelService } from '@shared/services/excel.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-import',
  templateUrl: './user-import.component.html',
  styleUrls: ['./user-import.component.scss']
})
export class UserImportComponent implements OnInit {

  excel = [];
  constructor(private router: Router, private service: UserDataService, private http: HttpClient, public excelService: ExcelService) {
    this.service.getTemplate().subscribe(data => {
      console.log(data);
      this.excel.push(data);
    });
  }

  ngOnInit() {
    console.log(this.excel);
  }

  onCancelClick() {
    this.router.navigate(['/user']);
  }

  onUpload() {

  }


}
