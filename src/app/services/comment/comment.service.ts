import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../API';
import { IComment } from 'src/app/interfaces/comment.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Error } from 'tslint/lib/error';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    comments$: Observable<IComment[]>;
    private _comments$: BehaviorSubject<IComment[]>;

    constructor(private httpClient: HttpClient, private api: API) {
        this._comments$ = new BehaviorSubject<IComment[]>([]);
        this.comments$ = this._comments$.asObservable();
    }

    getComments$(): Observable<void> {
        return this.httpClient.get<IComment[]>(this.api.COMMENT_URL).pipe(
            map((comment: IComment[]) => {
                this._comments$.next(comment);
            }),
            catchError((err: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(err)));
            }),
        );
    }

    updateComment$(comment: IComment, id: string): Observable<IComment> {
        return this.httpClient.put<IComment>(`${this.api.COMMENT_URL}/${id}`, comment);
    }

    addComment$(comment: IComment): Observable<void> {
        return this.httpClient.post(this.api.COMMENT_URL, comment).pipe(
            tap(() => {
                this._comments$.next([...this._comments$.getValue(), comment]);
            }),
            catchError((err: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(err)));
            }),
        );
    }
}
