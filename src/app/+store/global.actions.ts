import { Action } from '@ngrx/store';
import { GlobalState } from './index';

export enum GlobalActionTypes {
    RESET = '[Global] Reset',
    SET_ROOT_STATE = '[Global] Set root state',
}

export class SetRootState implements Action {
    readonly type = GlobalActionTypes.SET_ROOT_STATE;

    constructor(public payload: GlobalState) {}
}

export class Reset implements Action {
    readonly type = GlobalActionTypes.RESET;
}
