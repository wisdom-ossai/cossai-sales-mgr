import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IAddress } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerCreatorService {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      is_same_address: [false, Validators.required],
      billing: this.fb.group({
        address_1: [''],
        address_2: [''],
        country: [''],
        state: [''],
        city: [''],
        nearest_bustop: [''],
        post_code: [''],
        company: [''],
        phone: ['']
      }),
      shipping: this.fb.group({
        address_1: [''],
        address_2: [''],
        country: [''],
        state: [''],
        city: [''],
        nearest_bustop: [''],
        post_code: [''],
        company: ['']
      }),
    });
  }


  get shipping(): AbstractControl {
    return this.form.get('shipping');
  }


  patch(value: { [key: string]: any }) {
    this.form.patchValue(value);
  }

  patchShipping(isChecked: boolean) {
    const billing = this.form.value.billing;
    if (isChecked) {
      this.shipping.patchValue({
        address_1: billing.address_1,
        address_2: billing.address_2,
        country: billing.country,
        state: billing.state,
        city: billing.city,
        nearest_bustop: billing.nearest_bustop,
        post_code: billing.post_code,
        company: billing.company
      });
    } else {
      this.shipping.patchValue({
        address_1: '',
        address_2: '',
        country: '',
        state: '',
        city: '',
        nearest_bustop: '',
        post_code: '',
        company: ''
      });
    }
  }

  restartForm() {
    this.form = this.buildForm();
  }
}
