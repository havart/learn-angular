import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private config: API) {}

    get() {
        return this.httpClient.get(this.config.STEPS_URL);
    }
}
