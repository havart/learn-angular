import { TestBed } from '@angular/core/testing';

import { ContactTabService } from './contact-tab.service';

describe('ContactTabService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ContactTabService = TestBed.get(ContactTabService);
        expect(service).toBeTruthy();
    });
});
