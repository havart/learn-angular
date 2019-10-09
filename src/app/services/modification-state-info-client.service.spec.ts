import { TestBed } from '@angular/core/testing';

import { ModificationStateInfoClientService } from './modification-state-info-client.service';

describe('ModificationStateInfoClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModificationStateInfoClientService = TestBed.get(ModificationStateInfoClientService);
    expect(service).toBeTruthy();
  });
});
