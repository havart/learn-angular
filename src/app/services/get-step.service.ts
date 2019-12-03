import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { StepInterface } from '../interfaces/step.interface';
import { urlGetStep } from '../configs/url-get.const';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { getStepsById } from 'src/app/+store/steps/steps.selectors';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { StepsUpsertAction } from '../+store/steps/steps.actions';

@Injectable({
    providedIn: 'root',
})
export class GetStepService {
    constructor(
        private readonly http: HttpClient,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    getStep$(): Observable<StepInterface[]> {
        return this.http.get<StepInterface[]>(urlGetStep).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => !isComment)),
        );
    }

    getStepByClientId$(id: string): Observable<StepInterface[]> {
        return this.store$.pipe(
            select(getStepsById(id)),
            tap(client => {
                if (client === undefined) {
                    return this.getStep$().subscribe(steps => {
                        this.setSteps(id, steps);
                    });
                }
            }),
            filter(Boolean),
            map(({ steps }) => steps),
        );
    }

    private setSteps(id: string, steps: StepInterface[]): void {
        this.store$.dispatch(new StepsUpsertAction({ clientId: id, steps }));
    }
}
