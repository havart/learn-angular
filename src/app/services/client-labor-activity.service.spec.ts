import { TestBed } from '@angular/core/testing';

import { ClientLaborActivityService } from './client-labor-activity.service';

describe('ClientLaborActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientLaborActivityService = TestBed.get(ClientLaborActivityService);
    expect(service).toBeTruthy();
  });
});
