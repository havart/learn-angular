import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OperatorStepsService } from '../../../services/operator-steps.service';
import { Observable } from 'rxjs';
import { StepInterface } from '../../../interfaces/step.interface';

@Component({
    selector: 'app-operator-steps',
    templateUrl: './operator-steps.component.html',
    styleUrls: ['./operator-steps.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorStepsComponent implements OnInit {
    public stepsList$: Observable<StepInterface[]>;

    constructor(private operatorStepService: OperatorStepsService) {}

    ngOnInit(): void {
        this.getStepsFromServer();
    }

    getStepsFromServer() {
        this.stepsList$ = this.operatorStepService.getSteps$();
    }
}
