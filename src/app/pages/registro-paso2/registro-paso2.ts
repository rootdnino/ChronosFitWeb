import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro-paso2',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatButtonModule, RouterModule],
  templateUrl: './registro-paso2.html',
  styleUrl: './registro-paso2.css'
})
export class RegistroPaso2Component {}
