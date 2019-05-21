import { createSelector, ActionReducer } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';
import { LaborActions, LaborActionsType, UpsertLabor, SelectedLaborSet } from '../actions/client-labor.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const laborAdapter = createEntityAdapter<ILabor>({
    selectId: ({ id }: ILabor) => id,
});
export interface DictionaryInterface<T> {
    [key: string]: T;
}

export interface ILaborState extends EntityState<ILabor> {
    selectedId: string;
}

export const laborInitialState: ILaborState = laborAdapter.getInitialState({ selectedId: null });

const reducers: DictionaryInterface<ActionReducer<ILaborState, LaborActions>> = {
    [LaborActionsType.UPSERT]: upsertLabor,
    [LaborActionsType.SELECTED_LABOR_SET]: selectedtLaborSet,
};
function upsertLabor(state: ILaborState, { payload }: UpsertLabor): ILaborState {
    return laborAdapter.upsertOne(payload, state);
}
function selectedtLaborSet(state: ILaborState, { payload }: SelectedLaborSet): ILaborState {
    return { ...state, selectedId: payload };
}
export function reducer(state: ILaborState = laborInitialState, action: LaborActions): ILaborState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}
export const { selectIds, selectEntities, selectAll } = laborAdapter.getSelectors();

// export interface ILaborState {
//     clientsLabor: ILabor;
// }

// const initialState: ILaborState = {
//     clientsLabor: {
//             id: null,
//             createdAt: null,
//             type: 'gggggg',
//             organizationAddress: null,
//             address: null,
//             position: 'null',
//             occupation: null,
//             startDate: null,
//             income: null,
//             workPhone: null,
//             site: null,
//         },
// };

// const initialLabor: ILabor = {
//     id: null,
//     createdAt: null,
//     type: 'gggggg',
//     organizationAddress: null,
//     address: null,
//     position: null,
//     occupation: null,
//     startDate: null,
//     income: null,
//     workPhone: null,
//     site: null,
// };

// export function laborReducer(state = initialState, action: LaborUnion) {
// export function laborReducer(state = initialState, action: LaborUnion) {
//     switch (action.type) {
//         case LaborActions.GetLabor:
//             return { ...state, clientsLabor: action.payload.clientLabor };
//         case LaborActions.PutLabor:
//             return { ...state, clientsLabor: action.payload.clientLabor };
//         case LaborActions.PostLabor:
//             return { ...state };
//         case LaborActions.GetLaborError:
//             return { ...state, labor: [] };
//         default:
//             return state;
//     }
// }

// const selectLabor = (state: State) => state.clientsLabor ;
// const selectLabor = state => state.clientsLabor;
// export const getLaborState = createFeatureSelector<ILabor>('labor');
// export const getSelectLabor = createSelector(
//     selectLabor,
//     (state: ILabor) => state,
// );

