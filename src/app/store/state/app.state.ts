import { LABOR } from '../selectors/client-labor.selector';
import { COMMENTS } from '../selectors/comment.selector';
import { ILaborState } from '../reducers/client-labor.reducer';
import { ICommentState } from './comment.state';
import * as fromLabor from '../reducers/client-labor.reducer';
import * as fromComments from '../reducers/comment.reducer';
import { environment } from '../../../environments/environment';
import { ActionReducerMap, ActionReducer, MetaReducer, Action } from '@ngrx/store';

export interface IAppState {
    [LABOR]: ILaborState;
    [COMMENTS]: ICommentState;
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
    [COMMENTS]: fromComments.reducer,
};
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
    ? [stateSetter, stateReset]
    : [stateReset];
