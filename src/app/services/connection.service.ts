import { BehaviorSubject, Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';

export class ConnectionService {
    private readonly _client$ = new BehaviorSubject<ClientInterface>(null);

    public setClient(client: ClientInterface): void {
        this._client$.next(client);
    }

    public get client$(): Observable<ClientInterface> {
        return this._client$.asObservable();
    }
}
