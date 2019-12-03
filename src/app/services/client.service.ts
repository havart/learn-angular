import { Observable, EMPTY } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractLoading } from '../abstract/abstract-loading';
import { finalize, tap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { ClientUpsertAction } from '../+store/client/client.actions';
import { getClientById } from '../+store/client/client.selectors';
import { GlobalState } from '../+store/index';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { onceRunOrCatch } from '../helpers/once-run-or-catch.helper';

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

    public client$(id: string): Observable<ClientInterface> {
        return this.store$.select(getClientById(`${id}`)).pipe(onceRunOrCatch(this.fetchClient$(id)));
    }
    private fetchClient$(id: string): Observable<ClientInterface> {
        this.setLoadingStatus(true);

        return this.http.get<ClientInterface>(`${urlGetUser}${id}`).pipe(
            tap(client => {
                this.setClient(client);
            }),
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            finalize(() => {
                this.setLoadingStatus(false);
            }),
        );
    }
}
