import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { IUser } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { IAuthResult } from '../interfaces/auth-result.interface';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userResult$: BehaviorSubject<IUser>;
  private baseUrl = 'http://localhost:4220/api';


  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.userResult$ = new BehaviorSubject<any>(null);
   }

  login(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, formValue).pipe(
      switchMap((apiResult: IAuthResult) => {
        if (apiResult.Success) {
          this.saveToken(apiResult.token);
          this.setUser(apiResult.Results[0]);
          this.snackBar.open(`Logged in successfully. Welcome ${apiResult.Results[0].username}`, 'Close');
          return of(apiResult.Results[0]);
        } else {
          this.snackBar.open(`${apiResult.ErrorMessage}`, 'Close');
          return of(null);
        }
      }),
      catchError(e => {
        this.snackBar.open('Your credentials could not be verified, please try again', 'Close');
        return throwError('Your credentials could not be verified, please try again');
      })
    );
    // this.setUser(formValue);
    // return of(formValue);
  }


  register(formValue: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, formValue);
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

  logout(): Observable<boolean> {
    this.setUser(null);
    this.removeToken();
    return of(true);
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
