import { ActionReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ICommentStep } from '../../interfaces/commentStep.interface';
import { CommentsStepsActions, CommentStepActionsType, GetCommentsSteps, AddComment } from './comments-steps.action';

export interface ICommentStepState {
    clientId: string;
    commentsSteps: ICommentStep[];
}

export const commentStepAdapter = createEntityAdapter<ICommentStepState>({
    selectId: ({ clientId }: ICommentStepState) => clientId,
});

export interface ICommentStepListState extends EntityState<ICommentStepState> {}

export const commentsStepsInitialState: ICommentStepListState = commentStepAdapter.getInitialState({});

export interface DictionaryInterface<T> {
    [key: string]: T;
}

const reducers: DictionaryInterface<ActionReducer<ICommentStepListState, CommentsStepsActions>> = {
    [CommentStepActionsType.GET_COMMENTS_STEPS]: getCommentsSteps,
    [CommentStepActionsType.ADD_COMMENT]: addComment,
};

function getCommentsSteps(state: ICommentStepListState, { payload }: GetCommentsSteps): ICommentStepListState {
    return commentStepAdapter.upsertOne(payload, state);
}

function addComment(state: ICommentStepListState, { payload }: AddComment): ICommentStepListState {
    return commentStepAdapter.upsertOne(
        {
            clientId: payload.clientId,
            commentsSteps: [...state.entities[payload.clientId].commentsSteps, payload.commentStep],
        },
        state,
    );
}

export function reducer(
    state: ICommentStepListState = commentsStepsInitialState,
    action: CommentsStepsActions,
): ICommentStepListState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities } = commentStepAdapter.getSelectors();
