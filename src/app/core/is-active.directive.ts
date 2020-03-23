import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsActive]'
})
export class IsActiveDirective implements OnInit {

  @Input('esActivo') esActivo: boolean;

  constructor() { 
  }

  ngOnInit(){
    console.log(this.esActivo);
  }

}
