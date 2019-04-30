import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient) {}

    get(apiUrl: string) {
        return this.httpClient.get(apiUrl);
    }
}