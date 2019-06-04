import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { ICommentStep } from '../../interfaces/commentStep.interface';
import { Observable } from 'rxjs';
import { take, filter, switchMapTo, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { selectCommentsSteps } from '../../store/comments-steps/comments-steps.selector';
import { GetCommentsSteps } from '../../store/comments-steps/comments-steps.action';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getSteps$(clientId: string): Observable<ICommentStep[]> {
        const sourceSteps$: Observable<ICommentStep[]> = this.store$.select(selectCommentsSteps(clientId));

        sourceSteps$
            .pipe(
                take(1),
                filter((steps: ICommentStep[]) => !steps),
                switchMapTo(this.httpClient.get<ICommentStep[]>(this.api.COMMENT_STEP_URL)),
                map((steps: ICommentStep[]) => steps),
            )
            .subscribe((steps: ICommentStep[]) =>
                this.store$.dispatch(new GetCommentsSteps({ clientId, commentsSteps: steps })),
            );
        return sourceSteps$;
    }
}
