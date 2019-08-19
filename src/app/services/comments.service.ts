import { Injectable } from '@angular/core';
import { Observable, EMPTY, of } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, switchMapTo, tap } from 'rxjs/operators';
import { NotificationErrorService } from './notification-error.service';
import { select, Store } from '@ngrx/store';
import { selectComment } from '../store/selectors/comment.selectors';
import { MainState } from '../store/state/main.state';
import { GetCommentSuccess } from '../store/actions/comment.action';

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    constructor(
        private http: HttpClient,
        private notificationErrorService: NotificationErrorService,
        private store$: Store<MainState>,
    ) {}

    fetchComments$(): Observable<CommentInterface[]> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/steps`;

        return this.http.get<CommentInterface[]>(url).pipe(
            map((comments: CommentInterface[]) => comments.filter(comment => comment.isComment)),
            map((comments: CommentInterface[]) =>
                comments.sort((elementA: CommentInterface, elementB: CommentInterface): number => {
                    return this.compareFunction(elementA, elementB);
                }),
            ),
            map(comments => comments.slice(0, 10)),
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);

                return EMPTY;
            }),
        );
    }

    putComments$(commentData: CommentInterface): Observable<CommentInterface[]> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/steps/${commentData.id}`;

        return this.http.put<CommentInterface[]>(url, commentData).pipe(
            catchError((error: HttpErrorResponse) => {
                this.notificationErrorService.openSnackBarError(error.message);

                return EMPTY;
            }),
        );
    }

    fetchAndSave$(): Observable<CommentInterface[]> {
        return of(null).pipe(
            switchMapTo(this.fetchComments$()),
            tap((data: CommentInterface[]) => {
                this.saveToStore(data);
            }),
        );
    }

    saveToStore(comments: CommentInterface[]): void {
        this.store$.dispatch(new GetCommentSuccess(comments));
    }

    getComments$(): Observable<CommentInterface[]> {
        return this.store$.pipe(select(selectComment));
    }

    private compareFunction(elementA, elementB): number {
        if (elementA.createdAt < elementB.createdAt) {
            return 1;
        }
        if (elementA.createdAt > elementB.createdAt) {
            return -1;
        }

        return 0;
    }
}
