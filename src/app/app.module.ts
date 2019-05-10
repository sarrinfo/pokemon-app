import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsModule } from './pokemons/pokemons.module';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/loging.routing.module';


@NgModule({
   imports:
      [
         BrowserModule,
         HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
         FormsModule,
         PokemonsModule,
         LoginRoutingModule,
         AppRoutingModule
      ],

   declarations:
      [
         //L'ordre de declaration est important commencé par les plus specifiques
         //puis apres les plus generale
         AppComponent,
         LoginComponent,
         PageNotFoundComponent
      ],

   bootstrap: [AppComponent]
})
export class AppModule { }