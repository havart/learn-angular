import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { GlobalState } from '../+store';
import { getStepsById } from '../+store/steps/steps.selectors';
import { StepInterface } from '../interfaces/step.interface';
import { ApiService } from './api.service';
import { StepsState } from '../interfaces/steps-state.interface';
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

    public getStep$(): Observable<StepInterface[]> {

        return this.http.get<StepInterface[]>(this.config.STEPS_URL).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => !isComment)),
        );
    }

    public getStepByClientId$(id: string): Observable<StepInterface[]> {

        return this.store$.pipe(
            select(getStepsById(id)),
            filter(Boolean),
            map(({ steps }: StepsState) => steps),
        );
    }
}
