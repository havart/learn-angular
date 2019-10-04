import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { FormsModule } from '@angular/forms';

describe('AuthorizationService', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
    }));

    it('should be created', () => {
        const service: AuthorizationService = TestBed.get(AuthorizationService);
        expect(service).toBeTruthy();
    });
});
