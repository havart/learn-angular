import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
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

    getLaborById$(clientId: number): Observable<ILabor> {
        return this.store$.pipe(
            select(getLabor),
            onceRunOrCatch(this.fetchAndSave$(clientId)),
        );
    }

    fetchAndSave$(clientId): Observable<ILabor> {
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
    addLabor(form) {
        return this.httpClient.post(this.config.LABOR_URL, form);
    }

    updateLabor(form, id) {
        this.httpClient.put<ILabor>(this.config.LABOR_URL + '/' + id, form);
    }
}
