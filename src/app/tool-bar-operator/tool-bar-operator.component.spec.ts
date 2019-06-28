import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarOperatorComponent } from './tool-bar-operator.component';

describe('ToolBarOperatorComponent', () => {
  let component: ToolBarOperatorComponent;
  let fixture: ComponentFixture<ToolBarOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
