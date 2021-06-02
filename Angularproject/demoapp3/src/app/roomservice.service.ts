import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; 
import { Room } from './Room';
@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {
  private baseUrl = 'http://localhost:8082/api/v1';
  constructor(private http: HttpClient) { }
  
  // createRoom(room: Room): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/addRoom`, room);
  // }
  getAllRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getallroomdetails`);
 }
}
