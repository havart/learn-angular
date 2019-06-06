import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable } from 'rxjs';
import { API } from '../API';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { selectGetClient, selectLoadingStatus } from '../../store/client/client.selector';
import { IsLoadingClient, SelectedClientSet, UpsertClient } from '../../store/client/client.action';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient, private config: API, private store$: Store<IAppState>) {}

    getClientById$(clientId: string): Observable<IClient> {
        const sourceClient$: Observable<IClient> = this.store$.select(selectGetClient);

        sourceClient$.pipe(onceRunOrCatch(this.fetchAndSave$(clientId))).subscribe();

        return sourceClient$;
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
