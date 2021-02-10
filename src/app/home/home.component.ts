import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../_service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(res => {
      this.pokemons = res.results;
    });
  }



}
