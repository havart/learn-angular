import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOperatorComponent } from './side-bar-operator.component';
import { MatIconModule, MatListModule, MatSidenavModule, MatSnackBarModule } from '@angular/material';
import { OperatorStepsComponent } from '../operator-steps/operator-steps.component';
import { StepComponent } from '../step/step.component';
import { StepWithPhoneNumberComponent } from '../step-with-phone-number/step-with-phone-number.component';
import { SideBarService } from '../../../services/side-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SideBarOperatorComponent', () => {
    let component: SideBarOperatorComponent;
    let fixture: ComponentFixture<SideBarOperatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatSidenavModule, MatListModule, MatIconModule, BrowserAnimationsModule, HttpClientTestingModule, MatSnackBarModule],
            providers: [SideBarService],
            declarations: [
                SideBarOperatorComponent,
                OperatorStepsComponent,
                StepComponent,
                StepWithPhoneNumberComponent,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideBarOperatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
