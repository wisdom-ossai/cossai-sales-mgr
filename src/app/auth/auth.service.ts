import { Injectable } from '@angular/core';
import { of, Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { IUser } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        console.log(apiResult);
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

  getLoggedInUserProfile(): Observable<any> {
    const headerToken = new HttpHeaders();
    if (this.getToken().length > 1) {
      headerToken.append('Authorization', 'Bearer ' + this.getToken());
    }
    return this.httpClient.get(`${this.baseUrl}/auth/profile`).pipe(
      switchMap((apiResult: IUser) => {
        return of(apiResult);
      }),
      catchError(e => {
        return throwError('Your credentials could not be verified, please try again');
      })
    );
  }

  logout() {
    // this.setUser(null);
  }

  saveToken(token: string) {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
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
