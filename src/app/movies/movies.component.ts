import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(
    private apiService: ApiService, // Inyectar ApiService
    private router: Router // Inyectar Router
  ) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe({
      next: (data: any[]) => {
        this.movies = data;
      },
      error: (error) => {
        console.error('Error al obtener las películas', error);
      }
    });
  }

  navigateToMovies(): void {
    this.router.navigate(['/movies']); 
  }

  addMovie(movie: any): void {
    this.apiService.addMovie(movie).subscribe({
      next: (data) => {
        this.movies.push(data);
      },
      error: (error) => {
        console.error('Error al agregar la película', error);
      }
    });
  }

  deleteMovie(id: number): void {
    this.apiService.deleteMovie(id).subscribe({
      next: (data) => {
        this.movies = this.movies.filter(movie => movie.id !== id);
      },
      error: (error) => {
        console.error('Error al eliminar la película', error);
      }
    });
  }
}
