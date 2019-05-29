import { IClientLaborState, initialClientLaborState } from './client-labor.state';
import { RouterReducerState } from '@ngrx/router-store';
import { LABOR } from '../selectors/client-labor.selector';
import { ILaborState, laborInitialState } from '../reducers/client-labor.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer, Action } from '@ngrx/store';
import * as fromLabor from '../reducers/client-labor.reducer';
import { environment } from '../../../environments/environment';
export interface IAppState {
    [LABOR]: ILaborState;
}


export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: any, action: any) => {
        if (action.type === 'SET_ROOT_STATE') {
            // tslint:disable-next-line:no-console
            console.log('[SET_ROOT_STATE]', action.payload);

            return action.payload;
        }

        return reducer(state, action);
    };
}
export function stateReset(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return (state: IAppState, action: Action) => {
        if (action.type === 'RESET_STATE') {
            state = undefined;
        }

        return reducer(state, action);
    };
}
export const reducers: ActionReducerMap<IAppState> = {
    [LABOR]: fromLabor.reducer,
};
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
    ? [stateSetter, stateReset]
    : [stateReset];
