import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  getAboutUs(): Observable<any> {
    return this.http.get('assets/booking.json');
  }
}
