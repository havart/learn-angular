import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseComponent } from './operator-base.component';

describe('OperatorBaseComponent', () => {
  let component: OperatorBaseComponent;
  let fixture: ComponentFixture<OperatorBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
