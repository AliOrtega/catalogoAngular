import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  movieId!: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    public router: Router 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieId = id ? +id : 0;
  }

  confirmDelete(): void {
    const confirmResult = window.confirm('¿Estás seguro de que deseas eliminar esta película?');
    if (confirmResult) {
      this.movieService.deleteMovie(this.movieId).subscribe({
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
}
