import { Action } from '@ngrx/store';
import { CommentInterface } from '../../interfaces/comment.interface';

export enum CommentsActionTypes {
    UPSERT_COMMENTS = '[COMMENTS] UPSERT_COMMENTS',
}

export class CommentsUpsertAction implements Action {
    readonly type = CommentsActionTypes.UPSERT_COMMENTS;

    constructor(
        public payload: {
            clientId: string;
            comments: CommentInterface[];
        },
    ) {}
}

export type CommentsAction = CommentsUpsertAction;
