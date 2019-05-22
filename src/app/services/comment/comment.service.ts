import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../API';
import { IComments } from 'src/app/interfaces/comment.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Error } from 'tslint/lib/error';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    comments$: Observable<IComments[]>;
    private _comments$: BehaviorSubject<IComments[]>;

    constructor(private httpClient: HttpClient, private api: API) {
        this._comments$ = new BehaviorSubject<IComments[]>([]);
        this.comments$ = this._comments$.asObservable();
    }

    getComments$(): Observable<void> {
        return this.httpClient.get<IComments[]>(this.api.COMMENT_URL).pipe(
            map((comment: IComments[]) => {
                this._comments$.next([...comment]);
            }),
            catchError((err: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(err)));
            }),
        );
    }

    updateComment$(comment: IComments, id: string): Observable<IComments> {
        return this.httpClient.put<IComments>(`${this.api.COMMENT_URL}/${id}`, comment);
    }

    addComment$(comment: IComments): Observable<void> {
        return this.httpClient.post(this.api.COMMENT_URL, comment).pipe(
            map(() => {
                this._comments$.next([...this._comments$.getValue(), comment]);
            }),
            catchError((err: HttpErrorResponse) => {
                return throwError(new Error(JSON.stringify(err)));
            }),
        );
    }
}
