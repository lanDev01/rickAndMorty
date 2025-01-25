import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import type {
  Character,
  CharacterApiResponse,
} from "@/shared/models/character.model";

import { CharactersService } from "@/core/services/characters/characters.service";
import { CardsComponent } from "@/shared/components/cards/cards.component";
import { PaginationComponent } from "@/shared/components/pagination/pagination.component";
import { FooterComponent } from "@/shared/components/footer/footer.component";

@Component({
  selector: "app-character-listing",
  imports: [CardsComponent, PaginationComponent, FooterComponent],
  templateUrl: "./character-listing.component.html",
  styleUrl: "./character-listing.component.scss",
})
export class CharacterListingComponent {
  service = inject(CharactersService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  characters: Character[] = [];
  page = "1";
  totalPages = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.page = params.get("page") ?? "1";

      this.getAllCharacters(this.page);
    });
  }

  getAllCharacters(page: string) {
    this.service
      .GetAllCharacters(page)
      .subscribe((data: CharacterApiResponse) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
      });
  }
}
