import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import * as movieData from '../mocks/movies/movies.json'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = movieData;

  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    return of(this.movies.data)
  }
}