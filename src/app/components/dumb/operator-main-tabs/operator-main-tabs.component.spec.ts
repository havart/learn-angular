import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorMainTabsComponent } from './operator-main-tabs.component';

describe('OperatorMainTabsComponent', () => {
  let component: OperatorMainTabsComponent;
  let fixture: ComponentFixture<OperatorMainTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorMainTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorMainTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
