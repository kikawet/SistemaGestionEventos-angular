import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CreacionEventoComponent } from './componentes/creacion-evento/creacion-evento.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path: '', component: CreacionEventoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
