import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFloorFitComponent } from './f-floor-fit.component';

describe('FFloorFitComponent', () => {
  let component: FFloorFitComponent;
  let fixture: ComponentFixture<FFloorFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFloorFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFloorFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
