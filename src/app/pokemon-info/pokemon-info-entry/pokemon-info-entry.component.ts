import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from '../pokemon-card/pokemon-card.interfaces';
import { POKEMON_DICTIONARY } from '../pokemon-card/pokemon-card.constants';

@Component({
  selector: 'app-pokemon-info-entry',
  templateUrl: './pokemon-info-entry.component.html',
  styleUrls: ['./pokemon-info-entry.component.scss'],
})
export class PokemonInfoEntryComponent  implements OnInit {

  @Input()
  pokemonName!: string;

  pokemonInfo: PokemonInfo | null = null;

  constructor() { }

  ngOnInit() {
    this.pokemonInfo = POKEMON_DICTIONARY[this.pokemonName.toLowerCase()] ?? null;
  }

}