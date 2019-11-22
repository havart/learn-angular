import { Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractLoading } from '../abstract/abstract-loading';
import { finalize, tap } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { ClientUpsertAction } from '../+store/client/client.actions';
import { getClientById } from '../+store/client/client.selectors';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends AbstractLoading {
    // private readonly _client$ = new BehaviorSubject<ClientInterface>(null);

    constructor(
        private readonly http: HttpClient,
        private readonly store$: Store<AppState>,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {
        super();
    }

    public setClient(client: ClientInterface): void {
        // this._client$.next(client);
        this.store$.dispatch(new ClientUpsertAction(client));
    }

    public client$(id: number): Observable<ClientInterface> {
        return this.store$.pipe(
            select(getClientById(`${id}`)),
            tap((client: ClientInterface) => {
                if (!this.isLoading || client === null) {
                    this.fetchClient$(id).subscribe(
                        (clientF: ClientInterface) => {
                            this.setClient(clientF);
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
