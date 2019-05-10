import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
//import { POKEMONS } from './pokemons/mock-pokemons';


@Component({
    selector: 'pokemon-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit {
    // 1. La propriété pokemons est un tableau d'objet de type Pokemon.
    pokemons: Pokemon[] = null;
    title: string;

    // 2. Initialisation de la propriété pokemons.
    ngOnInit() {
        //this.pokemons = POKEMONS;
        this.title = "Pokemons";
    }

    selectPokemon(pokemon: Pokemon) {
        alert('Vous avez selectionné ' + pokemon.name);
    }
}