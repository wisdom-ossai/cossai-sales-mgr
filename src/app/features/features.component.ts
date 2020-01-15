import { Component, OnInit } from '@angular/core';
import { fader } from '../route-animations';
import { RouterOutlet } from '@angular/router';
import { Ng7DynamicBreadcrumbService } from 'ng7-dynamic-breadcrumb';

@Component({
  selector: 'cossai-sls-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [fader]
})
export class FeaturesComponent implements OnInit {

  constructor(private ng7DynamicBreadcrumbService: Ng7DynamicBreadcrumbService) { }

  ngOnInit() {
    // const breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Level 2 ' };
    // this.ng7DynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
