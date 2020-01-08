import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs/operators';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'cossai-sls-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];
  excelFileName: string;

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['activity_date', 'email', 'action', 'id'];

  disableRemoveButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;

  constructor(private userData: UserDataService) { }

  ngOnInit() {
  }

  onViewIconClicked(rowData) {
    console.log(rowData);
  }

  loadTable() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  loadData() {
    this.userData.getUser().pipe(take(1)).subscribe(result => {
      this.dataSource = new MatTableDataSource<any>(result.users);
      this.data = result.users;
      this.excelFileName = `activities_by_${result.user.name}`;
    });
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<any>(true, []);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    if (this.selection) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(event) {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    if (this.isAllSelected()) {
      this.disableRemoveButton = false;
      this.disableDisableButton = false;
    } else {
      this.disableRemoveButton = true;
      this.disableDisableButton = true;
    }
    console.log(this.selection.selected);
  }
}
