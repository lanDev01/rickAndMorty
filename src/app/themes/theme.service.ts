import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly lightThemeClass = "light-theme";

  toggleTheme(isLightMode: boolean): void {
    const rootElement = document.documentElement;
    if (isLightMode) {
      rootElement.classList.add(this.lightThemeClass);
    } else {
      rootElement.classList.remove(this.lightThemeClass);
    }
  }
}
