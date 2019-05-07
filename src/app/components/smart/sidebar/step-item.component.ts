import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/stepService/step.service';
import { ISteps } from '../../../interfaces/steps.interface';
import { Observable } from 'rxjs';
import { filter, switchMap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './step-item.component.html',
    styleUrls: ['./step-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepItemComponent implements OnInit {
    steps$: Observable<ISteps[]>;

    constructor(private stepService: StepService) {}

    ngOnInit() {
        this.steps$ = this.stepService.get$().pipe(
            switchMap(results => results),
            filter(result => !result.isComment),
            toArray(),
        );
    }
}
