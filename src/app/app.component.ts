import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cossai-frontend';
  value = 'Clear me';

  constructor(private ng7MatBreadcrumbService: Ng7MatBreadcrumbService) { }

  ngOnInit() {
    const breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Level 2 ' };
    this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
}
