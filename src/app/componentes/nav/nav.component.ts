import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public servicioUsuario: ServicioUsuarioService,private router: Router) { }

  ngOnInit() {

    

  }


  public redireccion(s: string) {
    this.router.navigate([s]);
  }

}
