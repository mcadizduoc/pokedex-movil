import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { IonicModule } from '@ionic/angular';

import { PokemonInfoPageRoutingModule } from './pokemon-info-routing.module';

import { PokemonInfoPage } from './pokemon-info.page';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonInfoPageRoutingModule,
    MatCardModule
  ],
  declarations: [PokemonInfoPage, PokemonCardComponent]
})
export class PokemonInfoPageModule {}
