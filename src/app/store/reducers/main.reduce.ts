import { ActionReducerMap } from '@ngrx/store';
import { MainState } from '../state/main.state';
import { clientReducers } from './client.reduce';

export const mainReducers: ActionReducerMap<MainState> = {
    client: clientReducers,
};
