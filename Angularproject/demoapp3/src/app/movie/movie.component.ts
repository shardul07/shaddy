import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../movie';


import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  addForm!: FormGroup;
  Submitted = false; 
  category = ['Comedy', 'Horror','Action','Romance']; 
  movie: Movie = new Movie(); 
  movies!: Movie[];
  type1:string='';

  constructor(private formBuilder: FormBuilder,private service: MovieserviceService) { }
  
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
     category: ['', Validators.required],
     rating: ['', Validators.required]
    });
  }
  onSubmit(){
    this.Submitted=true;
    if (this.addForm.invalid) {
      return;  }
    else{
      alert('Movie is added ....');
      console.log(this.addForm.value);
      this.movie = this.addForm.value;
      alert("rating:" +this.movie.rating+"id:" +this.movie.id+"name:" +this.movie.name+"category:" +this.movie.category)
      this.service.createmovie(this.movie).subscribe(
        (        data: any) => { console.log(data)},
        (        error: any) => { console.log(error);  alert(error);}
      );
    }
 }
 getallmovie( ){
   this.service.getMovieList(this.type1).subscribe( data => { console.log(data); this.movies=data },
   error => { console.log(error);  alert(error);})
 }
}