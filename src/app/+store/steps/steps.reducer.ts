import { StepsStateInterface } from '../../interfaces/steps-state.interface';
import { StepsAction, StepsActionTypes, StepsUpsertAction } from './steps.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';

export const stepsAdapter = createEntityAdapter<StepsStateInterface>({
    selectId: ({ clientId }: StepsStateInterface) => clientId,
});

export interface StepsState extends EntityState<StepsStateInterface> {}

export const stepsInitialState: StepsState = stepsAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<StepsState, StepsAction>> = {
    [StepsActionTypes.UPSERT_STEPS]: upsertSteps,
    [GlobalActionTypes.RESET_STATE]: reset,
};

function reset(state: StepsState): StepsState {

    return stepsAdapter.removeAll(state);
}

function upsertSteps(state: StepsState, { payload }: StepsUpsertAction): StepsState {

    return stepsAdapter.upsertOne(payload, state);
}

export function reducer(state: StepsState = stepsInitialState, action: StepsAction): StepsState {

    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities: getStepsEntities } = stepsAdapter.getSelectors();
