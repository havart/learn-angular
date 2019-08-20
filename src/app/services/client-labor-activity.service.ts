import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { ClientLaborActivityInterface } from '../interfaces/client-labor-activity.interface';
import { catchError, tap, switchMapTo } from 'rxjs/operators';
import { NotificationErrorService } from './notification-error.service';
import { Router } from '@angular/router';
import { OPERATOR, TASK_URL } from '../constants/path.constans';
import { Store } from '@ngrx/store';
import { MainState } from '../store/state/main.state';
import { GetLaborActivitySuccess } from '../store/actions/labor-activity.action';

@Injectable({
    providedIn: 'root',
})
export class ClientLaborActivityService {
    constructor(
        private http: HttpClient,
        private notificationErrorService: NotificationErrorService,
        private router: Router,
        private store$: Store<MainState>,
    ) {}

    getLaborActivityClient$(id: string): Observable<ClientLaborActivityInterface> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/labor-activity/${id}`;

        return this.http.get<ClientLaborActivityInterface>(url).pipe(
            tap(() => {
                if (this.router.url === TASK_URL) {
                    this.router.navigate([OPERATOR]);
                }
            }),
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);

                return EMPTY;
            }),
        );
    }

    fetchAndSave$(id: string): Observable<ClientLaborActivityInterface> {
        return of(null).pipe(
            switchMapTo(this.getLaborActivityClient$(id)),
            tap((laborActivity: ClientLaborActivityInterface) => {
                this.saveToStore(laborActivity);
            }),
        );
    }

    saveToStore(laborActivity: ClientLaborActivityInterface): void {
        this.store$.dispatch(new GetLaborActivitySuccess(laborActivity));
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
