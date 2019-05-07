import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { ISteps } from '../../interfaces/steps.interface';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private api: API) {}

    get$(): Observable<ISteps[]> {
        return this.httpClient.get<ISteps[]>(this.api.STEPS_URL);
    }
}
