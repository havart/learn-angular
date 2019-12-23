import { CommentsStateInterface } from '../../interfaces/comments-state.interface';
import { CommentsAction, CommentsActionTypes, CommentsUpsertAction } from './comments.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';

export const commentsAdapter = createEntityAdapter<CommentsStateInterface>({
    selectId: ({ clientId }: CommentsStateInterface) => clientId,
});

export interface CommentsState extends EntityState<CommentsStateInterface> {}

export const commentsInitialState: CommentsState = commentsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<CommentsState, CommentsAction>> = {
    [CommentsActionTypes.UPSERT_COMMENTS]: upsertComments,
    [GlobalActionTypes.RESET_STATE]: reset,
};

function reset(state: CommentsState): CommentsState {
    return commentsAdapter.removeAll(state);
}

function upsertComments(state: CommentsState, { payload }: CommentsUpsertAction): CommentsState {
    return commentsAdapter.upsertOne(payload, state);
}

export function reducer(state: CommentsState = commentsInitialState, action: CommentsAction): CommentsState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities: getCommentsEntities } = commentsAdapter.getSelectors();
