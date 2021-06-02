import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  id:number=0;
  name:string='';
  salary:number=0;
  department:string='';

  constructor() { }

  ngOnInit(): void {
  }
 
  addEmployee():void{
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
}
