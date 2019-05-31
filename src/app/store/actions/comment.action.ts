import { Action } from '@ngrx/store';
import { IComment } from '../../interfaces/comment.interface';

export enum CommentActionsType {
    GET_COMMENTS = '[COMMENT] GET_COMMENTS',
    ADD_COMMENT = '[COMMENT] ADD_COMMENT',
}

export class GetComments implements Action {
    readonly type = CommentActionsType.GET_COMMENTS;
    constructor(public payload: IComment[]) {}
}

export class AddComment implements Action {
    readonly type = CommentActionsType.ADD_COMMENT;
    constructor(public payload: IComment) {}
}

export type CommentsActions = GetComments | AddComment;
