import { TestBed, async, inject } from '@angular/core/testing';

import { OperatorBaseGuard } from './operator-base.guard';

describe('OperatorBaseGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OperatorBaseGuard],
        });
    });

    it('should ...', inject([OperatorBaseGuard], (guard: OperatorBaseGuard) => {
        expect(guard).toBeTruthy();
    }));
});
