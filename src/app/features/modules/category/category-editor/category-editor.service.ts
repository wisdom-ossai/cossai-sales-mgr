import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ICategory } from 'src/app/interfaces';


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


  initializeForm() {
    this.form = this.buildForm();
  }
  patchForm(data: ICategory) {
    this.form.patchValue(data);
  }
}
