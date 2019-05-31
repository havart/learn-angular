import { Action } from '@ngrx/store';
import { IComment } from '../../interfaces/comment.interface';

export enum CommentActionsType {
    GET_COMMENTS = '[COMMENT] GET_COMMENTS',
    COMMENTS_IS_LOADING = '[COMMENT] COMMENTS_IS_LOADING',
}

export class GetComments implements Action {
    readonly type = CommentActionsType.GET_COMMENTS;
    constructor(public payload: IComment[]) {}
}

export class IsLoadingComments implements Action {
    readonly type = CommentActionsType.COMMENTS_IS_LOADING;
    constructor(public payload: boolean) {}
}

export type CommentsActions = GetComments | IsLoadingComments;
