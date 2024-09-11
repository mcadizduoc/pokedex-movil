import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonForm = {
    pokemonName: ""
  }

  constructor(private nav: NavController) {}

  buscarPokemon() {
    this.nav.navigateForward("/pokemon-info", { 
      state: {
        pokemonName: this.pokemonForm.pokemonName
      }
    })
  }
}
