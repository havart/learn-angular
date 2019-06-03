import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectGetClient, selectLoadingStatus } from '../../store/selectors/client.selector';
import { IsLoadingClient, SelectedClientSet, UpsertClient } from '../../store/actions/client.action';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getClientById$(clientId: string): Observable<IClient> {
        return this.store$.pipe(
            select(selectGetClient),
            take(1),
            onceRunOrCatch(this.fetchAndSave$(clientId)),
            tap(cl => console.log(cl)),
        );
    }

    fetchAndSave$(clientId: string | number): Observable<IClient> {
        return this.store$.pipe(
            select(selectLoadingStatus),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingClient(true));
                return this.httpClient.get<IClient>(`${this.config.CLIENT_URL}/${clientId}`).pipe(
                    map((client: IClient) => {
                        return {
                            ...client,
                            age: getAge('' + client.age),
                        };
                    }),
                    tap(cl => console.log(cl)),
                    tap((client: IClient) => {
                        this.store$.dispatch(new UpsertClient(client));
                        this.store$.dispatch(new SelectedClientSet(client.id));
                        this.store$.dispatch(new IsLoadingClient(false));
                    }),
                );
            }),
        );
    }
}
