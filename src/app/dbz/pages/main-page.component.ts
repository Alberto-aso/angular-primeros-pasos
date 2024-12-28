import { Component, OnInit } from '@angular/core';

//Intercaces
import { Character } from '../interfaces/character.interface'; // Importamos al interface

import { DbzService } from '../services/dbz.service'; // Import service

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.charachers]; // Obtenemor el arreglo inicial del la lista de Characters
  }

  onDeleteCharacterById(id: string): void { // MAndamos a llamar al servicio al metodo deletCharacter
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(characher: Character): void { // Mandamos a llamar al servicio para el metodo addCharacher
    this.dbzService.addCharacter(characher);
  }

}