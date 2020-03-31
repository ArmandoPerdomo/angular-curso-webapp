import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private router: Router){
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationStart){
          console.log('Comenzó a navegar');
        }
        if(event instanceof NavigationEnd){
          
        }
      }
    )
  }
}
