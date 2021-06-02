import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/PojoClasses/booking';



@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
private baseUrl = 'http://localhost:8082/booking/v1';
private baseUrl1 = 'http://localhost:8082/hotel/h1';

constructor(private http: HttpClient) { }

getBookingDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallbookingdetails`);
  }

  getBookingDetailsOnId(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbookingdetails/${bookingId}`);
  }

  editBookingDetails(userId:number,booking: Booking): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatebookingdetails/${userId}`, booking);
  }

  removeBookingById(bookingId:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removebookingdetails/${bookingId}`);
  }

  createBooking(userId:number,addBooking: Booking): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/addBookingDetails/${userId}/`,addBooking);
  }

  getDropdownOfHotel(): Observable<any> {
    return this.http.get(`${this.baseUrl1}/getallhotels`);
  }

}
