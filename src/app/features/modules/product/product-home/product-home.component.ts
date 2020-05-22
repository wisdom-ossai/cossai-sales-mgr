import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatTable, MatSort, MatTableDataSource } from '@angular/material';
import { IProduct } from 'src/app/interfaces/product.interface';
import { take } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogComponent } from '@shared/components';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';
import { IAppState } from '@core/store/app.state';
import { Store, select } from '@ngrx/store';
import {
  getProductData,
  getSaveStatus,
  LoadDataProduct,
  LoadSingleProductData,
  DeleteProductData,
  LoadSingleProductDataSuccess
} from '../store';
import { DialogBoxService } from '@shared/services/dialog-box.service';

@Component({
  selector: 'cossai-sls-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<IProduct>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['select', 'sku', 'name', 'short_description', 'regular_price', 'type', 'createdAt', 'updatedAt', 'id'];

  disableDeleteButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;

  productsData$: Observable<IProduct[]>;
  isSaved$: Observable<boolean>;

  constructor(
    private router: Router,
    private productData: ProductDataService,
    private store: Store<IAppState>,
    private dialogService: DialogBoxService) { }

  ngOnInit() {
    this.initializeDisabledButton();
    this.storeDispatches();
    this.storeSelect();
    this.loadData();
  }

  loadTable() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.productsData$.subscribe(result => {
      if (result) {
        this.dataSource = new MatTableDataSource<any>(result);
        this.loadTable();
        this.data = result;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<IProduct>(true, []);
  }

  storeSelect() {
    this.productsData$ = this.store.pipe(select(getProductData));
    this.isSaved$ = this.store.pipe(select(getSaveStatus));
  }

  storeDispatches() {
    this.store.dispatch(new LoadDataProduct());
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

  onRefresh() {
    this.store.dispatch(new LoadDataProduct());
  }

  onCheckboxClicked(event) {
    event.stopPropagation();
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IProduct): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row._id + 1}`;
  }

  onAddButtonClicked() {
    this.router.navigate(['f/products/new']);
  }

  onDeleteButtonClicked() {

  }

  onImportButtonClicked() {
    this.router.navigate(['f/products/import']);
  }

  onEditIconClicked(rowData: IProduct) {
    this.store.dispatch(new LoadSingleProductDataSuccess(rowData));
    this.router.navigate([`f/products/edit/${rowData._id}`]);
  }

  onDisableIconClicked(rowID: string) {
    console.log(rowID);
    // this.openDialog('disable', rowID);
  }

  onEnableIconClicked(rowID: string) {
    console.log(rowID);
  }

  onViewIconClicked(rowData: IProduct) {
    console.log(rowData);
    this.store.dispatch(new LoadSingleProductDataSuccess(rowData));
    this.router.navigate([`f/products/details/${rowData._id}`]);
  }


  onDeleteIconClicked(rowId: string) {
    this.dialogService.show(this.dialogService.options());

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.store.dispatch(new DeleteProductData({ productID: rowId }));
        this.isSaved$.subscribe(status => {
          if (status) {

          }
        });
      }
    });
  }

}
