import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from './i-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieName = 'game%20of%20thr';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e3a2a858e1msh9fc722874c090d1p15c307jsn6bf56487479c',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  });


  constructor(private http: HttpClient) { }

  getMovies(searchString: any): Observable<any> {
    let apiUrl = 'https://imdb8.p.rapidapi.com/auto-complete?q=';
    if(!searchString){
      searchString = this.movieName;
    }
    console.log('searchString ===== ',searchString);
    apiUrl = apiUrl + searchString;
    return this.http.get(apiUrl, { headers: this.headers });
  }
}
