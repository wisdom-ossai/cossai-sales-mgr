import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { IUser } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { IAuthResult } from '../interfaces/auth-result.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userResult$: BehaviorSubject<IUser>;
  private baseUrl = 'http://localhost:4220/api';


  constructor(private httpClient: HttpClient) {
    this.userResult$ = new BehaviorSubject<any>(null);
   }

  login(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, formValue).pipe(
      switchMap((apiResult: IAuthResult) => {
        console.log(apiResult)
        if (apiResult.success) {
          this.saveToken(apiResult.token);
          this.setUser(apiResult.user);
          return of(apiResult.user);
        } else {
          alert(apiResult.message);
          return of(null);
        }
      }),
      catchError(e => {
        console.log(e);
        return throwError('Your credentials could not be verified, please try again');
      })
    );
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

  saveToken(token: string) {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  removeToken() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  get user(): Observable<any> {
    return this.userResult$.asObservable();
  }

  private setUser(user) {
    this.userResult$.next(user);
  }
}
