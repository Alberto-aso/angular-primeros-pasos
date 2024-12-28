import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'; // Import the counter component
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component'; 

import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    DbzModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
