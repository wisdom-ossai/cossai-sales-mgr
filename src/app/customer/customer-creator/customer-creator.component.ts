import { Component, OnInit } from '@angular/core';
import { CustomerCreatorService } from './customer-creator.service';

@Component({
  selector: 'cossai-sls-customer-creator',
  templateUrl: './customer-creator.component.html',
  styleUrls: ['./customer-creator.component.scss'],
  providers: [CustomerCreatorService]
})
export class CustomerCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
