import { Component } from "@angular/core"; // Implementamos la nomenculatura de Componente

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{Counter}}</h3>
    <button (click)="oneFunction(+1);">+1</button>
    <button (click)="reset();">Reset</button>
    <button (click)="oneFunction(-1);">-1</button>
  `
})

export class CounterComponent {

  public title: string = 'Mi Primera app de Angular';
  public Counter: number = 10;

  constructor() { }

  increaseBy(): void { // Declara fgunction tu increase element
    this.Counter = this.Counter += 1;
  }

  decreaseBy(): void { // Declara function to decrease Angular
    this.Counter = this.Counter -= 1;
  }

  oneFunction(value: number): void {
    this.Counter = this.Counter += value; // DEclaare the operation
  }
  reset(): void {
    this.Counter = 10;
  }

}