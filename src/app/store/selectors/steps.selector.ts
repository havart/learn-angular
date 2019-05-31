import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSteps from '../reducers/steps.reducer';

export const STEPS = 'steps';
export const selectStepsState = createFeatureSelector<fromSteps.IStepState>(STEPS);

export const selectStepsEntities = createSelector(
    selectStepsState,
    fromSteps.selectEntities,
);

export const selectGetSteps = createSelector(
    selectStepsState,
    fromSteps.selectAll,
);
