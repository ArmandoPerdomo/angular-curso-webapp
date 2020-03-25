import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes/chuck-norris-jokes.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'listado/detalle',
    component: DetalleComponent
  },
  {
    path: 'listado/:id/:nombre/:apellido',
    component: DetalleComponent
  },
  {
    path: 'form',
    component: FormularioComponent
  },
  {
    path: 'chuck-norris-jokes-api',
    component: ChuckNorrisJokesComponent
  },
  {
    path: '**',
    redirectTo: '/listado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
