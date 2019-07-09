import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ServerConnectionService {
    constructor(private http: HttpClient) {}

    getRequest(url: string , id: number) {
        return this.http.get(url);
    }
}
