import { Component, inject } from "@angular/core";
import { ActivatedRoute, type ParamMap, Router } from "@angular/router";
import type {
  Character,
  CharacterApiResponse,
} from "@/shared/models/character.model";

import { CharactersService } from "@/core/services/characters/characters.service";
import { CardsComponent } from "@/shared/components/cards/cards.component";
import { PaginationComponent } from "@/shared/components/pagination/pagination.component";
import { FooterComponent } from "@/shared/components/footer/footer.component";
import { FormsModule } from "@angular/forms";
import type { CharacterFilters } from "@/shared/models/character-filters.model";

@Component({
  selector: "app-character-listing",
  imports: [CardsComponent, PaginationComponent, FooterComponent, FormsModule],
  templateUrl: "./character-listing.component.html",
  styleUrl: "./character-listing.component.scss",
})
export class CharacterListingComponent {
  service = inject(CharactersService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  characters: Character[] = [];
  search = "";
  status: CharacterFilters["status"] = "";
  gender: CharacterFilters["gender"] = "";
  selectedSpecies = "";

  species = [
    "Human",
    "Alien",
    "Humanoid",
    "unknown",
    "Poopybutthole",
    "Mythological Creature",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
  ];

  page = 1;
  totalPages = 0;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const { search, status, gender, species, page } =
        this.extractQueryParams(params);

      this.search = search;
      this.status = status;
      this.gender = gender;
      this.selectedSpecies = species;
      this.page = Number(page);

      console.log(this.gender, this.selectedSpecies, this.status);
      this.getAllCharacters(this.page);
    });
  }

  getAllCharacters(page: number) {
    this.service
      .GetAllCharacters(page, {
        search: this.search,
        status: this.status,
        gender: this.gender,
        species: this.selectedSpecies,
      })
      .subscribe((data: CharacterApiResponse) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
      });
  }

  applyFilters() {
    this.router.navigate(["/characters"], {
      queryParams: {
        search: this.search,
        status: this.status,
        gender: this.gender,
        species: this.selectedSpecies,
        page: this.page,
      },
    });
  }

  private extractQueryParams(
    params: ParamMap
  ): CharacterFilters & { page: string } {
    return {
      search: params.get("search") ?? "",
      status: (params.get("status") as CharacterFilters["status"]) ?? "",
      gender: (params.get("gender") as CharacterFilters["gender"]) ?? "",
      species: params.get("species") ?? "",
      page: params.get("page") ?? "1",
    };
  }
}
