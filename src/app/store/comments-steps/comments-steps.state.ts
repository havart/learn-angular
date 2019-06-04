import { ICommentStep } from '../../interfaces/commentStep.interface';

export interface ICommentStepsState {
    commentsSteps: ICommentStep[];
}

export const initialCommentStepsState: ICommentStepsState = {
    commentsSteps: [],
};
