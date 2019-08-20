import { Component, Input } from '@angular/core';
import { StepInterface } from '../../../interfaces/step.interface';

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss'],
})
export class StepComponent {
    @Input() step: StepInterface;
    isShowDescriptionMenu: boolean;

    showDescriptionMenuToggle(): void {
        this.isShowDescriptionMenu = !this.isShowDescriptionMenu;
    }
}
