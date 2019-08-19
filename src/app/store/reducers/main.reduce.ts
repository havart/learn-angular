import { ActionReducerMap } from '@ngrx/store';
import { MainState } from '../state/main.state';
import { clientReducers } from './client.reduce';
import { commentReducers } from './comment.reduce';
import { laborActivityReducers } from './labor-activity.reduce';

export const mainReducers: ActionReducerMap<MainState> = {
    client: clientReducers,
    commentList: commentReducers,
    laborActivity: laborActivityReducers,
};
