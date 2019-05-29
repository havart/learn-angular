import { ILabor } from 'src/app/interfaces/labor.interface';

export interface IClientLaborState {
    labors: ILabor[];
    selectedLabor: ILabor;
}

export const initialClientLaborState: IClientLaborState = {
    labors: null,
    selectedLabor: null,
};
