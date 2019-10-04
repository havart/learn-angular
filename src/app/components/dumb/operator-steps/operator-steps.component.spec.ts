import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorStepsComponent } from './operator-steps.component';
import { StepComponent } from '../step/step.component';
import { MatIconModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { StepWithPhoneNumberComponent } from '../step-with-phone-number/step-with-phone-number.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OperatorStepsComponent', () => {
    let component: OperatorStepsComponent;
    let fixture: ComponentFixture<OperatorStepsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatListModule, MatIconModule, HttpClientTestingModule, MatSnackBarModule],
            declarations: [OperatorStepsComponent, StepComponent, StepWithPhoneNumberComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OperatorStepsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
