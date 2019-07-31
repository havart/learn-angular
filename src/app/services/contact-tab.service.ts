import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactTabInterface } from '../interfaces/contact-tab.interface';

@Injectable({
    providedIn: 'root',
})
export class ContactTabService {
    constructor(private http: HttpClient) {}

    getInformationFromServer$(): Observable<ContactTabInterface[]> {
        const url = 'https://5bfff0a00296210013dc7e82.mockapi.io/test/contacts';
        return this.http.get<ContactTabInterface[]>(url);
    }
}
