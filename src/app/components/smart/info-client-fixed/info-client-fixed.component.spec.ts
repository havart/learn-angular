import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClientFixedComponent } from './info-client-fixed.component';

describe('InfoClientFixedComponent', () => {
  let component: InfoClientFixedComponent;
  let fixture: ComponentFixture<InfoClientFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClientFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClientFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
