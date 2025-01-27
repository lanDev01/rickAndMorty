import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: "app-header",
  imports: [RouterLink, ThemeToggleComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
