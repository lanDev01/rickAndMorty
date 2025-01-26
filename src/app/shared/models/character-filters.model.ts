export interface CharacterFilters {
  search: string;
  status?: "alive" | "dead" | "unknown" | "";
  gender?: "male" | "female" | "genderless" | "unknown" | "";
  species: string;
}
