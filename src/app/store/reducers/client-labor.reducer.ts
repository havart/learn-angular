import { Action, createSelector, State, createFeatureSelector } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';
import { LaborActions, LaborUnion } from '../actions/client-labor.action';

export interface State {
    clientsLabor: ILabor;
}

const initialState: State = {
    clientsLabor: {
            id: null,
            createdAt: null,
            type: 'gggggg',
            organizationAddress: null,
            address: null,
            position: 'null',
            occupation: null,
            startDate: null,
            income: null,
            workPhone: null,
            site: null,
        },
};

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
export function laborReducer(state = initialState, action: LaborUnion ) {
    switch (action.type) {
        case LaborActions.GetLabor:
            return { ...state, clientsLabor: action.payload.clientLabor};
        case LaborActions.PutLabor:
            return { ...state, clientsLabor: action.payload.clientLabor };
        case LaborActions.PostLabor:
            return { ...state };
        case LaborActions.GetLaborError:
            return { ...state, labor: [] };
        default:
            return state;
    }
}
// const selectLabor = (state: State) => state.clientsLabor ;
const selectLabor = (state) => state.clientsLabor ;
// export const getLaborState = createFeatureSelector<ILabor>('labor');
export const getSelectLabor = createSelector(
     selectLabor,
    (state: ILabor) => state,
);
