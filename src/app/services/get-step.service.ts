import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GlobalState } from '../+store';
import { StepsUpsertAction } from '../+store/steps/steps.actions';
import { getStepsById } from '../+store/steps/steps.selectors';
import { onceRunOrCatch } from '../helpers/once-run-or-catch.helper';
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

        return this.store$.select(getStepsById(id)).pipe(onceRunOrCatch(this.fetchSteps$(id)));
    }

    public fetchSteps$(id: string): Observable<StepInterface[]> {

        return this.http.get<StepInterface[]>(this.config.STEPS_URL).pipe(
            map((steps: StepInterface[]) => steps.filter((step: StepInterface) => !step.isComment)),
            tap((result: StepInterface[]) => {
                this.store$.dispatch(new StepsUpsertAction({ clientId: id, steps: result }));
            }),
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
        );
    }
}
