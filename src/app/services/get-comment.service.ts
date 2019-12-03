import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { urlGetStep } from '../configs/url-get.const';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { CommentInterface } from '../interfaces/comment.interface';
import { ErrorSnackBarService } from './error-snack-bar.service';
import { CommentsUpsertAction } from '../+store/comments/comments.actions';

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
            map((comments: CommentInterface[]) => comments.filter(({ isComment }: CommentInterface) => isComment)),
        );
    }

    getCommentsByClientId$(id: string): Observable<CommentInterface[]> {
        return this.store$.pipe(
            select(getCommentsById(id)),
            tap(client => {
                if (client === undefined) {
                    return this.getComment$().subscribe(steps => {
                        this.setComments(id, steps);
                    });
                }
            }),
            filter(Boolean),
            map(({ comments }) => comments),
        );
    }

    private setComments(id: string, comments: CommentInterface[]): void {
        this.store$.dispatch(new CommentsUpsertAction({ clientId: id, comments }));
    }
}
