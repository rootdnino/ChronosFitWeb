import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ventana-metabolica',
  standalone: true,
  imports: [MatCardModule, MatSlideToggleModule, MatButtonModule, RouterModule],
  templateUrl: './ventana-metabolica.html',
  styleUrl: './ventana-metabolica.css'
})
export class VentanaMetabolicaComponent {}
