import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigGymComponent } from './big-gym.component';

describe('BigGymComponent', () => {
  let component: BigGymComponent;
  let fixture: ComponentFixture<BigGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
