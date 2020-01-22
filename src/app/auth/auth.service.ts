import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<IUser>();

  constructor() { }

  login(formValue: any): Observable<any> {
    this.user$.next(formValue);
    this.setUser(formValue);
    return of(formValue);
  }

  register(formValue: any): Observable<any> {
    this.user$.next(formValue);
    this.setUser(formValue);
    return of(formValue);
  }

  logout() {
    this.setUser(null);
  }

  get user() {
    return this.user$.asObservable();
  }

  private setUser(user) {
    this.user$.next(user);
  }
}
