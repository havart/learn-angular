import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsStateInterface } from '../../interfaces/comments-state.interface';
import * as fromComments from './comments.reducer';
import { Dictionary } from '@ngrx/entity';

export const getCommentsState = createFeatureSelector<fromComments.CommentsState>('comments');

const getCommentsEntities = createSelector(
    getCommentsState,
    fromComments.getCommentsEntities,
);

export const getCommentsById = (clientId: string) =>
    createSelector(
        getCommentsEntities,
        (comments: Dictionary<CommentsStateInterface>) => comments[clientId] && comments[clientId].comments,
    );
