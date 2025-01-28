import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { LucideAngularModule, X, Menu } from "lucide-angular";

@Component({
  selector: "app-header",
  imports: [RouterLink, ThemeToggleComponent, LucideAngularModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isMenuOpen = false;

  readonly x = X;
  readonly menu = Menu;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
