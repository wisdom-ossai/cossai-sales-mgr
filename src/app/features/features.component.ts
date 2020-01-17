import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FADER } from '../constants/route-animations.constant';
import { BREADCRUMB_CONFIG } from '../constants/breadcrumb-config.constant';

@Component({
  selector: 'cossai-sls-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  animations: [FADER]
})
export class FeaturesComponent implements OnInit {

  breadcrumbConfig = BREADCRUMB_CONFIG;

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
