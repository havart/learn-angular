import { TestBed } from '@angular/core/testing';

import { NotificationErrorService } from './notification-error.service';

describe('NotificationErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationErrorService = TestBed.get(NotificationErrorService);
    expect(service).toBeTruthy();
  });
});
