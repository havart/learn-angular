import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ClientLaborActivityInterface } from '../interfaces/clientLaborActivity.interface';
import { catchError, tap } from 'rxjs/operators';
import { NotificationErrorService } from './notification-error.service';
import { Router } from '@angular/router';
import { TASK, OPERATOR } from '../constants/path.constans';

@Injectable({
    providedIn: 'root',
})
export class ClientLaborActivityService {
    constructor(
        private http: HttpClient,
        private notificationErrorService: NotificationErrorService,
        private router: Router,
    ) {}

    getLaborActivityClient$(id: number): Observable<ClientLaborActivityInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/labor-activity/${id}`;
        return this.http.get<ClientLaborActivityInterface>(url).pipe(
            tap(() => {
                if (this.router.url === '/' + TASK) {
                    this.router.navigate([OPERATOR]);
                }
            }),
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);
                return EMPTY;
            }),
        );
    }

    putLaborActivityClient$(
        laborActivity: ClientLaborActivityInterface,
        id: string,
    ): Observable<ClientLaborActivityInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/labor-activity/${id}`;
        return this.http.put<ClientLaborActivityInterface>(url, laborActivity).pipe(
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);
                return EMPTY;
            }),
        );
    }
}
