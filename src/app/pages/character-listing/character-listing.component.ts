import { CharactersService } from "@/core/services/characters/characters.service";
import { Component, inject } from "@angular/core";

@Component({
  selector: "app-character-listing",
  imports: [],
  templateUrl: "./character-listing.component.html",
  styleUrl: "./character-listing.component.scss",
})
export class CharacterListingComponent {
  service = inject(CharactersService);

  characters: any[] = [];

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.service.GetAllCharacters().subscribe((data: any) => {
      this.characters = data.results;
      console.log(this.characters);
    });
  }
}
