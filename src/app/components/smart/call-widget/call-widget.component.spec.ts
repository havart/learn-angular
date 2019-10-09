import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWidgetComponent } from './call-widget.component';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { FormatTimePipe } from '../../../pipes/format-time.pipe';

describe('CallWidgetComponent', () => {
  let component: CallWidgetComponent;
  let fixture: ComponentFixture<CallWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatIconModule],
      declarations: [ CallWidgetComponent, FormatTimePipe ],
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
