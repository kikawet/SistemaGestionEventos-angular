import { Injectable } from '@angular/core';
import { Evento } from '../clases/evento';
import { Usuario } from '../clases/usuario'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicioCrearEventoService {

  evento: Evento;
  usuario: Usuario

  constructor(private http: HttpClient) { }

  crearEvento() {
    
  }
}
