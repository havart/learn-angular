import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorStepsComponent } from './operator-steps.component';

describe('OperatorStepsComponent', () => {
  let component: OperatorStepsComponent;
  let fixture: ComponentFixture<OperatorStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
