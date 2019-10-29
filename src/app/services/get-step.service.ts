import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StepInterface } from '../interfaces/step.interface';
import { urlGetStep } from '../configs/url-get.const';

@Injectable({
    providedIn: 'root',
})
export class GetStepService {
    constructor(private http: HttpClient) {}

    getStep$(): Observable<StepInterface[]> {
        return this.http
            .get<StepInterface[]>(urlGetStep)
            .pipe(map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => !isComment)));
    }
}
