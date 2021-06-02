import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RoomserviceService } from '../roomservice.service';
import { Room } from '../Room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  rooms!:Room[];
  room: Room= new Room();
  Submitted!: boolean ;
  addForm!: FormGroup;
  constructor(private service:RoomserviceService) { 

  }
  

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
 
   
 
}
