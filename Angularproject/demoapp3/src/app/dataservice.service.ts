import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Product } from './Product';
 
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private baseUrl = 'http://localhost:8083/api/v1';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getall`);
  }

  removeProductById(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteproduct/`+id);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, product);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproduct/${id}`);
  }

   editProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateproduct`, product);
  }

  getAboutUs(): Observable<any> {
    return this.http.get('assets/about.json');
  }
getBooking(): Observable<any> {
  return this.http.get('assets/bookin.json');
}
getEmp(): Observable<any> {
  return this.http.get('assets/employee.json');
}
}