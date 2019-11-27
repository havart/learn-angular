import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { urlGetContacts } from '../configs/url-get.const';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { ContactInterface } from '../interfaces/contact.interface';

@Injectable({
    providedIn: 'root',
})
export class GetContactsService {
    constructor(private readonly http: HttpClient, private readonly errorSnackBarService: ErrorSnackBarService) {}

    getContacts$(): Observable<ContactInterface[]> {
        return this.http.get<ContactInterface[]>(urlGetContacts).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((contacts: ContactInterface[]) => [contacts[0], contacts[1]]),
        );
    }
}
