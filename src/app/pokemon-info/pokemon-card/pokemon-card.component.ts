import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from './pokemon-card.interfaces';
import { POKEMON_DICTIONARY } from './pokemon-card.constants';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  @Input()
  pokemonName!: string;

  pokemonInfo: PokemonInfo | null = null;

  constructor() {
    
  }

  ngOnInit(): void {
    this.pokemonInfo = POKEMON_DICTIONARY[this.pokemonName.toLowerCase()] ?? null
    console.log(this.pokemonName);
  }
}
