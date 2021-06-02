import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
 
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  constructor(private http: HttpClient) { }
 
  clicks() {   return  "Now:" + new Date();  }
 
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}