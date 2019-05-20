import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { IComments } from 'src/app/interfaces/comment.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    comments$: Observable<IComments[]>;
    private comment$: BehaviorSubject<IComments[]>;
    private dataComments: IComments[] = [];

    constructor(private httpClient: HttpClient, private api: API) {
        this.comment$ = new BehaviorSubject<IComments[]>([]);
        this.comments$ = this.comment$.asObservable();
    }

    get$(): void {
        this.httpClient.get<IComments[]>(this.api.COMMENT_URL).subscribe(
            data => {
                this.dataComments = data;
                this.comment$.next(data);
            },
            error => console.log('Could not load comments.'),
        );
    }

    updComment(comment: IComments, id: string): Observable<IComments> {
        return this.httpClient.put<IComments>(this.api.COMMENT_URL + '/' + id, comment);
    }

    addComment(comment: IComments): void {
        this.httpClient.post(this.api.COMMENT_URL, comment).subscribe(
            () => {
                this.dataComments = [...this.dataComments, comment];
                this.comment$.next(this.dataComments);
            },
            error => console.log('Could not create comment.'),
        );
    }
}
