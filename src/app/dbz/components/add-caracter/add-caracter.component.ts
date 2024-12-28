import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-caracter',
  templateUrl: './add-caracter.component.html',
  styles: ``
})
export class AddCaracterComponent {

  @Output() // Indicamo que se va a mandar informacion al padre
  public onNewCharacher: EventEmitter<Character> = new EventEmitter(); // Genermaos evento que mandara datosd al padre

  public character: Character = {
    id: "",
    name: "",
    power: 0
  };

  emitCharacter() {
    //debugger; // Depurar el codigo

    if (this.character.name === "") return; // Evlauamos si tiene Nombre

    this.onNewCharacher.emit(this.character); // Mandamos en el emitter la data del character

    this.character = { id: "", name: "", power: 0 }; // Reseteamos los valores

  }



}
