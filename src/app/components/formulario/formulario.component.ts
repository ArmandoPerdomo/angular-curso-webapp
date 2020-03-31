import { PersonaService } from './../../core/services/persona.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy {

  form: FormGroup; //undefined

  constructor(
    private fb: FormBuilder,
    public personaService: PersonaService
  ) { }
  

  ngOnInit(): void {
    /*this.form = new FormGroup({
      nombre: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      apellido: new FormControl('', [Validators.required, Validators.minLength(5)])
      //n campos y a todos los puedo declarar con validadores
      //Para concatenar validators Validators.compose([Validators.required, Validators.minLength(2)])
      // O puedo concatenar [Validators.required, Validators.minLength(2)]
    });*/

    this.form = this.fb.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      apellido: ['', [Validators.required, Validators.minLength(5)]]
    });

    //nuevo control
    // this.form.addControl(this.fb.control('nuevocampo', ['', Validators.required]))
  }

  ngOnDestroy(): void {
    console.log('se destruyó el elemento');
  }

  save(){
    /*if(this.form.invalid){
      alert('Mira tienes campos inválidos');
      return;
    }*/

    const values = this.form.value; // {nombre: "armando", apellido: "perdomo"}
    console.log(values);
  }

  printEstadoForm(){
    const campoNombre = this.form.controls['nombre']; // Retornar el abstractControl de nombre (FormControl)
    console.log('Estado Campo Nombre:', campoNombre.valid);
    // campoNombre.patchValue('otro valor') actualiza el valor del campo
    // campoNombre.disable() Deshabilitar el campo
    console.log('Campo nombre required?', campoNombre.hasError('required'));
    console.log('Campo nombre minLength?', campoNombre.hasError('minlength'));

    const campoApellido = this.form.get('apellido'); // Retornar el abstractControl de nombre (FormControl)
    console.log('Estado Campo Apellido:', campoApellido.valid);
    console.log('Campo Apellido required?', campoApellido.hasError('required'));
    console.log('Campo Apellido minLength?', campoApellido.hasError('minlength'));
  }
}
