import { Component, OnInit } from '@angular/core';
import { environment as env } from './../../../environments/environment';
import { Router } from '@angular/router';
import {Persona} from '../../core/interfaces/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  titulo: any;
  personas: Persona[] = [
    {
      id: 1,
      nombre: 'Armando',
      apellido: 'Perdomo',
      activo: true
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Gallardo',
      activo: true
    },
    {
      id:3,
      nombre: 'Carmen',
      apellido: 'San Miguel',
      activo: false
    }
  ];

  apiUrl = env.api_url;

  marcarComoReadOnly = true;

  miArreglo = Array.from({length: 3}, (_, indx) => indx + 1); // [1,2,3]

  constructor(
    private router: Router
  ){

    console.log(this.titulo);
    this.titulo = 'dog';
    console.log(this.titulo);
  }

  accion(){
    console.log('accion');
  }

  ngOnInit(): void {
  }

  redireccionarAlDetalle(){
    this.router.navigate(['/form']);
  }

}
