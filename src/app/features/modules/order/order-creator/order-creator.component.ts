import { Component, OnInit } from '@angular/core';
import { OrderCreatorService } from './order-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-order-creator',
  templateUrl: './order-creator.component.html',
  styleUrls: ['./order-creator.component.scss']
})
export class OrderCreatorComponent implements OnInit {

  matcher = new FormErrorStateMatcher();

  genders = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
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

  }

  onCancelClick() {
    this.router.navigate(['f/orders']);
  }
}
