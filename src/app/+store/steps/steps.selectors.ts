import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSteps from './steps.reducer';
import { Dictionary } from '@ngrx/entity';
import { StepsInterface } from 'src/app/interfaces/step.interface';

export const getStepsState = createFeatureSelector<fromSteps.StepsStateInterface>('steps');

const getStepsEntities = createSelector(
    getStepsState,
    fromSteps.getStepsEntities,
);

export const getStepsById = (clientId: string) =>
    createSelector(
        getStepsEntities,
        (steps: Dictionary<StepsInterface>) => steps[clientId],
    );
