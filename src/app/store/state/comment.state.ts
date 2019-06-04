import { IComment } from '../../interfaces/comment.interface';

export interface ICommentState {
    comments: IComment[];
}

export const initialCommentState: ICommentState = {
    comments: [],
};
