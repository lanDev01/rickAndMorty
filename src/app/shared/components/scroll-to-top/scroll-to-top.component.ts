import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { ChevronsUp, LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-scroll-to-top",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./scroll-to-top.component.html",
  styleUrl: "./scroll-to-top.component.scss",
})
export class ScrollToTopComponent {
  readonly chevronsUp = ChevronsUp;

  showScrollToTop = false;

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollToTop = scrollPosition > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
