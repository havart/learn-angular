import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborActivityFormComponent } from './labor-activity-form.component';

describe('LaborActivityFormComponent', () => {
  let component: LaborActivityFormComponent;
  let fixture: ComponentFixture<LaborActivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborActivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
