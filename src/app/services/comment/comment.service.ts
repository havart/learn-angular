import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { IComments } from 'src/app/interfaces/comment.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API) {}

    get$(): Observable<IComments[]> {
        return this.httpClient.get<IComments[]>(this.api.COMMENT_URL);
    }

    updComment(comment: IComments, id: string): void {
        // return this.httpClient.put<IComments>(this.api.COMMENT_URL + '/' + id, comment);
        return console.log(comment);
    }

    addComment(comment: IComments): void {
        // return this.httpClient.post<IComments>(this.api.COMMENT_URL, comment);
        return console.log(comment);
    }
}
