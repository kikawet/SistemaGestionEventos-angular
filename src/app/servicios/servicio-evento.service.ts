import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Authorization':'Basic '+ btoa("admin" + ":" + "secreto22")    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioEventoService {

  constructor(private http: HttpClient) { }

  getListaEventos(){
    this.http.get("http://localhost:12021/sge-api/rest/evento",httpOptions).subscribe(data=>{
      console.log(data);
      
    });;
  }
}
