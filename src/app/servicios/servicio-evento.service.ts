import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ServicioUsuarioService } from './servicio-usuario.service';
import { Evento } from '../clases/evento';
import { TipoEvento } from '../enum/tipo-evento.enum';
import { CategoriaEvento } from '../enum/categoria-evento.enum';
import { Url } from 'url';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + btoa("Patricio Ruiz:1234")
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})
export class ServicioEventoService {

  constructor(private http: HttpClient, private servicioUsuario: ServicioUsuarioService) {
    this.idUsuario = this.servicioUsuario.idUsuario;
  }
  public idUsuario: string;
  private rootPath = "http://localhost:12021/sge-api/rest/evento";
  getListaEventos(): Observable<any> {
    return this.http.get(this.rootPath, httpOptions);
  }

  crearEvento(evento:Evento):Observable<any> {
    this.idUsuario=this.servicioUsuario.idUsuario;
    const myParams = new HttpParams()
      .set("id", this.idUsuario);
    httpOptions.params=myParams;

    //return this.http.get(this.rootPath + "/" + this.idUsuario, options);

    

    console.log("creacion evento petición");

    return this.http.post(this.rootPath, evento, httpOptions);

    
  }




}
