import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatPaginator, MatTable, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ICategory } from 'src/app/interfaces/category.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogComponent } from '@shared/components';
import { pipe, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@core/store/app.state';
import {
  LoadDataCategory,
  LoadingDataCategory,
  getCategoryData,
  getSaveCategoryStatus,
  DeleteCategoryData,
  LoadSingleDataCategorySuccess
 } from '../store';
import { DialogBoxService } from '@shared/services/dialog-box.service';

@Component({
  selector: 'cossai-sls-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<ICategory>;

  categoryData$: Observable<ICategory[]>;
  isSaved$: Observable<boolean>;

  data: any[];
  isSelectible: boolean;
  columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;
  displayedColumns = ['select', 'name', 'description', 'updatedAt', 'createdAt', 'id'];

  disableDeleteButton: boolean;
  disableEnableButton: boolean;
  disableDisableButton: boolean;

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    public dialog: MatDialog,
    private dialogService: DialogBoxService) { }

  ngOnInit() {
    this.initializeDisabledButton();
    this.storeDispatches();
    this.storeSelects();
    this.loadData();
  }

  storeDispatches() {
    this.store.dispatch(new LoadingDataCategory());
    this.store.dispatch(new LoadDataCategory());
  }

  storeSelects() {
    this.categoryData$ = this.store.select(pipe(getCategoryData));
    this.isSaved$ = this.store.select(pipe(getSaveCategoryStatus));
  }

  loadTable() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.categoryData$.subscribe(categories => {
      if (categories) {
        console.log(categories);
        this.dataSource = new MatTableDataSource<any>(categories);
        this.loadTable();
        this.data = categories;
      }
    });
    this.selection = new SelectionModel<ICategory>(true, []);
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
  checkboxLabel(row?: ICategory): string {
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
    this.router.navigate(['f/categories/new']);
  }

  onDeleteButtonClicked() {
    this.openDialog('Delete Selected', null);
  }

  onImportButtonClicked() {
    this.router.navigate(['f/categories/import']);
  }

  onEditIconClicked(rowData) {
    this.store.dispatch(new LoadSingleDataCategorySuccess(rowData));
    this.router.navigate([`f/categories/edit/${rowData._id}`]);
  }

  onDisableIconClicked(rowID: string) {
    console.log(rowID);
    this.openDialog('disable', rowID);
  }

  onEnableIconClicked(rowID: string) {
    console.log(rowID);
  }

  onViewIconClicked(rowData) {
    this.router.navigate(['f/categories/detail/cloth']);
  }


  onDeleteIconClicked(rowId: string) {
    this.dialogService.show(this.dialogService.options());

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.store.dispatch(new DeleteCategoryData({ categoryId: rowId }));
        this.isSaved$.subscribe(status => {
          if (status) {

          }
        });
      }
    });
  }

  onRefresh() {
    this.storeDispatches();
  }

}
