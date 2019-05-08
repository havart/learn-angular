import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLaborActivityComponent } from './client-labor-activity.component';

describe('ClientActivityComponent', () => {
  let component: ClientLaborActivityComponent;
  let fixture: ComponentFixture<ClientLaborActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLaborActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLaborActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
