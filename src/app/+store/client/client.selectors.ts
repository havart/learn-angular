import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClient from './client.reducer';
import { Dictionary } from '@ngrx/entity';
import { ClientInterface } from 'src/app/interfaces/client.interface';

const getClientState = createFeatureSelector<fromClient.ClientStateInterface>('client');

const getClientEntities = createSelector(
    getClientState,
    fromClient.getClientEntities,
);

export const getClientById = (clientId: string) =>
    createSelector(
        getClientEntities,
        (client: Dictionary<ClientInterface>) => client[clientId],
    );
