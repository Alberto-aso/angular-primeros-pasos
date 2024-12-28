import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

  public name: string = 'iroman'; // Generamos la variable de strinf de name
  public age: number = 45; // Generamos la variable de number edad

  get capitalazedName(): string {
    return this.name.toUpperCase(); //  Retornamos el nombre con Uppercase
  }

  getHeroDEscription(): string { // Retornamos la desctipcion converytida a oipercase y con la edad
    return `${this.name.toUpperCase()} - ${this.age}`; // Returnamos resultado
  }

  changeHero() : void { // Cambio de nombre
    this.name = 'Cambio de nombre'; // Generamos el string
  }

  changeAge() : void { // Cambio de edad
    this.age = 5; // DEclaramos el valor dle numero
  }

}
