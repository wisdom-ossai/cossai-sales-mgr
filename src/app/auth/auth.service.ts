import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userResult$: Observable<IUser>;
  private baseUrl = 'http://localhost:4220/api';

  constructor(private httpClient: HttpClient) {
    this.userResult$ = new BehaviorSubject<any>(null);
   }

  login(formValue: any): Observable<any> {
    console.log(formValue);
    return this.httpClient.post(`${this.baseUrl}/auth/login`, formValue);
    // this.setUser(formValue);
    // return of(formValue);
  }

  register(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, formValue);
    // this.setUser(formValue);
    // return of(formValue);
  }

  logout() {
    // this.setUser(null);
  }

  // get user(): Observable<any> {
  //   return this.user$.asObservable();
  // }

  // private setUser(user) {
  //   this.user$.next(user);
  // }
}
