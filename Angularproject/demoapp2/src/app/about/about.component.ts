import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
 
  constructor(private service :DataserviceService) { }
 
  abouts!: About[];
 
  ngOnInit(): void {
    this.service.getAboutUs().subscribe(data => {
      this.abouts = data;
      console.log('data:'+this.abouts);
    },
    error => { console.log(error);  alert(error);}
 );
  }
}