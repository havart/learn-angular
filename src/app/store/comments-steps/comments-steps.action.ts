import { Action } from '@ngrx/store';
import { ICommentStep } from '../../interfaces/commentStep.interface';
import { ICommentStepState } from './comments-steps.reducer';

export interface IAddComment {
    clientId: string;
    commentStep: ICommentStep;
}
export enum CommentStepActionsType {
    GET_COMMENTS_STEPS = '[COMMENT] GET_COMMENTS_STEPS',
    ADD_COMMENT = '[COMMENT] ADD_COMMENT',
    COMMENT_STEP_IS_LOADING = '[COMMENT] COMMENT_IS_LOADING',
}

export class GetCommentsSteps implements Action {
    readonly type = CommentStepActionsType.GET_COMMENTS_STEPS;
    constructor(public payload: ICommentStepState) {}
}

export class AddComment implements Action {
    readonly type = CommentStepActionsType.ADD_COMMENT;
    constructor(public payload: IAddComment) {}
}

export class IsLoadingCommentStep implements Action {
    readonly type = CommentStepActionsType.COMMENT_STEP_IS_LOADING;

    constructor(public payload: boolean) {}
}

export type CommentsStepsActions = GetCommentsSteps | AddComment | IsLoadingCommentStep;
