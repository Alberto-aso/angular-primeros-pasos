import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Poder usar las directivas
import { FormsModule} from '@angular/forms'; // Importamos modulo para el manejo de formularios con Two Data Binding

//Components
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component'; // Importamos el componente princiap

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCaracterComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule, // Poder usar las directivas
    FormsModule, //Importamos componente para los formularios
  ]
})
export class DbzModule { }
