import { Action } from '@ngrx/store';
import { StepInterface } from 'src/app/interfaces/step.interface';

export enum StepsActionTypes {
    UPSERT_STEPS = '[STEPS] Upsert Steps',
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

export const fromStepsActions = {
    StepsUpsertAction,
};
