import { Component, OnInit } from '@angular/core';
import { CustomerCreatorService } from './customer-creator.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-customer-creator',
  templateUrl: './customer-creator.component.html',
  styleUrls: ['./customer-creator.component.scss'],
  providers: [CustomerCreatorService]
})
export class CustomerCreatorComponent implements OnInit {

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

  constructor(private router: Router, public fs: CustomerCreatorService) { }

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
    this.router.navigate(['/customers']);
  }
}
