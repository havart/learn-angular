import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComments from '../reducers/comment.reducer';

export const COMMENTS = 'comments';
export const selectCommentsState = createFeatureSelector<fromComments.ICommentsState>(COMMENTS);

export const selectCommentsEntities = createSelector(
    selectCommentsState,
    fromComments.selectEntities,
);

export const selectGetComments = createSelector(
    selectCommentsState,
    fromComments.selectAll,
);
