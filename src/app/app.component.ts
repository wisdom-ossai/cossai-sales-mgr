import { Component, OnInit } from '@angular/core';
import { fader } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cossai-sls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
