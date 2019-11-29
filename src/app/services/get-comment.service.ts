import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalState } from '../+store';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { CommentInterface } from '../interfaces/comment.interface';
import { ApiService } from './api.service';
import { CommentsState } from '../interfaces/comments-state.interface';
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

    public getComment$(): Observable<CommentInterface[]> {

        return this.http.get<CommentInterface[]>(this.config.COMMENTS_URL).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((comments: CommentInterface[]) => comments.filter(({ isComment }: CommentInterface) => isComment)),
        );
    }
    public getCommentsByClientId$(id: string): Observable<CommentInterface[]> {

        return this.store$.pipe(
            select(getCommentsById(id)),
            filter(Boolean),
            map(({ comments }: CommentsState) => comments),
        );
    }
}
