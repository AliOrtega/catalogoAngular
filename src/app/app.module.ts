import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegresarComponent } from './regresar/regresar.component';

@NgModule({
  declarations: [ 
    DeleteMovieComponent,
    RegresarComponent
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WelcomeComponent,
    CommonModule,
    AddMovieComponent,
    EditMovieComponent,
    MoviesComponent,
    MovieComponent,
    FilterMoviesComponent,
  ],
  providers: [provideHttpClient()],
  bootstrap: []
})
export class AppModule { }
