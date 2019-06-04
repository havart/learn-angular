import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectGetSteps } from 'src/app/store/selectors/steps.selector';
import { take, filter, switchMapTo, map } from 'rxjs/operators';
import { GetSteps } from 'src/app/store/actions/steps.action';
import { IStep } from 'src/app/interfaces/steps.interface';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getSteps$(): Observable<IStep[]> {
        const sourceSteps$: Observable<IStep[]> = this.store$.select(selectGetSteps);
        sourceSteps$
            .pipe(
                take(1),
                filter((steps: IStep[]) => !steps.length),
                switchMapTo(this.httpClient.get<IStep[]>(this.api.STEPS_URL)),
                map((steps: IStep[]) => steps.filter((step: IStep) => !step.isComment)),
            )
            .subscribe((steps: IStep[]) => this.store$.dispatch(new GetSteps(steps)));
        return sourceSteps$;
    }
}
