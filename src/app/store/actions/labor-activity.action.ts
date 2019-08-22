import { Action } from '@ngrx/store';
import { ClientLaborActivityInterface } from 'src/app/interfaces/client-labor-activity.interface';

export enum LaborActivityActionsEnum {
    GetLaborActivity = 'Get Labor Activity',
    GetLaborActivitySuccess = 'Get Labor Activity Success',
}

export class GetLaborActivity implements Action {
    public readonly type = LaborActivityActionsEnum.GetLaborActivity;

    constructor(public id: string) {}
}

export class GetLaborActivitySuccess implements Action {
    public readonly type = LaborActivityActionsEnum.GetLaborActivitySuccess;

    constructor(public payload: ClientLaborActivityInterface) {}
}

export type LaborActivityActions = GetLaborActivity | GetLaborActivitySuccess;