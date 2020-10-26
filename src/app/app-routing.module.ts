import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CakeComponent } from './cake/cake.component';
import { FriesComponent } from './fries/fries.component';
import { HomeComponent } from './home/home.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { PastaComponent } from './pasta/pasta.component';
import {  PizzaComponent } from './pizza/pizza.component';
import { StewComponent } from './stew/stew.component';
import { VeggyComponent } from './veggy/veggy.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pizza', component: PizzaComponent},
  {path:'burger', component: BurgerComponent},
  {path:'cake', component: CakeComponent},
  {path:'fries', component: FriesComponent},
  {path:'noodles',component: NoodlesComponent},
  {path:'pasta', component: PastaComponent},
  {path:'stew', component: StewComponent},
  {path:'veggy', component: VeggyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
