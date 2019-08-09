import { MainState } from '../state/main.state';
import { createSelector } from '@ngrx/store';
import { CommentState } from '../state/commtent.state';

const selectState = (state: MainState) => state.comment;

export const selectComment = createSelector(
    selectState,
    (state: CommentState) => state.comment,
);
