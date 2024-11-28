import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; // Importar Location
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private location: Location // Inyectar Location
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      year: ['', Validators.required],
      cover: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void { 
    if (this.movieForm.valid) {
      console.log('Form data:', this.movieForm.value); 
      this.movieService.addMovie(this.movieForm.value).subscribe({
        next: response => {
          console.log('Movie added:', response); 
          this.router.navigate(['/movies']); 
        }, 
        error: error => {
          console.error('Error adding movie:', error); 
        } 
      });
    }
  }

  goBack(): void {
    this.location.back(); 
  }
}
