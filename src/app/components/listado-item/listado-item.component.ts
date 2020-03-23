import { Persona } from './../../core/interfaces/persona';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-item',
  templateUrl: './listado-item.component.html',
  styleUrls: ['./listado-item.component.scss']
})
export class ListadoItemComponent implements OnInit {

  @Input('persona') miPersona: Persona;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Nueva instancia de listado-item')
  }

  verDetallePathParam(persona: Persona){
    this.router.navigate([`/listado/${persona.id}/${persona.nombre}/${persona.apellido}`]);
  }

  verDetalleQueryParam(persona: Persona){
    this.router.navigate(['/listado/detalle'], {
      queryParams: {
        nombre: persona.nombre,
        apellido: persona.apellido,
        id: persona.id
      }
    });
  }

}
