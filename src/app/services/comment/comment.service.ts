import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { IComment } from 'src/app/interfaces/comment.interface';
import { Observable } from 'rxjs';
import { filter, map, switchMapTo, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectGetComments } from '../../store/selectors/comment.selector';
import { AddComment, GetComments } from '../../store/actions/comment.action';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API, private store$: Store<IAppState>) {}

    getComments$(): Observable<IComment[]> {
        const sourceComments$: Observable<IComment[]> = this.store$.select(selectGetComments);

        sourceComments$
            .pipe(
                take(1),
                filter((comments: IComment[]) => !comments.length),
                switchMapTo(this.httpClient.get<IComment[]>(this.api.COMMENT_URL)),
                map((comments: IComment[]) => comments.filter((comment: IComment) => comment.isComment)),
            )
            .subscribe((comments: IComment[]) => this.store$.dispatch(new GetComments(comments)));

        return sourceComments$;
    }

    addComment$(comment: IComment): Observable<void> {
        return this.httpClient
            .post(this.api.COMMENT_URL, comment)
            .pipe(map((commentItem: IComment) => this.store$.dispatch(new AddComment(commentItem))));
    }
}
