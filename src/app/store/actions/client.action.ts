import { Action } from '@ngrx/store';
import { IClient } from '../../interfaces/client.interface';

export enum ClientActionsType {
    UPSERT = '[CLIENT] GET_CLIENTS',
    SELECTED_CLIENT_SET = '[CLIENT] SELECTED_CLIENT_SET',
    CLIENT_IS_LOADING = '[CLIENT] CLIENT_IS_LOADING',
}

export class UpsertClient implements Action {
    readonly type = ClientActionsType.UPSERT;

    constructor(public payload: IClient) {}
}

export class IsLoadingClient implements Action {
    readonly type = ClientActionsType.CLIENT_IS_LOADING;

    constructor(public payload: boolean) {}
}

export class SelectedClientSet implements Action {
    readonly type = ClientActionsType.SELECTED_CLIENT_SET;

    constructor(public payload: string) {}
}

export type ClientActions = UpsertClient | SelectedClientSet | IsLoadingClient;
