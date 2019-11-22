import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClient from './client.reducer';
import { Dictionary } from '@ngrx/entity';
import { ClientInterface } from 'src/app/interfaces/client.interface';

const getClientState = createFeatureSelector<fromClient.ClientStateInterface>('client');

const getClientEntities = createSelector(
    getClientState,
    fromClient.getClientEntities,
);

// const getAllClientInfo = createSelector(
//     getClientState,
//     fromClient.getAllClientInfo,
// );

export const getClientById = (clientId: string) =>
    createSelector(
        getClientEntities,
        (customerInfo: Dictionary<ClientInterface>) => customerInfo[clientId],
    );

// export const getClient = createSelector(
//     getAllCustomersInfo,
//     (allCustomersInfo: ClientInterface[]) => allCustomersInfo && allCustomersInfo[0],
// );

// export const getClientId = createSelector(
//     getClient,
//     (customerInfo: ClientInterface) => customerInfo && customerInfo.id,
// );
