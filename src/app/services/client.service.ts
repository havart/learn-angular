import { BehaviorSubject, Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';
import { Injectable } from '@angular/core';
import { urlGetUser } from '../configs/url-get.const';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    public readonly _clientId$ = new BehaviorSubject<any>(null);
    private readonly _client$ = new BehaviorSubject<ClientInterface>(null);

    constructor(private readonly http: HttpClient) {}

    public setClient(client: ClientInterface): void {
        this._client$.next(client);
    }

    public client$(id: number): Observable<ClientInterface> {
        const user = this._client$.getValue();
        if (user !== null) {
            return this._client$.asObservable();
        }

        this.fetchClient$(id).subscribe((_data: ClientInterface) => {
            this.setClient(_data);
        });

        return this._client$.asObservable();
    }

    private fetchClient$(id: number): Observable<ClientInterface> {
        return this.http.get<ClientInterface>(`${urlGetUser}/${id}`);
    }
}
