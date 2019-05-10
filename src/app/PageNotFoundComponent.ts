import { Component } from '@angular/core';

@Component({
    selector: 'page-404',
    template:
        `
    <div class='container'>
    <img  class="card" src=
    "http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    <h1>Hey, cette page n'existe pas !</h1>
    <a routerLink="/pokemon/all" class="">
    Retourner à l' accueil
    </a>
    </div>
 `
})
export class PageNotFoundComponent { }