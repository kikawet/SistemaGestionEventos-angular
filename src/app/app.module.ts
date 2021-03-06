import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreacionEventoComponent } from './componentes/creacion-evento/creacion-evento.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { ServicioEventoService } from './servicios/servicio-evento.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ServicioCrearEventoService } from './servicios/servicio-crear-evento.service';
import { LoginComponent } from './componentes/login/login.component';
import { ServicioUsuarioService } from './servicios/servicio-usuario.service';


import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MisEventosComponent } from './componentes/mis-eventos/mis-eventos.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CreacionEventoComponent,
    InicioComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    MisEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ServicioCrearEventoService,ServicioUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
