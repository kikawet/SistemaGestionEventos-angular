import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/clases/evento';
import { TipoEvento } from '../../enum/tipo-evento.enum';
import { CategoriaEvento } from 'src/app/enum/categoria-evento.enum';


@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.css'],

})

export class CreacionEventoComponent implements OnInit {
  
  tipoEvento = TipoEvento;
  categoriaEvento = CategoriaEvento;

  constructor() { 
  }

  ngOnInit() {
    
  }

}
