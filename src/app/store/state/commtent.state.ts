import { CommentInterface } from '../../interfaces/comment.interface';

export interface CommentState {
    comment: CommentInterface[];
}

export const initialCommentState: CommentState = {
    comment: null,
};
