import { Action } from '@ngrx/store';
import { ClientInterface } from 'src/app/interfaces/client.interface';

export enum ClientActionTypes {
    UPSERT_CLIENT = '[Client] Upsert Client',
}

export class ClientUpsertAction implements Action {
    readonly type = ClientActionTypes.UPSERT_CLIENT;

    constructor(public payload: ClientInterface) {}
}

export type ClientAction = ClientUpsertAction;

export const fromClientActions = {
    ClientUpsertAction,
};
