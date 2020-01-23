import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerEditorService } from './customer-editor.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss'],
  providers: [CustomerEditorService]
})
export class CustomerEditorComponent implements OnInit, OnDestroy {


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

  constructor(private router: Router, public fs: CustomerEditorService) { }

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

  onCheckboxChange(event) {
    this.fs.patchShipping(event.checked);
  }

  onCancelClick() {
    this.router.navigate(['f/customers']);
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}
