import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberFormComponent } from './phone-number-form.component';

describe('PhoneNumberFormComponent', () => {
  let component: PhoneNumberFormComponent;
  let fixture: ComponentFixture<PhoneNumberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
