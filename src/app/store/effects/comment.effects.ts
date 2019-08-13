import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommentsService } from '../../services/comments.service';
import { CommentActionEnum, GetComment, GetCommentSuccess } from '../actions/comment.action';
import { map, switchMap } from 'rxjs/operators';
import { CommentInterface } from '../../interfaces/comment.interface';

@Injectable()
export class CommentEffects {
    @Effect()
    getComment$ = this.actions$.pipe(
        ofType<GetComment>(CommentActionEnum.GetComment),
        switchMap(action => {
            return this.commentService.fetchComments$();
        }),
        map((clientHttp: CommentInterface[]) => new GetCommentSuccess(clientHttp)),
    );

    constructor(private commentService: CommentsService, private actions$: Actions) {}
}
