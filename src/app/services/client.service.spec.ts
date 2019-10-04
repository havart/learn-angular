import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('ClientService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, MatSnackBarModule],
        }),
    );

    it('should be created', () => {
        const service: ClientService = TestBed.get(ClientService);
        expect(service).toBeTruthy();
    });
});
