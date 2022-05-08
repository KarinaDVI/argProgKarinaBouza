import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { About } from 'src/app/models/About';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: About = new About()
  @Output() editPersona:EventEmitter<About> = new EventEmitter()
  @Output() deletePersona:EventEmitter<About> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  borrarPersona(personaParaBorrar:About) {
    this.deletePersona.emit(personaParaBorrar)
  }
  editarPersona(personaParaEditar:About) {
    this.editPersona.emit(personaParaEditar)
  }

}
