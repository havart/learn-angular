import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../interfaces/client.interface';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    constructor(private http: HttpClient, private router: Router) {}
    client: ClientInterface;

    clinetSource = new BehaviorSubject<ClientInterface>(this.client);
    client$: Observable<ClientInterface> = this.clinetSource.asObservable();

    setClient(client: ClientInterface) {
        this.clinetSource.next(client);
    }

    getTask$(id: number): Observable<ClientInterface> {
        const url = `http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/${id}`;
        return this.http.get<ClientInterface>(url);
    }
}
