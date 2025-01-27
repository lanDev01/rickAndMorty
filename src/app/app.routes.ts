import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "characters",
    loadComponent: () =>
      import("./pages/character-listing/character-listing.component").then(
        c => c.CharacterListingComponent
      ),
  },
  {
    path: "episodes",
    loadComponent: () =>
      import("./pages/episode-listing/episode-listing.component").then(
        c => c.EpisodeListingComponent
      ),
  },
  {
    path: "**",
    redirectTo: "characters",
  },
];
