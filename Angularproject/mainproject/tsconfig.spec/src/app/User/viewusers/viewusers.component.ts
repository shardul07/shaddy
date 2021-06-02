import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../../Service/UserService/dataservice.service';
import { Users } from '../../PojoClasses/Users';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  users!: Users[];
  user:Users=new Users();
  
  constructor(private service:DataserviceService) { }

  ngOnInit(): void 
  {
    this.reloadData();
  }
  reloadData() 
  {
    this.service.getUserList()
    .subscribe(
      data => { console.log(data); 
       
        this.users = data ;
        console.log(this.users);
      },
      error => { console.log(error);  alert(error);}
    );
    console.log(this.users);
  }

   detail(userId:number):void
   {
    this.service.getUser(userId)
      .subscribe(
        data => { console.log(data); this.user=data; },
        error => { console.log(error);  alert(error);}
      );
     
   }

  remove(userId:number):void
  {
    this.service.removeUserById(userId)
    .subscribe(
      data => { console.log(data); 
       
        this.users = data ;
        this.reloadData();
        console.log(this.users);
      },
      error => { console.log(error);  alert(error);}
    );
  }

  edituser()
  {
     this.service.editUser(this.user)
      .subscribe(
        data => { console.log(data); this.reloadData()},
        error => { console.log(error);  alert(error);}
      );
  }

}


