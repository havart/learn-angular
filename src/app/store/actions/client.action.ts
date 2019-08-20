import { Action } from '@ngrx/store';
import { ClientInterface } from 'src/app/interfaces/client.interface';

export enum ClientActionsEnum {
    GetClient = 'Get Client',
    GetClientSuccess = 'Get Client Success',
}

export class GetClient implements Action {
    public readonly type = ClientActionsEnum.GetClient;

    constructor(public id: string) {}
}

export class GetClientSuccess implements Action {
    public readonly type = ClientActionsEnum.GetClientSuccess;

    constructor(public payload: ClientInterface) {}
}

export type ClientActions = GetClient | GetClientSuccess;
