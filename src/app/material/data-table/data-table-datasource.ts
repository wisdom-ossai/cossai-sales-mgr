import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  position: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  { id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { id: 1, position: 11, name: 'Hydrogen', weight: 20.1797, symbol: 'H'},
  { id: 2, position: 12, name: 'Helium', weight: 20.1797, symbol: 'He'},
  { id: 3, position: 13, name: 'Lithium', weight: 20.1797, symbol: 'Li'},
  { id: 4, position: 14, name: 'Beryllium', weight: 20.1797, symbol: 'Be'},
  { id: 5, position: 15, name: 'Boron', weight: 20.1797, symbol: 'B'},
  { id: 6, position: 16, name: 'Carbon', weight: 20.1797, symbol: 'C'},
  { id: 7, position: 17, name: 'Nitrogen', weight: 20.1797, symbol: 'N'},
  { id: 8, position: 18, name: 'Oxygen', weight: 20.1797, symbol: 'O'},
  { id: 9, position: 19, name: 'Fluorine', weight: 20.1797, symbol: 'F'},
  { id: 10, position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  { id: 11, position: 21, name: 'Sodium', weight: 20.1797, symbol: 'Na'},
  { id: 12, position: 23, name: 'Magnesium', weight: 20.1797, symbol: 'Mg'},
  { id: 13, position: 24, name: 'Aluminum', weight: 20.1797, symbol: 'Al'},
  { id: 14, position: 25, name: 'Silicon', weight: 20.1797, symbol: 'Si'},
  { id: 15, position: 26, name: 'Phosphorus', weight: 20.1797, symbol: 'P'},
  { id: 16, position: 27, name: 'Sulfur', weight: 20.1797, symbol: 'S'},
  { id: 17, position: 28, name: 'Chlorine', weight: 20.1797, symbol: 'Cl'},
  { id: 18, position: 29, name: 'Argon', weight: 20.1797, symbol: 'Ar'},
  { id: 19, position: 30, name: 'Potassium', weight: 20.1797, symbol: 'K'},
  { id: 20, position: 31, name: 'Calcium', weight: 20.1797, symbol: 'Ca'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'weight': return compare(+a.weight, +b.weight, isAsc);
        case 'symbol': return compare(a.symbol, b.symbol, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
