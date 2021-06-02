import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private baseUrl = 'http://localhost:8082/api/v1' ;

   constructor(private http:HttpClient) { }

   getMovieList(type : string): Observable<any> {
     return this.http.get(`${this.baseUrl}/getall`);
    //return this.http.get(`${this.baseUrl}/getmovie3/${type}`).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }
  getmovie(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getmovie/${name}`);
  }

  createmovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/add`, movie);
  }

}

