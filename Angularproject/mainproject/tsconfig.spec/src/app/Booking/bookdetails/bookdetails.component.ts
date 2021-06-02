import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from 'src/app/PojoClasses/booking';
import { BookingserviceService } from 'src/app/Service/Booking/bookingservice.service';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  bookings!: Booking[];
  booking:Booking=new Booking();
  // editbooking:Booking=new Booking();
  
  addForm!: FormGroup;
  Submitted: boolean=false;
  
  id:string='';
  detail:boolean=false;
  edit:boolean=false;
  
  
  
  constructor(private service:BookingserviceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('userId') as string;
    this.booking.userId=parseInt(this.id);
    console.log(this.booking.userId);
    this.reloadData();

    this.addForm = this.formBuilder.group({
      bookingId: [{value: '', disabled: true}],
      bookedFrom: ['', Validators.required],
      bookedTo: ['', Validators.required],
      noOfAdults: ['', Validators.required],
      noOfChildren: ['', Validators.required],
      hotelId: [{value: '', disabled: true}],
      roomId: [{value: '', disabled: true}],
      totalAmount: ['', Validators.required]
      // userId: [{value: '', disabled: true}, Validators.required]
    });
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

  bookingDetail(bookingId:number):void{
    this.detail=true;
    this.edit=false;
    this.service.getBookingDetailsOnId(bookingId)
      .subscribe(
        data => { console.log(data); this.booking=data; },
        error => { console.log(error);  alert(error);}
      );
    
  }

  editButton(bookingId:number):void{
    this.edit=true;
    this.detail=false;
    this.service.getBookingDetailsOnId(bookingId)
      .subscribe(
        data => { console.log(data); this.booking=data; },
        error => { console.log(error);  alert(error);}
      );
  
  }

//   onSubmit(){
//     // this.Submitted=true;
//     if (this.addForm.invalid) {
//       return;  }
//     else{
//        this.Submitted=true;
//       // alert('Record is added ....');
//       console.log(this.addForm.value);
//       this.editBooking();
      
     
//     }
//  }
 editBooking(){
   this.Submitted=true;
   if (this.addForm.invalid) {
      return;  }
      else{
    //  this.Submitted=true;
     this.service.editBookingDetails(parseInt(this.id),this.booking)
      .subscribe(
        data => { console.log(data);alert('booking is updated');  this.reloadData()},
        error => { console.log(error);  alert(error);}
      );
      }
      
      
    
  }

  



  

   removeBooking(bookingId:number):void{
    this.service.removeBookingById(bookingId)
    .subscribe(
      data => { console.log(data); 
       // this.products = data as Product[];
        this.bookings = data ;
        this.reloadData();
        console.log(this.bookings);
      },
      error => { console.log(error);  alert(error);}
    );
  }

   

}
