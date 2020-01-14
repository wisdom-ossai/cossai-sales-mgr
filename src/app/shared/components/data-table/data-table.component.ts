import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatTable, { static: false }) table: MatTable<IUser>;

  @Input() data: any[];
  @Input() isSelectible: boolean;
  @Input() columnList: string[];

  dataSource: MatTableDataSource<any>;
  selection: any;
  searchKey: string;

  @Output() editClick: EventEmitter<any> = new EventEmitter();
  @Output() selectedItems: EventEmitter<any> = new EventEmitter();
  @Output() viewClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = this.isSelectible ? ['select', 'firstName', 'lastName', 'phoneNumber', 'emailAddress', 'id' ];
  displayColumns: string[];

  ngOnInit() {
    this.loadTableColumns();
  }

  ngAfterViewInit() {
    this.loadTable();
  }

  loadTable() {

    this.selection = this.isSelectible ? new SelectionModel<IUser>(true, []) : null;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  loadTableColumns() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    if (this.isSelectible) {
      this.columnList.unshift('select');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditIconClicked(event) {
    this.editClick.emit(event);
  }
  onViewIconClicked(rowData) {
    console.log(rowData);
    this.viewClick.emit(rowData);
  }

  onDeleteIconClicked(rowId) {
    console.log(rowId);
    this.deleteClick.emit(rowId);
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
      this.dataSource.data.forEach(row => this.selection.select(row));
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
