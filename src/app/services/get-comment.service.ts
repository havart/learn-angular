import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { urlGetStep } from '../configs/url-get.const';
import { map, catchError, tap } from 'rxjs/operators';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { CommentInterface } from '../interfaces/comment.interface';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { CommentsUpsertAction } from '../+store/comments/comments.actions';
import { onceRunOrCatch } from '../helpers/once-run-or-catch.helper';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(
        private readonly http: HttpClient,
        private readonly errorSnackBarService: ErrorSnackBarService,
        private readonly store$: Store<GlobalState>,
    ) {}

    public getComment$(id): Observable<CommentInterface[]> {
        return this.http.get<CommentInterface[]>(urlGetStep).pipe(
            catchError((error: HttpErrorResponse) => {
                this.errorSnackBarService.openSnackBarError(error.status);

                return EMPTY;
            }),
            map((comments: CommentInterface[]) => comments.filter(({ isComment }: CommentInterface) => isComment)),
            tap(comments => {
                this.setComments(id, comments);
            }),
        );
    }

    public getCommentsByClientId$(id: number): Observable<CommentInterface[]> {
        return this.store$.select(getCommentsById(`${id}`)).pipe(onceRunOrCatch(this.getComment$(id)));
    }

    private setComments(id: string, comments: CommentInterface[]): void {
        this.store$.dispatch(new CommentsUpsertAction({ clientId: id, comments }));
    }
}
