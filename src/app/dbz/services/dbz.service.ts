import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'; // Generr Ids unicos

import { Character } from '../interfaces/character.interface'; // Interface

@Injectable({ providedIn: 'root' })
export class DbzService {

  public charachers: Character[] = [
    {
      id: uuid(),
      name: "Goku",
      power: 10000
    }, {
      id: uuid(),
      name: "Vegueta",
      power: 9000
    }, {
      id: uuid(),
      name: "Jiren",
      power: 20000
    }]; // Generamos la variable de character para mandarlas al hijo como lista

  constructor() { }

  addCharacter(characher: Character): void { //Generamos evento para recibir informacion del hijo
    //console.log(characher);
    //this.charachers.push --Agregar elemento al final
    //this.charachers.unshift --Agregar elemento al principio

    //const newCharacter: Character = {id: uuid(), ...character};
    const newCharacter : Character = {
      id : uuid(),
      name : characher.name,
      power : characher.power
    }

    this.charachers.push(newCharacter); // Agregamos el nuevo elemento
  }

  onDeleteCharacterById(id: string) { // Generamos el eliminar registro escuchando el dato enviado por el hijo
    //this.charachers.splice(index, 1);
    this.charachers = this.charachers.filter(character => character.id !== id);
  }

}