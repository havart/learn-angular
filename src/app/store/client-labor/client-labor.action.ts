import { Action } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';

export enum LaborActionsType {
    UPSERT = '[LABOR] GET_LaborS',
    SELECTED_LABOR_SET = '[LABOR] SELECTED_LABOR_SET',
    ADD_LABOR = '[LABOR] ADD_LABOR',
    UPDATE_LABOR = '[LABOR] UPDATE_LABOR',
    LABOR_IS_LOADING = '[LABOR] LABOR_IS_LOADING',
}

export class UpsertLabor implements Action {
    readonly type = LaborActionsType.UPSERT;
    constructor(public payload: ILabor) {}
}
export class AddLabor implements Action {
    readonly type = LaborActionsType.ADD_LABOR;
    constructor(public payload: ILabor) {}
}
export class UpdateLabor implements Action {
    readonly type = LaborActionsType.UPDATE_LABOR;
    constructor(public payload: ILabor) {}
}

export class IsLoadingLabor implements Action {
    readonly type = LaborActionsType.LABOR_IS_LOADING;
    constructor(public payload: boolean) {}
}

export class SelectedLaborSet implements Action {
    readonly type = LaborActionsType.SELECTED_LABOR_SET;
    constructor(public payload: string) {}
}

export type LaborActions = UpsertLabor | SelectedLaborSet | IsLoadingLabor | AddLabor | UpdateLabor;
