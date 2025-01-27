import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { EpisodeListingComponent } from "./episode-listing.component";

describe("EpisodeListingComponent", () => {
  let component: EpisodeListingComponent;
  let fixture: ComponentFixture<EpisodeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
