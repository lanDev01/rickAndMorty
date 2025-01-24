import type { Info } from "./info.model";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodeApiResponse {
  info: Info;
  results: Episode[];
}
