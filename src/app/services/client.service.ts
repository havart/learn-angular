import { BehaviorSubject, Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AbstractLoading } from '../abstract/abstract-loading';
import { finalize } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends AbstractLoading {
    private readonly _client$ = new BehaviorSubject<ClientInterface>(null);

    constructor(private readonly http: HttpClient, private readonly errorSnackBarService: ErrorSnackBarService) {
        super();
    }

    public setClient(client: ClientInterface): void {
        this._client$.next(client);
    }

    public client$(id: number): Observable<ClientInterface> {
        const user = this._client$.getValue();

        if (!this.isLoading || user === null) {
            this.fetchClient$(id).subscribe(
                (client: ClientInterface) => {
                    this.setClient(client);
                },
                (error: HttpErrorResponse) => {
                    this.errorSnackBarService.openSnackBarError(error.status);
                },
            );
        }

        return this._client$.asObservable();
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
