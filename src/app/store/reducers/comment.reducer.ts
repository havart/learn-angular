import { ActionReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IComment } from '../../interfaces/comment.interface';
import { CommentsActions, CommentActionsType, GetComments, AddComment } from '../actions/comment.action';

export interface ICommentState {
    clientId: string;
    comments: IComment[];
}

export const commentAdapter = createEntityAdapter<ICommentState>({
    selectId: ({ clientId }: ICommentState) => clientId,
});

export interface ICommentListState extends EntityState<ICommentState> {}

export const commentsInitialState: ICommentListState = commentAdapter.getInitialState({});

export interface DictionaryInterface<T> {
    [key: string]: T;
}

const reducers: DictionaryInterface<ActionReducer<ICommentListState, CommentsActions>> = {
    [CommentActionsType.GET_COMMENTS]: getComments,
    [CommentActionsType.ADD_COMMENT]: addComment,
};

function getComments(state: ICommentListState, { payload }: GetComments): ICommentListState {
    return commentAdapter.upsertOne(payload, state);
}

function addComment(state: ICommentListState, { payload }: AddComment): ICommentListState {
    return commentAdapter.upsertOne(
        { clientId: payload.clientId, comments: [...state.entities[payload.clientId].comments, payload.comment] },
        state,
    );
}

export function reducer(state: ICommentListState = commentsInitialState, action: CommentsActions): ICommentListState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities } = commentAdapter.getSelectors();
