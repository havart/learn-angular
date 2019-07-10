import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}

  getComments$(url: string): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(url);
  }
}
