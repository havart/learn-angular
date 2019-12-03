import { Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractLoading } from '../abstract/abstract-loading';
import { finalize, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { ClientUpsertAction } from '../+store/client/client.actions';
import { getClientById } from '../+store/client/client.selectors';
import { GlobalState } from '../+store/index';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends AbstractLoading {
    constructor(
        private readonly http: HttpClient,
        private readonly store$: Store<GlobalState>,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {
        super();
    }

    public setClient(client: ClientInterface): void {
        this.store$.dispatch(new ClientUpsertAction(client));
    }

    public client$(id: number): Observable<ClientInterface> {
        return this.store$.pipe(
            select(getClientById(`${id}`)),

            tap((currentClient: ClientInterface) => {
                if (currentClient === undefined && !this.isLoading) {
                    return this.fetchClient$(id).subscribe(
                        (client: ClientInterface) => {
                            this.setClient(client);
                        },
                        (error: HttpErrorResponse) => {
                            this.errorSnackBarService.openSnackBarError(error.status);
                        },
                    );
                }
            }),
        );
    }

    private fetchClient$(id: number): Observable<ClientInterface> {
        this.setLoadingStatus(true);

        return this.http.get<ClientInterface>(`${urlGetUser}${id}`).pipe(
            finalize(() => {
                this.setLoadingStatus(false);
            }),
        );
    }
}
