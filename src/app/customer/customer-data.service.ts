import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomerDataService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get<any>('assets/data/customer.json');
  }

  getTemplate() {
    return this.http.get('assets/data/template.json');
  }
}
