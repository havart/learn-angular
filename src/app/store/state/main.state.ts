import { ClientState } from './client.state';
import { CommentState } from './comment.state';
import { LaborActivityState } from './labor-activity.state';

export interface MainState {
    client: ClientState;
    commentList: CommentState;
    laborActivity: LaborActivityState;
}
