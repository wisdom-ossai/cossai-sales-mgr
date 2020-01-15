import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '@shared/shared.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
