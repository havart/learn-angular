import { TestBed } from '@angular/core/testing';

import { GetStepService } from './get-step.service';

describe('GetStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStepService = TestBed.get(GetStepService);
    expect(service).toBeTruthy();
  });
});
