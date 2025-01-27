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

  navigateTo = input.required<string>();
  totalPages = input.required<number>();
  page = 1;
  search = "";
  status = "";
  gender = "";
  selectedSpecies = "";

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.page = Number(params.get("page") ?? "1");
      this.search = params.get("search") ?? "";
      this.status = params.get("status") ?? "";
      this.gender = params.get("gender") ?? "";
      this.selectedSpecies = params.get("species") ?? "";
    });
  }

  /////////////////////// pagination /////////////////////////

  goToPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages()) {
      this.page = newPage;

      this.router.navigate([this.navigateTo()], {
        queryParams: {
          search: this.search,
          page: this.page,
          status: this.status,
          gender: this.gender,
          species: this.selectedSpecies,
        },
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

  /////////////////////// dynamic pagination /////////////////////////

  goToNextRange(): void {
    const visiblePages = 4;
    const nextPage = Math.min(this.page + visiblePages, this.totalPages());
    this.goToPage(nextPage);
  }

  goToPreviousRange(): void {
    const visiblePages = 4;
    const previousPage = Math.max(this.page - visiblePages, 1);
    this.goToPage(previousPage);
  }

  getDisplayedPages(): number[] {
    const total = this.totalPages();
    const visiblePages = 4; // Number of visible pages
    const pages: number[] = [];

    const start = Math.max(1, this.page - Math.floor(visiblePages / 2));
    const end = Math.min(total, start + visiblePages - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  showLeftEllipsis(): boolean {
    const visiblePages = 4;
    return this.page > visiblePages;
  }

  showRightEllipsis(): boolean {
    const visiblePages = 4;
    return this.page + visiblePages - 1 < this.totalPages();
  }
}
