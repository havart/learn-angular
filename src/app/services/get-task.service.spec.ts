import { TestBed } from '@angular/core/testing';

import { GetTaskService } from './get-task.service';

describe('GetTask.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTaskService = TestBed.get(GetTaskService);
    expect(service).toBeTruthy();
  });
});
