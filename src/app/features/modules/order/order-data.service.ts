import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrderDataService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get<any>('assets/data/order.json');
  }

  getTemplate() {
    return this.http.get('assets/data/order-template.json');
  }
}
