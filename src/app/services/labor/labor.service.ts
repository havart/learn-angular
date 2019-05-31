import { Injectable } from '@angular/core';
import { ILabor } from '../../interfaces/labor.interface';
import { IsLoadingLabor, SelectedLaborSet, UpsertLabor } from '../../store/actions/client-labor.action';
import { selectGetLabor, selectLoadingStatus } from '../../store/selectors/client-labor.selector';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../API';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';
import { IAppState } from '../../store/state/app.state';
import { Error } from 'tslint/lib/error';

@Injectable({
    providedIn: 'root',
})
export class LaborService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getLaborById$(clientId: string | number): Observable<ILabor> {
        return this.store$.pipe(
            select(selectGetLabor),
            onceRunOrCatch(this.fetchAndSave$(clientId)),
        );
    }

    fetchAndSave$(clientId: string | number): Observable<ILabor> {
        return this.store$.pipe(
            select(selectLoadingStatus),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingLabor(true));
                return this.httpClient.get<ILabor>(`${this.config.LABOR_URL}/${clientId}`).pipe(
                    tap((labor: ILabor) => {
                        this.store$.dispatch(new UpsertLabor(labor));
                        this.store$.dispatch(new SelectedLaborSet(labor.id));
                        this.store$.dispatch(new IsLoadingLabor(false));
                    }),
                );
            }),
        );
    }
    addLabor$(form: ILabor): void {
        this.httpClient.post(this.config.LABOR_URL, form);
    }

    updateLabor$(form: ILabor, id: string): Observable<ILabor> {
        return this.httpClient.put<ILabor>(`${this.config.LABOR_URL}/${id}`, form).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(error)));
            }),
        );
    }
}
