"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 * {{ pokemon.type | pokemonTypeColor }}
 */
var PokemonTypeColorPipe = /** @class */ (function () {
    function PokemonTypeColorPipe() {
    }
    PokemonTypeColorPipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case "Feu":
                color = "red";
                break;
            case 'Eau':
                color = 'blue';
                break;
            case 'Plante':
                color = 'green';
                break;
            case 'Insecte':
                color = 'brown';
                break;
            case 'Normal':
                color = 'grey';
                break;
            case 'Vol':
                color = 'blue';
                break;
            case 'Poison':
                color = 'deep-purple';
                break;
            case 'Fée':
                color = 'pink';
                break;
            case 'Psy':
                color = 'deep-purple';
                break;
            case 'Electrik':
                color = 'lime';
                break;
            case 'Combat':
                color = 'deep-orange';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    };
    PokemonTypeColorPipe = __decorate([
        core_1.Pipe({
            name: 'pokemonTypeColor'
        })
    ], PokemonTypeColorPipe);
    return PokemonTypeColorPipe;
}());
exports.PokemonTypeColorPipe = PokemonTypeColorPipe;
//# sourceMappingURL=pokemon-type-color.pipe.js.map