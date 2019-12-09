import { Action } from '@ngrx/store';
import { GlobalState } from './index';

export enum GlobalActionTypes {
    RESET_STATE = '[GLOBAL] Reset',
    SET_ROOT_STATE = '[GLOBAL] Set root state',
}

export class SetRootState implements Action {
    readonly type = GlobalActionTypes.SET_ROOT_STATE;

    constructor(public payload: GlobalState) {}
}

export class Reset implements Action {
    readonly type = GlobalActionTypes.RESET_STATE;
}
