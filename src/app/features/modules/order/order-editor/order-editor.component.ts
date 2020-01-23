import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderEditorService } from './order-editor.service';
import { Router } from '@angular/router';
import { FormErrorStateMatcher } from '@shared/classes/form-error-state-matcher';

@Component({
  selector: 'cossai-sls-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss']
})
export class OrderEditorComponent implements OnInit, OnDestroy {


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

  constructor(private router: Router, public fs: OrderEditorService) { }

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
