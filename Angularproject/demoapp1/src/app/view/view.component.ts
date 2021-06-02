import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  status:string='';
  // users:Object='';
  http: any;
  users :any='';

  constructor(private service:DataserviceService) { 
   
  }
   click2() {   
    this.status=this.service.clicks();
    
  }
  getUsers(): Observable<any> {
    return this.http.get('./assets/booking.json');
  }

 ngOnInit(): void {
    this.service.getUsers().subscribe(array => {
      this.users = array;
      console.log(this.users);//optional 
    });
  }

}