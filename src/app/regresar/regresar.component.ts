import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.css']
})
export class RegresarComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
