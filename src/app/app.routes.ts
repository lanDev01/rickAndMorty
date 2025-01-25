import type { Routes } from "@angular/router";
import { CharacterListingComponent } from "./pages/character-listing/character-listing.component";

export const routes: Routes = [
  {
    path: "",
    component: CharacterListingComponent,
  },
  {
    path: "characters",
    component: CharacterListingComponent,
  },
  {
    path: "**",
    redirectTo: "characters",
  },
];
