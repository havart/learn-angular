import { StepsAction, StepsActionTypes, StepsUpsertAction } from './steps.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';
import { StepInterface } from 'src/app/interfaces/step.interface';

export interface StepListInterface {
    clientId: string;
    steps: StepInterface[];
}

export const stepsAdapter = createEntityAdapter<StepListInterface>({
    selectId: ({ clientId }: StepListInterface) => clientId,
});

export interface StepsStateInterface extends EntityState<StepListInterface> {}

export const stepsInitialState: StepsStateInterface = stepsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<StepsStateInterface, StepsAction>> = {
    [StepsActionTypes.UPSERT_STEPS]: upsertComment,
    [GlobalActionTypes.RESET]: reset,
};

function reset(state: StepsStateInterface): StepsStateInterface {
    return stepsAdapter.removeAll(state);
}

function upsertComment(state: StepsStateInterface, { payload }: StepsUpsertAction): StepsStateInterface {
    return stepsAdapter.upsertOne(payload, state);
}

export function reducer(state: StepsStateInterface = stepsInitialState, action: StepsAction): StepsStateInterface {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
    selectIds: getStepsIds,
    selectEntities: getStepsEntities,
    selectAll: getAllStepstInfo,
} = stepsAdapter.getSelectors();
