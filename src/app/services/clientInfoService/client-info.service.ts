import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable, throwError } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { filter, map, switchMap, take, tap, catchError } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { ILabor } from '../../interfaces/labor.interface';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { getLabor, getLoadingStatus } from '../../store/selectors/client-labor.selector';
import { IsLoadingLabor, SelectedLaborSet, UpsertLabor } from '../../store/actions/client-labor.action';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getById$(id: string | number): Observable<IClient> {
        return this.httpClient.get<IClientDto>(this.config.CLIENT_URL + id).pipe(
            map((client: IClientDto) => {
                return {
                    ...client,
                    age: getAge(client.age),
                };
            }),
        );
    }

    getLaborById$(clientId: string | number): Observable<ILabor> {
        return this.store$.pipe(
            select(getLabor),
            onceRunOrCatch(this.fetchAndSave$(clientId)),
        );
    }

    fetchAndSave$(clientId: string | number): Observable<ILabor> {
        return this.store$.pipe(
            select(getLoadingStatus),
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
