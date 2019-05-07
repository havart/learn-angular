import { TestBed } from '@angular/core/testing';

import { ClientInfoService } from './client-info.service';

describe('ClientInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientInfoService = TestBed.get(ClientInfoService);
    expect(service).toBeTruthy();
  });
});
