import { CommentInterface } from '../../interfaces/comment.interface';

export interface CommentState {
    commentList: CommentInterface[];
}

export const initialCommentState: CommentState = {
    commentList: null,
};
