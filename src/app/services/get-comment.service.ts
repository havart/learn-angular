import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { urlGetStep } from '../configs/url-get.const';
import { map, filter, catchError } from 'rxjs/operators';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { CommentInterface } from '../interfaces/comment.interface';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(
        private readonly http: HttpClient,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    public getComment$(): Observable<CommentInterface[]> {
        return this.http.get<CommentInterface[]>(urlGetStep).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((steps: CommentInterface[]) => steps.filter(({ isComment }: CommentInterface) => isComment)),
        );
    }

    getCommentsByClientId$(id: string): Observable<CommentInterface[]> {
        return this.store$.pipe(
            select(getCommentsById(id)),
            filter(Boolean),
            map(({ comments }) => comments),
        );
    }
}
