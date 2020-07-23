import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from "@angular/common/http";
import { Usuario } from '../clases/usuario';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  private rootPath = "http://localhost:12021/sge-api/rest/usuario";
  private httpHeaders ;
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

    this.httpHeaders =  new HttpHeaders({ 
        'Authorization':'Basic '+ btoa(login+':'+password)  
      });

    return this.http.post(this.rootPath + "/login", usuario);
  }

  registro(login:string, email:string, password:string): Observable<any>{
    let usuario = new Usuario();
    usuario.login = login;
    usuario.email = email;
    usuario.password = password;

    return this.http.post(this.rootPath + "/registro", usuario);
  }

  getDetalles(): Observable<any>{
    const myParams = new HttpParams()
        .set("uId", this.idUsuario);

       const options = { headers: this.httpHeaders,  params: myParams };
       console.log(options);
    
    return this.http.get(this.rootPath + "/" + this.idUsuario, options);
  }
}
