import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CommentsService {
    constructor(private http: HttpClient) {}

    getComments$(): Observable<CommentInterface[]> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/steps`;
        return this.http
            .get<CommentInterface[]>(url)
            .pipe(map((comments: CommentInterface[]) => comments.filter(comment => comment.isComment === true)));
    }

    putComments$(commentData: CommentInterface): Observable<CommentInterface[]> {
        const url = `https://5bfff0a00296210013dc7e82.mockapi.io/test/steps/${commentData.id}`;
        return this.http.put<CommentInterface[]>(url, commentData);
    }
}
