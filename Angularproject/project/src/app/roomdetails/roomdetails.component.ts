import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Room } from '../Room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {

  rooms!:Room[];
  room: Room= new Room();
  Submitted!: boolean ;
  addForm!: FormGroup;
  constructor(private service:RoomService) { }

  ngOnInit(): void {
    this.reloadData(); 
  }
  reloadData(){
    this.service.getAllRooms()
    .subscribe(
      data => { console.log(data); this.rooms=data;  },
      error => { console.log(error);  alert(error);}
    );
  }
  remove(roomId:number):void
  {
    this.service.removeRoomById(roomId)
    .subscribe(
      data => { console.log(data); 
       
        this.room = data ;
        this.reloadData();
        console.log(this.rooms);
        alert(this.room.roomId+'deleted');
      },
      error => { console.log(error);  alert(error);}
    );
  }
  editRoom(){
    this.service.editRoom(this.room)
      .subscribe(
        data => { console.log(data);  alert('hotel is updated');},
        error => { console.log(error);  }
      );
  }
  detail(roomId:number):void{
    this.service.getRoom(roomId)
      .subscribe(
        data => { console.log(data); this.room=data; },
        error => { console.log(error);  alert(error);}
      );
     
  }
}
