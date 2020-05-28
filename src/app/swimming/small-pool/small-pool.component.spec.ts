import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPoolComponent } from './small-pool.component';

describe('SmallPoolComponent', () => {
  let component: SmallPoolComponent;
  let fixture: ComponentFixture<SmallPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
