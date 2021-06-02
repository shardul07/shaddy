import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab3a',
  templateUrl: './lab3a.component.html',
  styleUrls: ['./lab3a.component.css']
})
export class Lab3aComponent implements OnInit {
 

  addForm!: FormGroup;
  Submitted = false; 
  categ = ['Electronics', 'clothes',  
            'Food'];  
            

  



  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      pid: ['', Validators.required],
     // email: ['', Validators.compose([Validators.required, Validators.email])],
     pname: ['', Validators.required],
      cost: ['', Validators.required],
      product: ['', Validators.required],
      category: ['', Validators.required],
      available: ['', Validators.required],
    });
  }


  onSubmit(){
    this.Submitted=true;
    if (this.addForm.invalid) {
      return;  }
    else{
      alert('Record is added ....');
      console.log(this.addForm.value);
    }
 }


}