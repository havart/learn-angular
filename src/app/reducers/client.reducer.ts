import { ClientActionsUnion, ClientActionTypes } from '../actions/client.actions';
import { ClientState, initialClientState } from '../state/client.state';

export function clientReducer(state = initialClientState, action: ClientActionsUnion): ClientState {
      switch (action.type) {
        case ClientActionTypes.GET_CLIENT_SUCCESS:
          return {
            ...state,
            client: action.payload,
            error: '',
          };

        case ClientActionTypes.GET_CLIENT_ERROR:
          return {
            ...state,
            client: null,
            error: action.payload,
          };

        default:
          return state;
      }
    }
