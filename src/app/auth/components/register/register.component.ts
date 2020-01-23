import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'cossai-sls-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

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

  constructor(private router: Router, private authService: AuthService, public fs: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.fs.form.controls.repeatPassword.errors);
    const user = this.fs.form.getRawValue();
    this.authService.register(user).subscribe(val => {
      if (val) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}
