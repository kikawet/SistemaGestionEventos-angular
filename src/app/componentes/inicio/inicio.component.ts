import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public listaEventos;
  constructor() { 
    this.listaEventos=Array(3);
  }

  ngOnInit() {
  }

}
