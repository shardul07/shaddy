import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
//import { FormBuilder } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/PojoClasses/Hotel';
import { HotelserviceService } from 'src/app/Service/Hotel/hotelservice.service';
@Component({
  selector: 'app-createhotel',
  templateUrl: './createhotel.component.html',
  styleUrls: ['./createhotel.component.css']
})
export class CreatehotelComponent implements OnInit {

  hotel : Hotel = new Hotel();
  hotels!: Observable<Hotel[]>;
 
  

  addForm!: FormGroup;
  Submitted: boolean=false;
  constructor(private service :HotelserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      avgRatePerDay: ['', Validators.required],
      email: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      website: ['', Validators.required]
    });
  }
  savehotel(){
  
    this.service.createhotel(this.hotel)
     .subscribe(
       data => { console.log(data); alert('hotel is added');
        this.router.navigate(['view'])},
       error => { console.log(error);  alert(error);}
     );
  }

  onSubmit(){
    this.Submitted=true;
    if (this.addForm.invalid)
     {
      return; 
     }
    else
    {
      this.savehotel();
      //alert('Record is added ....');
      console.log(this.addForm.value);
    }
 }

  }

