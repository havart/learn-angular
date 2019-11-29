import { CommentsState } from '../../interfaces/comments-state.interface';
import { CommentsAction, CommentsActionTypes, CommentsUpsertAction } from './comments.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';

export const commentsAdapter = createEntityAdapter<CommentsState>({
    selectId: ({ clientId }: CommentsState) => clientId,
});

export interface CommentsStateInterface extends EntityState<CommentsState> {}

export const commentsInitialState: CommentsStateInterface = commentsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<CommentsStateInterface, CommentsAction>> = {
    [CommentsActionTypes.UPSERT_COMMENTS]: upsertComments,
    [GlobalActionTypes.RESET_STATE]: reset,
};

function reset(state: CommentsStateInterface): CommentsStateInterface {
    return commentsAdapter.removeAll(state);
}

function upsertComments(state: CommentsStateInterface, { payload }: CommentsUpsertAction): CommentsStateInterface {
    return commentsAdapter.upsertOne(payload, state);
}

export function reducer(
    state: CommentsStateInterface = commentsInitialState,
    action: CommentsAction,
): CommentsStateInterface {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities: getCommentsEntities } = commentsAdapter.getSelectors();
