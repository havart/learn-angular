import { LABOR } from './client-labor/client-labor.selector';
import { COMMENTS_STEPS } from './comments-steps/comments-steps.selector';
import { CLIENT } from './client/client.selector';
import * as fromLabor from './client-labor/client-labor.reducer';
import * as fromCommentsSteps from './comments-steps/comments-steps.reducer';
import * as fromClient from './client/client.reducer';
import { environment } from '../../environments/environment';
import { ActionReducerMap, ActionReducer, MetaReducer, Action } from '@ngrx/store';

export interface IAppState {
    [LABOR]: fromLabor.ILaborState;
    [COMMENTS_STEPS]: fromCommentsSteps.ICommentStepListState;
    [CLIENT]: fromClient.IClientState;
}

export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: any, action: any) => {
        if (action.type === 'SET_ROOT_STATE') {
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
    [COMMENTS_STEPS]: fromCommentsSteps.reducer,
    [CLIENT]: fromClient.reducer,
};
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
    ? [stateSetter, stateReset]
    : [stateReset];
