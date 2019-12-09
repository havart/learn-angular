import { Action } from '@ngrx/store';
import { StepsStateInterface } from '../../interfaces/steps-state.interface';

export enum StepsActionTypes {
    UPSERT_STEPS = '[STEPS] UPSERT_STEPS',
}

export class StepsUpsertAction implements Action {
    readonly type = StepsActionTypes.UPSERT_STEPS;

    constructor(public payload: StepsStateInterface) {}
}

export type StepsAction = StepsUpsertAction;
