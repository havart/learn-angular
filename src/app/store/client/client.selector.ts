import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClient from './client.reducer';
import { Dictionary } from '@ngrx/entity';
import { IClient } from 'src/app/interfaces/client.interface';

export const CLIENT = 'client';
export const getClientState = createFeatureSelector<fromClient.IClientState>(CLIENT);

export const selectClientEntities = createSelector(
    getClientState,
    fromClient.selectEntities,
);

export const selectLoadingStatus = createSelector(
    getClientState,
    ({ isLoading }: fromClient.IClientState) => isLoading,
);

export const selectedClientId = createSelector(
    getClientState,
    ({ selectedId }: fromClient.IClientState) => selectedId,
);

export const selectGetClient = createSelector(
    selectedClientId,
    selectClientEntities,
    (clientId: string, entities: Dictionary<IClient>) => entities[clientId],
);
