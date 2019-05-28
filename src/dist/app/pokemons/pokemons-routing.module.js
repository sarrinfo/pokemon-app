"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("../login/auth-guard.service");
var listPokemonComponent_1 = require("./listPokemonComponent");
var detailsPokemonComponent_1 = require("./detailsPokemonComponent");
var edit_pokemon_component_1 = require("./edit-pokemon.component");
var add_pokemon_component_1 = require("./add-pokemon.component");
// routes definition
var pokemonsRoutes = [
    { path: 'pokemon/all', component: listPokemonComponent_1.ListPokemonComponent },
    {
        path: 'pokemon',
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: 'add', component: add_pokemon_component_1.AddPokemonComponent },
            { path: 'edit/:id', component: edit_pokemon_component_1.EditPokemonComponent },
            { path: 'details/:id', component: detailsPokemonComponent_1.DetailPokemonComponent },
            { path: ':id', component: detailsPokemonComponent_1.DetailPokemonComponent }
        ]
    }
];
var PokemonRoutingModule = /** @class */ (function () {
    function PokemonRoutingModule() {
    }
    PokemonRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(pokemonsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PokemonRoutingModule);
    return PokemonRoutingModule;
}());
exports.PokemonRoutingModule = PokemonRoutingModule;
//# sourceMappingURL=pokemons-routing.module.js.map