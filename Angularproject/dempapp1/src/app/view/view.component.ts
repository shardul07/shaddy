import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  status: string ='';
  
  constructor(private service: DataserviceService) { }

  ngOnInit(): void {
  }
  click2() {   
    this.status=this.service.clicks();
    
  }
}
