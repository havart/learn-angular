import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientInterface } from '../interfaces/client.interface';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    private id: number;
    client: ClientInterface;

    constructor(private http: HttpClient, private router: Router) {}

    getId(id: number) {
        this.id = id;
        this.getTask();
    }

    getTask() {
        const url = 'http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/' + this.id;
        this.http.get<ClientInterface>(url).subscribe(
            (client: ClientInterface) => {
                this.client = client;
                this.router.navigate(['operator']);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
        );
    }
}
