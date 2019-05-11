import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ILabor } from '../../interfaces/labor.interface';

export enum LaborActions {
    GetLabor = '[LABOR] Get Labor',
    PutLabor = '[LABOR] Put Labor',
    PostLabor = '[LABOR] Post Labor',
    GetLaborError = '[LABOR] Labor Loaded Error',
    LoadLabor = '[LABOR] Labor Load',
}

export class LoadLabor implements Action {
    readonly type = LaborActions.LoadLabor;
}
export class GetLabor implements Action {
    readonly type = LaborActions.GetLabor;
    constructor(public payload: { clientLabor: ILabor }) {}
}
export class PutLabor implements Action {
    readonly type = LaborActions.PutLabor;
    constructor(public payload: { labors: ILabor[] }) {}
}
export class PostLabor implements Action {
    readonly type = LaborActions.PostLabor;
}
export class GetLaborError implements Action {
    readonly type = LaborActions.GetLaborError;
}
export type LaborUnion = GetLabor | PutLabor | PostLabor | GetLaborError;
