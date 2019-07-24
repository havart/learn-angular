import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../interfaces/client.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    private clientSource$ = new BehaviorSubject<ClientInterface>(null);

    constructor(private http: HttpClient) {}

    get client$(): Observable<ClientInterface> {
        return this.clientSource$.asObservable();
    }

    getTask$(id: number): Observable<ClientInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/${id}`;
        return this.http
            .get<ClientInterface>(url)
            .pipe(tap((client: ClientInterface) => this.clientSource$.next(client)));
    }
}
