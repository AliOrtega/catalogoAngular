import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; 
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MovieComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private movieService: MovieService,
    private router: Router,
    private location: Location 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovie(+id).subscribe((data: any) => {
        this.movie = data;
      });
    }
  }

  confirmDelete(movieId: number): void {
    const confirmResult = window.confirm('¿Estás seguro de que deseas eliminar esta película?');
    if (confirmResult) {
      this.movieService.deleteMovie(movieId).subscribe({
        next: () => {
          console.log('Movie deleted');
          this.router.navigate(['/movies']);
        },
        error: error => {
          console.error('Error deleting movie:', error);
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  navigateToMovies(): void {
    this.router.navigate(['/movies']); 
  }
}
