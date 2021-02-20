import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pokemonName: string;

  addItem(newItem: string): void {
    this.pokemonName = newItem;
    console.log(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
