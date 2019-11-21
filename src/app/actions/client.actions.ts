import { Action } from '@ngrx/store';
import { ClientInterface } from '../interfaces/client.interface';

export enum ClientActionTypes {
    GET_CLIENT = '[ClientInterface] Get Client',
    GET_CLIENT_SUCCESS = '[ClientInterface] Get Client Success',
    GET_CLIENT_ERROR = '[ClientInterface] Get Client error',
}

export class GetClient implements Action {
    readonly type = ClientActionTypes.GET_CLIENT;
    constructor(public payload: number) {}
}

export class GetClientSucces implements Action {
    readonly type = ClientActionTypes.GET_CLIENT_SUCCESS;
    constructor(public payload: ClientInterface) {}
}

export class GetClientError implements Action {
    readonly type = ClientActionTypes.GET_CLIENT_ERROR;
    constructor(readonly payload: { message: string }) {}
}

export type ClientActionsUnion = GetClient | GetClientSucces | GetClientError;
