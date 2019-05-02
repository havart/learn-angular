import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { IComments } from 'src/app/interfaces/comment.interface';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private httpClient: HttpClient, private api: API) {}

    get() {
        return this.httpClient.get<IComments[]>(this.api.COMMENT_URL);
    }
}
