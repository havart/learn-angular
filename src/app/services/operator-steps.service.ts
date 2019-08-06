import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';
import { map, catchError } from 'rxjs/operators';
import { StepInterface } from '../interfaces/step.interface';
import { NotificationErrorService } from './notification-error.service';

@Injectable({
    providedIn: 'root',
})
export class OperatorStepsService {
    constructor(private http: HttpClient, private notificationErrorService: NotificationErrorService) {}

    getSteps$(): Observable<StepInterface[]> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/steps`;
        return this.http.get<CommentInterface[]>(url).pipe(
            map((steps: StepInterface[]) => steps.filter(step => step.isComment === false)),
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);
                return EMPTY;
            }),
        );
    }
}
