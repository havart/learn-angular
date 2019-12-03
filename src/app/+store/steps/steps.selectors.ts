import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSteps from './steps.reducer';
import { Dictionary } from '@ngrx/entity';

export const getStepsState = createFeatureSelector<fromSteps.StepsStateInterface>('steps');

const getStepsEntities = createSelector(
    getStepsState,
    fromSteps.getStepsEntities,
);

export const getStepsById = (clientId: string) =>
    createSelector(
        getStepsEntities,
        (steps: Dictionary<fromSteps.StepListInterface>) => steps[clientId] && steps[clientId].steps,
    );
