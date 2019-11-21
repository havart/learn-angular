import { ActionReducerMap } from '@ngrx/store';
import { clientReducer } from './client.reducer';
import { AppState } from '../app.state';

export const appReducers: ActionReducerMap<AppState> = {
    client: clientReducer,
};
