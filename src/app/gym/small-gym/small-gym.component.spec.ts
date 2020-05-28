import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGymComponent } from './small-gym.component';

describe('SmallGymComponent', () => {
  let component: SmallGymComponent;
  let fixture: ComponentFixture<SmallGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
