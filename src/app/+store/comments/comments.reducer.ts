import { CommentsAction, CommentsActionTypes, CommentsUpsertAction } from './comments.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';
import { CommentsInterface } from 'src/app/interfaces/comment.interface';

export const commentsAdapter = createEntityAdapter<CommentsInterface>({
    selectId: ({ clientId }: CommentsInterface) => clientId,
});

export interface CommentsStateInterface extends EntityState<CommentsInterface> {}

export const commentsInitialState: CommentsStateInterface = commentsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<CommentsStateInterface, CommentsAction>> = {
    [CommentsActionTypes.UPSERT_COMMENTS]: upsertComment,
    [GlobalActionTypes.RESET]: reset,
};

function reset(state: CommentsStateInterface): CommentsStateInterface {
    return commentsAdapter.removeAll(state);
}

function upsertComment(state: CommentsStateInterface, { payload }: CommentsUpsertAction): CommentsStateInterface {
    return commentsAdapter.upsertOne(payload, state);
}

export function reducer(
    state: CommentsStateInterface = commentsInitialState,
    action: CommentsAction,
): CommentsStateInterface {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
    selectIds: getCommentsIds,
    selectEntities: getCommentsEntities,
    selectAll: getAllCommentstInfo,
} = commentsAdapter.getSelectors();
