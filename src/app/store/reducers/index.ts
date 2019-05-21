import * as ClientLabor from './client-labor.reducer';
import { ActionReducerMap } from '@ngrx/store';
// import * as Articles from './reducers/articles.reducer';

export interface State {
    clientsLabor: ClientLabor.State;
   // articles: Articles.State;
}

export const reducers: ActionReducerMap<State> = {
    clientsLabor: ClientLabor.laborReducer,
    //  articles: Articles.articlesReducer,
};
