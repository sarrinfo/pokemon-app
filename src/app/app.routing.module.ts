import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './PageNotFoundComponent';

// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } //'**' permet d'intercepter toutes les routes au sein de l'app
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true }),  //permet de debugger sont app sur les routes
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }