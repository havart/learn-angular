import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { ClientActivityInterface } from '../interfaces/client-activity.interface';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ActivityService {
    constructor(
        private readonly http: HttpClient,
        private readonly config: ApiService,
        private readonly errorSnackBarService: ErrorSnackBarService,
    ) {}

    public fetchClientActivity$(id: string): Observable<ClientActivityInterface> {
        return this.http.get<ClientActivityInterface>(this.config.CLIENT_ACTIVITY_URL + id).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
        );
    }
}
