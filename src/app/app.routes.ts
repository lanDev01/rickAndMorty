import type { Routes } from "@angular/router";
import { CharacterListingComponent } from "./pages/character-listing/character-listing.component";

export const routes: Routes = [
  {
    path: "",
    component: CharacterListingComponent,
  },
  {
    path: "characters/:page",
    component: CharacterListingComponent,
  },
  {
    path: "characters",
    redirectTo: "characters/1",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "characters/1",
  },
];
