import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-testing';
  movies: any;
  movieForm: FormGroup;

  constructor(
    private moviesService: MoviesService
  ) {
    this.movieForm = new FormGroup({
      movieName: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.moviesService.getMovies('hack').subscribe((data) => {
      console.log('data ===== ',data);
      this.movies = data;
    })

    
  }

  fn_formSubmit() {
    if (this.movieForm.valid) {
      const movieName = this.movieForm.get('movieName')?.value;
      if(movieName) {
        console.log('Searching for movie:', movieName);

        this.moviesService.getMovies(movieName).subscribe((data) => {
          console.log('data ===== ',data);
          this.movies = data;
        })

      }
    }
  }

}
