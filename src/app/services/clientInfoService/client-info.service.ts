import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientInfoService {
    constructor(private httpClient: HttpClient) {}

    get(url: string) {
        return this.httpClient.get(url);
    }

    get(url: string, id: string) {
        return this.httpClient.get(url + id);
    }
}
