import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/stepService/step.service';
import { Observable } from 'rxjs';
import { ICommentStep } from '../../../interfaces/commentStep.interface';
import { IClient } from '../../../interfaces/client.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { filter, switchMap, map } from 'rxjs/operators';
import { selectGetClient } from '../../../store/client/client.selector';

@Component({
    selector: 'app-sidebar',
    templateUrl: './step-item.component.html',
    styleUrls: ['./step-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepItemComponent implements OnInit {
    steps$: Observable<ICommentStep[]>;

    constructor(private stepService: StepService, private store$: Store<IAppState>) {}

    ngOnInit() {
        this.steps$ = this.store$.select(selectGetClient).pipe(
            filter((client: IClient) => !!client),
            switchMap(({ id }: IClient) =>
                this.stepService.getSteps$(id).pipe(
                    filter((steps: ICommentStep[]) => !!steps),
                    map((steps: ICommentStep[]) => steps.filter((step: ICommentStep) => !step.isComment)),
                ),
            ),
        );
    }
}
