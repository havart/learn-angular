import { ActionReducer } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';
import {
    LaborActions,
    LaborActionsType,
    UpsertLabor,
    SelectedLaborSet,
    IsLoadingLabor,
    AddLabor,
} from './client-labor.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const laborAdapter = createEntityAdapter<ILabor>({
    selectId: ({ id }: ILabor) => id,
});
export interface DictionaryInterface<T> {
    [key: string]: T;
}

export interface ILaborState extends EntityState<ILabor> {
    selectedId: string;
    isLoading: boolean;
}

export const laborInitialState: ILaborState = laborAdapter.getInitialState({ selectedId: null, isLoading: false });

const reducers: DictionaryInterface<ActionReducer<ILaborState, LaborActions>> = {
    [LaborActionsType.UPSERT]: upsertLabor,
    [LaborActionsType.SELECTED_LABOR_SET]: selectedLaborSet,
    [LaborActionsType.LABOR_IS_LOADING]: setLaborIsLoading,
    [LaborActionsType.ADD_LABOR]: addLabor,
    [LaborActionsType.UPDATE_LABOR]: updateLabor,
};
function upsertLabor(state: ILaborState, { payload }: UpsertLabor): ILaborState {
    return laborAdapter.upsertOne(payload, state);
}
function setLaborIsLoading(state: ILaborState, { payload }: IsLoadingLabor): ILaborState {
    return { ...state, isLoading: payload };
}
function addLabor(state: ILaborState, { payload }: AddLabor): ILaborState {
    return laborAdapter.upsertOne(payload, state);
}
function updateLabor(state: ILaborState, { payload }: AddLabor): ILaborState {
    return laborAdapter.upsertOne(payload, state);
}
function selectedLaborSet(state: ILaborState, { payload }: SelectedLaborSet): ILaborState {
    return { ...state, selectedId: payload };
}
export function reducer(state: ILaborState = laborInitialState, action: LaborActions): ILaborState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}
export const { selectEntities } = laborAdapter.getSelectors();
