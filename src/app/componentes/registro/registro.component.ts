import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../servicios/servicio-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public username:string;
  public email:string;
  public password:string;

  public errorRegistro:string;

  constructor(private servicioUsuario: ServicioUsuarioService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * registro
 :void  */
  public registro():void {
    this.errorRegistro = "";
    this.servicioUsuario.registro(this.username, this.email, this.password).subscribe(() => {
      this.router.navigate([""]);
    },
      err => { console.error('Error en registro');
      this.errorRegistro = err.error.message;
        this.username="";
        this.email="";
        this.password="";
      }
    );
  }

}
