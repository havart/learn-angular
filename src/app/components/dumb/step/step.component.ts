import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepInterface } from '../../../interfaces/step.interface';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() step: StepInterface;
  private isShowDescriptionMenu: boolean;

  showDescriptionMenuToggle(): void {
    this.isShowDescriptionMenu = !this.isShowDescriptionMenu;
  }
}
