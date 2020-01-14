import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatTable, MatDialog } from '@angular/material';
import { IUser } from 'src/app/interfaces/user.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { UserDataService } from '../user-data.service';
import { take } from 'rxjs/operators';
import { DialogComponent } from 'src/app/shared/components';


@Component({
  selector: 'cossai-sls-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements AfterViewInit, OnInit {


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IUser>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['select', 'firstName', 'lastName', 'phoneNumber', 'emailAddress', 'id'];

  disableRemoveButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;


  constructor(private router: Router, private userData: UserDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeDisabledButton();
    this.loadData();
  }

  ngAfterViewInit() {
    this.loadTable();
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
    });
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<IUser>(true, []);
  }

  initializeDisabledButton() {
    this.disableDisableButton = true;
    this.disableEnableButton = true;
    this.disableRemoveButton = true;
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

  onRowChange(event, row) {
    // tslint:disable-next-line: no-unused-expression
    event ? this.selection.toggle(row) : null;
    console.log(this.selection.selected);
    if (this.selection.selected.length > 1) {
      this.disableRemoveButton = false;
      this.disableDisableButton = false;
    } else {
      this.disableRemoveButton = true;
      this.disableDisableButton = true;
    }
  }

  onCheckboxClicked(event) {
    event.stopPropagation();
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  openDialog(action, rowData) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { action, rowData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onAddButtonClicked() {
    this.router.navigate(['/users/new']);
  }

  onDisableButtonClicked() {
    this.openDialog('Disable Selected', null);
  }

  onRemoveButtonClicked() {
    this.openDialog('Remove Selected', null);
  }

  onImportButtonClicked() {
    this.router.navigate(['/users/import']);
  }

  onEditIconClicked(rowData) {
    console.log(rowData);
    this.router.navigate(['/users/edit/chuks']);
  }

  onDisableIconClicked(rowID: string) {
    console.log(rowID);
    this.openDialog('disable', rowID);
  }

  onEnableIconClicked(rowID: string) {
    console.log(rowID);
  }

  onViewIconClicked(rowData) {
    console.log(rowData);
    this.router.navigate(['/users/detail/chuks']);
  }


  onDeleteIconClicked(rowId: string) {
    console.log(rowId);
    this.openDialog('delete', rowId);
  }

}
