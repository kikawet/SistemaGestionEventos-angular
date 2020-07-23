import { Component, OnInit } from '@angular/core';
import { ServicioEventoService } from '../../servicios/servicio-evento.service';
import { Router } from '@angular/router';
import { Evento } from 'src/app/clases/evento';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import { EstadoUsuarioEvento } from 'src/app/enum/estado-usuario-evento.enum';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public listaEventos: Array<Evento>;
  estadoUsuarioEvento = EstadoUsuarioEvento;

  constructor(private servicioUsuario: ServicioUsuarioService, private eventoServicio: ServicioEventoService, private router: Router) {
    this.listaEventos = Array(0);

  }

  public redireccion(s: string) {
    this.router.navigate([s]);
  }

  ngOnInit() {

    if(this.servicioUsuario.isLogueado) {
      this.eventoServicio.getListaEventosUsuario(this.servicioUsuario.idUsuario).subscribe(data => {
        this.listaEventos = data._embedded.eventoDTOList;
      })
    } else {
      this.eventoServicio.getListaEventos().subscribe(data => {
        this.listaEventos = data._embedded.eventoDTOList;
      });
    }

    

  }

}
