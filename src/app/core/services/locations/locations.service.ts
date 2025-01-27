import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import type { Observable } from "rxjs";
import type {
  LocationApi,
  LocationApiResponse,
} from "@/shared/models/location.model";
import { baseUrl } from "@/env/env";

@Injectable({
  providedIn: "root",
})
export class LocationsService {
  http = inject(HttpClient);

  GetAllLocations(page: number): Observable<LocationApiResponse> {
    const url = `${baseUrl}/location?page=${page}`;

    return this.http.get<LocationApiResponse>(url);
  }

  GetLocationById(id: number) {
    const url = `${baseUrl}/location/${id}`;

    return this.http.get<LocationApi>(url);
  }
}
