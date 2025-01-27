import type { Info } from "./info.model";

export interface LocationApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationApiResponse {
  info: Info;
  results: LocationApi[];
}
