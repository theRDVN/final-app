import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessGalleryComponent } from './fitness-gallery.component';

describe('FitnessGalleryComponent', () => {
  let component: FitnessGalleryComponent;
  let fixture: ComponentFixture<FitnessGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
