import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponentStatusComponent } from './widget-component-status.component';

describe('WidgetComponentStatusComponent', () => {
  let component: WidgetComponentStatusComponent;
  let fixture: ComponentFixture<WidgetComponentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
