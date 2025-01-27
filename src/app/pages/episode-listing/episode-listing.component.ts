import { forkJoin } from "rxjs";
import { FormsModule } from "@angular/forms";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import type { Episode } from "@/shared/models/episode.model";
import type { Character } from "@/shared/models/character.model";

import { CardsComponent } from "@/shared/components/cards/cards.component";
import { EpisodesService } from "@/core/services/episodes/episodes.service";
import { FooterComponent } from "@/shared/components/footer/footer.component";
import { CharactersService } from "@/core/services/characters/characters.service";

@Component({
  selector: "app-episode-listing",
  imports: [FooterComponent, CardsComponent, FormsModule],
  templateUrl: "./episode-listing.component.html",
  styleUrl: "./episode-listing.component.scss",
})
export class EpisodeListingComponent {
  episodes: Episode[] = [];
  characters: Character[] = [];
  countEpisode: number[] = [];

  page = 1;
  selectedEpisodeId = 1;

  air_date = "";
  episodeName = "";
  episodeNumber = "";

  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(EpisodesService);
  charactersService = inject(CharactersService);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const episodeParam = params.get("episode");
      if (episodeParam) {
        this.selectedEpisodeId = Number(episodeParam);
      }
      this.getAllEpisodes(this.page);
    });
  }

  getAllEpisodes(page: number): void {
    this.service.GetAllEpisodes(page).subscribe(response => {
      this.episodes = response.results;
      this.countEpisode = Array.from(
        { length: response.info.count },
        (_, i) => i + 1
      );

      if (this.selectedEpisodeId) {
        this.loadCharactersForEpisode(this.selectedEpisodeId);
      }
    });
  }

  loadCharactersForEpisode(episodeId: number): void {
    const selectedEpisode = this.findEpisodeInList(episodeId);

    if (selectedEpisode) {
      this.updateEpisodeInfo(selectedEpisode);
      this.loadCharacterDetails(selectedEpisode.characters);
    } else {
      this.fetchAndLoadEpisode(episodeId);
    }
  }

  private findEpisodeInList(episodeId: number): Episode | undefined {
    return this.episodes.find(ep => ep.id === episodeId);
  }

  private updateEpisodeInfo(episode: Episode): void {
    this.episodeName = episode.name ?? "";
    this.air_date = episode.air_date ?? "";
    this.episodeNumber = episode.episode ?? "";
  }

  private loadCharacterDetails(characterUrls: string[]): void {
    const characterObservables = characterUrls.map(url =>
      this.charactersService.GetCharacterById(this.extractIdFromUrl(url))
    );

    forkJoin(characterObservables).subscribe(characters => {
      this.characters = characters;
    });
  }

  private fetchAndLoadEpisode(episodeId: number): void {
    this.service.GetEpisodeById(episodeId).subscribe(response => {
      if (response) {
        this.updateEpisodeInfo(response);
        this.loadCharacterDetails(response.characters);
      } else {
        console.error("Episódio não encontrado ou resposta da API inválida");
      }
    });
  }

  onEpisodeSelect(event: Event): void {
    const numericId = Number((event.target as HTMLSelectElement).value);
    this.selectedEpisodeId = numericId;

    this.router.navigate([], {
      queryParams: { episode: numericId },
      queryParamsHandling: "merge",
    });

    this.loadCharactersForEpisode(numericId);
  }

  private extractIdFromUrl(url: string): number {
    const match = url.match(/\/(\d+)$/);
    return match ? Number(match[1]) : 0;
  }
}
