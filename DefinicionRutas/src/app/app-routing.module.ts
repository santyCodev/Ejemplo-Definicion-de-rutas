import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoDadosComponent } from './components/juego-dados/juego-dados.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

const routes: Routes = [
                        { path:'juegodados', component:JuegoDadosComponent },
                        { path:'acercade', component:AcercaDeComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
