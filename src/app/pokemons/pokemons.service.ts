import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {
    private pokemonsUrl = 'http://localhost:57071/api/pokemons'; // le point d’accés à notre API

    constructor(private http: HttpClient) { }


    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
    
        return this.http.get<Pokemon[]>(this.pokemonsUrl ).pipe(
            tap(_ => this.log(`fetched pokemons`)),
            catchError(this.handleError('getPokemons', []))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`; // syntaxe ES6

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id=${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    // La méthode updatePokemon persiste les modifications du pokémon via l’API
    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<Pokemon>('deletePokemon'))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
            catchError(this.handleError<Pokemon>('addPokemon'))
        );
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
         if (!term.trim()) {
         // Si le terme de recherche n'existe pas,
         // on renvoie un tableau vide sous la forme d’un Observable avec ‘of’.
         return of([]);
         }
        
         return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
         tap(_ => this.log(`found pokemons matching "${term}"`)),
         catchError(this.handleError<Pokemon[]>('searchPokemons', []))
         );
         }

    //Methode pour gerer les logs
    private log(log: string) {
        console.info(log);
    }
    //Methode pour gerer les erreurs
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);


            //Cet opérateur permet de convertir n’importe quel argument passé en paramètre en
            //un Observable (un tableau, une chaîne de caractères, etc.).
            return of(result as T);
        }
    }
}