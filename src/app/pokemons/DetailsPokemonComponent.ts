import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: "detail-pokemon",
    templateUrl: "./app/pokemons/DetailPokemonComponent.html"
})

export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null; // pokémon à afficher dans le template

    constructor(private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService) { }
    // on injecte 'route' pour récupérer les paramètres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    ngOnInit(): void {
        // on initialise la liste de nos pokémons
        let id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);

    }

    // On crée une méthode qui s'occupe de la redirection
    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    delete(pokemon: Pokemon): void {
        alert("Etes vous sur de vouloir suprimer "+pokemon.name);
         this.pokemonsService.deletePokemon(pokemon)
         .subscribe(_ => this.goBack());
    }
    // Méthode permettant de rediriger l'utilisateur
    // vers la page principale de l'application.
    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

}