import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseUrl } from "@/env/env";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  http = inject(HttpClient);

  GetAllCharacters() {
    return this.http.get(`${baseUrl}character`);
  }
}
