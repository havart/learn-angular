import { RouterReducerState } from '@ngrx/router-store';

import { ClientState, initialClientState } from './state/client.state';

export interface AppState {
    router?: RouterReducerState;
    client: ClientState;

};

export const initialAppState: AppState = {
    client: initialClientState,
}