import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFloorFitComponent } from './s-floor-fit.component';

describe('SFloorFitComponent', () => {
  let component: SFloorFitComponent;
  let fixture: ComponentFixture<SFloorFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFloorFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFloorFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
