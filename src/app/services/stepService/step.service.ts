import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { StepsInterface } from '../../interfaces/steps.interface';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private config: API) {}

    get(): Observable<StepsInterface>[] {
        return this.httpClient.get(this.config.STEPS_URL);
    }
}
