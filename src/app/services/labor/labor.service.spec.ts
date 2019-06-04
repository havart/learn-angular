import { TestBed } from '@angular/core/testing';

import { LaborService } from './labor.service';

describe('LaborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaborService = TestBed.get(LaborService);
    expect(service).toBeTruthy();
  });
});
