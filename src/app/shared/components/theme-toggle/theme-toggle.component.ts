import { ThemeService } from "@/themes/theme.service";
import { Component, inject } from "@angular/core";
import { LucideAngularModule, Sun, Moon } from "lucide-angular";

@Component({
  selector: "app-theme-toggle",
  imports: [LucideAngularModule],
  templateUrl: "./theme-toggle.component.html",
  styleUrl: "./theme-toggle.component.scss",
  providers: [ThemeService],
})
export class ThemeToggleComponent {
  readonly sun = Sun;
  readonly moon = Moon;

  isLightMode = false;
  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.isLightMode = this.themeService.loadTheme();
  }

  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    this.themeService.toggleTheme(this.isLightMode);
  }
}
