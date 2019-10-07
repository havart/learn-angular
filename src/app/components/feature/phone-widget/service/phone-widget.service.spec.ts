import { TestBed } from '@angular/core/testing';

import { PhoneWidgetService } from './phone-widget.service';

describe('PhoneWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneWidgetService = TestBed.get(PhoneWidgetService);
    expect(service).toBeTruthy();
  });
});
