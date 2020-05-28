import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumGymComponent } from './medium-gym.component';

describe('MediumGymComponent', () => {
  let component: MediumGymComponent;
  let fixture: ComponentFixture<MediumGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
