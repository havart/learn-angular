import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalState } from '../+store';
import { CommentsUpsertAction } from '../+store/comments/comments.actions';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { CommentInterface } from '../interfaces/comment.interface';
import { ApiService } from './api.service';
import { ErrorSnackBarService } from './error-snack-bar.service';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(
        private readonly http: HttpClient,
        private readonly config: ApiService,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    public getComment$(id: string): Observable<CommentInterface[]> {
        const storeComments$: Observable<CommentInterface[]> = this.store$.select(getCommentsById(id));

        storeComments$
            .pipe(
                take(1),
                filter((comments: CommentInterface[]) => !comments),
                switchMap(() => this.http.get<CommentInterface[]>(this.config.COMMENTS_URL)),
                map((comments: CommentInterface[]) =>
                    comments.filter((comment: CommentInterface) => comment.isComment),
                ),
            )
            .subscribe(
                (result: CommentInterface[]) => {
                    this.store$.dispatch(new CommentsUpsertAction({ clientId: id, comments: result }));
                },
                catchError((error: HttpErrorResponse) => {
                    this.errorSnackBarService.openSnackBarError(error.status);

                    return EMPTY;
                }),
            );

        return storeComments$;
    }
}
