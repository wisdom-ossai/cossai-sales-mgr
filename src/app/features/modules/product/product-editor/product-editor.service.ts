import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductEditorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      regular_price: ['', Validators.required],
      short_description: [''],
      description: [''],
      categories: [[]],
    });
  }
}
