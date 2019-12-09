import { ClientAction, ClientActionTypes, ClientIsLoadingAction, ClientUpsertAction } from './client.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer } from '@ngrx/store';
import { GlobalActionTypes } from '../global.actions';
import { ClientInterface } from '../../interfaces/client.interface';

export const clientAdapter = createEntityAdapter<ClientInterface>({
    selectId: ({ id }: ClientInterface) => id,
});

export interface ClientStateInterface extends EntityState<ClientInterface> {
    isLoading: boolean;
}

export const clientInitialState: ClientStateInterface = clientAdapter.getInitialState({ isLoading: false });

const reducers: Record<string, ActionReducer<ClientStateInterface, ClientAction>> = {
    [ClientActionTypes.UPSERT_CLIENT]: upsertClient,
    [ClientActionTypes.CLIENT_IS_LOADING]: setClientIsLoading,
    [GlobalActionTypes.RESET_STATE]: reset,
};

function upsertClient(state: ClientStateInterface, { payload }: ClientUpsertAction): ClientStateInterface {

    return clientAdapter.upsertOne(payload, state);
}

function setClientIsLoading(state: ClientStateInterface, { payload }: ClientIsLoadingAction): ClientStateInterface {

    return { ...state, isLoading: payload };
}

function reset(state: ClientStateInterface): ClientStateInterface {

    return clientAdapter.removeAll(state);
}

export function reducer(state: ClientStateInterface = clientInitialState, action: ClientAction): ClientStateInterface {

    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities: getClientEntities } = clientAdapter.getSelectors();
