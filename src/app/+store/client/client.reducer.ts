import { ClientAction, ClientActionTypes, ClientUpsertAction } from './client.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';
import { ClientInterface } from 'src/app/interfaces/client.interface';

export const clientAdapter = createEntityAdapter<ClientInterface>({
    selectId: ({ id }: ClientInterface) => id,
});

export interface ClientStateInterface extends EntityState<ClientInterface> {}

export const clientInitialState: ClientStateInterface = clientAdapter.getInitialState({});

const reducers: Record<string, ActionReducer<ClientStateInterface, ClientAction>> = {
    [ClientActionTypes.UPSERT_CLIENT]: upsertClient,
    [GlobalActionTypes.RESET]: reset,
};

function reset(state: ClientStateInterface): ClientStateInterface {
    return clientAdapter.removeAll(state);
}

function upsertClient(state: ClientStateInterface, { payload }: ClientUpsertAction): ClientStateInterface {
    return clientAdapter.upsertOne(payload, state);
}

export function reducer(state: ClientStateInterface = clientInitialState, action: ClientAction): ClientStateInterface {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const {
    selectIds: getClientIds,
    selectEntities: getClientEntities,
    selectAll: getAllClientInfo,
} = clientAdapter.getSelectors();
