import { Action } from '@ngrx/store';
import { CommentsStateInterface } from '../../interfaces/comments-state.interface';

export enum CommentsActionTypes {
    UPSERT_COMMENTS = '[COMMENTS] UPSERT_COMMENTS',
}

export class CommentsUpsertAction implements Action {
    readonly type = CommentsActionTypes.UPSERT_COMMENTS;

    constructor(public payload: CommentsStateInterface) {}
}

export type CommentsAction = CommentsUpsertAction;
