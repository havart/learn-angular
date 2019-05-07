import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { StepInterface } from '../../interfaces/steps.interface';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private config: API) {}

    get$(): Observable<StepInterface[]> {
        return this.httpClient.get<StepInterface[]>(this.config.STEPS_URL);
    }
}
