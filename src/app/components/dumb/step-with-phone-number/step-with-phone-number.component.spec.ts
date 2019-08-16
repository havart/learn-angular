import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWithPhoneNumberComponent } from './step-with-phone-number.component';

describe('StepWithPhoneNumberComponent', () => {
  let component: StepWithPhoneNumberComponent;
  let fixture: ComponentFixture<StepWithPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepWithPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepWithPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
