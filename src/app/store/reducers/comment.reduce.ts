import { CommentState, initialCommentState } from '../state/comment.state';
import { CommentActions, CommentActionEnum } from '../actions/comment.action';

export function commentReducers(state: CommentState = initialCommentState, action: CommentActions): CommentState {
    switch (action.type) {
        case CommentActionEnum.GetCommentSuccess: {
            return {
                ...state,
                commentList: action.payload,
            };
        }
        default:
            return state;
    }
}
