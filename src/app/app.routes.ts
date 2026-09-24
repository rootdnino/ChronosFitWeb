import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { TrazabilidadComponent } from './pages/trazabilidad/trazabilidad';
import { PerfilComponent } from './pages/perfil/perfil';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento';
import { VentanaMetabolicaComponent } from './pages/ventana-metabolica/ventana-metabolica';
import { RegistroPaso2Component } from './pages/registro-paso2/registro-paso2';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trazabilidad', component: TrazabilidadComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'nuevo-evento', component: NuevoEventoComponent },
  { path: 'ventana-metabolica', component: VentanaMetabolicaComponent },
  { path: 'registro-paso2', component: RegistroPaso2Component },
];