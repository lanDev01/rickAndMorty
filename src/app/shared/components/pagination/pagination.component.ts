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

  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.page = Number(params.get("page") ?? "1");
    });
  }

  goToPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages()) {
      this.page = newPage;
      this.router.navigate(["../", this.page], {
        relativeTo: this.route,
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
