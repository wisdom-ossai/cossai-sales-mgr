import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'cossai-sls-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, public fs: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.fs.form.getRawValue();
    this.authService.login(user).subscribe(val => this.router.navigate(['/f']));
  }
}
