import { ActionReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IComment } from '../../interfaces/comment.interface';
import { CommentsActions, CommentActionsType, IsLoadingComments, GetComments } from '../actions/comment.action';

export const commentAdapter = createEntityAdapter<IComment>({
    selectId: ({ id }: IComment) => id,
});
export interface DictionaryInterface<T> {
    [key: string]: T;
}

export interface ICommentsState extends EntityState<IComment> {
    comments: IComment[];
    isLoading: boolean;
}

export const commentInitialState: ICommentsState = commentAdapter.getInitialState({
    comments: [],
    isLoading: false,
});

const reducers: DictionaryInterface<ActionReducer<ICommentsState, CommentsActions>> = {
    [CommentActionsType.GET_COMMENTS]: getComments,
    [CommentActionsType.COMMENTS_IS_LOADING]: setCommentIsLoading,
};

function getComments(state: ICommentsState, { payload }: GetComments): ICommentsState {
    return commentAdapter.addMany(payload, state);
}

function setCommentIsLoading(state: ICommentsState, { payload }: IsLoadingComments): ICommentsState {
    return { ...state, isLoading: payload };
}

export function reducer(state: ICommentsState = commentInitialState, action: CommentsActions): ICommentsState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectIds, selectEntities, selectAll } = commentAdapter.getSelectors();
