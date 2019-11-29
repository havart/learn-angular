import { StepsState } from '../../interfaces/steps-state.interface';
import { StepsAction, StepsActionTypes, StepsUpsertAction } from './steps.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';

export const stepsAdapter = createEntityAdapter<StepsState>({
    selectId: ({ clientId }: StepsState) => clientId,
});

export interface StepsStateInterface extends EntityState<StepsState> {}

export const stepsInitialState: StepsStateInterface = stepsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<StepsStateInterface, StepsAction>> = {
    [StepsActionTypes.UPSERT_STEPS]: upsertSteps,
    [GlobalActionTypes.RESET_STATE]: reset,
};

function reset(state: StepsStateInterface): StepsStateInterface {
    return stepsAdapter.removeAll(state);
}

function upsertSteps(state: StepsStateInterface, { payload }: StepsUpsertAction): StepsStateInterface {
    return stepsAdapter.upsertOne(payload, state);
}

export function reducer(state: StepsStateInterface = stepsInitialState, action: StepsAction): StepsStateInterface {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities: getStepsEntities } = stepsAdapter.getSelectors();
