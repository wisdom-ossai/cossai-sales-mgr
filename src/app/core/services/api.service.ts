import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  version: string;
  config = null;
  apiBaseURL = 'http://localhost:4220';

  constructor(private http: HttpClient) { }

  create(endpointUrl: string, body: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseURL}${endpointUrl}`, body);
  }

  read(endpointUrl: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseURL}${endpointUrl}`);
  }

  update(endpointUrl: string, body: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseURL}${endpointUrl}`, body);
  }

  delete(endpointUrl: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBaseURL}${endpointUrl}`);
  }
}
