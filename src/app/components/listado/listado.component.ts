import { PersonaService } from './../../core/services/persona.service';
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
  personas: Persona[];

  apiUrl = env.api_url;

  marcarComoReadOnly = true;

  miArreglo = Array.from({length: 3}, (_, indx) => indx + 1); // [1,2,3]

  constructor(
    private router: Router,
    private personaService: PersonaService
  ){

    console.log(this.titulo);
    this.titulo = 'dog';
    console.log(this.titulo);
  }

  accion(){
    console.log('accion');
  }

  ngOnInit(): void {
    this.personaService.getAll().subscribe(
      (data) => {
        this.personas = data;
      }, (error) => {
        console.error(error);
      }
    )
  }

  redireccionarAlDetalle(){
    this.router.navigate(['/form']);
  }

}
