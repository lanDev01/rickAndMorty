import type { Character } from "@/shared/models/character.model";
import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-cards",
  imports: [CommonModule],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.scss",
})
export class CardsComponent {
  character = input.required<Character>();

  ngOnInit(): void {
    console.log(this.character());
  }

  getColorStatus(status: string) {
    switch (status) {
      case "Alive":
        return "green-color";
      case "Dead":
        return "red-color";
      case "unknown":
        return "gray-color";
      default:
        return "gray-color";
    }
  }
}
