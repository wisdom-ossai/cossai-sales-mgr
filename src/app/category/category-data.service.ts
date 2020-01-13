import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoryDataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>('assets/data/category.json');
  }

  getTemplate() {
    return this.http.get('assets/data/category-template.json');
  }
}
