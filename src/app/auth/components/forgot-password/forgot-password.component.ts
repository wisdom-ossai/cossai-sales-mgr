import { Component, OnInit, OnDestroy } from '@angular/core';
import { ForgotPasswordService } from './forgot-password.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cossai-sls-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  constructor(private router: Router, public fs: ForgotPasswordService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.fs.form.getRawValue();
    this.authService.login(user).subscribe(response => {
      if (response) {
        console.log(response);
        // this.router.navigate(['f']);
      }
    });
  }

  ngOnDestroy() {
    this.fs.restartForm();
  }
}
