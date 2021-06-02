import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
year: string='';
constructor(private service: DataserviceService) { }
  
bookings!: Booking[];
searchValue: string='';
author: string='';
title: string=''; 

ngOnInit(): void {
this.service.getBooking().subscribe(data =>{
this.bookings=data;
console.log(this.bookings);
},
error => { console.log(error);  alert(error);}
);
}
search1(): void{
alert(this.title);
this.bookings=
this.bookings.filter(booking =>
booking.title.toLocaleLowerCase().includes(this.title.toLocaleLowerCase()));
}
search2():void{
  this.bookings=
 this.bookings.filter(booking =>
  booking.author.toLocaleLowerCase().includes(this.author.toLocaleLowerCase()));
}
search3(): void{
  this.bookings=
  this.bookings.filter(booking =>
  booking.year.toString().toLocaleLowerCase().includes(this.year.toLocaleLowerCase()));
}
}