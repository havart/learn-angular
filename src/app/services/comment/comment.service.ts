import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { IComment } from 'src/app/interfaces/comment.interface';
import { Observable } from 'rxjs';
import { filter, map, switchMapTo, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectComments } from '../../store/selectors/comment.selector';
import { AddComment, GetComments } from '../../store/actions/comment.action';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getComments$(clientId: string): Observable<IComment[]> {
        const sourceComments$: Observable<IComment[]> = this.store$.select(selectComments(clientId));

        sourceComments$
            .pipe(
                take(1),
                filter((comments: IComment[]) => !comments),
                switchMapTo(this.httpClient.get<IComment[]>(this.api.COMMENT_URL)),
                map((comments: IComment[]) => comments.filter((comment: IComment) => comment.isComment)),
            )
            .subscribe((comments: IComment[]) => {
                this.store$.dispatch(new GetComments({ clientId, comments }));
            });

        return sourceComments$;
    }

    addComment$(comment: IComment, clientId: string): Observable<void> {
        return this.httpClient
            .post<void>(this.api.COMMENT_URL, comment)
            .pipe(tap(() => this.store$.dispatch(new AddComment({ clientId, comment }))));
    }
}
