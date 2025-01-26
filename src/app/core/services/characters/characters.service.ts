import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseUrl } from "@/env/env";
import type { Observable } from "rxjs";
import type { CharacterApiResponse } from "@/shared/models/character.model";
import type { CharacterFilters } from "@/shared/models/character-filters.model";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  http = inject(HttpClient);

  GetAllCharacters(
    page: string,
    filters: CharacterFilters
  ): Observable<CharacterApiResponse> {
    let url = `${baseUrl}/character/?page=${page}`;

    if (filters.search) url += `&name=${filters.search}`;
    if (filters.status) url += `&status=${filters.status}`;
    if (filters.gender) url += `&gender=${filters.gender}`;
    if (filters.species) url += `&species=${filters.species}`;

    return this.http.get<CharacterApiResponse>(url);
  }
}
