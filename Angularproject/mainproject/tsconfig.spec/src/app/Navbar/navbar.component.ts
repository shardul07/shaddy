import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Service/UserService/dataservice.service';
import { UserlogoutComponent } from '../Userlogout/userlogout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId!:string;
  userName:string='';
  constructor(private service: DataserviceService) { }

  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId') as string;
    // console.log(this.userId);
    this.userName=sessionStorage.getItem('userName') as string;
  }
  
  userlogout()
  {
    this.service.logout();
  }

}
