import { CharactersService } from "@/core/services/characters/characters.service";
import { CardsComponent } from "@/shared/components/cards/cards.component";
import type {
  Character,
  CharacterApiResponse,
} from "@/shared/models/character.model";
import { Component, inject } from "@angular/core";

@Component({
  selector: "app-character-listing",
  imports: [CardsComponent],
  templateUrl: "./character-listing.component.html",
  styleUrl: "./character-listing.component.scss",
})
export class CharacterListingComponent {
  service = inject(CharactersService);

  characters: Character[] = [];

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.service.GetAllCharacters().subscribe((data: CharacterApiResponse) => {
      this.characters = data.results;
    });
  }
}
