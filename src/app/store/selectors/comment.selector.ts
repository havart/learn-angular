import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComments from '../reducers/comment.reducer';
import { Dictionary } from '@ngrx/entity';

export const COMMENTS = 'comments';
export const selectCommentsState = createFeatureSelector<fromComments.ICommentListState>(COMMENTS);

export const selectCommentsEntities = createSelector(
    selectCommentsState,
    fromComments.selectEntities,
);

export const selectComments = (id: string) =>
    createSelector(
        selectCommentsEntities,
        (entities: Dictionary<fromComments.ICommentState>) => entities[id] && entities[id].comments,
    );
