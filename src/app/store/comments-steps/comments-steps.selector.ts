import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommentsSteps from './comments-steps.reducer';
import { Dictionary } from '@ngrx/entity';

export const COMMENTS_STEPS = 'comments';
export const selectCommentsStepsState = createFeatureSelector<fromCommentsSteps.ICommentStepListState>(COMMENTS_STEPS);

export const selectCommentsStepsEntities = createSelector(
    selectCommentsStepsState,
    fromCommentsSteps.selectEntities,
);

export const selectCommentsSteps = (id: string) =>
    createSelector(
        selectCommentsStepsEntities,
        (entities: Dictionary<fromCommentsSteps.ICommentStepState>) => entities[id] && entities[id].commentsSteps,
    );

export const selectLoadingStatusCommentStep = createSelector(
    selectCommentsStepsState,
    ({ isLoading }: fromCommentsSteps.ICommentStepListState) => isLoading,
);
