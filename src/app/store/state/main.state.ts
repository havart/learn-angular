import { ClientState, initialClientState } from './client.state';
import { CommentState } from './comment.state';

export interface MainState {
    client: ClientState;
    commentList: CommentState;
}

