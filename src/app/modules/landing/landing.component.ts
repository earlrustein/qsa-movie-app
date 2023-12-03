import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  featuredMovie: Movie = {} as Movie;
  movieList: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((movie) => {
      this.movieList = movie;
      this.getFeaturedMovie();
    })
  }

  getFeaturedMovie(): void {
    let featuredRating = 0;
    this.movieList.forEach(movie => {
      if (movie.rating > featuredRating) {
        featuredRating = movie.rating;
        this.featuredMovie = movie;
      }
    });
  }
}
