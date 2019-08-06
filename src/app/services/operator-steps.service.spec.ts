import { TestBed } from '@angular/core/testing';

import { OperatorStepsService } from './operator-steps.service';

describe('OperatorStepsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatorStepsService = TestBed.get(OperatorStepsService);
    expect(service).toBeTruthy();
  });
});
