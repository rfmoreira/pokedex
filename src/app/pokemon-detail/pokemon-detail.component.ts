import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../_service/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;
  pokemonTypes: any[] = [];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.getPokemonByName(name);
  }

  getPokemonByName(name: string): void {
    this.pokemonService.getPokemonByID(name).subscribe(res => {
      this.pokemon = res;
      console.log(this.pokemon);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.pokemon.types.length; i++){
        this.pokemonTypes.push(this.pokemon.types[i].type.name);
      }
      console.log(this.pokemonTypes);
    });
  }
}
