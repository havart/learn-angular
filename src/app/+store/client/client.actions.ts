import { Action } from '@ngrx/store';
import { ClientInterface } from '../../interfaces/client.interface';

export enum ClientActionTypes {
    UPSERT_CLIENT = '[CLIENT] UPSERT_CLIENTS',
    CLIENT_IS_LOADING = '[CLIENT] CLIENT_IS_LOADING',
}

export class ClientUpsertAction implements Action {
    readonly type = ClientActionTypes.UPSERT_CLIENT;

    constructor(public payload: ClientInterface) {}
}

export class ClientIsLoadingAction implements Action {
  readonly type = ClientActionTypes.CLIENT_IS_LOADING;

  constructor(public payload: boolean) {}
}

export type ClientAction = ClientUpsertAction | ClientIsLoadingAction;
