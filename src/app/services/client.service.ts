import { BehaviorSubject, Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ClientService extends LoadingService {
    public readonly _clientId$ = new BehaviorSubject<any>(null);
    private readonly _client$ = new BehaviorSubject<ClientInterface>(null);
    private isDataLoading: boolean;

    constructor(private readonly http: HttpClient) {
        super();
    }

    public setClient(client: ClientInterface): void {
        this._client$.next(client);
    }

    public client$(id: number): Observable<ClientInterface> {
        const user = this._client$.getValue();

        if (user === null) {
            this.fetchClient$(id).subscribe((client: ClientInterface) => {
                this.setClient(client);
            });
        }

        return this._client$.asObservable();
    }

    private fetchClient$(id: number): Observable<ClientInterface> {
        super.getLoadingStatus$().subscribe(value => {
            this.isDataLoading = value;
        });

        if (!this.isDataLoading) {
            super.setLoadingStatus(true);

            return this.http.get<ClientInterface>(`${urlGetUser}/${id}`).pipe(
                finalize(() => {
                    super.setLoadingStatus(false);
                }),
            );
        }
    }
}
