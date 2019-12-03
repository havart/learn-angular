import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { GlobalState } from '../+store';
import { StepsUpsertAction } from '../+store/steps/steps.actions';
import { getStepsById } from '../+store/steps/steps.selectors';
import { StepInterface } from '../interfaces/step.interface';
import { ApiService } from './api.service';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class GetStepService {
    constructor(
        private readonly http: HttpClient,
        private readonly config: ApiService,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    public getStep$(id: string): Observable<StepInterface[]> {
        const storeSteps$: Observable<StepInterface[]> = this.store$.select(getStepsById(id));

        storeSteps$
            .pipe(
                take(1),
                filter((steps: StepInterface[]) => !steps),
                switchMap(() => this.http.get<StepInterface[]>(this.config.STEPS_URL)),
                map((steps: StepInterface[]) => steps.filter((step: StepInterface) => step.isComment)),
            )
            .subscribe(
                (result: StepInterface[]) => {
                    this.store$.dispatch(new StepsUpsertAction({ clientId: id, steps: result }));
                },
                catchError((error: HttpErrorResponse) => {
                    this.errorSnackBarService.openSnackBarError(error.status);

                    return EMPTY;
                }),
            );

        return storeSteps$;
    }
}
