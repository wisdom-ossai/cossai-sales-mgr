import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource } from './data-table-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<IUser>;
  dataSource: DataTableDataSource;
  selection = new SelectionModel<IUser>(true, []);
  searchKey: string;

  @Output() editClick: EventEmitter<any> = new EventEmitter();
  @Output() selectedItems: EventEmitter<any> = new EventEmitter();


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'firstName', 'lastName', 'phoneNumber', 'emailAddress', 'id' ];

  ngOnInit() {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.source.sort = this.sort;
    this.dataSource.source.paginator = this.paginator;
    this.table.dataSource = this.dataSource.source;
  }

  applyFilter(filterValue: string) {
    this.dataSource.source.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditIconClicked(event) {
    this.editClick.emit(event);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.source.data.forEach(row => this.selection.select(row));
  }

  onRowChange(event, row) {
    event ? this.selection.toggle(row) : null;
    this.selectedItems.emit(this.selection.selected);
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
}
