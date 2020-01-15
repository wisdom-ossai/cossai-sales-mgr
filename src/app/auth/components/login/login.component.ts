import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'cossai-sls-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public fs: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.fs.form.value);
  }
}
