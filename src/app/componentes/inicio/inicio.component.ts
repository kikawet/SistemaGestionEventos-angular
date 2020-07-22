import { Component, OnInit } from '@angular/core';
import { ServicioEventoService } from '../../servicios/servicio-evento.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public listaEventos;
  constructor(private eventoServicio:ServicioEventoService) { 
    this.listaEventos=Array(3);

  }

  ngOnInit() {
    this.eventoServicio.getListaEventos();
  }

}
