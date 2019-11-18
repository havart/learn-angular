import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { StepInterface } from '../interfaces/step.interface';
import { urlGetStep } from '../configs/url-get.const';
import { catchError, map } from 'rxjs/operators';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(private readonly http: HttpClient, private readonly errorSnackBarService: ErrorSnackBarService) {}

    public getComment$(): Observable<StepInterface[]> {

        return this.http.get<StepInterface[]>(urlGetStep).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((steps: StepInterface[]) => steps.filter(({ isComment }: StepInterface) => isComment)),
        );
    }
}
