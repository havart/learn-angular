import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { StepInterface } from '../interfaces/step.interface';
import { urlGetStep } from '../configs/url-get.const';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { getStepsById } from 'src/app/+store/steps/steps.selectors';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { StepsUpsertAction } from '../+store/steps/steps.actions';
import { onceRunOrCatch } from '../helpers/once-run-or-catch.helper';

@Injectable({
    providedIn: 'root',
})
export class GetStepService {
    constructor(
        private readonly http: HttpClient,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    getStep$(id: string): Observable<StepInterface[]> {
        return this.http.get<StepInterface[]>(urlGetStep).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => !isComment)),
            tap(steps => {
                this.setSteps(id, steps);
            }),
        );
    }

    public getStepByClientId$(id: string): Observable<StepInterface[]> {
        return this.store$.select(getStepsById(`${id}`)).pipe(onceRunOrCatch(this.getStep$(id)));
    }

    private setSteps(id: string, steps: StepInterface[]): void {
        this.store$.dispatch(new StepsUpsertAction({ clientId: id, steps }));
    }
}
