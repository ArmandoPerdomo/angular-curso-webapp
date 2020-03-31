import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [
    {
      id: 1,
      nombre: 'Armando',
      apellido: 'Perdomo',
      activo: true,
      rol: 'A'
    },
    {
      id: 2,
      nombre: 'Ana',
      apellido: 'Gallardo',
      activo: true,
      rol: 'B'
    },
    {
      id:3,
      nombre: 'Carmen',
      apellido: 'San Miguel',
      activo: false,
      rol: 'C'
    },
    {
      id:4,
      nombre: 'Federico',
      apellido: 'Pacheco',
      activo: true,
      rol: 'A'
    }
  ];

  //personaSource: BehaviorSubject<Persona[]> = new BehaviorSubject(this.personas); 
  personaSource: BehaviorSubject<Persona[]> = new BehaviorSubject([]);

  constructor() { }

  getAll(){
    return this.personaSource.asObservable();
  }

  save(persona: Persona){
    const values = this.personaSource.getValue();
    persona.id = values.length + 1;
    values.push(persona);
    this.personaSource.next(values);
  }

  deleteAll(){
    this.personaSource.next([]);
  }
}
