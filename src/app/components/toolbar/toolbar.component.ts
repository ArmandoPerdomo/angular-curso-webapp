import { PersonaService } from './../../core/services/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaService.getAll().subscribe(console.log);
  }

}
