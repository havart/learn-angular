import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
    RESET = '[Global] Reset',
}

export class Reset implements Action {
    readonly type = GlobalActionTypes.RESET;
}
