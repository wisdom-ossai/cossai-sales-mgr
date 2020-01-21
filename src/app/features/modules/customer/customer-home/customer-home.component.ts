import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatTable, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ICustomer } from 'src/app/interfaces/customer.interface';
import { take } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogComponent } from '@shared/components';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'cossai-sls-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ICustomer>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['select', 'fullname', 'customerNumber', 'createdAt', 'updatedAt', 'birthDate', 'gender', 'id'];

  disableDeleteButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;

  constructor(
    private router: Router,
    private custormerData: CustomerDataService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeDisabledButton();
    this.loadData();
  }

  loadTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  loadData() {
    this.custormerData.getCustomers().pipe(take(1)).subscribe(result => {
      if (result) {
        this.dataSource = new MatTableDataSource<any>(result.customers);
        this.data = result.customers;
        this.loadTable();
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<ICustomer>(true, []);
  }

  initializeDisabledButton() {
    this.disableDisableButton = true;
    this.disableEnableButton = true;
    this.disableDeleteButton = true;
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
    this.disableDeleteButton = !(this.isAllSelected() && this.selection.selected.length > 0);
  }

  onRowChange(event, row) {
    // tslint:disable-next-line: no-unused-expression
    event ? this.selection.toggle(row) : null;
    this.disableDeleteButton = !(this.selection.selected.length > 1);
  }

  onCheckboxClicked(event) {
    event.stopPropagation();
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ICustomer): string {
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
    });
  }

  onAddButtonClicked() {
    this.router.navigate(['f/customers/new']);
  }

  onDeleteButtonClicked() {
    this.openDialog('Delete Selected', null);
  }

  onImportButtonClicked() {
    this.router.navigate(['f/customers/import']);
  }

  onEditIconClicked(rowData) {
    this.router.navigate(['f/customers/edit/chuks']);
  }

  onDisableIconClicked(rowID: string) {
    console.log(rowID);
    this.openDialog('disable', rowID);
  }

  onEnableIconClicked(rowID: string) {
    console.log(rowID);
  }

  onViewIconClicked(rowData) {
    this.router.navigate(['f/customers/details/chuks']);
  }


  onDeleteIconClicked(rowId: string) {
    console.log(rowId);
    this.openDialog('delete', rowId);
  }

}
