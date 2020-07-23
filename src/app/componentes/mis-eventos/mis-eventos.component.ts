import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../servicios/servicio-usuario.service';
import { Router } from '@angular/router';
import { Evento } from 'src/app/clases/evento';
import { EstadoUsuarioEvento } from 'src/app/enum/estado-usuario-evento.enum';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.scss']
})
export class MisEventosComponent implements OnInit {

  estadoUsuarioEvento = EstadoUsuarioEvento;
  creados:Array<Evento>;
  inscritos:Array<Evento>;

  constructor(private servicioUsuario: ServicioUsuarioService, private router: Router) {
    this.creados = Array(0);
    this.inscritos = Array(0);

   }

  ngOnInit() {
    if(!this.servicioUsuario.isLogueado)
      this.router.navigate(["login"]);

    this.servicioUsuario.getCreados().subscribe(data => {
      this.creados = data._embedded.eventoDTOList;
    });

    this.servicioUsuario.getInscritos().subscribe(data => {
      this.inscritos = data._embedded.eventoDTOList;
    });
  }

}
