import { ActionReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IStep } from 'src/app/interfaces/steps.interface';
import { StepsActionsType, StepsActions, GetSteps } from '../actions/steps.action';

export const stepsAdapter = createEntityAdapter<IStep>({
    selectId: ({ id }: IStep) => id,
});
export interface DictionaryInterface<T> {
    [key: string]: T;
}

export interface IStepState extends EntityState<IStep> {
    steps: IStep[];
}

export const stepsInitialState: IStepState = stepsAdapter.getInitialState({
    steps: [],
});

const reducers: DictionaryInterface<ActionReducer<IStepState, StepsActions>> = {
    [StepsActionsType.GET_STEPS]: getSteps,
};

function getSteps(state: IStepState, { payload }: GetSteps): IStepState {
    return stepsAdapter.addMany(payload, state);
}

export function reducer(state: IStepState = stepsInitialState, action: StepsActions): IStepState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectIds, selectEntities, selectAll } = stepsAdapter.getSelectors();
