import { Component, input } from "@angular/core";
import { LucideAngularModule, ChevronRight } from "lucide-angular";

@Component({
  selector: "app-icon-button",
  imports: [LucideAngularModule],
  templateUrl: "./icon-button.component.html",
  styleUrl: "./icon-button.component.scss",
})
export class IconButtonComponent {
  readonly chevronRight = ChevronRight;

  disabled = input(false);
}
