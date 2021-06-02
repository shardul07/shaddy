import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


import { Router } from '@angular/router';
import { Hotel } from 'src/app/PojoClasses/Hotel';
import { HotelserviceService } from 'src/app/Service/Hotel/hotelservice.service';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {

  hotels!:Hotel[];
  hotel: Hotel= new Hotel();
 
  hotelName: string='';
  search: string='';
  edit: boolean=false;
  detail: boolean=false;
  

  constructor(private service:HotelserviceService, private router:Router) { }

  ngOnInit(): void {
this.reloadData();
  }
  reloadData() {
    this.service.getAllHotels()
      .subscribe(
        data => { console.log(data); this.hotels=data;  },
        error => { console.log(error);  alert(error);}
      );
  }

  detailbutton(hotelId:number):void{
    this.detail=true;
    this.edit=false;
    this.service.getHotel(hotelId)
      .subscribe(
        data => { console.log(data); this.hotel=data; },
        error => { console.log(error);  alert(error);}
      );
     
  }  

  updatebutton(hotelId:number):void{
    this.edit=true;
    this.detail=false;
    this.service.getHotel(hotelId)
      .subscribe(
        data => { console.log(data); this.hotel=data; },
        error => { console.log(error);  alert(error);}
      );
     
  }

  // remove(hotelId:number):void{
  //   //  this.service.removeHotelById(hotelId)
  //   //  .subscribe(
  //   // data => { console.log(data); alert('hotel is deleted'); this.router.navigate(['/view])},
  //   // error => { console.log(error);  alert(error);}
  //   //   )

  // }
  remove(hotelId:number):void
  {
    this.service.removeHotelById(hotelId)
    .subscribe(
      data => { console.log(data); 
       
        this.hotel = data ;
        this.reloadData();
        console.log(this.hotels);
        alert(this.hotel.hotelId+'deleted');
      },
      error => { console.log(error);  alert(error);}
    );
  }

  edithotel(){
    this.service.editHotel(this.hotel)
      .subscribe(
        data => { console.log(data);  alert('hotel is updated');},
        error => { console.log(error);  }
      );
  }
 
  searchhotel(hotelName: string){
    this.service.searchHotel(hotelName);
  }
 
  
}
