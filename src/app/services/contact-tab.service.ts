import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ContactTabInterface } from '../interfaces/contact-tab.interface';
import { NotificationErrorService } from './notification-error.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ContactTabService {
    constructor(private http: HttpClient, private notificationErrorService: NotificationErrorService) {}

    getInformationFromServer$(): Observable<ContactTabInterface[]> {
        const url = 'https://5bfff0a00296210013dc7e82.mockapi.io/test/contacts';

        return this.http.get<ContactTabInterface[]>(url).pipe(
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);

                return EMPTY;
            }),
        );
    }
}
