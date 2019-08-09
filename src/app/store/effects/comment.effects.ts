import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientService } from '../../services/client.service';
import { MathHelper } from '../../helpers/math.helper';
import { CommentsService } from '../../services/comments.service';
import { CommentActionEnum, GetComment, GetCommentSuccess } from '../actions/comment.action';
import { ClientActionsEnum } from '../actions/client.action';
import { map, switchMap } from 'rxjs/operators';
import { CommentInterface } from '../../interfaces/comment.interface';

@Injectable()
export class CommentEffects {
    @Effect()
    getComment$ = this.actions$.pipe(
        ofType<GetComment>(CommentActionEnum.GetComment),
        switchMap(action => {
            console.log(action);
            return this.commentService.getComments$();
        }),
        map((clientHttp: CommentInterface[]) => new GetCommentSuccess(clientHttp)),
    );

    constructor(private commentService: CommentsService, private actions$: Actions, private mathHelper: MathHelper) {}
}
