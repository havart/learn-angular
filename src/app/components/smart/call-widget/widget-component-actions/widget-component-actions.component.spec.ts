import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponentActionsComponent } from './widget-component-actions.component';

describe('WidgetComponentActionsComponent', () => {
  let component: WidgetComponentActionsComponent;
  let fixture: ComponentFixture<WidgetComponentActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponentActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponentActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
