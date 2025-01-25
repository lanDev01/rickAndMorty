import { Component, inject, input } from "@angular/core";
import { IconButtonComponent } from "../icon-button/icon-button.component";
import {
  LucideAngularModule,
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-angular";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pagination",
  imports: [IconButtonComponent, LucideAngularModule],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  readonly chevronRight = ChevronRight;
  readonly chevronsRight = ChevronsRight;
  readonly chevronLeft = ChevronLeft;
  readonly chevronsLeft = ChevronsLeft;

  totalPages = input.required<number>();
  page = 1;
  search = "";

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.page = Number(params.get("page") ?? "1");
      this.search = params.get("search") ?? "";
    });
  }

  goToPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages()) {
      this.page = newPage;
      this.router.navigate(["/characters"], {
        queryParams: { search: this.search, page: this.page },
      });
    }
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages());
  }

  goToNextPage(): void {
    this.goToPage(this.page + 1);
  }

  goToPreviousPage(): void {
    this.goToPage(this.page - 1);
  }
}
