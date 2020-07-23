import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ServicioUsuarioService } from './servicio-usuario.service';
import { Usuario } from '../clases/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Authorization':'Basic '+ btoa("Patricio Ruiz:1234")    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioEventoService {

  constructor(private http: HttpClient) { }

  getListaEventos():Observable<any>{
    return this.http.get("http://localhost:12021/sge-api/rest/evento");
  }

  
  getListaEventosUsuario(uid: string):Observable<any> {
    console.log("Uid: " + uid);
    return this.http.get("http://localhost:12021/sge-api/rest/evento/perfil/" + uid);
  }

}
