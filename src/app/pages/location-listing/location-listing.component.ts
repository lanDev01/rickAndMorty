import { forkJoin } from "rxjs";
import { FormsModule } from "@angular/forms";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { LocationsService } from "@/core/services/locations/locations.service";
import { CharactersService } from "@/core/services/characters/characters.service";

import type { LocationApi } from "@/shared/models/location.model";
import type { Character } from "@/shared/models/character.model";

import { FooterComponent } from "@/shared/components/footer/footer.component";
import { CardsComponent } from "@/shared/components/cards/cards.component";

@Component({
  selector: "app-location-listing",
  imports: [FooterComponent, FormsModule, CardsComponent],
  templateUrl: "./location-listing.component.html",
  styleUrl: "./location-listing.component.scss",
})
export class LocationListingComponent {
  locations: LocationApi[] = [];
  characters: Character[] = [];

  page = 1;
  selectedLocationId = 1;
  countLocation: number[] = [];

  type = "";
  dimension = "";
  locationName = "";

  router = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(LocationsService);
  charactersService = inject(CharactersService);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const episodeParam = params.get("location");
      if (episodeParam) {
        this.selectedLocationId = Number(episodeParam);
      }
      this.getAllLocations(this.page);
    });
  }

  getAllLocations(page: number) {
    this.service.GetAllLocations(page).subscribe(response => {
      this.locations = response.results;

      this.countLocation = Array.from(
        { length: response.info.count },
        (_, i) => i + 1
      );

      if (this.selectedLocationId) {
        this.loadCharactersForLocation(this.selectedLocationId);
      }
    });
  }

  private loadCharacterDetails(characterUrls: string[]): void {
    const characterObservables = characterUrls.map(url =>
      this.charactersService.GetCharacterById(this.extractIdFromUrl(url))
    );

    forkJoin(characterObservables).subscribe(characters => {
      this.characters = characters;
    });
  }

  loadCharactersForLocation(locationId: number): void {
    const selectedLocation = this.findLocationInList(locationId);

    if (selectedLocation) {
      this.updateLocationInfo(selectedLocation);
      this.loadCharacterDetails(selectedLocation.residents);
    } else {
      this.fetchAndLoadLocation(locationId);
    }
  }

  onLocationSelect(event: Event): void {
    const numericId = Number((event.target as HTMLSelectElement).value);
    this.selectedLocationId = numericId;

    this.router.navigate([], {
      queryParams: { episode: numericId },
      queryParamsHandling: "merge",
    });

    this.loadCharactersForLocation(numericId);
  }

  private fetchAndLoadLocation(episodeId: number): void {
    this.service.GetLocationById(episodeId).subscribe(response => {
      if (response) {
        this.updateLocationInfo(response);
        this.loadCharacterDetails(response.residents);
      } else {
        console.error("Episódio não encontrado ou resposta da API inválida");
      }
    });
  }

  private findLocationInList(locationId: number): LocationApi | undefined {
    return this.locations.find(l => l.id === locationId);
  }

  private updateLocationInfo(episode: LocationApi): void {
    this.locationName = episode.name ?? "";
    this.dimension = episode.dimension ?? "";
    this.type = episode.type ?? "";
  }

  private extractIdFromUrl(url: string): number {
    const match = url.match(/\/(\d+)$/);
    return match ? Number(match[1]) : 0;
  }
}
