import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
    console.log('ProductService created');
  }

  getProducts(): Observable<any> {
    console.log('Fetching products from:', `${this.apiUrl}/products/`);
    return this.http.get(`${this.apiUrl}/products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}/`);
  }

  getCategories(): Observable<any> {
    console.log('Fetching categories from:', `${this.apiUrl}/categories/`);
    return this.http.get(`${this.apiUrl}/categories/`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${id}/`);
  }

  getProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${categoryId}/products/`);
  }
}