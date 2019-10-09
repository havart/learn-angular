import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponentUserInfoComponent } from './widget-component-user-info.component';

describe('WidgetComponentUserInfoComponent', () => {
  let component: WidgetComponentUserInfoComponent;
  let fixture: ComponentFixture<WidgetComponentUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponentUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponentUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
