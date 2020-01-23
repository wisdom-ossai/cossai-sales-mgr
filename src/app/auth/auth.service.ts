import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: Subject<IUser>;

  constructor() {
    this.user$ = new BehaviorSubject<IUser>(null);
   }

  login(formValue: any): Observable<any> {
    console.log(formValue);
    this.setUser(formValue);
    return of(formValue);
  }

  register(formValue: any): Observable<any> {
    this.setUser(formValue);
    return of(formValue);
  }

  logout() {
    this.setUser(null);
  }

  get user(): Observable<any> {
    return this.user$.asObservable();
  }

  private setUser(user) {
    this.user$.next(user);
  }
}
