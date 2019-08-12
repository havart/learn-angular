import { MainState } from '../state/main.state';
import { createSelector } from '@ngrx/store';
import { CommentState } from '../state/comment.state';

const selectState = (state: MainState) => state.commentList;

export const selectComment = createSelector(
    selectState,
    ({commentList}: CommentState) => commentList,
);
