import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/clases/evento';


@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css']
})
export class CreacionEventoComponent implements OnInit {
  constructor(public evento: Evento) { }

  ngOnInit() {
    
  }



}
