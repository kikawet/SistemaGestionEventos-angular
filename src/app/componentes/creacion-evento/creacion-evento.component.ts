import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/clases/evento';
import { TipoEvento } from '../../enum/tipo-evento.enum';
import { CategoriaEvento } from 'src/app/enum/categoria-evento.enum';
import { Url } from 'url';
import { ServicioEventoService } from 'src/app/servicios/servicio-evento.service';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';


@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css'],

})

export class CreacionEventoComponent implements OnInit {

  public titulo: string;
  public descripcion: string;
  public tipoE: TipoEvento;
  public categoria: CategoriaEvento;
  public lugar: string;
  public fecha: Date;
  public aforo: number;
  public foto: string;

  tipoEvento = TipoEvento;
  categoriaEvento = CategoriaEvento;

  constructor(private eventoServicio: ServicioEventoService, private router: Router,private servicioUsuario: ServicioUsuarioService) {
  }

  ngOnInit() {
    if(this.servicioUsuario.idUsuario==null){
      this.router.navigate(["login"]);
    }
  }

  crearEvento() {
    if(this.servicioUsuario.idUsuario==null){
      this.router.navigate(["login"]);
    }
    console.log(this.titulo + "-" + this.descripcion + "-" + this.tipoE.valueOf() + "-" + this.categoria.valueOf() + "-" + this.lugar + "-" + this.fecha + "-" + this.aforo + "-" + this.foto);

    let evento: Evento=new Evento();
    evento.titulo = this.titulo;
    evento.descripcion = this.descripcion;
    evento.tipo = this.tipoE;
    evento.categoriaEvento = this.categoria;
    evento.lugar = this.lugar;
    evento.fecha = this.fecha;
    evento.aforoMaximo = this.aforo;
    evento.foto = this.foto;

    this.eventoServicio.crearEvento(evento).subscribe(data => {
      console.log(data);
      this.router.navigate(["eventos"]);
    },
      err => {
        console.error('Error en la creación de evento');
        console.error(err);
      });

    
  }


}
