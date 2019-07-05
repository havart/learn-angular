import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ServerConnectionService {
    constructor(private http: HttpClient) {}

    getClient(id: number) {
        const url = 'http://5bfff0a00296210013dc7e82.mockapi.io/test/user-info/' + id;
        console.log(url);
        return this.http.get(url);
    }
}
