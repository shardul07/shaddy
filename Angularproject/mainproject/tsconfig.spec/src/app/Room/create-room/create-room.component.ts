import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/PojoClasses/Room';
import { RoomService } from 'src/app/Service/Room/room.service';


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room : Room = new Room();
  rooms!: Observable<Room[]>;
  
  constructor(private service:RoomService,private router:Router) { }

  ngOnInit(): void {
  }
  saveRoom(){
    this.service.createRoom(this.room)
     .subscribe(
       data => { console.log(data); alert('Room is added'); this.router.navigate(['/room'])},
       error => { console.log(error);  alert(error);}
     );
  }

}
