"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app.routing.module");
var http_1 = require("@angular/common/http");
var pokemons_module_1 = require("./pokemons/pokemons.module");
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
var app_component_1 = require("./app.component");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var loging_routing_module_1 = require("./login/loging.routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
                forms_1.FormsModule,
                pokemons_module_1.PokemonsModule,
                loging_routing_module_1.LoginRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                //L'ordre de declaration est important commencé par les plus specifiques
                //puis apres les plus generale
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                PageNotFoundComponent_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map