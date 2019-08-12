import { ActionReducerMap } from '@ngrx/store';
import { MainState } from '../state/main.state';
import { clientReducers } from './client.reduce';
import { commentReducers } from './comment.reduce';

export const mainReducers: ActionReducerMap<MainState> = {
    client: clientReducers,
    commentList: commentReducers,
};
