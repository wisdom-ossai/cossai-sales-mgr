import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserCreatorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      roles: [''],
      avatar: [''],
    });
  }

  restartForm() {
    this.form = this.buildForm();
  }
}
