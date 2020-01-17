import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FADER } from './constants/route-animations.constant';

@Component({
  selector: 'cossai-sls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADER]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
