import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseUrl } from "@/env/env";
import { catchError, of, type Observable } from "rxjs";
import type {
  Character,
  CharacterApiResponse,
} from "@/shared/models/character.model";
import type { CharacterFilters } from "@/shared/models/character-filters.model";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  http = inject(HttpClient);

  GetAllCharacters(
    page: number,
    filters: CharacterFilters
  ): Observable<CharacterApiResponse> {
    let url = `${baseUrl}/character/?page=${page}`;

    if (filters.search) url += `&name=${filters.search}`;
    if (filters.status) url += `&status=${filters.status}`;
    if (filters.gender) url += `&gender=${filters.gender}`;
    if (filters.species) url += `&species=${filters.species}`;

    return this.http.get<CharacterApiResponse>(url).pipe(
      catchError(error => {
        if (error.status === 404) {
          return of({
            info: { pages: 0, count: 0, next: null, prev: null },
            results: [],
          });
        }
        throw error;
      })
    );
  }

  GetCharacterById(id: number): Observable<Character> {
    const url = `${baseUrl}/character/${id}`;
    return this.http.get<Character>(url);
  }
}
