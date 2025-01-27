import { baseUrl } from "@/env/env";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import type { Observable } from "rxjs";
import type {
  Episode,
  EpisodeApiResponse,
} from "@/shared/models/episode.model";

@Injectable({
  providedIn: "root",
})
export class EpisodesService {
  http = inject(HttpClient);

  GetAllEpisodes(page: number): Observable<EpisodeApiResponse> {
    const url = `${baseUrl}/episode/?page=${page}`;

    return this.http.get<EpisodeApiResponse>(url);
  }

  GetEpisodeById(episodeId: number): Observable<Episode> {
    const url = `${baseUrl}/episode/${episodeId}`;

    return this.http.get<Episode>(url);
  }
}
