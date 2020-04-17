import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from "primeng/paginator";
import { DialogModule } from "primeng/dialog";

import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetaisComponent } from "./pokemon-detais/pokemon-detais.component";
import { TypesComponent } from "./types/types.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetaisComponent,
    TypesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
