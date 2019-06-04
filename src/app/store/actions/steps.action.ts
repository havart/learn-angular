import { Action } from '@ngrx/store';
import { IStep } from '../../interfaces/steps.interface';

export enum StepsActionsType {
    GET_STEPS = '[STEPS] GET_STEPS',
}

export class GetSteps implements Action {
    readonly type = StepsActionsType.GET_STEPS;
    constructor(public payload: IStep[]) {}
}

export type StepsActions = GetSteps;
