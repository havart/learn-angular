import { TestBed } from '@angular/core/testing';

import { CallWidgetService } from './call-widget.service';

describe('CallWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallWidgetService = TestBed.get(CallWidgetService);
    expect(service).toBeTruthy();
  });
});
