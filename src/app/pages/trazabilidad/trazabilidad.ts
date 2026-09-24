import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trazabilidad',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './trazabilidad.html',
  styleUrl: './trazabilidad.css'
})
export class TrazabilidadComponent {}