import { ChildModule } from './modules/child/child.module';
//import { CustomMatPaginatorIntl } from './components/chuck-norris-jokes/paginator-es';
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
import { CommonModule, registerLocaleData } from '@angular/common';
import { IsActiveDirective } from './core/is-active.directive';
import { ListadoItemComponent } from './components/listado-item/listado-item.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes/chuck-norris-jokes.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormatDatePipe } from './core/pipes/format-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatePipe } from './core/pipes/paginate.pipe';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './components/chuck-norris-jokes/paginator-es';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [ // Componentes, Directivas, Pipes
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    DetalleComponent,
    IsActiveDirective,
    ListadoItemComponent,
    ToolbarComponent,
    ChuckNorrisJokesComponent,
    FormatDatePipe,
    PaginatePipe, 
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
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    FormatDatePipe,
    { 
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
