import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPoolComponent } from './big-pool.component';

describe('BigPoolComponent', () => {
  let component: BigPoolComponent;
  let fixture: ComponentFixture<BigPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
