export interface CommentInterface {
    id: number;
    createdAt: string;
    name: string;
    comment: string;
    viewType: number;
    isComment: boolean;
}

export interface CommentsInterface {
    clientId: string;
    steps: CommentInterface[];
}
