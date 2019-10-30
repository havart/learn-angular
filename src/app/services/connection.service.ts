import { BehaviorSubject, Observable } from 'rxjs';
import { ClientInterface } from '../interfaces/client.interface';

export class ConnectionService {
    private readonly client$ = new BehaviorSubject<ClientInterface>(null);
    private readonly currentСlient$ = this.client$.asObservable();

    public setClient(client: ClientInterface): void {
        this.client$.next(client);
    }

    public getClient$(): Observable<ClientInterface> {
        return this.currentСlient$;
    }
}
