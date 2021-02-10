import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'pokemon/:name', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
