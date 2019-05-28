import { Action } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';

export enum LaborActionsType {
    UPSERT = '[LABOR] UPSERT',
    SELECTED_LABOR_SET = '[LABOR] SELECTED_LABOR_SET',
    LABOR_IS_LOADING = '[LABOR] LABOR_IS_LOADING',
}

export class UpsertLabor implements Action {
    readonly type = LaborActionsType.UPSERT;
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

export type LaborActions = UpsertLabor | SelectedLaborSet | IsLoadingLabor;
