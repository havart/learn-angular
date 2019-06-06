import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { ICommentStep } from '../../interfaces/commentStep.interface';
import { Observable } from 'rxjs';
import { take, filter, map, tap, switchMap, delay } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import {
    selectCommentsSteps,
    selectLoadingStatusCommentStep,
} from '../../store/comments-steps/comments-steps.selector';
import { GetCommentsSteps, IsLoadingCommentStep } from '../../store/comments-steps/comments-steps.action';
import { onceRunOrCatch } from '../../helpers/onceRunOrCatch';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getSteps$(clientId: string): Observable<ICommentStep[]> {
        const sourceSteps$: Observable<ICommentStep[]> = this.store$
            .select(selectCommentsSteps(clientId))
            .pipe(delay(100));

        sourceSteps$.pipe(onceRunOrCatch(this.fetchAndSave$(clientId))).subscribe();

        return sourceSteps$;
    }

    fetchAndSave$(clientId: string): Observable<ICommentStep[]> {
        return this.store$.pipe(
            select(selectLoadingStatusCommentStep),
            take(1),
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => {
                this.store$.dispatch(new IsLoadingCommentStep(true));
                return this.httpClient.get<ICommentStep[]>(`${this.api.COMMENT_STEP_URL}`).pipe(
                    map((steps: ICommentStep[]) => steps),
                    tap((steps: ICommentStep[]) => {
                        this.store$.dispatch(new GetCommentsSteps({ clientId, commentsSteps: steps }));
                        this.store$.dispatch(new IsLoadingCommentStep(false));
                    }),
                );
            }),
        );
    }
}
