import { ActionReducer } from '@ngrx/store';
import { IClient } from '../../interfaces/client.interface';
import {
    ClientActions,
    ClientActionsType,
    IsLoadingClient,
    SelectedClientSet,
    UpsertClient,
} from '../actions/client.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const clientAdapter = createEntityAdapter<IClient>({
    selectId: ({ id }: IClient) => id,
});
export interface DictionaryInterface<T> {
    [key: string]: T;
}

export interface IClientState extends EntityState<IClient> {
    selectedId: string;
    isLoading: boolean;
}

export const laborInitialState: IClientState = clientAdapter.getInitialState({ selectedId: null, isLoading: false });

const reducers: DictionaryInterface<ActionReducer<IClientState, ClientActions>> = {
    [ClientActionsType.UPSERT]: upsertClient,
    [ClientActionsType.SELECTED_CLIENT_SET]: selectedClientSet,
    [ClientActionsType.CLIENT_IS_LOADING]: setClientIsLoading,
};

function upsertClient(state: IClientState, { payload }: UpsertClient): IClientState {
    return clientAdapter.upsertOne(payload, state);
}

function setClientIsLoading(state: IClientState, { payload }: IsLoadingClient): IClientState {
    return { ...state, isLoading: payload };
}

function selectedClientSet(state: IClientState, { payload }: SelectedClientSet): IClientState {
    return { ...state, selectedId: payload };
}

export function reducer(state: IClientState = laborInitialState, action: ClientActions): IClientState {
    return action.type in reducers ? reducers[action.type](state, action) : state;
}

export const { selectEntities } = clientAdapter.getSelectors();
