import { Component, Input, OnInit } from '@angular/core';
import { StepInterface } from '../../../interfaces/step.interface';

@Component({
    selector: 'app-step-with-phone-number',
    templateUrl: './step-with-phone-number.component.html',
    styleUrls: ['./step-with-phone-number.component.scss'],
})
export class StepWithPhoneNumberComponent {
    @Input() step: StepInterface;

    private isShowDescriptionMenu: boolean;

    private showDescriptionMenuToggle(): void {
        this.isShowDescriptionMenu = !this.isShowDescriptionMenu;
    }
}
