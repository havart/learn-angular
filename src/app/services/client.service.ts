import { Store, select } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { GlobalState } from '../+store';
import { ClientIsLoadingAction, ClientUpsertAction } from '../+store/client/client.actions';
import { clientIsLoadingStatus, getClientById } from '../+store/client/client.selectors';
import { onceRunOrCatch } from '../helpers/once-run-or-catch.helper';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, finalize, switchMap, take, tap } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor(
        private readonly http: HttpClient,
        private readonly config: ApiService,
        private readonly store$: Store<GlobalState>,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {}

    public setClient(client: ClientInterface): void {
        this.store$.dispatch(new ClientUpsertAction(client));
    }

    public setStatus(status?: boolean): void {
        this.store$.dispatch(new ClientIsLoadingAction(status));
    }

    public client$(id: string): Observable<ClientInterface> {

        return this.store$.select(getClientById(id)).pipe(onceRunOrCatch(this.fetchClient$(id)));
    }

    private fetchClient$(id: string): Observable<ClientInterface> {
        const clientStatus$ = this.store$.pipe(
            select(clientIsLoadingStatus),
            take(1),
            filter((isLoading: boolean) => !isLoading),
        );

        return clientStatus$.pipe(
            tap(() => this.setStatus(true)),
            switchMap(() => this.http.get<ClientInterface>(`${this.config.CLIENT_URL}${id}`)),
            tap((client: ClientInterface) => {
                this.setClient(client);
            }),
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            finalize(() => this.setStatus(false)),
        );
    }
}
