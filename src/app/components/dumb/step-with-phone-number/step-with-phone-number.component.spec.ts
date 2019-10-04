import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWithPhoneNumberComponent } from './step-with-phone-number.component';
import { MatListModule } from '@angular/material';
import { mockStep } from '../../../constants/test-mock';

describe('StepWithPhoneNumberComponent', () => {
    let component: StepWithPhoneNumberComponent;
    let fixture: ComponentFixture<StepWithPhoneNumberComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatListModule],
            declarations: [StepWithPhoneNumberComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StepWithPhoneNumberComponent);
        component = fixture.componentInstance;
        component.step = mockStep;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
