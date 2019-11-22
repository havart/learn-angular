import { Action } from '@ngrx/store';
import { CommentInterface } from 'src/app/interfaces/comment.interface';

export enum CommentsActionTypes {
    UPSERT_COMMENTS = '[COMMENTS] Upsert Comments',
}

export class CommentsUpsertAction implements Action {
    readonly type = CommentsActionTypes.UPSERT_COMMENTS;

    constructor(public payload) {}
}

export type CommentsAction = CommentsUpsertAction;

export const fromCommentsActions = {
    CommentsUpsertAction,
};
