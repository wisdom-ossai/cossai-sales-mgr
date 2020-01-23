import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CategoryEditorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: [''],
      products: [[]],
    });
  }

  restartForm() {
    this.form = this.buildForm();
  }
}
