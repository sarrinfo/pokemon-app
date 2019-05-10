import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/listPokemonComponent.html'
})

export class ListPokemonComponent implements OnInit {
    // 1. La propriété pokemons est un tableau d'objet de type Pokemon.

    pokemons: Pokemon[] = null;

    constructor(
        private router: Router,
        private pokemonsService: PokemonsService) {

    }

    // 2. Initialisation de la propriété pokemons.
    ngOnInit() {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon): void {

        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}