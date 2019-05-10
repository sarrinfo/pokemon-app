import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemons-routing.module';
import { AuthGuard } from '../login/auth-guard.service';

import { ListPokemonComponent } from './listPokemonComponent';
import { DetailPokemonComponent } from './detailsPokemonComponent';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { LoaderComponent } from '../loader.component';

import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { AddPokemonComponent } from './add-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule

    ],
    declarations:
        [
            ListPokemonComponent,
            DetailPokemonComponent,
            EditPokemonComponent,
            AddPokemonComponent,
            PokemonSearchComponent,
            PokemonFormComponent,
            BorderCardDirective,
            PokemonTypeColorPipe,
            LoaderComponent
        ],
    providers: [
        PokemonsService,

    ]
})
export class PokemonsModule { }