import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  addForm!: FormGroup;
  Submitted!: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      empname: ['', Validators.required],
      email: ['', Validators.required],
     designation: ['', Validators.required],
     salary: ['', Validators.required],
     experience: ['', Validators.required],
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
