import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  pokemons: any;
  pokemonDetai: any;

  displayModal: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.http.get(params.url).subscribe((res) => {
        this.pokemons = res["pokemon"];
      });
    });
  }

  getDetalharPokemon(url: string) {
    this.http.get(url).subscribe((rest) => {
      this.pokemonDetai = rest;
      this.displayModal = true;
    });
  }
}
