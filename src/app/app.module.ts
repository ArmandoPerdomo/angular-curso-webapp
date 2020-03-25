import { PersonaService } from './core/services/persona.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CommonModule } from '@angular/common';
import { IsActiveDirective } from './core/is-active.directive';
import { ListadoItemComponent } from './components/listado-item/listado-item.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes/chuck-norris-jokes.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ // Componentes, Directivas, Pipes
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    DetalleComponent,
    IsActiveDirective,
    ListadoItemComponent,
    ToolbarComponent,
    ChuckNorrisJokesComponent
  ],
  imports: [ // Módulos
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
