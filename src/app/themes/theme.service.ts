import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly lightThemeClass = "light-theme";
  private readonly themeKey = "isLightMode";

  toggleTheme(isLightMode: boolean): void {
    const rootElement = document.documentElement;
    if (isLightMode) {
      rootElement.classList.add(this.lightThemeClass);
    } else {
      rootElement.classList.remove(this.lightThemeClass);
    }

    localStorage.setItem(this.themeKey, JSON.stringify(isLightMode));
  }

  loadTheme(): boolean {
    const storedTheme = localStorage.getItem(this.themeKey);

    if (storedTheme !== null) {
      const isLightMode = JSON.parse(storedTheme);
      this.toggleTheme(isLightMode);
      return isLightMode;
    }

    const isLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    this.toggleTheme(isLightMode);
    return isLightMode;
  }
}
