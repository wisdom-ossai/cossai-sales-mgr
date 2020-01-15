import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class OrderEditorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
}
