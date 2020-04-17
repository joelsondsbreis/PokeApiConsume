import { environment } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.scss"],
})
export class TypesComponent implements OnInit {
  typesUrl = `${environment.baseUrl}/type`;
  types: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>(this.typesUrl).subscribe((dados) => {
      this.types = dados["results"];
    });
  }

  getPokemons(url: string) {
    console.log(url);
    this.router.navigate(["/pokemon"], { queryParams: { url } });
  }
}
