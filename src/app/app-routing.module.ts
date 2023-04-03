import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { EditarEstablecimientoComponent } from './editar-establecimiento/editar-establecimiento.component';
import { CanchasComponent } from './canchas/canchas.component';
import { EditarCanchaComponent } from './editar-cancha/editar-cancha.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'establecimientos', component: EstablecimientosComponent },
  { path: 'editar-establecimiento', component: EditarEstablecimientoComponent },
  { path: 'canchas', component: CanchasComponent },
  { path: 'editar-cancha', component: EditarCanchaComponent },
  { path: 'reservas', component: ReservasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
