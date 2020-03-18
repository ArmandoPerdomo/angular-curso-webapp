import { Component } from '@angular/core';
import {environment as env} from '../environments/environment';

export interface Persona{
  nombre: string;
  apellido: string;
  id: number;
}

@Component({
  selector: 'app-root',
  /*template: `
    <div>hola mundo</div>
  `,
  styles: [`
    div{
      color: red;
      font-size: 24px;
    }
  `]*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: any;
  miPersona: Persona;

  apiUrl = env.api_url;

  myModel = '';

  constructor(){
    console.log(this.titulo);
    this.titulo = 'dog';
    console.log(this.titulo);

    this.miPersona = {
      id: 1,
      nombre: 'Armando',
      apellido: 'Perdomo'
    }

    setTimeout(() => {
      this.miPersona.id = 2;
      this.miPersona.nombre = 'Ruth';
      this.miPersona.apellido = 'Bustamante';
    }, 2000);

    setTimeout(() => {
      this.miPersona.id = 3;
      this.miPersona.nombre = 'Carmen';
      this.miPersona.apellido = 'San Miguel';
    }, 4000);

    setTimeout(() => {
      this.miPersona.id = 4;
      this.miPersona.nombre = 'Federico';
      this.miPersona.apellido = 'Pacheco';
    }, 6000);

    setTimeout(() => {
      this.miPersona.id = 5;
      this.miPersona.nombre = 'Javier';
      this.miPersona.apellido = 'Maza';
    }, 8000);

    setTimeout(
      () => {
        this.apiUrl = 'Valor Cambiado'
      }, 4000
    )
  }

  accion(){
    console.log('accion');
  }
}
