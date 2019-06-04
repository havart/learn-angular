import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { ICommentStep } from 'src/app/interfaces/commentStep.interface';
import { Observable } from 'rxjs';
import { filter, map, switchMapTo, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { selectCommentsSteps } from '../../store/comments-steps/comments-steps.selector';
import { AddComment, GetCommentsSteps } from '../../store/comments-steps/comments-steps.action';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getComments$(clientId: string): Observable<ICommentStep[]> {
        const sourceComments$: Observable<ICommentStep[]> = this.store$.select(selectCommentsSteps(clientId));

        sourceComments$
            .pipe(
                take(1),
                filter((comments: ICommentStep[]) => !comments),
                switchMapTo(this.httpClient.get<ICommentStep[]>(this.api.COMMENT_STEP_URL)),
                map((comments: ICommentStep[]) => comments),
            )
            .subscribe((comments: ICommentStep[]) => {
                this.store$.dispatch(new GetCommentsSteps({ clientId, commentsSteps: comments }));
            });

        return sourceComments$;
    }

    addComment$(comment: ICommentStep, clientId: string): Observable<void> {
        return this.httpClient
            .post<void>(this.api.COMMENT_STEP_URL, comment)
            .pipe(tap(() => this.store$.dispatch(new AddComment({ clientId, commentStep: comment }))));
    }
}
