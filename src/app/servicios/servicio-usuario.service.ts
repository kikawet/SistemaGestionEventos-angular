import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Usuario } from '../clases/usuario';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  private rootPath = "http://localhost:12021/sge-api/rest/usuario";
  public idUsuario:string;
  constructor(private http: HttpClient) { this.idUsuario=null }

  
  public get isLogueado() : boolean {
    return this.idUsuario!=null;
  }

  logout(){
    this.idUsuario=null;
  }
  

  login(login: string, password: string): Observable<any> {
    let usuario = new Usuario();
    usuario.login = login;
    usuario.password = password;
    return this.http.post(this.rootPath + "/login", usuario);
  }

  registro(login:string, email:string, password:string): Observable<any>{
    let usuario = new Usuario();
    usuario.login = login;
    usuario.email = email;
    usuario.password = password;

    return this.http.post(this.rootPath + "/registro", usuario);
  }
}
