import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'cossai-sls-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  roles = [
    {
      label: 'Owner',
      value: 'owner'
    },
    {
      label: 'Customer Manager Only',
      value: 'cmo'
    },
    {
      label: 'Product Manager Only',
      value: 'pmo'
    },
    {
      label: 'Product and Customer Manager',
      value: 'pcm'
    },
    {
      label: 'Employee Manager',
      value: 'em'
    },
    {
      label: 'Procurement',
      value: 'procurement'
    }
  ];

  constructor(public fs: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.fs.form.value);
  }
}
