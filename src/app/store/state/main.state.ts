import { ClientState, initialClientState } from './client.state';
import { CommentState } from './commtent.state';

export interface MainState {
    client: ClientState;
    commentList: CommentState;
}

