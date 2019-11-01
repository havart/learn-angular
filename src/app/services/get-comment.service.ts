import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StepInterface } from '../interfaces/step.interface';
import { urlGetStep } from '../configs/url-get.const';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(private readonly http: HttpClient) {}

    public getComment$(): Observable<StepInterface[]> {
        return this.http
            .get<StepInterface[]>(urlGetStep)
            .pipe(map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => isComment)));
    }
}
