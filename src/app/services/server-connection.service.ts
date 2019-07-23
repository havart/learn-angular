import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';

@Injectable({
    providedIn: 'root',
})
export class ServerConnectionService {

    constructor(private http: HttpClient) {}

    getRequest$(url: string): Observable<CommentInterface[]> {
        return this.http.get<CommentInterface[]>(url);
    }
}
