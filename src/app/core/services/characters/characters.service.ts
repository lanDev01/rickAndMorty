import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseUrl } from "@/env/env";
import type { Observable } from "rxjs";
import type { CharacterApiResponse } from "@/shared/models/character.model";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  http = inject(HttpClient);

  GetAllCharacters(
    page: string,
    search: string
  ): Observable<CharacterApiResponse> {
    let url = `${baseUrl}/character/?page=${page}`;

    if (search) {
      url += `&name=${search}`;
    }

    return this.http.get<CharacterApiResponse>(url);
  }
}
