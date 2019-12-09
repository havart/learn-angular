import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClient from './client.reducer';
import { Dictionary } from '@ngrx/entity';
import { ClientInterface } from '../../interfaces/client.interface';

export const getClientState = createFeatureSelector<fromClient.ClientStateInterface>('client');

export const getClientEntities = createSelector(
    getClientState,
    fromClient.getClientEntities,
);

export const clientIsLoadingStatus = createSelector(
    getClientState,
    ({ isLoading }: fromClient.ClientStateInterface) => isLoading,
);

export const getClientById = (clientId: string) =>
    createSelector(
        getClientEntities,
        (client: Dictionary<ClientInterface>) => client[clientId],
    );
