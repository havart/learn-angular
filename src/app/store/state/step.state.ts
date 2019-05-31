import { IStep } from 'src/app/interfaces/steps.interface';

export interface IStepState {
    steps: IStep[];
}

export const initialStepsState: IStepState = {
    steps: [],
};
