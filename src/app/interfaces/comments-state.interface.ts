import { CommentInterface } from './comment.interface';

export interface CommentsStateInterface {
    clientId: string;
    comments: CommentInterface[];
}
