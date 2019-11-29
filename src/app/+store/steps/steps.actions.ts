import { Action } from '@ngrx/store';
import { StepInterface } from '../../interfaces/step.interface';

export enum StepsActionTypes {
    UPSERT_STEPS = '[STEPS] UPSERT_STEPS',
}

export class StepsUpsertAction implements Action {
    readonly type = StepsActionTypes.UPSERT_STEPS;

    constructor(
        public payload: {
            clientId: string;
            steps: StepInterface[];
        },
    ) {}
}

export type StepsAction = StepsUpsertAction;
