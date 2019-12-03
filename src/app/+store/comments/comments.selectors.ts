import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComments from './comments.reducer';
import { Dictionary } from '@ngrx/entity';

export const getCommentsState = createFeatureSelector<fromComments.CommentsStateInterface>('comments');

const getCommentsEntities = createSelector(
    getCommentsState,
    fromComments.getCommentsEntities,
);

export const getCommentsById = (clientId: string) =>
    createSelector(
        getCommentsEntities,
        (comments: Dictionary<fromComments.CommentListInterface>) => comments[clientId],
    );
