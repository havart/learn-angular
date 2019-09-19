import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWidgetComponent } from './call-widget.component';

describe('CallWidgetComponent', () => {
  let component: CallWidgetComponent;
  let fixture: ComponentFixture<CallWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWidgetComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
