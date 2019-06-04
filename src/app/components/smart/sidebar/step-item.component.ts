import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/stepService/step.service';
import { Observable } from 'rxjs';
import { filter, switchMap, toArray, tap } from 'rxjs/operators';
import { IAppState } from 'src/app/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectGetSteps } from 'src/app/store/selectors/steps.selector';
import { IStep } from 'src/app/interfaces/steps.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './step-item.component.html',
    styleUrls: ['./step-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepItemComponent implements OnInit {
    steps$: Observable<IStep[]>;

    constructor(private stepService: StepService, private store$: Store<IAppState>) {
        this.steps$ = this.store$.pipe(select(selectGetSteps));
    }

    ngOnInit() {
        this.stepService.getSteps$();
    }
}
