import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientLaborActivityInterface } from '../interfaces/clientLaborActivity.interfase';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ClientLaborActivityService {
    private clientLaborActivitySource$ = new BehaviorSubject<ClientLaborActivityInterface>(null);

    constructor(private http: HttpClient) {}

    get clientLaborActivity$(): Observable<ClientLaborActivityInterface> {
        return this.clientLaborActivitySource$.asObservable();
    }

    getLaborActivityClient$(id: number): Observable<ClientLaborActivityInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/labor-activity/${id}`;
        return this.http
            .get<ClientLaborActivityInterface>(url)
            .pipe(
                tap((clientLaborActivity: ClientLaborActivityInterface) =>
                    this.clientLaborActivitySource$.next(clientLaborActivity),
                ),
            );
    }
}
