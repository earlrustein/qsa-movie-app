import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
