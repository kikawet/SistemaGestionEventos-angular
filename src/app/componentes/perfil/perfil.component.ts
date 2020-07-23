import { Component, OnInit } from '@angular/core';
import { Evento } from "../../clases/Evento";
import { Usuario } from "../../clases/Usuario";
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  private perfil:Usuario;

  constructor(private servicioUsuario: ServicioUsuarioService,private router: Router) { }

  ngOnInit() {
     if(!this.servicioUsuario.isLogueado)
      this.router.navigate(["/login"]);

      this.servicioUsuario.getDetalles().subscribe(data => {
        this.perfil = data;        
      });
    
  }

}
