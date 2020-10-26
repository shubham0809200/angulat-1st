import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { HomeComponent } from './home/home.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { CakeComponent } from './cake/cake.component';
import { PastaComponent } from './pasta/pasta.component';
import { StewComponent } from './stew/stew.component';
import { FriesComponent } from './fries/fries.component';
import { BurgerComponent } from './burger/burger.component';
import { VeggyComponent } from './veggy/veggy.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    HomeComponent,
    NoodlesComponent,
    CakeComponent,
    PastaComponent,
    StewComponent,
    FriesComponent,
    BurgerComponent,
    VeggyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
