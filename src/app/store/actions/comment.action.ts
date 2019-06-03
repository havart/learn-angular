import { Action } from '@ngrx/store';
import { IComment } from '../../interfaces/comment.interface';
import { ICommentState } from '../reducers/comment.reducer';

export interface IAddComment {
    clientId: string;
    comment: IComment;
}
export enum CommentActionsType {
    GET_COMMENTS = '[COMMENT] GET_COMMENTS',
    ADD_COMMENT = '[COMMENT] ADD_COMMENT',
}

export class GetComments implements Action {
    readonly type = CommentActionsType.GET_COMMENTS;
    constructor(public payload: ICommentState) {}
}

export class AddComment implements Action {
    readonly type = CommentActionsType.ADD_COMMENT;
    constructor(public payload: IAddComment) {}
}

export type CommentsActions = GetComments | AddComment;
