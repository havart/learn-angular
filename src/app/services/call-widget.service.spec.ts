import { TestBed } from '@angular/core/testing';

import { CallWidgetService } from './call-widget.service';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';

describe('CallWidgetService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({ imports: [MatIconModule, MatProgressSpinnerModule] }),
    );

    it('should be created', () => {
        const service: CallWidgetService = TestBed.get(CallWidgetService);
        expect(service).toBeTruthy();
    });
});
