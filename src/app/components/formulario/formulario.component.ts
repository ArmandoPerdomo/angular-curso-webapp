import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy {

  constructor() { }
  

  ngOnInit(): void {
    console.log('Se instanció el elemento');
  }

  ngOnDestroy(): void {
    console.log('se destruyó el elemento');
  }
}
