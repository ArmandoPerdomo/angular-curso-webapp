import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    console.log('Se instanció el elemento');
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
  }

  ngOnDestroy(): void {
    console.log('se destruyó el elemento');
  }
}
