import { Component, EventEmitter, Input, Output } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [{ id: uuid(),  name: "trunks", power: 10 }]; // Generamos la lista conun valoir por defecto

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter(); // Generamos el evento

  DeleteCharacher(index: string) {
    //TODO Emitir el Id del personaje
    if(index == "") return;

    this.onDeleteCharacter.emit(index); // Mandamos el evento al padre
  }

}
