import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import * as fromSteps from './steps.reducer';
import { StepsState } from '../../interfaces/steps-state.interface';

export const getStepsState = createFeatureSelector<fromSteps.StepsStateInterface>('steps');

const getStepsEntities = createSelector(
    getStepsState,
    fromSteps.getStepsEntities,
);

export const getStepsById = (clientId: string) =>
    createSelector(
        getStepsEntities,
        (steps: Dictionary<StepsState>) => steps[clientId] && steps[clientId].steps,
    );
