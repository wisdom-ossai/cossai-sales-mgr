import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatTable, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogComponent } from '@shared/components';
import { OrderDataService } from '../order-data.service';
import { IOrder } from 'src/app/interfaces';

@Component({
  selector: 'cossai-sls-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss']
})
export class OrderHomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IOrder>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['select', 'orderNumber', 'name', 'birthdate', 'gender', 'createdAt', 'id'];

  disableDeleteButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;

  constructor(
    private router: Router,
    private orderData: OrderDataService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeDisabledButton();
    this.loadData();
  }

  ngAfterViewInit() {
    this.loadTable();
  }

  openSnackbar(message, action) {
    this.snackBar.open(message, action);
  }

  loadTable() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  loadData() {
    this.orderData.getOrders().pipe(take(1)).subscribe(result => {
      this.dataSource = new MatTableDataSource<any>(result.orders);
      this.data = result.orders;
    });
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<IOrder>(true, []);
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
  checkboxLabel(row?: IOrder): string {
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
    this.router.navigate(['/orders/new']);
  }

  onDeleteButtonClicked() {
    this.openDialog('Delete Selected', null);
  }

  onImportButtonClicked() {
    this.router.navigate(['/orders/import']);
  }

  onEditIconClicked(rowData) {
    this.router.navigate(['/orders/edit/chuks']);
  }

  onDisableIconClicked(rowID: string) {
    console.log(rowID);
    this.openDialog('disable', rowID);
  }

  onEnableIconClicked(rowID: string) {
    console.log(rowID);
  }

  onViewIconClicked(rowData) {
    this.router.navigate(['/orders/detail/chuks']);
  }


  onDeleteIconClicked(rowId: string) {
    console.log(rowId);
    this.openDialog('delete', rowId);
  }

}
