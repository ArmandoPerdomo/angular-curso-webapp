import { Component, OnInit } from '@angular/core';
import { environment as env } from './../../../environments/environment';
import { Router } from '@angular/router';

export interface Persona{
  nombre: string;
  apellido: string;
  id: number;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  titulo: any;
  miPersona: Persona;

  apiUrl = env.api_url;

  marcarComoReadOnly = true;

  constructor(
    private router: Router
  ){

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
  }

  accion(){
    console.log('accion');
  }

  ngOnInit(): void {
  }

  redireccionarAlDetalle(){
    this.router.navigate(['/listado/123/armando'], {queryParams: {query1: 'query1'}});
  }

}
