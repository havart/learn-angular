import { IClientLaborState, initialClientLaborState } from './client-labor.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    router?: RouterReducerState;
    labors: IClientLaborState;
}

export const initialAppState: IAppState = {
    labors: initialClientLaborState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
