import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../_service/pokemon.service';
import {PageEvent} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  pokemons = [];
  pageSlice = [];
  searchField: FormControl;
  numberPage: number;
  pageSize: number;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(res => {
      this.pokemons = res.results;
      this.searchField = new FormControl();
      this.pokemons.forEach((item, index) => {
        item.id = index + 1;
        item.name.startsWith();
      });
      this.pageSlice = this.pokemons.slice(0, 50);
      this.numberPage = this.pokemons.length;
      this.pageSize = 50;
      this.onSearch(this.searchField);
    });
  }

  onPageChange(event: PageEvent): void {
    console.log(event);
    this.pageSize = event.pageSize;
    const startIndex = event.previousPageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pokemons.length) {
      endIndex = this.pokemons.length;
    }
    console.log(startIndex, endIndex);
    this.pageSlice = this.pokemons.slice(startIndex, endIndex);
  }

  onSearch(search: FormControl): void {
    search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {
        this.pageSlice = [];
        this.pokemons.forEach((item, index) => {
          if (item.name.startsWith(term)) {
            this.pageSlice.push(item);
          }
        });
        this.numberPage = this.pageSlice.length;
      });
  }

}
