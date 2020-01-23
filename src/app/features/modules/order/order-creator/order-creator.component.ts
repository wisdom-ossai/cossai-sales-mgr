import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderCreatorService } from './order-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-order-creator',
  templateUrl: './order-creator.component.html',
  styleUrls: ['./order-creator.component.scss']
})
export class OrderCreatorComponent implements OnInit, OnDestroy {

  matcher = new FormErrorStateMatcher();

  products = [
    {
      label: 'Product 1',
      value: 'p_1'
    },
    {
      label: 'Product 2',
      value: 'p_2'
    }
  ];

  customers = [
    {
      label: 'Customer 1',
      value: 'c_1'
    },
    {
      label: 'Customer 2',
      value: 'c_2'
    }
  ];

  employees = [
    {
      label: 'Employee 1',
      value: 'e_1'
    },
    {
      label: 'Employee 2',
      value: 'e_2'
    }
  ];

  constructor(private router: Router, public fs: OrderCreatorService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.fs.form.valid) {
      console.log(this.fs.form.value);
    }
  }
  onReset() {
    this.fs.restartForm();
  }

  onCancelClick() {
    this.router.navigate(['f/orders']);
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}
