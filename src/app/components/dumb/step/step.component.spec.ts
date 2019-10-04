import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepComponent } from './step.component';
import { MatListModule } from '@angular/material';

describe('StepComponent', () => {
  let component: StepComponent;
  let fixture: ComponentFixture<StepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatListModule ],
      declarations: [ StepComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
