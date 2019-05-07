import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/stepService/step.service';
import { StepsInterface } from '../../../interfaces/steps.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './step-item.component.html',
    styleUrls: ['./step-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepItemComponent implements OnInit {
    steps$: Observable<StepsInterface>[];

    constructor(private stepService: StepService) {}

    ngOnInit() {
        this.steps$ = this.stepService.get().pipe(
          map(value => value.filter(el => !el.isComment)));
    }
}
