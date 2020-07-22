import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../servicios/servicio-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servicioUsuario: ServicioUsuarioService, private router: Router) { }
  public username:string;
  public password:string;

  login(){
    console.log("LOGUEANDO CON USUARIO: "+this.username+"-"+this.password);

    this.servicioUsuario.login(this.username, this.password).subscribe(data => {
      console.log(data);
      this.servicioUsuario.idUsuario=data;
      this.router.navigate([""]);
    },
      err => { console.error('Error en logueo');
        (document.getElementById("errorLogin") as HTMLDivElement).style.display="block";
        this.username="";
        this.password="";
      }
    );
  }

  ngOnInit() {
    
  }



}
