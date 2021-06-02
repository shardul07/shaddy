import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {
  
  employees!: Employee[];
  sortedColumn: string='';
  constructor(private service: DataserviceService) { }
  
  ngOnInit(): void {
    this.service.getEmp().subscribe(data =>{
      this.employees=data;
      console.log(this.employees);
  },
  error => { console.log(error);  alert(error);}
  );
  }
 
  
}