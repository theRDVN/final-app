import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymGalleryComponent } from './gym-gallery.component';

describe('GymGalleryComponent', () => {
  let component: GymGalleryComponent;
  let fixture: ComponentFixture<GymGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
