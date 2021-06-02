import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataserviceService } from '../../Service/UserService/dataservice.service';
import { Users } from '../../PojoClasses/Users';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  users!: Observable<Users[]>;
  user:Users=new Users();
  addForm!: FormGroup;
  Submitted!: boolean;
  cPassword:string='';
  constructor(private service:DataserviceService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      terms: ['', Validators.required],
      cPassword: ['', Validators.required]
    });
  }

  saveuser()
  {
    this.Submitted=true;
    if (this.addForm.invalid) 
    {
      return;  
    }
    else{
    this.user.role='Customer';
     this.service.createUser(this.user)
      .subscribe(
        data => { console.log(data); alert('user is added');
        this.router.navigate(['/login'])},
        error => { console.log(error);  alert(error);}
      );
    }
  }

}
