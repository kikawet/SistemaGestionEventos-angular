import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CreacionEventoComponent } from './componentes/creacion-evento/creacion-evento.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crearEvento', component: CreacionEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
