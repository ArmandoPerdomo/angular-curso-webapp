import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {

  nombre: string;
  apellido: string;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnDestroy(): void {
    console.log('Se destruyó');
  }

  ngOnInit(): void {
    console.log('Se instanción Detalle');
    const snapshot = this.route.snapshot;
    console.log('Snapshot', snapshot);
    const params = Object.keys(snapshot.params).length ? snapshot.params : snapshot.queryParams;
    console.log('Desde el snapshot', params);
    
    this.nombre = params['nombre'];
    this.apellido = params['apellido'];
    this.id = params['id'];

    this.route.queryParams.subscribe(
      (queryParams) => {
        console.log('Desde el subcriber',queryParams);
        this.nombre = queryParams['nombre'];
        this.apellido = queryParams['apellido'];
        this.id = queryParams['id'];
      }
    )
  }

  reasignarRutaParametros(){
    this.router.navigate([], {
      queryParams: {
        id: Math.random(),
        nombre: 'Ramdom',
        apellido: 'RamdomP'
      }
    });
  }

}
