import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { LucideAngularModule, ChevronRight } from "lucide-angular";

@Component({
  selector: "app-icon-button",
  imports: [LucideAngularModule, CommonModule],
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.scss",
})
export class IconButtonComponent {
  readonly chevronRight = ChevronRight;

  disabled = input(false);
  isActive = input(false);
}
