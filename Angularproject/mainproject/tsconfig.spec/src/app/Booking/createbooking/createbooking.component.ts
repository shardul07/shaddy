import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from 'src/app/PojoClasses/booking';
import { BookingserviceService } from 'src/app/Service/Booking/bookingservice.service';


@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent implements OnInit {
  Submitted:boolean=false;
  bookings!: Booking[];
  booking:Booking=new Booking();
  addBooking:Booking=new Booking();
  addForm!: FormGroup;
  id:string='';
  myDate!:Date;
  public hotelNameList:Array<string>=[];

  constructor(private service:BookingserviceService,private formBuilder:FormBuilder) { }

   ngOnInit(): void {
    this.id=sessionStorage.getItem('userId') as string;
    this.booking.userId=parseInt(this.id);
    console.log(this.booking.userId);
    this.reloadData();

    this.addForm = this.formBuilder.group({
      bookedFrom: ['', Validators.required],
      bookedTo: ['', Validators.required],
      noOfAdults: ['', Validators.required],
      noOfChildren: ['', Validators.required],
      hotelId: ['', Validators.required],
      roomId: ['', Validators.required],
      bookingId: ['', Validators.required],
      userId: ['', Validators.required],
      totalAmount: ['', Validators.required],
      hotelName: ['', Validators.required]
      // userId: [{value: '', disabled: true}, Validators.required]
    });

    this.getDropdownRefresh();
  }

   reloadData() {
    this.service.getBookingDetails()
    .subscribe(
      data => { console.log(data); 
       // this.products = data as Product[];
        this.bookings = data ;
        console.log(this.bookings);
      },
      error => { console.log(error);  alert(error);}
    );
    console.log(this.bookings);
  }

   onSubmitforAdd(){
    this.Submitted=true;
    if (this.addForm.invalid) {
      return;  }
    else{
      alert('Record is added ....');
      console.log(this.addForm.value);
      this.saveBooking();
    }
 }


  saveBooking(){
     this.service.createBooking(parseInt(this.id),this.addBooking)
      .subscribe(
        data => { console.log(data); alert('user is added');},
        error => { console.log(error);  alert(error);}
      );
    
  }

  getDropdownRefresh(){
    this.service.getDropdownOfHotel().subscribe(data=>{
      console.log(data);
      data.forEach((element: { [x: string]: string; }) => {
        this.hotelNameList.push(element["hotelName"]);
        
      });
    }
      )

  }

  calAmount()
  {

  }

}
