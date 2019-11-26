import { ActionReducer, ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromClient from './client/client.reducer';
import * as fromSteps from './steps/steps.reducer';
import * as fromComments from './comments/comments.reducer';
import { GlobalActionTypes, SetRootState } from './global.actions';

export interface GlobalState {
    client: fromClient.ClientStateInterface;
    steps: fromSteps.StepsStateInterface;
    comments: fromComments.CommentsStateInterface;
}

export const reducers: ActionReducerMap<GlobalState> = {
    client: fromClient.reducer,
    steps: fromSteps.reducer,
    comments: fromComments.reducer,
};

export function stateSetter(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
    return (state: GlobalState, action: SetRootState) => {
        if (action.type === GlobalActionTypes.SET_ROOT_STATE) {
            return action.payload;
        }

        return reducer(state, action);
    };
}

export function stateReset(reducer: ActionReducer<GlobalState>): ActionReducer<GlobalState> {
    return (state: GlobalState, action: Action) => {
        if (action.type === 'RESET_STATE') {
            state = undefined;
        }

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production
    ? [stateSetter, storeFreeze, stateReset]
    : [stateReset];

export const effects = [];
