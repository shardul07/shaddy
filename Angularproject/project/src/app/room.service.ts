import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
 private baseUrl = 'http://localhost:8082/room/v1';
  constructor(private http: HttpClient) { }
 
  getAllRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getallroomdetails`);
  }
  
  removeRoomById(roomId:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeroom/`+roomId);
  }
  createRoom(room: Room): Observable<any> {
    return this.http.post(`${this.baseUrl}/addRoom`, room);
  }
  editRoom(room: Room): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateroom`, room);
  }
  getRoom(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getroombyid/${roomId}`);
  }
  }



