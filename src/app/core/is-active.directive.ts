import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsActive]'
})
export class IsActiveDirective implements OnInit {

  @Input('esActivo') esActivo: boolean;

  constructor(
    private rendenrer: Renderer2,
    private el: ElementRef
  ) { 
  }

  ngOnInit(){
    console.log(this.esActivo);
    if(this.esActivo){
      this.rendenrer.addClass(this.el.nativeElement, 'border')
      this.rendenrer.addClass(this.el.nativeElement, 'border-primary')
      this.rendenrer.addClass(this.el.nativeElement, 'text-primary')
    }else{
      this.rendenrer.addClass(this.el.nativeElement, 'border')
      this.rendenrer.addClass(this.el.nativeElement, 'border-secondary')
      this.rendenrer.addClass(this.el.nativeElement, 'text-secondary')
    }
  }

}
