import { CommentInterface } from './comment.interface';

export interface CommentsState {
    clientId: string;
    comments: CommentInterface[];
}
