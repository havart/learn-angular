import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepInterface } from '../../../interfaces/step.interface';

@Component({
    selector: 'app-step-with-phone-number',
    templateUrl: './step-with-phone-number.component.html',
    styleUrls: ['./step-with-phone-number.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepWithPhoneNumberComponent {
    @Input() step: StepInterface;

    isShowDescriptionMenu: boolean;

    showDescriptionMenuToggle(): void {
        this.isShowDescriptionMenu = !this.isShowDescriptionMenu;
    }
}
