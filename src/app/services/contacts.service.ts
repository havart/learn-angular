import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { ContactInterface } from '../interfaces/contact.interface';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    constructor(
        private readonly http: HttpClient,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly config: ApiService,
    ) {}

    public fetchContacts$(): Observable<ContactInterface[]> {
        return this.http.get<ContactInterface[]>(this.config.CONTACTS_URL).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((contacts: ContactInterface[]) => contacts),
        );
    }
}
