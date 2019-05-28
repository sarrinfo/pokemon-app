import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/auth-guard.service';

import { ListPokemonComponent } from './listPokemonComponent';
import { DetailPokemonComponent } from './detailsPokemonComponent';
import { EditPokemonComponent } from './edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon.component';

// routes definition
const pokemonsRoutes: Routes = [
    {  path: 'pokemon/all', component: ListPokemonComponent },
    {
        path: 'pokemon',
        canActivate: [AuthGuard],
        children: [
            { path: 'add', component: AddPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: 'details/:id', component: DetailPokemonComponent },// a supprimer
            { path: ':id', component: DetailPokemonComponent }
        ]
    }
    
]

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }