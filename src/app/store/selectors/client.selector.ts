import { createSelector } from '@ngrx/store';
import { ClientState } from '../state/client.state';
import { MainState } from '../state/main.state';

const selectState = (state: MainState) => state.client;

export const selectClient = createSelector(
    selectState,
    (state: ClientState) => state.client,
);
