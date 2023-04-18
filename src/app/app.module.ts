import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { EditarEstablecimientoComponent } from './editar-establecimiento/editar-establecimiento.component';
import { CanchasComponent } from './canchas/canchas.component';
import { EditarCanchaComponent } from './editar-cancha/editar-cancha.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuienesSomosComponent,
    EstablecimientosComponent,
    EditarEstablecimientoComponent,
    CanchasComponent,
    EditarCanchaComponent,
    ReservasComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
