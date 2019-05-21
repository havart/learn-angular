
import { Action } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';

export enum LaborActionsType {
    // GetLabor = '[LABOR] Get Labor',
    UPSERT = '[LABOR] UPSERT',
    SELECTED_LABOR_SET = '[LABOR] SELECTED_LABOR_SET',
    /*  PostLabor = '[LABOR] Post Labor',
    GetLaborError = '[LABOR] Labor Loaded Error',
    LoadLabor = '[LABOR] Labor Load', */
}

export class UpsertLabor implements Action {
    readonly type = LaborActionsType.UPSERT;
    constructor(public payload: ILabor) {}
}
export class SelectedLaborSet implements Action {
    readonly type = LaborActionsType.SELECTED_LABOR_SET;
    constructor(public payload: string) {}
}
export type LaborActions = UpsertLabor | SelectedLaborSet;
/* export class LoadLabor implements Action {
    readonly type = LaborActions.LoadLabor;
}
export class GetLabor implements Action {
    readonly type = LaborActions.GetLabor;
    constructor(public payload: number) {}
} */
/* export class PutLabor implements Action {
    readonly type = LaborActions.PutLabor;
    constructor(public payload: { clientLabor: ILabor }) {}
}
export class PostLabor implements Action {
    readonly type = LaborActions.PostLabor;
}
export class GetLaborError implements Action {
    readonly type = LaborActions.GetLaborError; */
// }
// | PutLabor | PostLabor | GetLaborError;
