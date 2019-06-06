import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { ICommentStep } from 'src/app/interfaces/commentStep.interface';
import { Observable } from 'rxjs';
import { delay, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import {
    selectCommentsSteps,
    selectLoadingStatusCommentStep,
} from '../../store/comments-steps/comments-steps.selector';
import { AddComment, GetCommentsSteps, IsLoadingCommentStep } from '../../store/comments-steps/comments-steps.action';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getComments$(clientId: string): Observable<ICommentStep[]> {
        const sourceComments$: Observable<ICommentStep[]> = this.store$
            .select(selectCommentsSteps(clientId))
            .pipe(delay(100));

        sourceComments$.pipe(onceRunOrCatch(this.fetchAndSave$(clientId))).subscribe();

        return sourceComments$;
    }

    fetchAndSave$(clientId: string): Observable<ICommentStep[]> {
        return this.store$.pipe(
            select(selectLoadingStatusCommentStep),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingCommentStep(true));
                return this.httpClient.get<ICommentStep[]>(`${this.api.COMMENT_STEP_URL}`).pipe(
                    map((comments: ICommentStep[]) => comments),

                    tap((comments: ICommentStep[]) => {
                        this.store$.dispatch(new GetCommentsSteps({ clientId, commentsSteps: comments }));
                        this.store$.dispatch(new IsLoadingCommentStep(false));
                    }),
                );
            }),
        );
    }

    addComment$(comment: ICommentStep, clientId: string): Observable<void> {
        return this.httpClient
            .post<void>(this.api.COMMENT_STEP_URL, comment)
            .pipe(tap(() => this.store$.dispatch(new AddComment({ clientId, commentStep: comment }))));
    }
}
