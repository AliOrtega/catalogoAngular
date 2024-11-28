import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { provideHttpClient } from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component'; 
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'add-movie', component: AddMovieComponent }, 
  { path: 'edit-movie/:id', component: EditMovieComponent},
  { path: 'movies/delete/:id', component: DeleteMovieComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WelcomeComponent, 
    AddMovieComponent,
    EditMovieComponent, 
    MoviesComponent,
    MovieComponent, 
  ],
  providers: [provideHttpClient()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
