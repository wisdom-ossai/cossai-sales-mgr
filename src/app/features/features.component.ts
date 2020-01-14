import { Component, OnInit } from '@angular/core';
import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';

@Component({
  selector: 'cossai-sls-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private ng7MatBreadcrumbService: Ng7MatBreadcrumbService) { }

  ngOnInit() {
    const breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Level 2 ' };
    this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }
}
