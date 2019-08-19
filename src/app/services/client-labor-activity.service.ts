import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { ClientLaborActivityInterface } from '../interfaces/client-labor-activity.interface';
import { tap, catchError } from 'rxjs/operators';
import { NotificationErrorService } from './notification-error.service';

@Injectable({
    providedIn: 'root',
})
export class ClientLaborActivityService {
    private clientLaborActivitySource$ = new BehaviorSubject<ClientLaborActivityInterface>(null);

    constructor(private http: HttpClient, private notificationErrorService: NotificationErrorService) {}

    get clientLaborActivity$(): Observable<ClientLaborActivityInterface> {
        return this.clientLaborActivitySource$.asObservable();
    }

    getLaborActivityClient$(id: number): Observable<ClientLaborActivityInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/labor-activity/${id}`;

        return this.http.get<ClientLaborActivityInterface>(url).pipe(
            tap((clientLaborActivity: ClientLaborActivityInterface) => {
                this.clientLaborActivitySource$.next(clientLaborActivity);
            }),
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);

                return EMPTY;
            }),
        );
    }
}
