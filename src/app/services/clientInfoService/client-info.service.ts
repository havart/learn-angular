import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IClient } from '../../interfaces/client.interface';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { API } from '../API';
import { IClientDto } from './dto/client.interface';
import { map, catchError, tap } from 'rxjs/operators';
import { getAge } from '../../helpers/user-age';
import { ILabor } from '../../interfaces/labor.interface';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    clientInfo$: Observable<IClient>;
    clientId = '' + Math.floor(Math.random() * 5 + 1);
    labor$: Observable<ILabor>;
    private laborBS$: BehaviorSubject<ILabor>;

    constructor(private httpClient: HttpClient, private config: API) {
        this.laborBS$ = new BehaviorSubject<ILabor>(null);
        this.labor$ = this.laborBS$.asObservable();
    }

    getById$(id: string): Observable<IClient> {
        return (this.clientInfo$ = this.httpClient.get<IClientDto>(this.config.CLIENT_URL + id).pipe(
            map((client: IClient) => {
                return {
                    ...client,
                    age: getAge(client.age),
                };
            }),
        ));
    }

    getLaborById$(): Observable<void> {
        return this.httpClient.get<ILabor>(`${this.config.LABOR_URL}/${this.clientId}`).pipe(
            map((value: ILabor) => this.laborBS$.next(value)),
            catchError((error: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(error)));
            }),
        );
    }

    addLabor$(form: ILabor): Observable<ILabor> {
        return this.httpClient.post<ILabor>(this.config.LABOR_URL, form);
    }

    updateLabor$(form: ILabor, id: string): Observable<ILabor> {
        return this.httpClient.put<ILabor>(`${this.config.LABOR_URL}/${id}`, form).pipe(
            tap((value: ILabor) => this.laborBS$.next({ ...value })),
            catchError((error: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(error)));
            }),
        );
    }
}
