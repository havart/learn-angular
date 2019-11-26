import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlGetStep } from '../configs/url-get.const';
import { map, filter } from 'rxjs/operators';
import { getCommentsById } from '../+store/comments/comments.selectors';
import { Store, select } from '@ngrx/store';
import { GlobalState } from 'src/app/+store';
import { CommentInterface } from '../interfaces/comment.interface';

@Injectable({
    providedIn: 'root',
})
export class GetCommentService {
    constructor(private readonly http: HttpClient, private readonly store$: Store<GlobalState>) {}

    public getComment$(): Observable<CommentInterface[]> {
        return this.http
            .get<CommentInterface[]>(urlGetStep)
            .pipe(map((steps: CommentInterface[]) => steps.filter(({ isComment }: CommentInterface) => isComment)));
    }

    getCommentsByClientId$(id: string): Observable<CommentInterface[]> {
        return this.store$.pipe(
            select(getCommentsById(id)),
            filter(Boolean),
            map(({ comments }) => comments),
        );
    }
}
